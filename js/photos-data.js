/*
  HOW TO ADD YOUR PHOTOS (no coding needed!)
  --------------------------------------------
  1. Put your photo files inside the "photos" folder.
  2. Name them exactly: photo1.jpg, photo2.jpg, photo3.jpg ... and so on.
     - Only .jpg files are picked up by default. If a number is missing
       (e.g. you only have 32 photos), that's totally fine — it's just skipped.
  3. Refresh the page. That's it!

  Want to add a caption under a photo, or use a .png/.jpeg file?
  Just edit the list below — each line is one photo:

    { src: "photo1.jpg", caption: "Venice, 2023" },

  You can add as many lines as you want (the list below already goes up to 60).
*/

const photoList = [];
for (let i = 1; i <= 60; i++) {
  photoList.push({ src: `photo${i}.jpg`, caption: "" });
}

// Add extra/custom entries (different extensions, special captions) below:
// photoList.push({ src: "my-favorite.png", caption: "Aperol o'clock in Rome" });
