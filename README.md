# IRIS Lab homepage (UNIST)

Static site for GitHub Pages. No build step: open `index.html` or serve the folder.

## Deploy on GitHub Pages
1. Create a repository (for example `iris-unist.github.io` for a root site, or any name for a project site).
2. Upload everything in this folder to the repository root, including the hidden `.nojekyll` file.
3. In the repository, go to **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. The site appears at `https://<account>.github.io/` (or `/<repo>/`) in a minute or two.

To preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000.

## Structure
- `index.html` – page shell (header, footer). Pages are drawn by JavaScript with hash links: `#research`, `#topic-<name>`, `#people`, `#news`, `#publications`, `#join`.
- `css/style.css` – all styles.
- `js/app.js` – text and data plus the page code. Search for these names to edit content:
  - `const S =` / `const S3 =` – interface text in Korean (`ko`), English (`en`) and Chinese (`zh`).
  - `const TOPICS =` – the 9 research topics (names, short descriptions).
  - `const TV =` – long topic pages (overview cards, representative works, publication ids).
  - `const GROUPS =` / `const ALUMNI =` – members and former members. `const KONAME =` – Korean names.
  - `const NEWPUBS =` – all publications: `[id, year, authors, title, journal, volume, link (DOI), topics, first-page image]`.
  - `const NEWS =` – Lab news posts (currently examples).
  - `const PI =` – professor's education and career.
- `assets/img/` – all images (file names are content hashes; they are referenced from `js/app.js`).

## Notes
- Fonts load from Google Fonts. Earth imagery: NASA (public domain).
- The language choice is remembered in the browser (localStorage).
