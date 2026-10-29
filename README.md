# Tahat Just Math

A lightweight, static mathematics question bank. The site uses plain HTML, CSS, and JavaScript, with no build step, framework, or server-side dependencies.

## Run locally

Open `index.html` in a browser. Chapter banks are selected with the `chapter` query parameter; for example, `index.html?chapter=4`.

## Publish on GitHub Pages

To publish at `https://tahatjustmath.github.io/`, the files in this folder must be in the root of the `tahatjustmath.github.io` repository. If publishing from a repository with another name, GitHub Pages uses a project URL instead, such as `https://tahatjustmath.github.io/TestBank/`.

In the repository's **Settings → Pages**, select **Deploy from a branch**, choose the `main` branch and `/ (root)`, then save. GitHub Pages serves `index.html` as the home page; no workflow or build command is required.

The site and question data are static. No backend or external font download is required. Question illustrations are stored under `assets/` and referenced with relative paths.

## Math notation

Inline and display LaTeX can be written with `\(...\)` and `\[...\]`. MathJax 3 is loaded from jsDelivr only when a question contains one of these delimiters; older question content continues to use the built-in formatter.
