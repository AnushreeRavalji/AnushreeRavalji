# For Binnie 🥂

A warm, personal photo gallery built as a birthday gift. Pure HTML, CSS, and a little JavaScript — no frameworks, no build step.

## Adding your photos (2 minutes, no coding)

1. Open the `photos` folder in this project.
2. Drop your pictures in there and rename them:
   - `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, … up to `photo60.jpg`
   - Any `.jpg` file with a matching number will show up automatically.
   - Don't have 60 photos? No problem — missing numbers are just skipped.
   - Have more than 60? Open `js/photos-data.js` and change the `60` to a bigger number.
3. Open `index.html` in your browser (just double-click it) to see your gallery.

That's it — no code editing required for the basic version.

### Optional: add captions or use PNG files

Open `js/photos-data.js`. At the bottom, you can add lines like:

```js
photoList.push({ src: "my-favorite.png", caption: "Aperol o'clock in Rome" });
```

`src` is the filename inside the `photos` folder, and `caption` is optional text shown under the photo when it's opened full-screen.

## Changing the title

Open `index.html` and edit these lines near the top of the `<body>`:

```html
<p class="eyebrow">🥂 Cheers to us, wherever we roam</p>
<h1 class="site-title">For Binnie</h1>
<p class="site-subtitle">Every trip, every spritz, every silly photo — all in one place.</p>
```

## Viewing it

Just open `index.html` in any browser — double-click the file, or drag it into a browser tab.

## Sharing it online (optional, free)

The easiest free option is **GitHub Pages**:

1. Push this project to a GitHub repository (already done if you're reading this from one!).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, pick your branch and the root folder, then save.
4. GitHub will give you a link like `https://yourname.github.io/your-repo/` — send that to your friend!

## What's inside

- `index.html` — the page structure
- `css/style.css` — the warm, Europe/Aperol-inspired styling and the masonry grid
- `js/photos-data.js` — the list of your photos (edit this to add captions)
- `js/main.js` — builds the gallery and powers the full-screen lightbox
- `photos/` — put your images here
