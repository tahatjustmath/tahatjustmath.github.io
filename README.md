# Tahat Just Math

A lightweight, static mathematics question bank. The site uses plain HTML, CSS, and JavaScript, with no build step, framework, or server-side dependencies.

## Run locally

Open `index.html` in a browser to view the subject catalog. Choose **Technical Mathematics** to access the available banks. Chapter banks can also be opened directly with the `chapter` query parameter; for example, `index.html?chapter=13`.

## Publish on GitHub Pages

To publish at `https://tahatjustmath.github.io/`, the files in this folder must be in the root of the `tahatjustmath.github.io` repository. If publishing from a repository with another name, GitHub Pages uses a project URL instead, such as `https://tahatjustmath.github.io/TestBank/`.

In the repository's **Settings → Pages**, select **Deploy from a branch**, choose the `main` branch and `/ (root)`, then save. GitHub Pages serves `index.html` as the home page; no workflow or build command is required.

The site and question data are static. No backend or external font download is required. Question illustrations are stored under `assets/` and referenced with relative paths.

## Math notation

Inline and display LaTeX can be written with `\(...\)` and `\[...\]`. MathJax 3 is loaded from jsDelivr only when rendered lesson or question content includes one of these delimiters; older question content continues to use the built-in formatter.

Chapter 13 opens with a learning-objectives introduction and a right-triangle illustration, followed by eight sticky tabs: Guide, Prerequisites, Triangle Lab, Special Triangles, Guided Examples, Calculator Tips, Practice Problems, and Chapter Quiz. The Guide uses dark, objective-based cards to explain side identification, SOH–CAH–TOA, inverse trigonometry, missing-side formulas, and real-world applications. The other resources include an interactive reference-angle model, exact/decimal special-triangle ratios, a Pythagorean calculator, a radical simplifier, and a validated side-ratio calculator. The chapter quiz can generate a random, non-repeating selection of 10 or more questions from the existing bank, or run the full assessment. Worked examples and one-step-at-a-time solutions use questions from the existing bank. Practice-question triangle sides remain neutral until the submitted answer's solution is opened; there, the hypotenuse is blue, the opposite side is green, and the adjacent side is orange.

The home page is a subject catalog inspired by the attached course portal. It lists eight subject tracks and places the existing question banks under Technical Mathematics. Other subject tracks are marked as being prepared; their curriculum cards are not presented as active question banks.

Chapter banks use a shared navy, teal, and serif visual style. Each chapter page links back to the subject catalog instead of repeating the chapter-selection cards.

Chapter 13 also groups its practice objectives into expandable topic sections. Questions include a **Show hint** control before submission, while full worked solutions remain separate after an answer is submitted. Common trigonometric expressions, fractions, roots, Greek letters, and angle notation are formatted as LaTeX and rendered with MathJax when needed. Other chapter banks retain their existing layouts and quiz behavior.
