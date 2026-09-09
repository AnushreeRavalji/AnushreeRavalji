# For Binnie 🥂

A warm, personal photo gallery built as a birthday gift. Pure HTML, CSS, and a little JavaScript — no frameworks, no build step.

## Adding your photos (the easy way)

You do **not** need to rename your photos or edit any code.

1. On GitHub, open the `photos` folder in this repository.
2. Click **Add file → Upload files**, drag in your pictures (any filenames are fine — `IMG_1234.jpeg` works exactly as well as anything else), and commit.
3. Wait about 30 seconds. A small automated step (see "How it works" below) updates the gallery's photo list for you.
4. Refresh your site — your new photos are there, newest additions included.

Supported file types: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`.

### Optional: add captions

Create a file named `photos/captions.json` (via "Add file → Create new file" on GitHub) that maps a filename to a caption, for example:

```json
{
  "IMG_2912.jpeg": "Aperol o'clock in Rome",
  "IMG_3026.jpeg": "Venice, 2 a.m."
}
```

Captions are optional — any photo without an entry just shows with no caption. This file is entirely yours to edit; nothing auto-generates it.

## How it works

Browsers can't list a folder's contents on their own, so a GitHub Action (`.github/workflows/update-photo-manifest.yml`) watches the `photos` folder. Every time you add, remove, or rename a photo, it automatically regenerates `photos/manifest.json` — the file the gallery actually reads to know what to show, in order. You never need to open or edit that file yourself.

## Changing the title

Open `index.html` and edit these lines near the top of the `<body>`:

```html
<p class="eyebrow">🥂 Cheers to us, wherever we roam</p>
<h1 class="site-title">For Binnie</h1>
<p class="site-subtitle">Every trip, every spritz, every silly photo — all in one place.</p>
```

## Viewing it locally

Because the gallery loads `manifest.json` over the network, most browsers won't show photos if you just double-click `index.html`. Instead, run a tiny local server from this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. (This step is optional — viewing your published GitHub Pages link works without it.)

## Sharing it online (free)

If you haven't already, enable **GitHub Pages** for this repository:

1. Go to **Settings → Pages**.
2. Under "Build and deployment", choose **Deploy from a branch**, pick this branch and the root folder, then save.
3. GitHub gives you a link like `https://yourname.github.io/your-repo/` — send that to your friend!

## What's inside

- `index.html` — the page structure
- `css/style.css` — the warm, Europe/Aperol-inspired styling and the masonry grid
- `js/main.js` — builds the gallery from `photos/manifest.json` and powers the full-screen lightbox
- `photos/` — your images live here; `manifest.json` is auto-generated, `captions.json` is optional and hand-edited
- `.github/workflows/update-photo-manifest.yml` — regenerates the photo list automatically
