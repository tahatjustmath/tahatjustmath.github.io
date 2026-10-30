/* Tahat Just Math - interface translation layer (English default, Arabic optional).
   Questions, answer choices and step-by-step solutions stay in English on purpose.
   Add Arabic strings to AR (exact text) or PATTERNS (text with numbers). Anything
   without an entry simply stays in English. */
(function () {
    'use strict';

    const STORE_KEY = 'tjm-lang';

    const AR = {
        // Header, breadcrumb, home
        'Tahat Just Math': 'Tahat Just Math',
        'Chapter 13: Trigonometry & Right Triangles': 'الفصل 13: حساب المثلثات والمثلثات القائمة',
        'Chapter 4: Accuracy & Measurement': 'الفصل 4: الدقة والقياس',
        'Chapter 15 & CG: Graphs, Statistics, and Measurement': 'الفصل 15 والرسوم البيانية: الرسوم والإحصاء والقياس',
        'Practice ·': 'تدريب ·',
        'questions': 'سؤالاً',
        'questions ·': 'سؤالاً ·',
        'Questions': 'الأسئلة',
        'learning objectives': 'أهداف تعلّم',
        'Home / Subjects': 'الرئيسية / المواد',
        'Technical Mathematics': 'الرياضيات التقنية',
        'Chapter 13': 'الفصل 13',
        'Chapter 4': 'الفصل 4',
        'Chapter 15 & CG': 'الفصل 15 و CG',
        'Subject catalog': 'دليل المواد',
        'Subject tracks': 'مسارات المواد',
        'Self-paced mathematics practice': 'تدريب رياضي ذاتي الوتيرة',
        'Course Curriculum Directory': 'دليل المنهج الدراسي',
        'Choose an available chapter to open its interactive lessons, study tools, and practice questions.': 'اختر فصلاً متاحاً لفتح دروسه التفاعلية وأدوات الدراسة وأسئلة التدريب.',
        'Choose a chapter to open its interactive lessons, study tools, and practice questions.': 'اختر فصلاً لفتح دروسه التفاعلية وأدوات الدراسة وأسئلة التدريب.',
        'Technical Mathematics · Course Library': 'الرياضيات التقنية · مكتبة المقررات',
        'This subject track is planned for the course library. Technical Mathematics is currently the first track with interactive chapters.': 'هذا المسار مخطط له ضمن مكتبة المقررات. الرياضيات التقنية هي أول مسار يضم فصولاً تفاعلية حالياً.',
        'Tahat Just Math · Self-paced practice': 'Tahat Just Math · تدريب ذاتي الوتيرة',
        'Open chapter →': 'افتح الفصل ←',
        '3 chapters ready': '3 فصول جاهزة',
        'Coming soon': 'قريباً',
        'College Algebra': 'جبر الكلية',
        'Business Mathematics': 'رياضيات الأعمال',
        'Statistics': 'الإحصاء',
        'Calculus I': 'التفاضل والتكامل 1',
        'Calculus II': 'التفاضل والتكامل 2',
        'Calculus III': 'التفاضل والتكامل 3',
        'Differential Equations': 'المعادلات التفاضلية',
        'Trigonometry & Right Triangles': 'حساب المثلثات والمثلثات القائمة',
        'Accuracy & Measurement': 'الدقة والقياس',
        'Graphs, Statistics & Measurement': 'الرسوم البيانية والإحصاء والقياس',
        'SOH–CAH–TOA, special triangles, guided examples, interactive tools, and practice.': 'قواعد SOH–CAH–TOA والمثلثات الخاصة وأمثلة موجّهة وأدوات تفاعلية وتدريب.',
        'Measurement, precision, and mathematical accuracy.': 'القياس والضبط والدقة الرياضية.',
        'Explore data, graphs, and practical measurement.': 'استكشف البيانات والرسوم البيانية والقياس العملي.',

        // Hero
        'Interactive Mathematics Simulation': 'محاكاة تفاعلية للرياضيات',
        'Test questions, verify solutions step-by-step, and monitor live metrics.': 'اختبر الأسئلة، وتحقق من الحلول خطوة بخطوة، وتابع مؤشراتك مباشرة.',
        'Learn and Practice Right-Triangle Trigonometry': 'تعلّم وتدرّب على حساب مثلثات المثلث القائم',
        'Build confidence with clear concepts, guided examples, and self-paced practice.': 'ابنِ ثقتك بمفاهيم واضحة وأمثلة موجّهة وتدريب ذاتي الوتيرة.',
        'Identify hypotenuse, opposite, and adjacent sides.': 'تحديد الوتر والضلع المقابل والضلع المجاور.',
        'Use Pythagorean theorem & simplify radicals.': 'استخدام نظرية فيثاغورس وتبسيط الجذور.',
        'Apply SOH–CAH–TOA and inverse ratios.': 'تطبيق SOH–CAH–TOA والنسب العكسية.',
        'Model real situations with angles of elevation/depression.': 'نمذجة مواقف حياتية بزوايا الارتفاع والانخفاض.',
        'Start Full Assessment ·': 'ابدأ التقييم الكامل ·',
        'Right triangle with angle theta': 'مثلث قائم مع الزاوية ثيتا',
        'A right triangle diagram introducing Chapter 13 trigonometry.': 'رسم لمثلث قائم يمهّد لحساب المثلثات في الفصل 13.',

        // Tabs
        'Guide': 'الدليل',
        'Prerequisites': 'المتطلبات السابقة',
        'Triangle lab': 'مختبر المثلث',
        'Special triangles': 'المثلثات الخاصة',
        'Guided examples': 'أمثلة موجّهة',
        'Calculator tips': 'نصائح الآلة الحاسبة',
        'Practice problems': 'مسائل التدريب',
        'Chapter quiz': 'اختبار الفصل',
        'Chapter 13 sections': 'أقسام الفصل 13',
        'Chapter 13 learning resources': 'مصادر تعلّم الفصل 13',
        'What you will learn': 'ماذا ستتعلم',
        'Breadcrumb': 'مسار التنقل',

        // Guide
        'Objective 1': 'الهدف 1',
        'Objective 2': 'الهدف 2',
        'Objective 3': 'الهدف 3',
        'Objective 4': 'الهدف 4',
        'Objective 5': 'الهدف 5',
        'Identify sides relative to a reference angle \\(\\theta\\)': 'تحديد الأضلاع بالنسبة إلى زاوية مرجعية \\(\\theta\\)',
        'Every right triangle has three sides. The hypotenuse is fixed by the right angle; opposite and adjacent are named relative to the chosen acute angle.': 'لكل مثلث قائم ثلاثة أضلاع. يتحدد الوتر بالزاوية القائمة، أما المقابل والمجاور فيُسمَّيان بالنسبة إلى الزاوية الحادة المختارة.',
        'Hypotenuse (\\(c\\))': 'الوتر (\\(c\\))',
        'Always opposite the \\(90^\\circ\\) angle and the longest side.': 'يقابل دائماً الزاوية \\(90^\\circ\\) وهو أطول الأضلاع.',
        'Opposite': 'المقابل',
        'Directly across from the reference angle \\(\\theta\\).': 'يقع في مواجهة الزاوية المرجعية \\(\\theta\\) مباشرة.',
        'Adjacent': 'المجاور',
        'Touches the reference angle \\(\\theta\\), but is not the hypotenuse.': 'يلامس الزاوية المرجعية \\(\\theta\\) وليس هو الوتر.',
        'Use the primary trigonometric ratios (SOH–CAH–TOA)': 'استخدام النسب المثلثية الأساسية (SOH–CAH–TOA)',
        'SOH · Sine': 'SOH · الجيب',
        'CAH · Cosine': 'CAH · جيب التمام',
        'TOA · Tangent': 'TOA · الظل',
        'Find unknown angles with inverse trigonometry': 'إيجاد الزوايا المجهولة بالدوال المثلثية العكسية',
        'When the side lengths are known, choose the inverse ratio that matches the given sides.': 'عند معرفة أطوال الأضلاع، اختر النسبة العكسية المناسبة للأضلاع المعطاة.',
        'Find missing sides using trigonometry and the Pythagorean theorem': 'إيجاد الأضلاع المجهولة بحساب المثلثات ونظرية فيثاغورس',
        'First mark the known angle and label the sides opposite, adjacent, and hypotenuse. With an angle and one side, use SOH–CAH–TOA. With two side lengths, use the Pythagorean theorem. In the formulas below, replace \\(A\\) with \\(B\\) when angle B is given.': 'ابدأ بتحديد الزاوية المعلومة وتسمية الأضلاع: المقابل والمجاور والوتر. مع زاوية وضلع واحد استخدم SOH–CAH–TOA، ومع طولي ضلعين استخدم نظرية فيثاغورس. في الصيغ التالية استبدل \\(A\\) بـ \\(B\\) عندما تكون الزاوية B هي المعطاة.',
        'Missing middle letter: multiply': 'الحرف الأوسط مجهول: اضرب',
        'Missing last letter: divide': 'الحرف الأخير مجهول: اقسم',
        'Two sides known: use \\(a^2+b^2=c^2\\)': 'ضلعان معلومان: استخدم \\(a^2+b^2=c^2\\)',
        'Add leg squares when finding the hypotenuse \\(c\\). Subtract the known leg square when finding a missing leg.': 'اجمع مربعي الضلعين القائمين لإيجاد الوتر \\(c\\)، واطرح مربع الضلع المعلوم لإيجاد ضلع قائم مجهول.',
        'Identify the given angle (A or B) and mark each known and unknown side.': 'حدّد الزاوية المعطاة (A أو B) وعلّم كل ضلع معلوم ومجهول.',
        'Choose the ratio (SOH–CAH–TOA) containing the known side and the missing side.': 'اختر النسبة (SOH–CAH–TOA) التي تضم الضلع المعلوم والضلع المجهول.',
        'Rearrange first: multiply if the missing side is the middle letter; divide if it is the last letter.': 'أعِد ترتيب المعادلة أولاً: اضرب إذا كان الضلع المجهول هو الحرف الأوسط، واقسم إذا كان الحرف الأخير.',
        'Substitute, calculate in degree mode, and round only the final answer.': 'عوّض، واحسب بوضع الدرجات (DEG)، وقرّب الناتج النهائي فقط.',
        'Apply trigonometry to real-world situations': 'تطبيق حساب المثلثات على مواقف حياتية',
        'Angle of elevation': 'زاوية الارتفاع',
        'The angle measured upward from a horizontal line of sight to a point above the observer.': 'الزاوية المقيسة إلى أعلى من خط النظر الأفقي نحو نقطة تعلو الراصد.',
        'Angle of depression': 'زاوية الانخفاض',
        'The angle measured downward from a horizontal line of sight to a point below the observer.': 'الزاوية المقيسة إلى أسفل من خط النظر الأفقي نحو نقطة تقع أسفل الراصد.',
        'Use the equal interior angle at the base of the triangle to choose a trigonometric ratio.': 'استخدم الزاوية الداخلية المساوية عند قاعدة المثلث لاختيار النسبة المثلثية.',
        'Angle of elevation from an observer to a raised target': 'زاوية الارتفاع من الراصد إلى هدف مرتفع',
        'Equal angles of depression and elevation between parallel horizontal lines': 'زاويتا الانخفاض والارتفاع المتساويتان بين مستقيمين أفقيين متوازيين',
        'Key idea': 'الفكرة الأساسية',
        'Key idea about angles of depression and elevation': 'الفكرة الأساسية حول زاويتي الانخفاض والارتفاع',
        'The angle of depression at the observer equals the angle of elevation at the target because the horizontal lines are parallel. Use the equal angle inside the triangle to find the height \\(h\\) or horizontal distance \\(d\\) with SOH–CAH–TOA.': 'زاوية الانخفاض عند الراصد تساوي زاوية الارتفاع عند الهدف لأن الخطين الأفقيين متوازيان. استخدم الزاوية المتساوية داخل المثلث لإيجاد الارتفاع \\(h\\) أو المسافة الأفقية \\(d\\) بقواعد SOH–CAH–TOA.',

        // Prerequisites and triangle lab
        'Prerequisite skills': 'المهارات السابقة',
        'Refresh the tools behind trigonometry': 'راجع الأدوات التي يقوم عليها حساب المثلثات',
        'Pythagorean calculator': 'حاسبة فيثاغورس',
        'Find a missing side in a right triangle. Enter positive lengths; the hypotenuse must be longer than either leg.': 'أوجد ضلعاً مجهولاً في مثلث قائم. أدخل أطوالاً موجبة؛ ويجب أن يكون الوتر أطول من أي من الضلعين القائمين.',
        'Find': 'أوجد',
        'Hypotenuse (c)': 'الوتر (c)',
        'Leg a': 'الضلع a',
        'Leg b': 'الضلع b',
        'Hypotenuse c': 'الوتر c',
        'Calculate missing side': 'احسب الضلع المجهول',
        'Types of triangles': 'أنواع المثلثات',
        'Triangles can be classified by their side lengths or by their angles.': 'يمكن تصنيف المثلثات حسب أطوال أضلاعها أو حسب زواياها.',
        'By side lengths': 'حسب أطوال الأضلاع',
        'Equilateral': 'متساوي الأضلاع',
        'All three sides are equal.': 'الأضلاع الثلاثة متساوية.',
        'Isosceles': 'متساوي الساقين',
        'At least two sides are equal.': 'ضلعان على الأقل متساويان.',
        'Scalene': 'مختلف الأضلاع',
        'All three sides have different lengths.': 'للأضلاع الثلاثة أطوال مختلفة.',
        'By angles': 'حسب الزوايا',
        'Acute': 'حاد الزوايا',
        'All three angles are less than 90°.': 'الزوايا الثلاث كلها أصغر من 90°.',
        'Right': 'قائم الزاوية',
        'One angle is exactly 90°.': 'إحدى الزوايا تساوي 90° تماماً.',
        'Obtuse': 'منفرج الزاوية',
        'One angle is greater than 90°.': 'إحدى الزوايا أكبر من 90°.',
        'Side and angle classifications describe different features. For example, a triangle can be both isosceles and right.': 'تصنيف الأضلاع وتصنيف الزوايا يصفان خصائص مختلفة؛ فقد يكون المثلث متساوي الساقين وقائماً في آن واحد.',
        'Quick refresher: Pythagorean Theorem': 'مراجعة سريعة: نظرية فيثاغورس',
        'In a right triangle, the hypotenuse': 'في المثلث القائم، الوتر',
        'is opposite the right angle. If a leg is missing, isolate it before taking a square root.': 'يقابل الزاوية القائمة. إذا كان أحد الضلعين القائمين مجهولاً فاعزله قبل أخذ الجذر التربيعي.',
        'Triangle anatomy and SOH–CAH–TOA': 'مكوّنات المثلث وقواعد SOH–CAH–TOA',
        'The hypotenuse stays the same. Opposite and adjacent depend on which acute angle you choose.': 'يبقى الوتر ثابتاً، أما المقابل والمجاور فيتوقفان على الزاوية الحادة التي تختارها.',
        'Reference angle': 'الزاوية المرجعية',
        'Angle A': 'الزاوية A',
        'Angle B': 'الزاوية B',
        'Choose a reference angle': 'اختر زاوية مرجعية',
        'Interactive right triangle': 'مثلث قائم تفاعلي',
        'Angle A is selected. Side c is the blue hypotenuse, side a is the green opposite side, and side b is the orange adjacent side.': 'الزاوية A محددة. الضلع c هو الوتر (أزرق)، والضلع a هو المقابل (أخضر)، والضلع b هو المجاور (برتقالي).',
        'Side colors and roles relative to the selected angle: blue is the hypotenuse, green is opposite, and orange is adjacent.': 'ألوان الأضلاع وأدوارها بالنسبة إلى الزاوية المحددة: الأزرق وتر، والأخضر مقابل، والبرتقالي مجاور.',
        'Adjacent (b)': 'المجاور (b)',
        'Opposite (a)': 'المقابل (a)',
        'Opposite (b)': 'المقابل (b)',
        'Adjacent (a)': 'المجاور (a)',
        'Hypotenuse': 'الوتر',
        'Opposite 90° · side c': 'يقابل الزاوية 90° · الضلع c',
        'Across from angle A · side a': 'في مواجهة الزاوية A · الضلع a',
        'Touches angle A · side b': 'يلامس الزاوية A · الضلع b',
        'Angle A selected: side a is opposite and side b is adjacent.': 'الزاوية A محددة: الضلع a مقابل والضلع b مجاور.',
        'Angle B selected: side b is opposite and side a is adjacent.': 'الزاوية B محددة: الضلع b مقابل والضلع a مجاور.',
        'Use the ratio that contains the side you know and the side you need.': 'استخدم النسبة التي تضم الضلع الذي تعرفه والضلع الذي تحتاجه.',
        'SOH-CAH-TOA formulas': 'صيغ SOH-CAH-TOA',
        'Interactive playground': 'ساحة تفاعلية',
        'Explore how a right triangle changes': 'استكشف كيف يتغير المثلث القائم',
        'Adjust either leg to see the hypotenuse, reference angle, and trigonometric ratios update.': 'غيّر أي ضلع قائم لترى تحديث الوتر والزاوية المرجعية والنسب المثلثية.',
        'Horizontal leg \\(b\\)': 'الضلع الأفقي \\(b\\)',
        'Vertical leg \\(a\\)': 'الضلع الرأسي \\(a\\)',
        'Hypotenuse \\(c\\)': 'الوتر \\(c\\)',
        'Horizontal leg b length': 'طول الضلع الأفقي b',
        'Vertical leg a length': 'طول الضلع الرأسي a',
        'Resizable right triangle': 'مثلث قائم قابل لتغيير الحجم',
        'The yellow label marks the selected reference angle. Vertex C is the right angle. The green leg is opposite the selected angle, and the orange leg is adjacent.': 'التسمية الصفراء تحدد الزاوية المرجعية. الرأس C هو الزاوية القائمة. الضلع الأخضر مقابل للزاوية المحددة والبرتقالي مجاور لها.',

        // Special triangles
        'Exact trigonometric values': 'القيم المثلثية الدقيقة',
        'Special right triangles': 'المثلثات القائمة الخاصة',
        'Use side patterns to find exact ratios without a calculator.': 'استخدم أنماط الأضلاع لإيجاد النسب الدقيقة دون آلة حاسبة.',
        'Show decimal values': 'أظهر القيم العشرية',
        'Show exact values': 'أظهر القيم الدقيقة',
        'Exact ratios for special right triangles': 'النسب الدقيقة للمثلثات القائمة الخاصة',
        'Recognize these side patterns to find exact values without a calculator.': 'تعرّف على أنماط الأضلاع هذه لإيجاد القيم الدقيقة دون آلة حاسبة.',
        '45°–45°–90° · Isosceles right triangle': '45°–45°–90° · مثلث قائم متساوي الساقين',
        'Both legs have the same length.': 'للضلعين القائمين الطول نفسه.',
        '30°–60°–90° · Half of an equilateral triangle': '30°–60°–90° · نصف مثلث متساوي الأضلاع',
        'The short leg is opposite 30°; the hypotenuse is twice the short leg.': 'الضلع القصير يقابل الزاوية 30°، والوتر ضعف الضلع القصير.',
        'Ratio': 'النسبة',
        'Sine': 'الجيب',
        'Cosine': 'جيب التمام',
        'Tangent': 'الظل',

        // Guided examples, calculator
        'Learn by doing': 'تعلّم بالممارسة',
        'Guided examples by skill': 'أمثلة موجّهة حسب المهارة',
        'Choose an objective to open its question set. Use each question’s hint and step-by-step solution controls as needed.': 'اختر هدفاً لفتح مجموعة أسئلته. استخدم التلميح والحل خطوة بخطوة لكل سؤال عند الحاجة.',
        'Concept': 'المفهوم',
        'Worked example': 'مثال محلول',
        'Work through the solution': 'تتبّع خطوات الحل',
        'No steps revealed yet.': 'لم تُعرض أي خطوة بعد.',
        'Reveal first step': 'اعرض الخطوة الأولى',
        'Reveal answer': 'اعرض الإجابة',
        'Answer revealed': 'تم عرض الإجابة',
        'Diagram for worked example': 'رسم للمثال المحلول',
        'Scientific calculator': 'الآلة الحاسبة العلمية',
        'Practice calculator (fx-82 style)': 'آلة حاسبة للتدريب (بنمط fx-82)',
        'Press SHIFT or ALPHA first to reach the gold or red labels above the keys. Use MODE for DEG/RAD/GRA, rounding and statistics. This is an original practice calculator, not a Casio product.': 'اضغط SHIFT أو ALPHA أولاً للوصول إلى الرموز الذهبية أو الحمراء فوق المفاتيح. استخدم MODE لاختيار DEG/RAD/GRA والتقريب والإحصاء. هذه آلة حاسبة تدريبية أصلية وليست منتجاً من Casio.',
        'Check your work': 'تحقق من عملك',
        'Trigonometry calculator': 'حاسبة حساب المثلثات',
        'Choose a ratio, enter two known values, and solve for an angle or side. Angles are in degrees.': 'اختر نسبة، وأدخل قيمتين معلومتين، ثم أوجد زاوية أو ضلعاً. الزوايا بالدرجات.',
        'Explore a right triangle': 'استكشف مثلثاً قائماً',
        'Trigonometric ratio': 'النسبة المثلثية',
        'Opposite side': 'الضلع المقابل',
        'Adjacent side': 'الضلع المجاور',
        'Calculate missing side and ratio': 'احسب الضلع المجهول والنسبة',
        'Leave one side blank': 'اترك ضلعاً واحداً فارغاً',
        'Remember before calculating': 'تذكّر قبل الحساب',
        'Enter any two positive side lengths and leave the third blank. The calculator uses the Pythagorean theorem, then reports the selected ratio and the reference angle.': 'أدخل أي طولين موجبين واترك الثالث فارغاً. تستخدم الحاسبة نظرية فيثاغورس ثم تعرض النسبة المختارة والزاوية المرجعية.',
        'Check degree mode': 'تحقق من وضع الدرجات',
        'For angle problems in degrees, confirm the calculator shows DEG before using a trig or inverse-trig key.': 'في مسائل الزوايا بالدرجات، تأكد أن الآلة تعرض DEG قبل استخدام مفتاح مثلثي أو مثلثي عكسي.',
        'Keep the reference angle in view': 'أبقِ الزاوية المرجعية أمام عينيك',
        'Opposite and adjacent change when you switch angles; the hypotenuse is always opposite the right angle.': 'يتغير المقابل والمجاور عند تبديل الزاوية، أما الوتر فيقابل الزاوية القائمة دائماً.',
        'Round at the end': 'قرّب في النهاية',
        'Keep extra digits in intermediate steps, then round the final value as requested.': 'احتفظ بأرقام إضافية في الخطوات الوسيطة ثم قرّب القيمة النهائية كما هو مطلوب.',
        'Model the situation first': 'مثّل الموقف أولاً',
        'Draw the horizontal reference line and label known sides before choosing a ratio.': 'ارسم الخط الأفقي المرجعي وسمِّ الأضلاع المعلومة قبل اختيار النسبة.',
        'Calculator checks and common pitfalls': 'فحوصات الآلة الحاسبة وأخطاء شائعة',
        'Use exact values when possible and round only when the question asks for an approximation.': 'استخدم القيم الدقيقة قدر الإمكان، وقرّب فقط عندما يطلب السؤال قيمة تقريبية.',
        'Close calculator': 'أغلق الآلة الحاسبة',
        'Open calculator': 'افتح الآلة الحاسبة',
        'Calculator': 'الآلة الحاسبة',

        // Mock exam
        'Chapter assessment': 'تقييم الفصل',
        'Chapter quiz: timed mock exam': 'اختبار الفصل: امتحان تجريبي موقوت',
        'Take the Chapter 13 mock exam under real exam conditions. It is timed and monitored by the TestPortal proctoring platform.': 'أدِّ الامتحان التجريبي للفصل 13 في ظروف امتحان حقيقية. الامتحان موقوت وتراقبه منصة TestPortal.',
        'Time allowed': 'الزمن المسموح',
        '20 (random each attempt)': '20 (عشوائية في كل محاولة)',
        'Attempts': 'المحاولات',
        'Up to 10': 'حتى 10 محاولات',
        'Important test instructions': 'تعليمات مهمة للاختبار',
        'Number of questions:': 'عدد الأسئلة:',
        'the test has 20 questions.': 'يتكون الاختبار من 20 سؤالاً.',
        'Question randomization:': 'ترتيب الأسئلة العشوائي:',
        'questions are selected randomly for each new attempt.': 'تُختار الأسئلة عشوائياً في كل محاولة جديدة.',
        'Time limit:': 'الحد الزمني:',
        '2 minutes (02:00) per question, 40 minutes in total. When the 2 minutes expire, the system automatically moves to the next question and the score for the unsubmitted question is forfeited.': 'دقيقتان (02:00) لكل سؤال، وبمجموع 40 دقيقة للاختبار. عند انتهاء الدقيقتين ينتقل النظام تلقائياً إلى السؤال التالي وتسقط درجة السؤال الذي لم يُرسَل.',
        'Allowed attempts:': 'المحاولات المسموحة:',
        'you may take the test up to 10 times.': 'يمكنك أداء الاختبار حتى 10 مرات.',
        'Calculators:': 'الآلات الحاسبة:',
        'Allowed:': 'مسموح:',
        'a personal handheld scientific calculator (for example, a Casio model).': 'آلة حاسبة علمية يدوية شخصية (مثل أحد طرازات Casio).',
        'Strictly prohibited:': 'ممنوع منعاً باتاً:',
        'any on-screen, device or in-browser calculator, and opening external apps. Doing so takes focus away from the test and triggers an automatic block.': 'أي آلة حاسبة على الشاشة أو في الجهاز أو داخل المتصفح، وكذلك فتح تطبيقات خارجية. يؤدي ذلك إلى فقدان التركيز عن صفحة الاختبار ويُفعّل الحظر التلقائي.',
        'Security and monitoring:': 'الأمان والمراقبة:',
        'Do not leave the test page, switch tabs, minimize the window, or open other applications or windows.': 'لا تغادر صفحة الاختبار، ولا تبدّل بين علامات التبويب، ولا تصغّر النافذة، ولا تفتح تطبيقات أو نوافذ أخرى.',
        'Leaving or unfocusing the test page more than 3 times, for any reason, results in an automatic block and cancellation of your test session.': 'مغادرة صفحة الاختبار أو فقدان التركيز عنها أكثر من 3 مرات، لأي سبب، يؤدي إلى حظر تلقائي وإلغاء جلسة اختبارك.',
        'Use a laptop or desktop with a stable internet connection, and allow full screen and the camera or microphone if the test asks.': 'استخدم حاسوباً محمولاً أو مكتبياً باتصال إنترنت مستقر، واسمح بوضع ملء الشاشة وبالكاميرا أو الميكروفون إذا طلبها الاختبار.',
        'Do not copy, paste, take screenshots or refresh the page. Enter your real name and student ID when asked.': 'لا تنسخ ولا تلصق ولا تلتقط لقطات شاشة ولا تحدّث الصفحة. أدخل اسمك الحقيقي ورقمك الجامعي عند الطلب.',
        'Academic integrity:': 'النزاهة الأكاديمية:',
        'cheating, impersonation and leaving the exam window can lead to a zero or other penalties set by your instructor.': 'قد يؤدي الغش وانتحال الشخصية ومغادرة نافذة الامتحان إلى الحصول على صفر أو عقوبات أخرى يحددها مدرّسك.',
        'I have read the rules, I will work alone and honestly, and I understand my activity may be recorded.': 'قرأتُ القواعد، وسأعمل بمفردي وبأمانة، وأدرك أن نشاطي قد يُسجَّل.',
        'Start mock exam': 'ابدأ الامتحان التجريبي',
        'Want to rehearse first? Use the Practice problems tab.': 'ترغب في التدرّب أولاً؟ استخدم تبويب مسائل التدريب.',
        'Reference timer:': 'المؤقت المرجعي:',
        'Window leaves:': 'مرات مغادرة النافذة:',
        '/ 3 allowed': '/ 3 مسموح بها',
        'Full screen': 'ملء الشاشة',
        'The official timer and proctoring run inside the exam window. The reference timer is only a reminder.': 'المؤقت الرسمي والمراقبة يعملان داخل نافذة الامتحان، والمؤقت المرجعي مجرد تذكير.',
        'I have finished': 'أنهيت الامتحان',
        'Time is up': 'انتهى الوقت',
        'TestPortal mock exam': 'الامتحان التجريبي على TestPortal',

        // Practice tab
        'Practice by objective': 'تدرّب حسب الهدف',
        'Random practice': 'تدريب عشوائي',
        'Focused practice': 'تدريب مركّز',
        'Practice mode': 'نمط التدريب',
        'Choose a learning objective': 'اختر هدفاً تعليمياً',
        'Practice one skill at a time, or use the full assessment from the hero section to review the entire chapter.': 'تدرّب على مهارة واحدة في كل مرة، أو استخدم التقييم الكامل من أعلى الصفحة لمراجعة الفصل كله.',
        'Mixed practice across every objective': 'تدريب متنوع يشمل كل الأهداف',
        'Chapter 13 contains': 'يحتوي الفصل 13 على',
        'questions across': 'سؤالاً موزعة على',
        'learning objectives. A random set always includes at least one question from every objective, so a 10-question set covers the whole chapter.': 'هدفاً تعليمياً. تتضمن المجموعة العشوائية دائماً سؤالاً واحداً على الأقل من كل هدف، لذا فإن مجموعة من 10 أسئلة تغطي الفصل بأكمله.',
        'Number of Questions (Min 10):': 'عدد الأسئلة (10 على الأقل):',
        'Generate': 'أنشئ',
        'Practice all': 'تدرّب على جميع',
        'Question bank learning objectives': 'الأهداف التعليمية للفصل',
        'Random quiz generation is available for Chapter 13.': 'إنشاء الاختبار العشوائي متاح للفصل 13 فقط.',
        'Random quiz generation is available for Chapters 13 and 15.': 'إنشاء الاختبار العشوائي متاح للفصلين 13 و15 فقط.',
        'Number of Questions (Min': 'عدد الأسئلة (على الأقل',
        '):': '):',
        'questions covers the whole chapter.': 'سؤالاً تغطي الفصل بأكمله.',
        'learning objectives. A random set always includes at least one question from every objective, so a set of': 'هدفاً تعليمياً. تتضمن المجموعة العشوائية دائماً سؤالاً واحداً على الأقل من كل هدف، لذا فإن مجموعة من',
        'The mock exam for this chapter is being prepared and will appear here soon. Meanwhile, use the Practice problems tab.': 'الامتحان التجريبي لهذا الفصل قيد الإعداد وسيظهر هنا قريباً. في الأثناء استخدم تبويب مسائل التدريب.',

        // Chapter 15
        'Learn and Practice Graphs and Statistics': 'تعلّم وتدرّب على الرسوم البيانية والإحصاء',
        'Build confidence reading and constructing graphs and calculating mean, median and mode, with hints, step-by-step solutions and a built-in calculator.': 'ابنِ ثقتك في قراءة الرسوم البيانية وإنشائها وحساب الوسط والوسيط والمنوال، مع تلميحات وحلول خطوة بخطوة وآلة حاسبة مدمجة.',
        'Construct and interpret circle graphs and central angles.': 'إنشاء الرسوم الدائرية وتفسيرها والزوايا المركزية.',
        'Read line graphs and bar graphs.': 'قراءة الرسوم الخطية والأعمدة البيانية.',
        'Build frequency distributions and histograms.': 'بناء التوزيعات التكرارية والمدرجات التكرارية.',
        'Find the mean, median and mode, including from grouped data.': 'إيجاد الوسط والوسيط والمنوال، بما في ذلك من البيانات المجمّعة.',
        'Chapter 15: Graphs, Statistics & Measurement': 'الفصل 15: الرسوم البيانية والإحصاء والقياس',
        'Circle graph and bar graph illustrating data': 'رسم دائري وأعمدة بيانية توضّح البيانات',
        'Objectives 1–3': 'الأهداف 1–3',
        'Objectives 4–5': 'الأهداف 4–5',
        'Objectives 6–7': 'الأهداف 6–7',
        'Objectives 8–11': 'الأهداف 8–11',
        'Construct, calculate and interpret circle graphs': 'إنشاء الرسوم الدائرية وحسابها وتفسيرها',
        'Read line graphs and bar graphs': 'قراءة الرسوم الخطية والأعمدة البيانية',
        'Build frequency distributions and histograms': 'بناء التوزيعات التكرارية والمدرجات التكرارية',
        'Mean, median and mode': 'الوسط والوسيط والمنوال',
        'Central angle from a percentage': 'الزاوية المركزية من نسبة مئوية',
        'Central angle from a count': 'الزاوية المركزية من عدد',
        'Line graph': 'الرسم الخطي',
        'Bar graph': 'الرسم بالأعمدة',
        'Mean': 'الوسط الحسابي',
        'Median': 'الوسيط',
        'Mode': 'المنوال',
        'Mean of a frequency distribution': 'الوسط من توزيع تكراري',
        'Key idea about circle graphs': 'فكرة أساسية عن الرسوم الدائرية',
        'Shows how a quantity changes. Find the given value on the horizontal axis, move up to the line, then across to the vertical axis (or the reverse for the opposite question).': 'يبيّن كيف تتغير كمية ما. أوجد القيمة المعطاة على المحور الأفقي، ثم اصعد إلى الخط، ثم انتقل إلى المحور الرأسي (أو العكس في السؤال المعاكس).',
        'Compares categories. Read each bar\'s height on the scale, then add, subtract or compare as the question asks.': 'يقارن بين الفئات. اقرأ ارتفاع كل عمود على المقياس، ثم اجمع أو اطرح أو قارن حسب المطلوب.',
        'Add all values and divide by the number of values.': 'اجمع كل القيم ثم اقسم على عددها.',
        'Order the data. The median is the middle value; for an even count, it is the mean of the two middle values.': 'رتّب البيانات. الوسيط هو القيمة الوسطى؛ وإذا كان عدد القيم زوجياً فهو متوسط القيمتين الوسطيين.',
        'The most frequent value. A data set can have one mode, several modes, or none.': 'القيمة الأكثر تكراراً. قد يكون للبيانات منوال واحد أو عدة منوالات أو لا منوال.',
        'Choose equal-width class intervals that cover the smallest to the largest value.': 'اختر فئات متساوية العرض تغطي من أصغر قيمة إلى أكبر قيمة.',
        'Check that the frequencies add up to the number of data values.': 'تحقق من أن مجموع التكرارات يساوي عدد القيم.',
        '1. Constructing a Circle Graph from Percentages': '1. إنشاء رسم دائري من النسب المئوية',
        'Convert percentages to central angles and select the circle graph that represents the data.': 'حوّل النسب المئوية إلى زوايا مركزية واختر الرسم الدائري الذي يمثل البيانات.',
        '2. Finding Central Angles for a Circle Graph (Data or Counts Given)': '2. إيجاد الزوايا المركزية للرسم الدائري (بيانات أو أعداد معطاة)',
        'Compute the central angle that represents a category as a share of the total.': 'احسب الزاوية المركزية التي تمثل فئة ما كنسبة من المجموع.',
        '3. Interpreting Circle Graphs': '3. تفسير الرسوم الدائرية',
        'Use the fractions of a circle graph to find and compare quantities.': 'استخدم كسور الرسم الدائري لإيجاد الكميات ومقارنتها.',
        '4. Reading and Interpreting Line Graphs': '4. قراءة الرسوم الخطية وتفسيرها',
        'Read values and trends from a line graph.': 'اقرأ القيم والاتجاهات من الرسم الخطي.',
        '5. Reading and Interpreting Bar Graphs': '5. قراءة الأعمدة البيانية وتفسيرها',
        'Read, compare and combine values shown in a bar graph.': 'اقرأ القيم المعروضة في الأعمدة البيانية وقارنها واجمعها.',
        '6. Constructing a Frequency Distribution from Raw Data': '6. إنشاء توزيع تكراري من بيانات خام',
        'Group raw data into class intervals and record the frequency of each interval.': 'جمّع البيانات الخام في فئات وسجّل تكرار كل فئة.',
        '7. Constructing a Histogram from a Frequency Distribution': '7. إنشاء مدرج تكراري من توزيع تكراري',
        'Select the histogram that represents a given frequency distribution.': 'اختر المدرج التكراري الذي يمثل التوزيع التكراري المعطى.',
        '8. Finding the Mean of a Data Set': '8. إيجاد الوسط الحسابي لمجموعة بيانات',
        'Calculate the arithmetic mean of a set of measurements.': 'احسب الوسط الحسابي لمجموعة من القياسات.',
        '9. Finding the Median of a Data Set': '9. إيجاد الوسيط لمجموعة بيانات',
        'Order the data and identify the middle value.': 'رتّب البيانات وحدّد القيمة الوسطى.',
        '10. Finding the Mode of a Data Set': '10. إيجاد المنوال لمجموعة بيانات',
        'Identify the most frequently occurring value.': 'حدّد القيمة الأكثر تكراراً.',
        '11. Finding the Mean from a Grouped Frequency Distribution': '11. إيجاد الوسط من توزيع تكراري مجمّع',
        'Use class midpoints and frequencies to estimate the mean.': 'استخدم مراكز الفئات والتكرارات لتقدير الوسط.',

        // Quiz
        'Question': 'السؤال',
        'of': 'من',
        'Question Navigator': 'متصفح الأسئلة',
        'Loading question...': 'جارٍ تحميل السؤال...',
        'Section 1': 'القسم 1',
        'Show hint': 'أظهر التلميح',
        'Hide hint': 'أخفِ التلميح',
        'Math notation could not be rendered. The original notation is still available in the question text.': 'تعذّر عرض الرموز الرياضية. ما زال الرمز الأصلي متاحاً في نص السؤال.',
        'Correct Answer!': 'إجابة صحيحة!',
        'Correct!': 'صحيح!',
        'Toggle solution': 'أظهر/أخفِ الحل',
        '← Previous': '→ السابق',
        'Chapter Overview': 'نظرة عامة على الفصل',
        'Submit Answer': 'أرسل الإجابة',
        'Next Question →': '← السؤال التالي',
        'Finish Quiz →': '← إنهاء الاختبار',
        'Step-by-Step Solution': 'الحل خطوة بخطوة',
        'Hint:': 'تلميح:',
        'Answer key unresolved for this imported question.': 'مفتاح الإجابة غير محسوم لهذا السؤال المستورد.',
        'Selected:': 'المختار:',
        'Correct': 'صحيح',
        'Please select an answer choice before submitting.': 'يرجى اختيار إجابة قبل الإرسال.',
        'Triangle side colors: blue hypotenuse; green opposite side relative to the marked angle; orange adjacent side relative to the marked angle.': 'ألوان أضلاع المثلث: الوتر أزرق؛ المقابل للزاوية المعلَّمة أخضر؛ المجاور للزاوية المعلَّمة برتقالي.',
        'Answer:': 'الإجابة:',

        // Results
        'Quiz Completed!': 'اكتمل الاختبار!',
        'Review your score and choose whether to share it with Tahat Just Math.': 'راجع نتيجتك واختر ما إذا كنت تريد مشاركتها مع Tahat Just Math.',
        'Time Elapsed:': 'الزمن المستغرق:',
        'Your name': 'اسمك',
        'I am a': 'أنا',
        'Choose one': 'اختر واحداً',
        'Visitor': 'زائر',
        'Student': 'طالب',
        'Teacher': 'معلّم',
        'Student ID': 'الرقم الجامعي',
        'Email My Result': 'أرسل نتيجتي بالبريد',
        'Return to Chapter': 'العودة إلى الفصل',
        'Emailing your result opens a draft addressed to contact@tahatjustmath.com with your name, role, quiz, and score. If you select Student, your student ID is included. Review the draft and send it yourself only if you want to share these details.': 'يؤدي إرسال نتيجتك بالبريد إلى فتح مسودة موجّهة إلى contact@tahatjustmath.com تتضمن اسمك وصفتك والاختبار ونتيجتك. وإذا اخترت «طالب» فسيُضاف رقمك الجامعي. راجع المسودة وأرسلها بنفسك فقط إذا رغبت في مشاركة هذه البيانات.',
        'Please enter your student ID.': 'يرجى إدخال رقمك الجامعي.',
        'Excellent': 'ممتاز',
        'Very Good': 'جيد جداً',
        'Good': 'جيد',
        'Fair': 'مقبول',
        'Needs Improvement': 'يحتاج إلى تحسين',

        // Footer
        'Self-paced mathematics practice with guided lessons, interactive study tools, and chapter practice questions.': 'تدريب رياضي ذاتي الوتيرة مع دروس موجّهة وأدوات دراسة تفاعلية وأسئلة تدريب لكل فصل.',
        'Quick links': 'روابط سريعة',
        'Subjects directory': 'دليل المواد',
        'Back to top': 'العودة إلى الأعلى',
        'Mock exam': 'الامتحان التجريبي',
        'Privacy policy': 'سياسة الخصوصية',
        'Contact': 'تواصل معنا',
        'GitHub project': 'مشروع GitHub',
        'Chapters': 'الفصول',
        'Chapter 13 · Trigonometry': 'الفصل 13 · حساب المثلثات',
        'Chapter 4 · Accuracy & Measurement': 'الفصل 4 · الدقة والقياس',
        'Chapter 15 · Graphs, Statistics & Measurement': 'الفصل 15 · الرسوم البيانية والإحصاء والقياس',
        '© Tahat Just Math': '© Tahat Just Math',
        'About Tahat Just Math': 'عن Tahat Just Math',
        'Available chapters': 'الفصول المتاحة',
        'Tahat Just Math logo': 'شعار Tahat Just Math',
        'Choose a subject': 'اختر مادة',

        // Learning objectives (Chapter 13)
        '1. Identifying the Hypotenuse, Opposite, and Adjacent Sides of a Right Triangle': '1. تحديد الوتر والضلع المقابل والضلع المجاور في المثلث القائم',
        'Locate the hypotenuse, then name the sides opposite and adjacent to a given acute angle.': 'حدّد الوتر، ثم سمِّ الضلعين المقابل والمجاور لزاوية حادة معطاة.',
        '2. Evaluating Sine, Cosine, and Tangent from the Side Lengths of a Right Triangle': '2. إيجاد الجيب وجيب التمام والظل من أطوال أضلاع المثلث القائم',
        "Express sin, cos, and tan of an acute angle as ratios of the triangle's sides.": 'عبّر عن sin وcos وtan لزاوية حادة بوصفها نسباً بين أضلاع المثلث.',
        '3. Evaluating Sine, Cosine, and Tangent of a Given Angle': '3. إيجاد الجيب وجيب التمام والظل لزاوية معطاة',
        'Evaluate sin, cos, and tan of a given angle using a calculator in degree mode.': 'أوجد sin وcos وtan لزاوية معطاة باستخدام الآلة الحاسبة بوضع الدرجات.',
        '4. Finding a Missing Side Using the Pythagorean Theorem': '4. إيجاد ضلع مجهول باستخدام نظرية فيثاغورس',
        'Apply a² + b² = c² to determine an unknown leg or hypotenuse.': 'طبّق a² + b² = c² لتحديد ضلع قائم أو وتر مجهول.',
        '5. Finding a Missing Side Using Trigonometric Ratios (One Side and One Acute Angle Given)': '5. إيجاد ضلع مجهول باستخدام النسب المثلثية (معطى ضلع وزاوية حادة)',
        'Select the appropriate trigonometric ratio and solve for an unknown side length.': 'اختر النسبة المثلثية المناسبة وأوجد طول الضلع المجهول.',
        '6. Finding an Acute Angle from a Given Trigonometric Ratio': '6. إيجاد زاوية حادة من نسبة مثلثية معطاة',
        'Apply an inverse trigonometric function to a given ratio to find the measure of an acute angle.': 'طبّق دالة مثلثية عكسية على نسبة معطاة لإيجاد قياس زاوية حادة.',
        '7. Finding the Missing Acute Angle Using the Angle-Sum Property (One Acute Angle Given)': '7. إيجاد الزاوية الحادة المجهولة بخاصية مجموع الزوايا (معطاة زاوية حادة)',
        'Use the fact that the acute angles of a right triangle sum to 90° to find the missing angle.': 'استخدم حقيقة أن مجموع الزاويتين الحادتين في المثلث القائم يساوي 90° لإيجاد الزاوية المجهولة.',
        '8. Finding an Acute Angle Using Inverse Trigonometric Ratios (Two Sides Given)': '8. إيجاد زاوية حادة بالنسب المثلثية العكسية (معطى ضلعان)',
        'Form the ratio of two known sides and apply the matching inverse trigonometric function.': 'كوّن نسبة الضلعين المعلومين وطبّق الدالة المثلثية العكسية المناسبة.',
        '9. Solving a Right Triangle (Two Sides, or One Side and One Acute Angle, Given)': '9. حل المثلث القائم (معطى ضلعان، أو ضلع وزاوية حادة)',
        'Determine all unknown side lengths and both acute angles.': 'أوجد جميع أطوال الأضلاع المجهولة والزاويتين الحادتين.',
        '10. Solving Application Problems Involving Right Triangles': '10. حل مسائل تطبيقية على المثلثات القائمة',
        'Model real-world situations with a right triangle and find an unknown side or angle.': 'مثّل مواقف حياتية بمثلث قائم وأوجد ضلعاً أو زاوية مجهولة.',

        // Chapter 4 and 15 objectives
        '4.1 Accuracy': '4.1 الدقة',
        'Determine significant digits in measurements.': 'حدّد الأرقام المعنوية في القياسات.',
        '4.2 Precision': '4.2 الضبط',
        'Identify the place value of the last recorded digit.': 'حدّد المنزلة العشرية لآخر رقم مسجَّل.',
        '4.3 Greatest Possible Error': '4.3 أكبر خطأ ممكن',
        "Find the greatest possible error from a measurement's precision.": 'أوجد أكبر خطأ ممكن من ضبط القياس.',
        '4.5-1 Vernier Caliper Parts': '4.5-1 أجزاء القدمة ذات الورنية',
        'Identify the parts of a Vernier caliper.': 'تعرّف على أجزاء القدمة ذات الورنية.',
        '4.5-2 Vernier Caliper (Metric)': '4.5-2 القدمة ذات الورنية (متري)',
        'Read metric Vernier caliper measurements.': 'اقرأ قياسات القدمة ذات الورنية بالنظام المتري.',
        '4.5-3 Vernier Caliper (Inch)': '4.5-3 القدمة ذات الورنية (بالبوصة)',
        'Read inch Vernier caliper measurements.': 'اقرأ قياسات القدمة ذات الورنية بالبوصة.',
        '4.6-1 Micrometer Parts': '4.6-1 أجزاء الميكرومتر',
        'Identify the parts of a micrometer.': 'تعرّف على أجزاء الميكرومتر.',
        '4.6-2 Metric Micrometer': '4.6-2 الميكرومتر المتري',
        'Read metric micrometer measurements.': 'اقرأ قياسات الميكرومتر المتري.',
        '4.6-3 U.S. Micrometer Caliper': '4.6-3 الميكرومتر الأمريكي',
        'Read U.S. micrometer measurements.': 'اقرأ قياسات الميكرومتر الأمريكي.',
        '4.7 Most and Least Accurate': '4.7 الأكثر والأقل دقة',
        'Compare measurements by precision.': 'قارن بين القياسات حسب ضبطها.',
        '4.8 Rules for Multiplication and Division': '4.8 قواعد الضرب والقسمة',
        'Apply significant-figure rules to calculations.': 'طبّق قواعد الأرقام المعنوية على الحسابات.',
        'Practice circle graphs and data interpretation.': 'تدرّب على الرسوم الدائرية وتفسير البيانات.',

        // Guided example lessons (card headings and titles are also covered by LESSONS_AR)
        'Right-triangle foundations': 'أساسيات المثلث القائم',
        'Trigonometric ratios': 'النسب المثلثية',
        'Solving right triangles': 'حل المثلثات القائمة',
        'Applications and calculator practice': 'التطبيقات والتدرّب على الآلة الحاسبة'
    };

    // Strings that contain numbers or names, matched by pattern.
    const qWord = n => n === 1 ? 'سؤال واحد' : n === 2 ? 'سؤالان' : (n >= 3 && n <= 10) ? n + ' أسئلة' : n + ' سؤالاً';
    const PATTERNS = [
        [/^(\d+) questions$/, m => qWord(+m[1])],
        [/^(\d+) questions · Practice this objective$/, m => qWord(+m[1]) + ' · تدرّب على هذا الهدف'],
        [/^(\d+)% Completed$/, m => m[1] + '% مكتمل'],
        [/^out of (\d+)$/, m => 'من أصل ' + m[1]],
        [/^(\d+)% Score$/, m => 'النتيجة: ' + m[1] + '%'],
        [/^Final Grade: (.+)$/, m => 'التقدير النهائي: ' + (AR[m[1]] || m[1])],
        [/^Step (\d+): (.+)$/, (m, tr) => 'الخطوة ' + m[1] + ': ' + (tr(m[2]) || m[2])],
        [/^Step (\d+) of (\d+) revealed\.$/, m => 'عُرضت الخطوة ' + m[1] + ' من ' + m[2] + '.'],
        [/^Reveal step (\d+) of (\d+)$/, m => 'اعرض الخطوة ' + m[1] + ' من ' + m[2]],
        [/^Answer: (.+)$/, m => 'الإجابة: ' + m[1]],
        [/^Choose (\d+)–(\d+) questions\. Each set uses a random, non-repeating selection\.$/, m => 'اختر من ' + m[1] + ' إلى ' + m[2] + ' سؤالاً. تستخدم كل مجموعة اختياراً عشوائياً دون تكرار.'],
        [/^Enter a whole number from (\d+) to (\d+)\.$/, m => 'أدخل عدداً صحيحاً من ' + m[1] + ' إلى ' + m[2] + '.'],
        [/^Take the Chapter (\d+) mock exam .*$/, m => 'قدّم الامتحان التجريبي للفصل ' + m[1] + '.'],
        [/^Chapter (\d+): Random Practice$/, m => 'الفصل ' + m[1] + ': تدريب عشوائي'],
        [/^Go to question (\d+): (.+)$/, (m, tr) => 'انتقل إلى السؤال ' + m[1] + ': ' + (tr(m[2]) || m[2])],
        [/^Angle ([AB])$/, m => 'الزاوية ' + m[1]],
        [/^Q(\d+) \((.*)\):$/, (m, tr) => 'س' + m[1] + ' (' + (tr(m[2]) || m[2]) + '):'],
        [/^(\S+) Correct$/, m => m[1] + ' صحيح'],
        [/^(\S+) Incorrect \(Correct: (.+)\)$/, m => m[1] + ' خاطئ (الصحيح: ' + m[2] + ')'],
        [/^Not quite\. Correct answer: (.+)$/, m => 'ليست صحيحة. الإجابة الصحيحة: ' + m[1]],
        [/^.{0,6}Detailed Answers Review \(Q1 - Q$/, () => '📋 مراجعة الإجابات التفصيلية (Q1 - Q'],
        [/^(.+) \((\d+)\)$/, (m, tr) => { const t = tr(m[1]); return t ? t + ' (' + m[2] + ')' : null; }],
        [/^(.+) materials are being prepared\. Select Technical Mathematics to open the available chapters\.$/, (m, tr) => 'مواد ' + (tr(m[1]) || m[1]) + ' قيد الإعداد. اختر الرياضيات التقنية لفتح الفصول المتاحة.'],
        [/^(.+) · Course Library$/, (m, tr) => (tr(m[1]) || m[1]) + ' · مكتبة المقررات'],
        [/^(\d+) minutes$/, m => m[1] + ' دقيقة'],
        [/^(Chapter \d+(?: & CG)?): (.+)$/, (m, tr) => (tr(m[1]) || m[1]) + ': ' + (tr(m[2]) || m[2])]
    ];

    const HINTS_AR = {
        'Side Identification': 'ابدأ بإيجاد الزاوية القائمة: الضلع الذي يقابلها هو الوتر (hypotenuse). وبالنسبة إلى الزاوية الحادة المذكورة، الضلع المجاور (adjacent) يلامس تلك الزاوية، والضلع المقابل (opposite) يقع في مواجهتها.',
        'Pythagorean Theorem': 'حدّد c، وهو الضلع المقابل للزاوية القائمة. إذا كان c مجهولاً فاستخدم c = √(a² + b²). وإذا كان أحد الضلعين القائمين مجهولاً فاطرح مربع الضلع الآخر من c² ثم خذ الجذر التربيعي. قرّب القيمة النهائية فقط.',
        'Trig Ratios': 'استخدم SOH–CAH–TOA لمطابقة الجيب أو جيب التمام أو الظل المطلوب مع الزوج الصحيح من الأضلاع.',
        'Trig Missing Sides': 'سمِّ الأضلاع (المقابل والمجاور والوتر) بالنسبة إلى الزاوية A أو B. اختر SOH أو CAH أو TOA لربط الضلع المعلوم بالمجهول. إذا كان الضلع المجهول في البسط فاضرب (مثلاً: المقابل = الوتر × جيب الزاوية المعطاة)، وإذا كان في المقام فاقسم (مثلاً: الوتر = المقابل ÷ جيب الزاوية المعطاة). عوّض بالقيم المعلومة، واستخدم وضع الدرجات، وقرّب الناتج النهائي فقط.',
        'Trig Missing Angles': 'حدّد الأضلاع المقابلة والمجاورة والوتر بالنسبة إلى الزاوية المطلوبة، ثم استخدم نسبتها مع الدالة المثلثية العكسية المناسبة.',
        'Solve Right Triangle': 'أوجد الضلع المجهول أولاً: اجمع مربعي الضلعين القائمين لإيجاد c، أو اطرح مربع الضلع المعلوم من c² لإيجاد ضلع قائم. ثم استخدم نسبة عكسية مناسبة لإيجاد إحدى الزاويتين الحادتين واطرحها من 90° لإيجاد الأخرى.',
        'Word Problem': 'ارسم مثلثاً قائماً من الموقف. علّم المسافة أو الارتفاع أو خط النظر المعلوم، ثم حدّد الأضلاع بالنسبة إلى الزاوية قبل اختيار النسبة.',
        'Evaluate Trig Ratios': 'اضبط الآلة الحاسبة على وضع الدرجات. أدخل الجيب أو جيب التمام أو الظل المطلوب وقرّب فقط كما يطلب السؤال.',
        'Complementary Angles': 'مجموع زوايا المثلث 180° والزاوية القائمة 90°، لذا فمجموع الزاويتين الحادتين 90°. اطرح الزاوية الحادة المعلومة من 90°.',
        'Solve Triangle (Angle and Side)': 'أوجد الزاوية الحادة الأخرى بطرح الزاوية المعطاة من 90°. ثم سمِّ الأضلاع بالنسبة إلى الزاوية المعطاة واستخدم الجيب أو جيب التمام أو الظل مع الضلع المعلوم: اضرب إذا كان الضلع المجهول في البسط، واقسم إذا كان في المقام.',
        'chapter15-circle-construct': 'حوّل كل نسبة مئوية إلى زاوية مركزية بضربها في 360° ثم قسمتها على 100، وتأكد أن مجموع الزوايا 360°، ثم اختر الرسم المطابق.',
        'chapter15-circle-angles': 'الزاوية المركزية = (عدد الفئة ÷ المجموع الكلي) × 360°. أوجد المجموع الكلي أولاً.',
        'chapter15-circle-interpret': 'اقرأ الكسر أو النسبة لكل قطاع، ثم اضربها في المجموع الكلي لإيجاد الكمية المطلوبة.',
        'chapter15-line-graphs': 'أوجد القيمة المعطاة على أحد المحورين، وتتبّعها حتى الخط ثم إلى المحور الآخر، ثم أجب عما يُطلب.',
        'chapter15-bar-graphs': 'اقرأ ارتفاع كل عمود بدقة على المقياس، ثم اجمع أو اطرح أو قارن حسب السؤال.',
        'chapter15-freq-distribution': 'ابدأ بفئات متساوية العرض، وعدّ القيم في كل فئة، وتأكد أن مجموع التكرارات يساوي عدد القيم.',
        'chapter15-histogram': 'قارن ارتفاع كل عمود بتكرار الفئة المقابلة له في الجدول، واختر المدرج المطابق.',
        'chapter15-mean': 'الوسط = مجموع القيم ÷ عددها.',
        'chapter15-median': 'رتّب القيم تصاعدياً. الوسيط هو القيمة الوسطى، وإذا كان العدد زوجياً فهو متوسط القيمتين الوسطيين.',
        'chapter15-mode': 'المنوال هو القيمة الأكثر تكراراً؛ عدّ تكرار كل قيمة.',
        'chapter15-grouped-mean': 'أوجد مركز كل فئة، واضربه في تكرارها، واجمع النواتج ثم اقسم على مجموع التكرارات.',
        'Inverse Trig': 'اضبط الآلة الحاسبة على وضع الدرجات. طابق النسبة المعطاة مع الجيب أو جيب التمام أو الظل، ثم استخدم دالتها العكسية لإيجاد الزاوية الحادة.'
    };

    const LESSONS_AR = {
        foundations: {
            title: 'أساسيات المثلث القائم',
            concept: 'يقع الوتر (hypotenuse) مقابل الزاوية القائمة وهو أطول الأضلاع. وبالنسبة إلى زاوية حادة مرجعية، يقع الضلع المقابل (opposite) في مواجهتها، أما المجاور (adjacent) فيلامسها وليس هو الوتر. عند غياب أحد الضلعين القائمين اطرح المربعات قبل أخذ الجذر التربيعي: \\(a^2+b^2=c^2\\)، إذن \\(a=\\sqrt{c^2-b^2}\\).'
        },
        ratios: {
            title: 'النسب المثلثية',
            concept: 'سمِّ الأضلاع بالنسبة إلى الزاوية المرجعية، ثم استخدم SOH–CAH–TOA: \\(\\sin(\\theta)=\\frac{\\text{opposite}}{\\text{hypotenuse}}\\) و\\(\\cos(\\theta)=\\frac{\\text{adjacent}}{\\text{hypotenuse}}\\) و\\(\\tan(\\theta)=\\frac{\\text{opposite}}{\\text{adjacent}}\\).'
        },
        solving: {
            title: 'حل المثلثات القائمة',
            concept: 'سمِّ الأضلاع (المقابل والمجاور والوتر) بالنسبة إلى الزاوية المعطاة A أو B. اختر SOH–CAH–TOA لربط الضلع المعلوم بالمجهول. في الصيغ التالية استبدل A بـ B عندما تكون الزاوية B هي المعطاة.',
            flow: [
                { title: 'سمِّ عناصر المثلث', text: 'علّم الزاوية القائمة والزاوية المعطاة \\(A\\) (أو \\(B\\)). سمِّ الوتر والمقابل والمجاور بالنسبة إلى تلك الزاوية.' },
                { title: 'اكتب المعلوم والمجهول', text: 'اكتب الأضلاع والزوايا المعطاة، ثم قرّر ما إذا كان المجهول ضلعاً أم زاوية.' },
                {
                    title: 'اختر الأداة المناسبة',
                    text: 'ضلعان معلومان وضلع مجهول: نظرية فيثاغورس. زاوية وضلع معلومان وضلع مجهول: الجيب أو جيب التمام أو الظل. ضلعان معلومان وزاوية مجهولة: نسبة عكسية. زاوية حادة معلومة والأخرى مجهولة: اطرح من \\(90^\\circ\\).',
                    cards: ['نظرية فيثاغورس', 'الضلع المجهول في البسط: اضرب', 'الضلع المجهول في المقام: اقسم', 'الزاوية المجهولة']
                },
                { title: 'احسب', text: 'عوّض بالقيم، وأبقِ الآلة الحاسبة على وضع الدرجات، وقرّب في النهاية فقط.' },
                { title: 'تحقق من معقولية الناتج', text: 'يجب أن يكون الوتر أطول الأضلاع، وكل ضلع قائم أقصر من الوتر، وأن يكون مجموع الزوايا الثلاث \\(180^\\circ\\).' }
            ]
        },
        applications: {
            title: 'التطبيقات والتدرّب على الآلة الحاسبة',
            concept: 'ارسم مثلثاً قائماً من الموقف وسمِّ عناصره. زاوية الارتفاع تُقاس إلى أعلى من خط أفقي، وزاوية الانخفاض تُقاس إلى أسفل. اضبط الآلة الحاسبة على وضع الدرجات، وحدّد أدوار الأضلاع، واختر نسبة تضم الكميات المعلومة والمجهولة.'
        }
    };

    // ---------- Engine ----------
    let lang = 'en';
    const origText = new WeakMap();
    const lastSet = new WeakMap();
    const origAttr = new WeakMap();
    const SKIP = 'script,style,mjx-container,[data-no-i18n],#fx82-root,#diagram-box,#question-stem,#options-container,.solution-steps,.worked-example-question,.worked-example-steps ol,#preview-list em';
    const ATTRS = ['aria-label', 'title', 'placeholder', 'alt'];

    const lookup = text => {
        const key = text.replace(/\s+/g, ' ').trim();
        if (!key) return null;
        if (Object.prototype.hasOwnProperty.call(AR, key)) return AR[key];
        for (const [re, fn] of PATTERNS) {
            const m = key.match(re);
            if (m) {
                const out = fn(m, lookup);
                if (out) return out;
            }
        }
        return null;
    };

    const skipped = node => {
        const el = node.nodeType === 1 ? node : node.parentElement;
        return !el || !!el.closest(SKIP);
    };

    const applyText = node => {
        if (skipped(node)) return;
        const current = node.nodeValue;
        const known = lastSet.get(node);
        if (known !== undefined && known === current) {
            if (lang === 'en') {
                node.nodeValue = origText.get(node);
                lastSet.delete(node);
            }
            return;
        }
        if (known === undefined || known !== current) origText.set(node, current);
        if (lang !== 'ar') return;
        const translated = lookup(current);
        if (!translated) return;
        const lead = current.match(/^\s*/)[0];
        const trail = current.match(/\s*$/)[0];
        const value = lead + translated + trail;
        lastSet.set(node, value);
        node.nodeValue = value;
    };

    const applyAttrs = el => {
        if (skipped(el)) return;
        ATTRS.forEach(attr => {
            if (!el.hasAttribute(attr)) return;
            const current = el.getAttribute(attr);
            let store = origAttr.get(el);
            if (!store) { store = {}; origAttr.set(el, store); }
            const entry = store[attr];
            if (entry && entry.set === current) {
                if (lang === 'en') { el.setAttribute(attr, entry.orig); delete store[attr]; }
                return;
            }
            if (lang !== 'ar') return;
            const translated = lookup(current);
            if (!translated) return;
            store[attr] = { orig: current, set: translated };
            el.setAttribute(attr, translated);
        });
    };

    const walk = root => {
        if (!root) return;
        if (root.nodeType === 3) { applyText(root); return; }
        if (root.nodeType !== 1 && root.nodeType !== 11) return;
        if (root.nodeType === 1) applyAttrs(root);
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (node.nodeType === 3) applyText(node);
            else applyAttrs(node);
        }
    };

    let observer = null;
    const startObserver = () => {
        if (observer) return;
        observer = new MutationObserver(records => {
            records.forEach(rec => {
                if (rec.type === 'childList') rec.addedNodes.forEach(walk);
                else if (rec.type === 'characterData') applyText(rec.target);
                else if (rec.type === 'attributes') applyAttrs(rec.target);
            });
        });
        observer.observe(document.body, {
            childList: true, subtree: true, characterData: true,
            attributes: true, attributeFilter: ATTRS
        });
    };

    const css = `
html[dir="rtl"] body { font-family: "Segoe UI", Tahoma, "Noto Sans Arabic", Arial, sans-serif; }
html[dir="rtl"] #fx82-root, html[dir="rtl"] .quiz-calc-panel, html[dir="rtl"] mjx-container,
html[dir="rtl"] svg, html[dir="rtl"] #question-stem, html[dir="rtl"] #options-container,
html[dir="rtl"] #diagram-box, html[dir="rtl"] .solution-steps, html[dir="rtl"] .worked-example-question,
html[dir="rtl"] .worked-example-steps ol, html[dir="rtl"] .navigator-grid, html[dir="rtl"] .triangle-diagram { direction: ltr; }
html[dir="rtl"] #question-stem, html[dir="rtl"] #options-container, html[dir="rtl"] .solution-steps { text-align: left; }
.lang-toggle { cursor: pointer; font: inherit; font-weight: 700; padding: 8px 14px; border-radius: 10px;
  border: 1px solid rgba(20,125,120,.45); background: #fff; color: #147d78; }
.lang-toggle:hover, .lang-toggle:focus-visible { background: #e8f4f3; outline: 2px solid #147d78; outline-offset: 2px; }
`;

    const I18N = {
        get lang() { return lang; },
        t(text) { return lang === 'ar' ? (lookup(text) || text) : text; },
        hint(category) { return lang === 'ar' ? (HINTS_AR[category] || null) : null; },
        lesson(base) {
            const ar = lang === 'ar' && LESSONS_AR[base.id];
            if (!ar) return base;
            return Object.assign({}, base, {
                title: ar.title,
                concept: ar.concept,
                flow: base.flow && base.flow.map((step, i) => {
                    const a = (ar.flow && ar.flow[i]) || {};
                    return Object.assign({}, step, {
                        title: a.title || step.title,
                        text: a.text || step.text,
                        cards: step.cards && step.cards.map((card, j) =>
                            Object.assign({}, card, { heading: (a.cards && a.cards[j]) || card.heading }))
                    });
                })
            });
        },
        setLang(next, persist = true) {
            lang = next === 'ar' ? 'ar' : 'en';
            const root = document.documentElement;
            root.lang = lang;
            root.dir = lang === 'ar' ? 'rtl' : 'ltr';
            if (persist) { try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* storage unavailable */ } }
            const button = document.getElementById('lang-toggle');
            if (button) {
                button.textContent = lang === 'ar' ? 'English' : 'العربية';
                button.setAttribute('lang', lang === 'ar' ? 'en' : 'ar');
                button.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
            }
            if (observer) observer.disconnect();
            observer = null;
            walk(document.body);
            startObserver();
            if (typeof renderSubjectPortal === 'function') renderSubjectPortal();
            if (typeof selectedChapter !== 'undefined' && selectedChapter === '13' && typeof renderChapter13Guide === 'function') renderChapter13Guide();
            if (typeof activeQuestions !== 'undefined' && activeQuestions.length && typeof renderQuestionNav === 'function' &&
                document.getElementById('quiz-card').style.display !== 'none') renderQuestionNav();
            walk(document.body);
        },
        apply: walk
    };
    window.I18N = I18N;

    const init = () => {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);

        const actions = document.querySelector('.site-header-actions');
        if (actions) {
            const button = document.createElement('button');
            button.type = 'button';
            button.id = 'lang-toggle';
            button.className = 'lang-toggle';
            button.setAttribute('data-no-i18n', '');
            button.addEventListener('click', () => I18N.setLang(lang === 'ar' ? 'en' : 'ar'));
            actions.appendChild(button);
        }

        let wanted = 'en';
        try { wanted = localStorage.getItem(STORE_KEY) || 'en'; } catch (e) { /* default */ }
        const fromUrl = new URLSearchParams(window.location.search).get('lang');
        if (fromUrl === 'ar' || fromUrl === 'en') wanted = fromUrl;
        I18N.setLang(wanted, false);
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(init, 0));
    else init();
})();
