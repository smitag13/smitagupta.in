const galleryCards = Array.from(document.querySelectorAll("[data-gallery-index]"));
const viewer = document.querySelector("[data-gallery-viewer]");
const fullImage = document.querySelector("[data-gallery-full]");
const caption = document.querySelector("[data-gallery-caption]");
const thumbs = document.querySelector("[data-gallery-thumbs]");
const closeButton = document.querySelector("[data-gallery-close]");
const strip = document.querySelector("[data-gallery-strip]");
const stripPrev = document.querySelector("[data-gallery-prev]");
const stripNext = document.querySelector("[data-gallery-next]");

if (galleryCards.length && viewer && fullImage && caption && thumbs && closeButton && strip) {
  let activeIndex = 0;

  const photos = galleryCards.map((card) => {
    const image = card.querySelector("img");
    const text = card.querySelector("span");

    return {
      alt: image?.alt || "",
      caption: text?.textContent || "",
      src: image?.currentSrc || image?.src || "",
    };
  });

  const renderThumbs = () => {
    thumbs.innerHTML = "";

    photos.forEach((photo, index) => {
      const button = document.createElement("button");
      const image = document.createElement("img");

      button.type = "button";
      button.className = index === activeIndex ? "is-active" : "";
      button.setAttribute("aria-label", `View photo: ${photo.caption}`);
      image.src = photo.src;
      image.alt = "";

      button.append(image);
      button.addEventListener("click", () => setActivePhoto(index));
      thumbs.append(button);
    });
  };

  const setActivePhoto = (index) => {
    activeIndex = index;
    const photo = photos[activeIndex];

    fullImage.src = photo.src;
    fullImage.alt = photo.alt;
    caption.textContent = photo.caption;
    renderThumbs();
  };

  const openViewer = (index) => {
    setActivePhoto(index);
    viewer.hidden = false;
    document.body.classList.add("gallery-open");
    closeButton.focus();
  };

  const closeViewer = () => {
    viewer.hidden = true;
    document.body.classList.remove("gallery-open");
    galleryCards[activeIndex]?.focus();
  };

  document.addEventListener("click", (event) => {
    const card = event.target.closest("[data-gallery-index]");

    if (!card || !strip.contains(card)) {
      return;
    }

    openViewer(galleryCards.indexOf(card));
  });

  closeButton.addEventListener("click", closeViewer);

  const scrollStrip = (direction) => {
    const cardWidth = galleryCards[0]?.getBoundingClientRect().width || 260;
    strip.scrollBy({
      left: direction * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  stripPrev?.addEventListener("click", () => scrollStrip(-1));
  stripNext?.addEventListener("click", () => scrollStrip(1));

  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
      closeViewer();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (viewer.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeViewer();
    }

    if (event.key === "ArrowRight") {
      setActivePhoto((activeIndex + 1) % photos.length);
    }

    if (event.key === "ArrowLeft") {
      setActivePhoto((activeIndex - 1 + photos.length) % photos.length);
    }
  });
}
