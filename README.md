# Tahat Just Math

A lightweight, static mathematics question bank. The site uses plain HTML, CSS, and JavaScript, with no build step, framework, or server-side dependencies.

## Run locally

Open `index.html` in a browser. Chapter banks are selected with the `chapter` query parameter; for example, `index.html?chapter=4`.

## Publish on GitHub Pages

To publish at `https://tahatjustmath.github.io/`, the files in this folder must be in the root of the `tahatjustmath.github.io` repository. If publishing from a repository with another name, GitHub Pages uses a project URL instead, such as `https://tahatjustmath.github.io/TestBank/`.

In the repository's **Settings → Pages**, select **Deploy from a branch**, choose the `main` branch and `/ (root)`, then save. GitHub Pages serves `index.html` as the home page; no workflow or build command is required.

The site and question data are static. No backend or external font download is required. Question illustrations are stored under `assets/` and referenced with relative paths.

## Math notation

Inline and display LaTeX can be written with `\(...\)` and `\[...\]`. MathJax 3 is loaded from jsDelivr only when rendered lesson or question content includes one of these delimiters; older question content continues to use the built-in formatter.

Chapter 13 includes a learning guide with concept/worked-example tabs, a prerequisite refresher, and one-step-at-a-time solutions drawn from the existing question bank. Its right-triangle diagrams and solution text use blue for the hypotenuse, green for the opposite side, and orange for the adjacent side. A sticky contents bar links the guide, prerequisites, practice objectives, and assessment.

Chapter 13 also groups its practice objectives into expandable topic sections. Questions include a **Show hint** control before submission, while full worked solutions remain separate after an answer is submitted. Common trigonometric expressions, fractions, roots, Greek letters, and angle notation are formatted as LaTeX and rendered with MathJax when needed. Other chapter banks retain their existing layouts and quiz behavior.
