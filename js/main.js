(function () {
  "use strict";

  const gallery = document.getElementById("gallery");
  const emptyState = document.getElementById("empty-state");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxCounter = document.getElementById("lightbox-counter");
  const btnClose = document.getElementById("lightbox-close");
  const btnPrev = document.getElementById("lightbox-prev");
  const btnNext = document.getElementById("lightbox-next");

  let loadedPhotos = [];
  let currentIndex = 0;

  function fetchJson(url) {
    return fetch(url)
      .then((res) => (res.ok ? res.json() : null))
      .catch(() => null);
  }

  function buildGallery(photos) {
    loadedPhotos = photos;

    if (photos.length === 0) {
      emptyState.hidden = false;
      return;
    }

    const fragment = document.createDocumentFragment();

    photos.forEach((photo, index) => {
      const item = document.createElement("div");
      item.className = "photo-item";
      item.tabIndex = 0;
      item.setAttribute("role", "button");
      item.setAttribute("aria-label", photo.caption || `Open photo ${index + 1}`);

      const img = document.createElement("img");
      img.src = `photos/${photo.src}`;
      img.alt = photo.caption || `Memory ${index + 1}`;
      img.loading = "lazy";
      img.decoding = "async";

      item.appendChild(img);
      item.addEventListener("click", () => openLightbox(index));
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(index);
        }
      });

      fragment.appendChild(item);
    });

    gallery.appendChild(fragment);
    observeFadeIn();
  }

  function observeFadeIn() {
    const items = document.querySelectorAll(".photo-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((item) => observer.observe(item));
  }

  // ---------- Lightbox ----------
  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const photo = loadedPhotos[currentIndex];
    lightboxImg.src = `photos/${photo.src}`;
    lightboxImg.alt = photo.caption || `Memory ${currentIndex + 1}`;
    lightboxCaption.textContent = photo.caption || "";
    lightboxCounter.textContent = `${currentIndex + 1} / ${loadedPhotos.length}`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % loadedPhotos.length;
    updateLightbox();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + loadedPhotos.length) % loadedPhotos.length;
    updateLightbox();
  }

  btnClose.addEventListener("click", closeLightbox);
  btnNext.addEventListener("click", showNext);
  btnPrev.addEventListener("click", showPrev);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  // Swipe support for touch devices
  let touchStartX = 0;
  lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  lightbox.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const delta = touchEndX - touchStartX;
    if (Math.abs(delta) > 50) {
      delta < 0 ? showNext() : showPrev();
    }
  });

  // ---------- Init ----------
  // photos/manifest.json is generated automatically (see the GitHub Action)
  // whenever you add or remove files in the "photos" folder.
  // photos/captions.json is optional and hand-edited: { "filename.jpg": "caption" }
  Promise.all([
    fetchJson("photos/manifest.json"),
    fetchJson("photos/captions.json"),
  ]).then(([filenames, captions]) => {
    const files = Array.isArray(filenames) ? filenames : [];
    const captionMap = captions || {};
    const photos = files.map((src) => ({ src, caption: captionMap[src] || "" }));
    buildGallery(photos);
  });
})();
