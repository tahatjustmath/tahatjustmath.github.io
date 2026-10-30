/* Tahat Just Math - scientific calculator (fx-82 style layout, original design). */
(function () {
    'use strict';
    const root = document.getElementById('fx82-root');
    if (!root) return;

    const MATH = 'Math ERROR';
    const SYN = 'Syntax ERROR';
    class CalcError extends Error {}

    const VARS = ['A', 'B', 'C', 'D', 'E', 'F', 'X', 'Y', 'M'];
    const STAT_TOKENS = ['n', 'Σx', 'Σx²', 'x̄', 'σx', 'sx', 'minX', 'maxX'];
    const VALUE_TOKENS = new Set(['π', 'e', 'Ans', 'Ran#', ...VARS, ...STAT_TOKENS]);
    const DISPLAY_NAMES = { minX: 'min', maxX: 'max' };

    const state = {
        tokens: [], cursor: 0, shift: false, alpha: false, pendingSto: false,
        angle: 'DEG', fix: null, mode: 'COMP', statSub: 'edit', data: [],
        vars: Object.fromEntries(VARS.map(v => [v, 0])),
        ans: 0, result: null, justEval: false, showFrac: false, error: null, menu: false, note: ''
    };

    const isDigit = t => t !== undefined && /^[0-9.]$/.test(t);
    const isDigitOnly = t => t !== undefined && /^[0-9]$/.test(t);
    const isFn = t => t !== undefined && t.length > 1 && t.endsWith('(');
    const clean = v => (Number.isFinite(v) ? Number(v.toPrecision(12)) : v);

    function angleQuarter() {
        return state.angle === 'DEG' ? 90 : state.angle === 'GRA' ? 100 : null;
    }

    function trig(kind, x) {
        const q = angleQuarter();
        if (q) {
            const n = x / q;
            if (Number.isInteger(n)) {
                const m = ((n % 4) + 4) % 4;
                if (kind === 'sin') return [0, 1, 0, -1][m];
                if (kind === 'cos') return [1, 0, -1, 0][m];
                if (m % 2 === 1) throw new CalcError(MATH);
                return 0;
            }
        }
        const r = q ? x * Math.PI / (2 * q) : x;
        if (kind === 'tan' && Math.abs(Math.cos(r)) < 1e-14) throw new CalcError(MATH);
        return clean(Math[kind](r));
    }

    function inverseTrig(kind, x) {
        if ((kind === 'asin' || kind === 'acos') && Math.abs(x) > 1) throw new CalcError(MATH);
        const r = Math[kind](x);
        const q = angleQuarter();
        return clean(q ? r * 2 * q / Math.PI : r);
    }

    function factorial(x) {
        if (!Number.isInteger(x) || x < 0 || x > 69) throw new CalcError(MATH);
        let r = 1;
        for (let i = 2; i <= x; i++) r *= i;
        return r;
    }

    function combinatorics(kind, n, r) {
        if (!Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0 || r > n) throw new CalcError(MATH);
        let p = 1;
        for (let i = 0; i < r; i++) p *= (n - i);
        return kind === 'nPr' ? p : p / factorial(r);
    }

    function power(b, e) {
        if (b === 0 && e <= 0) throw new CalcError(MATH);
        const v = Math.pow(b, e);
        if (!Number.isFinite(v)) throw new CalcError(MATH);
        return v;
    }

    function nthRoot(n, v) {
        if (n === 0) throw new CalcError(MATH);
        if (v < 0) {
            if (Number.isInteger(n) && Math.abs(n % 2) === 1) return -Math.pow(-v, 1 / n);
            throw new CalcError(MATH);
        }
        return Math.pow(v, 1 / n);
    }

    function statValue(name) {
        const d = state.data;
        const n = d.length;
        if (name === 'n') return n;
        if (!n) throw new CalcError(MATH);
        const sum = d.reduce((a, b) => a + b, 0);
        const mean = sum / n;
        const spread = d.reduce((a, b) => a + (b - mean) * (b - mean), 0);
        switch (name) {
            case 'Σx': return sum;
            case 'Σx²': return d.reduce((a, b) => a + b * b, 0);
            case 'x̄': return mean;
            case 'σx': return Math.sqrt(spread / n);
            case 'sx':
                if (n < 2) throw new CalcError(MATH);
                return Math.sqrt(spread / (n - 1));
            case 'minX': return Math.min(...d);
            case 'maxX': return Math.max(...d);
            default: throw new CalcError(SYN);
        }
    }

    function applyFn(name, x) {
        switch (name) {
            case 'sin(': return trig('sin', x);
            case 'cos(': return trig('cos', x);
            case 'tan(': return trig('tan', x);
            case 'sin⁻¹(': return inverseTrig('asin', x);
            case 'cos⁻¹(': return inverseTrig('acos', x);
            case 'tan⁻¹(': return inverseTrig('atan', x);
            case 'log(':
                if (x <= 0) throw new CalcError(MATH);
                return clean(Math.log10(x));
            case 'ln(':
                if (x <= 0) throw new CalcError(MATH);
                return clean(Math.log(x));
            case '10^(': return power(10, x);
            case 'e^(': return power(Math.E, x);
            case '√(':
                if (x < 0) throw new CalcError(MATH);
                return Math.sqrt(x);
            case '∛(': return Math.cbrt(x);
            case 'Abs(': return Math.abs(x);
            default: throw new CalcError(SYN);
        }
    }

    function valueOf(token) {
        if (token === 'π') return Math.PI;
        if (token === 'e') return Math.E;
        if (token === 'Ans') return state.ans;
        if (token === 'Ran#') return Number(Math.random().toFixed(3));
        if (VARS.includes(token)) return state.vars[token];
        return statValue(token);
    }

    function evaluate(tokens) {
        let p = 0;
        const peek = () => tokens[p];
        const next = () => tokens[p++];
        const startsPrimary = t => t !== undefined && (isDigit(t) || t === '(' || isFn(t) || VALUE_TOKENS.has(t));
        const divide = (a, b) => {
            if (b === 0) throw new CalcError(MATH);
            return a / b;
        };

        function parseExpr() {
            let v = parseTerm();
            while (peek() === '+' || peek() === '−') {
                const op = next();
                const r = parseTerm();
                v = op === '+' ? v + r : v - r;
            }
            return v;
        }

        function parseTerm() {
            let v = parseFrac();
            for (;;) {
                const t = peek();
                if (t === '×') { next(); v *= parseFrac(); }
                else if (t === '÷') { next(); v = divide(v, parseFrac()); }
                else if (startsPrimary(t)) v *= parseFrac();
                else break;
            }
            return v;
        }

        function parseFrac() {
            let v = parseComb();
            while (peek() === '⁄') { next(); v = divide(v, parseComb()); }
            return v;
        }

        function parseComb() {
            let v = parseUnary();
            while (peek() === 'nPr' || peek() === 'nCr') {
                const op = next();
                v = combinatorics(op, v, parseUnary());
            }
            return v;
        }

        function parseUnary() {
            if (peek() === '−') { next(); return -parseUnary(); }
            if (peek() === '+') { next(); return parseUnary(); }
            return parsePower();
        }

        function parsePower() {
            const base = parsePostfix();
            if (peek() === '^') { next(); return power(base, parseUnary()); }
            if (peek() === 'ˣ√') { next(); return nthRoot(base, parseUnary()); }
            return base;
        }

        function parsePostfix() {
            let v = parsePrimary();
            for (;;) {
                const t = peek();
                if (t === '²') { next(); v *= v; }
                else if (t === '³') { next(); v = v * v * v; }
                else if (t === '⁻¹') { next(); v = divide(1, v); }
                else if (t === '!') { next(); v = factorial(v); }
                else break;
            }
            return v;
        }

        function parsePrimary() {
            const t = next();
            if (t === undefined) throw new CalcError(SYN);
            if (isDigit(t)) {
                let s = t;
                while (isDigit(peek())) s += next();
                if (s === '.' || (s.match(/\./g) || []).length > 1) throw new CalcError(SYN);
                let v = parseFloat(s);
                if (peek() === 'ᴇ') {
                    next();
                    let sign = 1;
                    if (peek() === '−') { next(); sign = -1; }
                    let digits = '';
                    while (isDigitOnly(peek())) digits += next();
                    if (!digits) throw new CalcError(SYN);
                    v *= Math.pow(10, sign * parseInt(digits, 10));
                }
                return v;
            }
            if (t === '(') {
                const v = parseExpr();
                if (peek() === ')') next();
                return v;
            }
            if (isFn(t)) {
                const v = parseExpr();
                if (peek() === ')') next();
                return applyFn(t, v);
            }
            if (VALUE_TOKENS.has(t)) return valueOf(t);
            throw new CalcError(SYN);
        }

        const result = parseExpr();
        if (p < tokens.length) throw new CalcError(SYN);
        return result;
    }

    const SUPERSCRIPT = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
    const trimZeros = s => (s.includes('.') ? s.replace(/\.?0+$/, '') : s);

    function formatNumber(v) {
        if (!Number.isFinite(v)) return MATH;
        if (state.fix !== null && Math.abs(v) < 1e10) return v.toFixed(state.fix).replace(/^-/, '−');
        if (v === 0) return '0';
        const a = Math.abs(v);
        if (a >= 1e10 || a < 0.01) {
            const [mantissa, exponent] = v.toExponential(9).split('e');
            const sup = String(parseInt(exponent, 10)).split('').map(c => SUPERSCRIPT[c]).join('');
            return trimZeros(mantissa).replace(/^-/, '−') + '×10' + sup;
        }
        return String(Number(v.toPrecision(10))).replace(/^-/, '−');
    }

    function toFraction(v) {
        if (Number.isInteger(v)) return null;
        const sign = v < 0 ? -1 : 1;
        const x = Math.abs(v);
        let h1 = 1, h0 = 0, k1 = 0, k0 = 1, b = x;
        for (let i = 0; i < 30; i++) {
            const a = Math.floor(b);
            const h2 = a * h1 + h0;
            const k2 = a * k1 + k0;
            h0 = h1; h1 = h2; k0 = k1; k1 = k2;
            if (k1 > 9999) return null;
            if (Math.abs(x - h1 / k1) < 1e-9 * Math.max(1, x)) return { n: sign * h1, d: k1 };
            const f = b - a;
            if (f < 1e-12) break;
            b = 1 / f;
        }
        return null;
    }

    function formatFraction(f) {
        const sign = f.n < 0 ? '−' : '';
        const n = Math.abs(f.n);
        const whole = Math.floor(n / f.d);
        const rest = n - whole * f.d;
        return whole ? sign + whole + ' ' + rest + '⁄' + f.d : sign + rest + '⁄' + f.d;
    }

    function resultText() {
        if (state.error) return state.error;
        if (state.result === null) return state.mode === 'STAT' && state.statSub === 'edit' ? '' : '0';
        if (state.showFrac) {
            const f = toFraction(state.result);
            if (f) return formatFraction(f);
        }
        return formatNumber(state.result);
    }

    function insert(token) {
        if (state.justEval) {
            const continuing = ['+', '−', '×', '÷', '^', '⁄', '²', '³', '⁻¹', '!', 'ˣ√', 'nPr', 'nCr'].includes(token);
            state.tokens = continuing ? ['Ans'] : [];
            state.cursor = state.tokens.length;
            state.result = null;
            state.showFrac = false;
            state.justEval = false;
        }
        state.tokens.splice(state.cursor, 0, token);
        state.cursor++;
    }

    function equals() {
        if (!state.tokens.length) return;
        try {
            const v = clean(evaluate(state.tokens));
            if (!Number.isFinite(v)) throw new CalcError(MATH);
            if (state.mode === 'STAT' && state.statSub === 'edit') {
                state.data.push(v);
                state.tokens = [];
                state.cursor = 0;
                state.result = null;
                return;
            }
            state.result = v;
            state.ans = v;
            state.justEval = true;
            state.showFrac = state.tokens.includes('⁄') && !state.tokens.some(t => isFn(t) || ['π', 'e', 'Ans', 'Ran#', 'ᴇ', '^', 'ˣ√'].includes(t) || VARS.includes(t) || STAT_TOKENS.includes(t)) && Boolean(toFraction(v));
        } catch (error) {
            state.error = error instanceof CalcError ? error.message : MATH;
        }
    }

    function clearAll() {
        state.tokens = [];
        state.cursor = 0;
        state.result = null;
        state.error = null;
        state.justEval = false;
        state.showFrac = false;
        state.shift = false;
        state.alpha = false;
        state.pendingSto = false;
        state.note = '';
    }

    const KEYS = [
        { id: 'shift', l: 'SHIFT', n: '#shift', c: 'fx-key-shift' },
        { id: 'alpha', l: 'ALPHA', n: '#alpha', c: 'fx-key-alpha' },
        { id: 'left', l: '◀', n: '#left', c: 'fx-key-nav', aria: 'Move cursor left' },
        { id: 'right', l: '▶', n: '#right', c: 'fx-key-nav', aria: 'Move cursor right' },
        { id: 'mode', l: 'MODE', n: '#mode', c: 'fx-key-fn' },

        { id: 'frac', l: 'a⁄b', n: '⁄', sh: '#sd', shl: 'S⇔D', c: 'fx-key-fn', aria: 'Fraction' },
        { id: 'sqrt', l: '√', n: '√(', sh: '∛(', shl: '∛', c: 'fx-key-fn', aria: 'Square root' },
        { id: 'sq', l: 'x²', n: '²', sh: '³', shl: 'x³', c: 'fx-key-fn', aria: 'Square' },
        { id: 'pow', l: 'xʸ', n: '^', sh: 'ˣ√', shl: 'ˣ√', c: 'fx-key-fn', aria: 'Power' },
        { id: 'log', l: 'log', n: 'log(', sh: '10^(', shl: '10ˣ', al: 'A', c: 'fx-key-fn' },

        { id: 'ln', l: 'ln', n: 'ln(', sh: 'e^(', shl: 'eˣ', al: 'B', c: 'fx-key-fn' },
        { id: 'neg', l: '(−)', n: '−', sh: 'Abs(', shl: 'Abs', al: 'C', c: 'fx-key-fn', aria: 'Negative sign' },
        { id: 'lp', l: '(', n: '(', al: 'D', c: 'fx-key-fn', aria: 'Open parenthesis' },
        { id: 'rp', l: ')', n: ')', al: 'E', c: 'fx-key-fn', aria: 'Close parenthesis' },
        { id: 'sto', l: 'STO', n: '#sto', sh: '#rcl', shl: 'RCL', c: 'fx-key-fn', aria: 'Store (shift: recall)' },

        { id: 'sin', l: 'sin', n: 'sin(', sh: 'sin⁻¹(', shl: 'sin⁻¹', al: 'F', c: 'fx-key-fn' },
        { id: 'cos', l: 'cos', n: 'cos(', sh: 'cos⁻¹(', shl: 'cos⁻¹', al: 'X', c: 'fx-key-fn' },
        { id: 'tan', l: 'tan', n: 'tan(', sh: 'tan⁻¹(', shl: 'tan⁻¹', al: 'Y', c: 'fx-key-fn' },
        { id: 'inv', l: 'x⁻¹', n: '⁻¹', sh: '!', shl: 'x!', al: 'M', c: 'fx-key-fn', aria: 'Reciprocal' },
        { id: 'pi', l: 'π', n: 'π', sh: 'e', shl: 'e', c: 'fx-key-fn', aria: 'Pi' },

        { id: '7', l: '7', n: '7', c: 'fx-key-num' },
        { id: '8', l: '8', n: '8', c: 'fx-key-num' },
        { id: '9', l: '9', n: '9', c: 'fx-key-num' },
        { id: 'del', l: 'DEL', n: '#del', c: 'fx-key-del', aria: 'Delete' },
        { id: 'ac', l: 'AC', n: '#ac', c: 'fx-key-ac', aria: 'All clear' },

        { id: '4', l: '4', n: '4', c: 'fx-key-num' },
        { id: '5', l: '5', n: '5', c: 'fx-key-num' },
        { id: '6', l: '6', n: '6', c: 'fx-key-num' },
        { id: 'mul', l: '×', n: '×', sh: 'nPr', shl: 'nPr', c: 'fx-key-op', aria: 'Multiply' },
        { id: 'div', l: '÷', n: '÷', sh: 'nCr', shl: 'nCr', c: 'fx-key-op', aria: 'Divide' },

        { id: '1', l: '1', n: '1', c: 'fx-key-num' },
        { id: '2', l: '2', n: '2', c: 'fx-key-num' },
        { id: '3', l: '3', n: '3', c: 'fx-key-num' },
        { id: 'add', l: '+', n: '+', c: 'fx-key-op', aria: 'Add' },
        { id: 'sub', l: '−', n: '−', c: 'fx-key-op', aria: 'Subtract' },

        { id: '0', l: '0', n: '0', c: 'fx-key-num' },
        { id: 'dot', l: '.', n: '.', c: 'fx-key-num', aria: 'Decimal point' },
        { id: 'exp', l: '×10ˣ', n: 'ᴇ', sh: 'Ran#', shl: 'Ran#', c: 'fx-key-fn', aria: 'Times ten to the power' },
        { id: 'ans', l: 'Ans', n: 'Ans', sh: '%', shl: '', c: 'fx-key-fn', aria: 'Previous answer' },
        { id: 'eq', l: '=', n: '#eq', c: 'fx-key-eq', aria: 'Equals' }
    ];
    KEYS.forEach(k => { if (k.sh === '%') delete k.sh; });

    function press(key) {
        if (state.error) {
            if (key.n === '#ac') clearAll();
            else if (key.n === '#left' || key.n === '#right') state.error = null;
            render();
            return;
        }
        if (key.n === '#shift') {
            state.shift = !state.shift; state.alpha = false;
            return render();
        }
        if (key.n === '#alpha') {
            state.alpha = !state.alpha; state.shift = false;
            return render();
        }
        let action = key.n;
        if (state.shift) action = key.sh !== undefined ? key.sh : key.n;
        else if (state.alpha) action = key.al !== undefined ? key.al : null;
        const wasAlpha = state.alpha;
        state.shift = false;
        state.alpha = false;
        state.note = '';

        if (state.pendingSto) {
            state.pendingSto = false;
            if (action && VARS.includes(action)) {
                state.vars[action] = state.result !== null ? state.result : state.ans;
                state.note = 'Stored in ' + action;
            }
            return render();
        }
        if (action === null) return render();
        if (state.menu && action !== '#mode' && action !== '#ac') return render();

        switch (action) {
            case '#mode': state.menu = !state.menu; break;
            case '#ac': clearAll(); break;
            case '#left': state.justEval = false; state.cursor = Math.max(0, state.cursor - 1); break;
            case '#right': state.justEval = false; state.cursor = Math.min(state.tokens.length, state.cursor + 1); break;
            case '#del':
                if (state.cursor > 0) {
                    state.justEval = false;
                    state.tokens.splice(state.cursor - 1, 1);
                    state.cursor--;
                }
                break;
            case '#eq': equals(); break;
            case '#sd':
                if (state.result !== null && toFraction(state.result)) state.showFrac = !state.showFrac;
                break;
            case '#sto':
                if (state.result === null && !state.justEval) state.note = 'Press = first, then STO';
                else { state.pendingSto = true; state.alpha = true; state.note = 'Store in: press A, B, C, D, E, F, X, Y or M'; }
                break;
            case '#rcl': state.alpha = true; state.note = 'Recall: press A, B, C, D, E, F, X, Y or M'; break;
            default:
                if (wasAlpha && !VARS.includes(action)) break;
                insert(action);
        }
        render();
    }

    root.innerHTML = '';
    const shell = document.createElement('div');
    shell.className = 'fx82';
    shell.setAttribute('role', 'group');
    shell.setAttribute('aria-label', 'Scientific calculator');

    const lcd = document.createElement('div');
    lcd.className = 'fx82-lcd';
    const indicators = document.createElement('div');
    indicators.className = 'fx82-indicators';
    const exprLine = document.createElement('div');
    exprLine.className = 'fx82-expr';
    const resultLine = document.createElement('div');
    resultLine.className = 'fx82-result';
    resultLine.setAttribute('role', 'status');
    resultLine.setAttribute('aria-live', 'polite');
    const noteLine = document.createElement('div');
    noteLine.className = 'fx82-note';
    lcd.append(indicators, exprLine, resultLine);

    const menu = document.createElement('div');
    menu.className = 'fx82-menu';
    menu.hidden = true;
    const statBar = document.createElement('div');
    statBar.className = 'fx82-stat';
    statBar.hidden = true;
    const keyGrid = document.createElement('div');
    keyGrid.className = 'fx82-keys';

    function menuButton(label, onClick, active) {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = label;
        b.className = active ? 'is-active' : '';
        b.addEventListener('click', onClick);
        return b;
    }

    function buildMenu() {
        menu.innerHTML = '';
        const title = document.createElement('strong');
        title.textContent = 'MODE';
        menu.append(title);
        const group = (name, buttons) => {
            const row = document.createElement('div');
            row.className = 'fx82-menu-row';
            const label = document.createElement('span');
            label.textContent = name;
            row.append(label, ...buttons);
            menu.append(row);
        };
        const close = () => { state.menu = false; render(); };
        group('Mode', [
            menuButton('COMP', () => { state.mode = 'COMP'; close(); }, state.mode === 'COMP'),
            menuButton('STAT', () => { state.mode = 'STAT'; state.statSub = 'edit'; clearAll(); close(); }, state.mode === 'STAT')
        ]);
        group('Angle', ['DEG', 'RAD', 'GRA'].map(a => menuButton(a, () => { state.angle = a; close(); }, state.angle === a)));
        const fixButtons = [menuButton('Norm', () => { state.fix = null; close(); }, state.fix === null)];
        for (let i = 0; i <= 9; i++) fixButtons.push(menuButton('Fix ' + i, () => { state.fix = i; close(); }, state.fix === i));
        group('Display', fixButtons);
    }

    function buildStatBar() {
        statBar.innerHTML = '';
        const info = document.createElement('div');
        info.className = 'fx82-stat-info';
        const sub = state.statSub === 'edit' ? 'Data entry: type a value, then press =' : 'Calculate: pick a statistic, then press =';
        info.textContent = 'n = ' + state.data.length + '. ' + sub;
        const list = document.createElement('div');
        list.className = 'fx82-stat-data';
        list.textContent = state.data.length ? state.data.map(formatNumber).join(', ') : 'No data yet';
        const row = document.createElement('div');
        row.className = 'fx82-stat-row';
        row.append(
            menuButton('Data', () => { state.statSub = 'edit'; clearAll(); render(); }, state.statSub === 'edit'),
            menuButton('Calc', () => { state.statSub = 'calc'; clearAll(); render(); }, state.statSub === 'calc'),
            menuButton('Remove last', () => { state.data.pop(); render(); }, false),
            menuButton('Clear data', () => { state.data = []; render(); }, false)
        );
        statBar.append(info, list, row);
        if (state.statSub === 'calc') {
            const stats = document.createElement('div');
            stats.className = 'fx82-stat-row';
            STAT_TOKENS.forEach(t => stats.append(menuButton(DISPLAY_NAMES[t] || t, () => {
                if (state.error) return;
                insert(t);
                render();
            }, false)));
            statBar.append(stats);
        }
    }

    function makeKey(key) {
        const wrap = document.createElement('div');
        wrap.className = 'fx82-keywrap';
        const shiftLabel = document.createElement('span');
        shiftLabel.className = 'fx82-shift-label';
        shiftLabel.textContent = key.shl || '';
        const alphaLabel = document.createElement('span');
        alphaLabel.className = 'fx82-alpha-label';
        alphaLabel.textContent = key.al || '';
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'fx82-key ' + key.c.replace('fx-key', 'fx82-key');
        button.textContent = key.l;
        button.dataset.key = key.id;
        button.setAttribute('aria-label', key.aria || key.l);
        button.addEventListener('click', () => press(key));
        wrap.append(shiftLabel, alphaLabel, button);
        return wrap;
    }
    KEYS.forEach(key => keyGrid.append(makeKey(key)));

    shell.append(lcd, noteLine, menu, statBar, keyGrid);
    root.append(shell);

    const POSTFIX = ['²', '³', '⁻¹', '!'];

    function matchClose(tokens, open) {
        let depth = 0;
        for (let m = open; m < tokens.length; m++) {
            if (tokens[m] === '(' || isFn(tokens[m])) depth++;
            else if (tokens[m] === ')') {
                depth--;
                if (depth === 0) return m;
            }
        }
        return tokens.length;
    }

    function operandEnd(tokens, k) {
        let e = k;
        if (tokens[e] === '−') e++;
        const t = tokens[e];
        if (t === undefined) return k;
        if (isDigit(t)) {
            while (isDigit(tokens[e])) e++;
            if (tokens[e] === 'ᴇ') {
                e++;
                if (tokens[e] === '−') e++;
                while (isDigitOnly(tokens[e])) e++;
            }
        } else if (t === '(' || isFn(t)) {
            e = Math.min(matchClose(tokens, e) + 1, tokens.length);
        } else if (VALUE_TOKENS.has(t)) {
            e++;
        } else {
            return k;
        }
        while (POSTFIX.includes(tokens[e])) e++;
        if (tokens[e] === '^' || tokens[e] === 'ˣ√') {
            const after = operandEnd(tokens, e + 1);
            if (after > e + 1) e = after;
        }
        return e;
    }

    function operandStart(tokens, end) {
        let k = end;
        while (k >= 0 && POSTFIX.includes(tokens[k])) k--;
        if (k < 0) return end + 1;
        let s;
        if (tokens[k] === ')') {
            let depth = 0;
            s = 0;
            for (let m = k; m >= 0; m--) {
                if (tokens[m] === ')') depth++;
                else if (tokens[m] === '(' || isFn(tokens[m])) {
                    depth--;
                    if (depth === 0) { s = m; break; }
                }
            }
        } else if (isDigit(tokens[k])) {
            s = k;
            while (s > 0 && isDigit(tokens[s - 1])) s--;
        } else if (VALUE_TOKENS.has(tokens[k])) {
            s = k;
        } else {
            return end + 1;
        }
        if (s > 0 && (tokens[s - 1] === '^' || tokens[s - 1] === 'ˣ√')) {
            const p = operandStart(tokens, s - 2);
            if (p <= s - 2) s = p;
        }
        return s;
    }

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    }

    function fracNode(numNodes, denNodes) {
        const frac = el('span', 'fx82-frac');
        const num = el('span', 'fx82-frac-num');
        const den = el('span', 'fx82-frac-den');
        num.append(...numNodes);
        den.append(...denNodes);
        frac.append(num, den);
        return frac;
    }

    function buildExpression(tokens, cursor, showCaret) {
        const fracs = [];
        tokens.forEach((t, j) => {
            if (t !== '⁄') return;
            let start = operandStart(tokens, j - 1);
            if (start > j - 1) start = j;
            const previous = fracs.find(f => f.denEnd === j);
            if (previous) start = previous.numStart;
            fracs.push({ numStart: start, j, denEnd: Math.max(operandEnd(tokens, j + 1), j + 1) });
        });

        let drawn = false;
        const caretAt = (i, nodes) => {
            if (showCaret && !drawn && i === cursor) {
                const c = el('span', 'fx82-caret');
                c.setAttribute('aria-hidden', 'true');
                nodes.push(c);
                drawn = true;
            }
        };

        function build(a, b, endCaret) {
            const nodes = [];
            let i = a;
            while (i < b) {
                caretAt(i, nodes);
                const f = fracs.filter(x => x.numStart === i && x.j >= i && x.denEnd <= b).sort((x, y) => y.denEnd - x.denEnd)[0];
                if (f) {
                    const numNodes = build(f.numStart, f.j, true);
                    const denNodes = build(f.j + 1, f.denEnd, true);
                    nodes.push(fracNode(numNodes, denNodes));
                    i = f.denEnd;
                    continue;
                }
                const token = tokens[i];
                if (token === '√(' || token === '∛(') {
                    const close = Math.min(matchClose(tokens, i), b);
                    const radical = el('span', 'fx82-sqrt');
                    if (token === '∛(') radical.append(el('span', 'fx82-sqrt-index', '3'));
                    radical.append(el('span', 'fx82-sqrt-sign', '√'));
                    const radicand = el('span', 'fx82-sqrt-body');
                    radicand.append(...build(i + 1, close, true));
                    radical.append(radicand);
                    nodes.push(radical);
                    i = tokens[close] === ')' && close < b ? close + 1 : close;
                    continue;
                }
                nodes.push(document.createTextNode(DISPLAY_NAMES[token] || token));
                i++;
            }
            if (endCaret) caretAt(b, nodes);
            if (a === b) nodes.push(el('span', 'fx82-box', '□'));
            return nodes;
        }

        const top = build(0, tokens.length, true);
        if (!tokens.length) return top.filter(n => !(n.className === 'fx82-box'));
        return top;
    }

    function renderResult() {
        resultLine.textContent = '';
        if (!state.error && state.result !== null && state.showFrac) {
            const f = toFraction(state.result);
            if (f) {
                const n = Math.abs(f.n);
                const whole = Math.floor(n / f.d);
                const rest = n - whole * f.d;
                if (f.n < 0) resultLine.append(document.createTextNode('−'));
                if (whole) resultLine.append(el('span', 'fx82-whole', String(whole)));
                resultLine.append(fracNode([document.createTextNode(String(rest))], [document.createTextNode(String(f.d))]));
                resultLine.setAttribute('aria-label', formatFraction(f));
                return;
            }
        }
        resultLine.removeAttribute('aria-label');
        resultLine.textContent = resultText();
    }

    function render() {
        indicators.textContent = '';
        const flags = [];
        if (state.shift) flags.push('S');
        if (state.alpha) flags.push('A');
        flags.push(state.angle);
        if (state.mode === 'STAT') flags.push('STAT');
        if (state.fix !== null) flags.push('FIX ' + state.fix);
        flags.forEach(flag => {
            const s = document.createElement('span');
            s.textContent = flag;
            indicators.append(s);
        });

        exprLine.textContent = '';
        exprLine.append(...buildExpression(state.tokens, state.cursor, !state.justEval));
        exprLine.scrollLeft = exprLine.scrollWidth;

        renderResult();
        resultLine.classList.toggle('is-error', Boolean(state.error));
        noteLine.textContent = state.error ? 'Press AC to clear' : state.note;

        menu.hidden = !state.menu;
        if (state.menu) buildMenu();
        statBar.hidden = state.mode !== 'STAT';
        if (state.mode === 'STAT') buildStatBar();

        keyGrid.querySelectorAll('.fx82-key').forEach(b => {
            if (b.dataset.key === 'shift') b.classList.toggle('is-on', state.shift);
            if (b.dataset.key === 'alpha') b.classList.toggle('is-on', state.alpha);
        });
    }

    const KEYBOARD = {
        '.': 'dot', '+': 'add', '-': 'sub', '*': 'mul', '/': 'div', '(': 'lp', ')': 'rp', '^': 'pow',
        Enter: 'eq', '=': 'eq', Backspace: 'del', Delete: 'del', Escape: 'ac', ArrowLeft: 'left', ArrowRight: 'right'
    };
    shell.addEventListener('keydown', event => {
        if (event.ctrlKey || event.metaKey || event.altKey) return;
        if ((event.key === 'Enter' || event.key === ' ') && event.target.closest('button')) return;
        const id = /^[0-9]$/.test(event.key) ? event.key : KEYBOARD[event.key];
        const key = id && KEYS.find(k => k.id === id);
        if (!key) return;
        event.preventDefault();
        press(key);
    });

    render();
}());
