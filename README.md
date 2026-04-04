# Jesús Caballero Portfolio

Static professional portfolio for GitHub Pages and Live Server, focused on Industrial AI, Edge ML, predictive maintenance, and industrial analytics.

## Structure

```text
index.html
styles.css
script.js
assets/
  docs/
    CV_JesusCaballero_EN.pdf
    CV_JesusCaballero_ES.pdf
  icons/
    favicon.svg
docs/
  index.html
proyectos/
scripts/
```

`index.html` lives at the repository root so the site opens correctly with Live Server and standard static hosting.

## Local preview

### VS Code Live Server

1. Open the repository root in VS Code.
2. Right-click `index.html`.
3. Choose `Open with Live Server`.

### Simple local server

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. In GitHub, open `Settings > Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select the branch you want to publish from.
5. Select the `/ (root)` folder.
6. Save.

GitHub Pages will serve the site directly from the repository root with no build step.

## Content guardrails

- Keep employer-confidential details out of public project pages.
- Do not publish internal architecture, client names, screenshots, or proprietary diagrams.
- Only link projects, repos, demos, or documents that are genuinely public.
- Prefer generic descriptions for industrial production systems unless approval is explicit.
