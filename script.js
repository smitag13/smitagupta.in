// Mobile nav
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");
menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mobileNav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Writing filters
const filterButtons = document.querySelectorAll("[data-filter]");
const listRows = document.querySelectorAll("[data-entry-type]");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isActive = btn.classList.contains("is-active");
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    if (isActive) {
      listRows.forEach((row) => { row.style.display = ""; });
      return;
    }
    btn.classList.add("is-active");
    const type = btn.dataset.filter;
    listRows.forEach((row) => {
      row.style.display = row.dataset.entryType === type ? "" : "none";
    });
  });
});

// Photos data (from the gallery markup order)
const PHOTOS = [
  { src: "assets/smita-field-hero.png", alt: "Smita Gupta working with people in the field", caption: "First users of AI chatbots in early 2023. Training visit to Mewat, Haryana." },
  { src: "assets/gallery-extra-01.jpg", alt: "Smita Gupta gallery photo 1", caption: "Kochi 2022. Organised an AI + Justice Hackathon. Photo with sitting judges of the High Court of Kerala." },
  { src: "assets/gallery-extra-02.jpg", alt: "Smita Gupta gallery photo 2", caption: "Presented Jugalbandi to former PM Sheikh Hasina of Bangladesh at the G20 Summit." },
  { src: "assets/gallery-extra-03.jpg", alt: "Smita Gupta gallery photo 3", caption: "OpenNyAI Maker Residency on Grievance Redressal in collaboration with the Government of India, World Bank, and social-sector organisations." },
  { src: "assets/gallery-extra-04.jpg", alt: "Smita Gupta gallery photo 4", caption: "At the Tech for Humanity Summit by Ashoka, in Bilbao, Spain." },
  { src: "assets/gallery-extra-05.jpg", alt: "Smita Gupta gallery photo 5", caption: "With the course directors at the graduation ceremony, University of Queensland." },
  { src: "assets/gallery-extra-06.jpg", alt: "Smita Gupta gallery photo 6", caption: "On the panel of the National Seminar on AI, Justice Systems and Education organised by VMLS, Jindal & CAM." },
  { src: "assets/gallery-extra-07.jpg", alt: "Smita Gupta gallery photo 7", caption: "Presenting Jugalbandi to Satya Nadella in Mumbai. With Sameer Segal of Microsoft Research." },
  { src: "assets/gallery-extra-08.jpg", alt: "Smita Gupta gallery photo 8", caption: "First field study on the usage of AI chatbots in the villages of Haryana." },
  { src: "assets/gallery-extra-09.jpg", alt: "Smita Gupta gallery photo 9", caption: "With the OpenNyAI team (Agami + Thoughtworks) at the Kochi Maker Residency, in TinkerHub." },
  { src: "assets/gallery-extra-10.jpg", alt: "Smita Gupta gallery photo 10", caption: "At the launch of the KHOJ project by HMJ Chandrachud with Prof. Rangin Tripathy of NLUO and Supriya Sankaran, Co-Founder, Agami." },
  { src: "assets/gallery-extra-11.jpg", alt: "Smita Gupta gallery photo 11", caption: "With some of my Agamishaala community." },
  { src: "assets/gallery-extra-13.png", alt: "Smita Gupta gallery photo 13", caption: "Presenting to the global Microsoft team on how to take the partnership forward to reach millions of citizens." },
  { src: "assets/gallery-extra-14.jpg", alt: "Smita Gupta gallery photo 14", caption: "With co-conspirators of Microsoft and Thoughtworks in the early days of building Jugalbandi. Sometimes the only woman in the room." },
  { src: "assets/gallery-extra-15.jpg", alt: "Smita Gupta gallery photo 15", caption: "OpenNyAI Make-a-thon. Cooking up solutions for Thailand's migrant workers populace and their legal rights." },
  { src: "assets/gallery-extra-17.jpg", alt: "Smita Gupta gallery photo 17", caption: "Delivering a guest lecture at NLS, Bangalore." },
  { src: "assets/gallery-extra-18.jpg", alt: "Smita Gupta presenting at the India AI Impact Summit 2026", caption: "Presented at the launch of the Meta Open Loop Program Report on Innovation, Effective Anonymization & the DPDP Act, launched at the India AI Impact Summit 2026." },
];

let activeIndex = 0;
let hoverLocked = false;

// Desktop hover-scrub
const heroImg = document.querySelector("[data-hero-img]");
const heroCaption = document.querySelector("[data-hero-caption]");
const thumbRow = document.querySelector("[data-thumb-row]");
const heroPrev = document.querySelector("[data-hero-prev]");
const heroNext = document.querySelector("[data-hero-next]");

// Mobile story swipe
const storyImg = document.querySelector("[data-story-img]");
const storyCaption = document.querySelector("[data-story-caption]");
const storyDots = document.querySelector("[data-story-dots]");
const storyPrev = document.querySelector("[data-story-prev]");
const storyNext = document.querySelector("[data-story-next]");

function renderThumbs() {
  thumbRow.innerHTML = "";
  PHOTOS.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = i === activeIndex ? "is-active" : "";
    const img = document.createElement("img");
    img.src = p.src;
    img.alt = "";
    btn.append(img);
    btn.addEventListener("mouseenter", () => { if (!hoverLocked) setActive(i); });
    btn.addEventListener("click", () => { setActive(i); hoverLocked = true; });
    thumbRow.append(btn);
  });
}

function renderDots() {
  storyDots.innerHTML = "";
  PHOTOS.forEach((p, i) => {
    const dot = document.createElement("span");
    dot.className = i === activeIndex ? "is-active" : "";
    storyDots.append(dot);
  });
}

function setActive(i) {
  activeIndex = i;
  const p = PHOTOS[activeIndex];
  heroImg.src = p.src; heroImg.alt = p.alt;
  heroCaption.textContent = p.caption;
  storyImg.src = p.src; storyImg.alt = p.alt;
  storyCaption.textContent = p.caption;
  renderThumbs();
  renderDots();
}

heroPrev.addEventListener("click", () => { setActive((activeIndex - 1 + PHOTOS.length) % PHOTOS.length); hoverLocked = true; });
heroNext.addEventListener("click", () => { setActive((activeIndex + 1) % PHOTOS.length); hoverLocked = true; });
storyPrev.addEventListener("click", () => setActive((activeIndex - 1 + PHOTOS.length) % PHOTOS.length));
storyNext.addEventListener("click", () => setActive((activeIndex + 1) % PHOTOS.length));

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") { setActive((activeIndex + 1) % PHOTOS.length); hoverLocked = true; }
  if (e.key === "ArrowLeft") { setActive((activeIndex - 1 + PHOTOS.length) % PHOTOS.length); hoverLocked = true; }
});

setActive(0);
