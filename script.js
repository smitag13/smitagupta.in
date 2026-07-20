// Mobile nav
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");
menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});
mobileNav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

// Writing filters
const filterButtons = document.querySelectorAll("[data-filter]");
const listRows = document.querySelectorAll("[data-entry-type]");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const type = btn.dataset.filter;
    listRows.forEach((row) => {
      row.style.display = type === "all" || row.dataset.entryType === type ? "" : "none";
    });
  });
});

// Photo strip scroll
const strip = document.querySelector("[data-gallery-strip]");
document.querySelector("[data-gallery-prev]").addEventListener("click", () => strip.scrollBy({ left: -276, behavior: "smooth" }));
document.querySelector("[data-gallery-next]").addEventListener("click", () => strip.scrollBy({ left: 276, behavior: "smooth" }));

// Gallery viewer
const galleryCards = Array.from(document.querySelectorAll("[data-gallery-index]"));
const viewer = document.querySelector("[data-gallery-viewer]");
const fullImage = document.querySelector("[data-gallery-full]");
const caption = document.querySelector("[data-gallery-caption]");
const thumbs = document.querySelector("[data-gallery-thumbs]");
const closeButton = document.querySelector("[data-gallery-close]");

let activeIndex = 0;
const photos = galleryCards.map((card) => {
  const img = card.querySelector("img");
  const span = card.querySelector("span");
  return { alt: img?.alt || "", caption: span?.textContent || "", src: img?.src || "" };
});

function renderThumbs() {
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
}

function setActivePhoto(index) {
  activeIndex = index;
  const photo = photos[activeIndex];
  fullImage.src = photo.src;
  fullImage.alt = photo.alt;
  caption.textContent = photo.caption;
  renderThumbs();
}

function openViewer(index) {
  setActivePhoto(index);
  viewer.hidden = false;
  document.body.classList.add("gallery-open");
  closeButton.focus();
}

function closeViewer() {
  viewer.hidden = true;
  document.body.classList.remove("gallery-open");
  galleryCards[activeIndex]?.focus();
}

galleryCards.forEach((card, i) => card.addEventListener("click", () => openViewer(i)));
closeButton.addEventListener("click", closeViewer);
viewer.addEventListener("click", (e) => { if (e.target === viewer) closeViewer(); });
document.addEventListener("keydown", (e) => {
  if (viewer.hidden) return;
  if (e.key === "Escape") closeViewer();
  if (e.key === "ArrowRight") setActivePhoto((activeIndex + 1) % photos.length);
  if (e.key === "ArrowLeft") setActivePhoto((activeIndex - 1 + photos.length) % photos.length);
});
