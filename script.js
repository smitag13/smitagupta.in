const PHOTOS = [
  { src: "smita-field-hero.png", alt: "Smita Gupta working with people in the field", caption: "First users of AI chatbots in early 2023. Training visit to Mewat, Haryana." },
  { src: "gallery-extra-01.jpg", alt: "Smita Gupta gallery photo 1", caption: "Kochi 2022. Organised an AI + Justice Hackathon. Photo with sitting judges of the High Court of Kerala." },
  { src: "gallery-extra-02.jpg", alt: "Smita Gupta gallery photo 2", caption: "Presented Jugalbandi to former PM Sheikh Hasina of Bangladesh at the G20 Summit." },
  { src: "gallery-extra-03.jpg", alt: "Smita Gupta gallery photo 3", caption: "OpenNyAI Maker Residency on Grievance Redressal in collaboration with the Government of India, World Bank, and social-sector organisations." },
  { src: "gallery-extra-04.jpg", alt: "Smita Gupta gallery photo 4", caption: "At the Tech for Humanity Summit by Ashoka, in Bilbao, Spain." },
  { src: "gallery-extra-05.jpg", alt: "Smita Gupta gallery photo 5", caption: "With the course directors at the graduation ceremony, University of Queensland." },
  { src: "gallery-extra-06.jpg", alt: "Smita Gupta gallery photo 6", caption: "On the panel of the National Seminar on AI, Justice Systems and Education organised by VMLS, Jindal & CAM." },
  { src: "gallery-extra-07.jpg", alt: "Smita Gupta gallery photo 7", caption: "Presenting Jugalbandi to Satya Nadella in Mumbai. With Sameer Segal of Microsoft Research." },
  { src: "gallery-extra-08.jpg", alt: "Smita Gupta gallery photo 8", caption: "First field study on the usage of AI chatbots in the villages of Haryana." },
  { src: "gallery-extra-09.jpg", alt: "Smita Gupta gallery photo 9", caption: "With the OpenNyAI team (Agami + Thoughtworks) at the Kochi Maker Residency, in TinkerHub." },
  { src: "gallery-extra-10.jpg", alt: "Smita Gupta gallery photo 10", caption: "At the launch of the KHOJ project by HMJ Chandrachud with Prof. Rangin Tripathy of NLUO and Supriya Sankaran, Co-Founder, Agami." },
  { src: "gallery-extra-11.jpg", alt: "Smita Gupta gallery photo 11", caption: "With some of my Agamishaala community." },
  { src: "gallery-extra-13.png", alt: "Smita Gupta gallery photo 13", caption: "Presenting to the global Microsoft team on how to take the partnership forward to reach millions of citizens." },
  { src: "gallery-extra-14.jpg", alt: "Smita Gupta gallery photo 14", caption: "With co-conspirators of Microsoft and Thoughtworks in the early days of building Jugalbandi. Sometimes the only woman in the room." },
  { src: "gallery-extra-15.jpg", alt: "Smita Gupta gallery photo 15", caption: "OpenNyAI Make-a-thon. Cooking up solutions for Thailand's migrant workers populace and their legal rights." },
  { src: "gallery-extra-17.jpg", alt: "Smita Gupta gallery photo 17", caption: "Delivering a guest lecture at NLS, Bangalore." },
  { src: "gallery-extra-18.jpg", alt: "Smita Gupta presenting at the India AI Impact Summit 2026", caption: "Presented at the launch of the Meta Open Loop Program Report on Innovation, Effective Anonymization & the DPDP Act, launched at the India AI Impact Summit 2026." },
];

const WORK_ITEMS = [
  { logo: "logo-jhana.png", name: "jhana.ai", role: "Director, GovTech and Public Sector", text: "Deployed applied AI across courts, delivering 30× faster filing scrutiny at Egmore Commercial Court and 15-minute judicial dashboards at Karnataka High Court. Led business process reengineering (BPR) at Sikkim and Gujarat High Courts as Technical Product Manager.", href: "https://jhana.ai/" },
  { logo: "logo-agami.png", name: "Agami", role: "Curator, Legal AI Ecosystem", text: "Built India's largest Legal AI innovator community through events like the AI Maker Residency, tackling issues from Grievance Redressal to AI in courtrooms, alongside initiatives like Agamishaala and Data for Justice. Within Agami, co-led two flagship programs:", href: "https://www.agami.in/", highlights: [
    { name: "OpenNyAI", href: "https://opennyai.org/", text: "Co-led development of reference AI solutions and open-source legal NLP models, including JIVA, a judges' assistant that increased daily case throughput by 30%, and a SemEval 2023 benchmark-setting model built with Thoughtworks." },
    { name: "Jugalbandi", href: "https://opennyai.org/dpg/jugalbandi", text: "The first GenAI app to offer a voice-to-voice interface in Indian languages for legal information and government schemes. Led to a multi-year Microsoft collaboration, featured in Satya Nadella's Microsoft Build keynote." },
  ] },
];

const ENTRIES = [
  { tag: "Chapter", text: "Contributed a chapter to 'Technological Innovations in Law' - a book organised by Judge Anderson de Paiva Gabriel of the Court of Justice of Rio de Janeiro, Brazil.", type: "writing", href: "https://www.linkedin.com/posts/smita-gupta13_responsible-ugcPost-7205962993363300352-t8m2/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB32lcYBvIvuyqMJnvCQ1T500lMiWFspdvY" },
  { tag: "Training", text: "Trained judges from across India, Bhutan, Maldives, Nepal and Sri Lanka on AI DPGs and DPIs in Judiciary, in collaboration with UNESCO and CCG NLUD.", type: "talks", href: "https://www.linkedin.com/posts/smita-gupta13_i-am-rejuvenated-after-todays-session-and-ugcPost-7259951203831160832-1lo7/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB32lcYBvIvuyqMJnvCQ1T500lMiWFspdvY" },
  { tag: "Essay", text: "H Baruchel & S Gupta, 'Why We Need More Social Entrepreneurs Shaping AI', Ashoka Medium, 2024.", type: "writing", href: "https://medium.com/change-maker/why-we-need-more-social-entrepreneurs-shaping-ai-d50a330fd3eb" },
  { tag: "Guest lecture", text: "Delivered a guest lecture to LLB and LLM students at the National Law School of India University, Bengaluru, as part of an elective course on \"AI, Ethics & Law\".", type: "talks" },
  { tag: "Training", text: "Conducted a training session on Leveraging AI for Justice for 200+ Indian Administrative Service officers, 2023.", type: "talks", href: "https://www.linkedin.com/posts/smita-gupta13_excited-to-share-that-i-had-the-distinct-ugcPost-7129378696943050752-1arf/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB32lcYBvIvuyqMJnvCQ1T500lMiWFspdvY" },
  { tag: "Presentation", text: "Presented Jugalbandi at the G20 Summit, September 2023, to heads of state, foreign and Indian ministerial delegates, and 50+ foreign and Indian media houses.", type: "talks" },
  { tag: "Essay", text: "S Gupta, S Karn (2022), \"Open AI for Justice\", Digital Debates: Observer Research Foundation CyFy Journal.", type: "writing", href: "https://www.orfonline.org/public/uploads/posts/pdf/20230424101500.pdf" },
  { tag: "Research", text: "P Kalamkar, S Gupta et al. (2022), \"Named Entity Recognition in Indian Court Judgments\".", type: "writing", href: "https://arxiv.org/abs/2211.03442" },
  { tag: "Conference", text: "Tiwari, S Gupta et al. (2022), \"Corpus for Automatic Structuring of Legal Documents\", LREC Conference.", type: "writing", href: "https://arxiv.org/abs/2201.13125" },
  { tag: "Article", text: "Rangin Tripathy, Smita Gupta, et al. (2022), \"Who Gets to be a High Court Chief Justice in India?\", Scroll.in.", type: "writing", href: "https://scroll.in/article/1033443/who-gets-to-be-a-high-court-chief-justice-in-india" },
  { tag: "Conference", text: "Presented at the 3rd Artificial Intelligence for Information Accessibility Conference, hosted by UNESCO, 2022.", type: "talks", href: "https://www.linkedin.com/posts/smita-gupta13_ai-law-digitalpublicgoods-share-6980833030223384576-TqKa/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB32lcYBvIvuyqMJnvCQ1T500lMiWFspdvY" },
  { tag: "Forum", text: "Represented India at the QUAD Critical and Emerging Technologies Forum, Japan, August 2024.", type: "recognition" },
  { tag: "Network", text: "Ambassador of the Global Acceptance Network / Ayra, 2024-present.", type: "recognition" },
  { tag: "Agamishaala", text: "Selected as the youngest participant at Agamishaala 2022, a justice leadership program with former judges, bureaucrats, professors, lawyers, and entrepreneurs.", type: "recognition" },
];

const FILTER_LABELS = { all: "All", writing: "Publications", talks: "Talks & Training", recognition: "Recognition" };

let activeIndex = 0;
let hoverLocked = false;
let writingFilter = "all";

function renderWork() {
  const list = document.getElementById("work-list");
  list.innerHTML = WORK_ITEMS.map(w => `
    <div class="work-item">
      <div class="logo-wrap">
        ${w.href ? `<a href="${w.href}" target="_blank" rel="noopener"><img src="${w.logo}" alt="${w.name}"></a>` : `<img src="${w.logo}" alt="${w.name}">`}
      </div>
      <div class="body">
        <div class="role">${w.role}</div>
        <p class="text">${w.text}</p>
        ${w.highlights ? `<div class="work-highlights">${w.highlights.map(h => `
          <p><a href="${h.href}" target="_blank" rel="noopener">${h.name}</a><span class="lead"> — </span>${h.text}</p>
        `).join("")}</div>` : ""}
      </div>
    </div>
  `).join("");
}

function renderGallery() {
  const photo = PHOTOS[activeIndex];
  document.getElementById("main-photo").src = photo.src;
  document.getElementById("main-photo").alt = photo.alt;
  document.getElementById("main-caption").textContent = photo.caption;
  document.getElementById("mobile-photo").src = photo.src;
  document.getElementById("mobile-photo").alt = photo.alt;
  document.getElementById("mobile-caption").textContent = photo.caption;

  const thumbs = document.getElementById("thumbs");
  if (!thumbs.children.length) {
    thumbs.innerHTML = PHOTOS.map((p, i) => `<button type="button" data-i="${i}"><img src="${p.src}" alt=""></button>`).join("");
    thumbs.querySelectorAll("button").forEach(btn => {
      const i = Number(btn.dataset.i);
      btn.addEventListener("mouseenter", () => { if (!hoverLocked) { activeIndex = i; renderGallery(); } });
      btn.addEventListener("click", () => { activeIndex = i; hoverLocked = true; renderGallery(); });
    });
  }
  thumbs.querySelectorAll("button").forEach((btn, i) => btn.classList.toggle("active", i === activeIndex));

  const dots = document.getElementById("mobile-dots");
  if (!dots.children.length) {
    dots.innerHTML = PHOTOS.map(() => `<div></div>`).join("");
  }
  dots.querySelectorAll("div").forEach((d, i) => d.classList.toggle("active", i === activeIndex));
}

function nextPhoto() { activeIndex = (activeIndex + 1) % PHOTOS.length; renderGallery(); }
function prevPhoto() { activeIndex = (activeIndex - 1 + PHOTOS.length) % PHOTOS.length; renderGallery(); }

function renderWriting() {
  const filters = document.getElementById("filters");
  filters.innerHTML = ["writing", "talks", "recognition"].map(f =>
    `<button type="button" data-f="${f}" class="${writingFilter === f ? "active" : ""}">${FILTER_LABELS[f]}</button>`
  ).join("");
  filters.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => { writingFilter = btn.dataset.f; renderWriting(); });
  });

  const filtered = writingFilter === "all" ? ENTRIES : ENTRIES.filter(e => e.type === writingFilter);
  document.getElementById("writing-list").innerHTML = filtered.map(e => `
    <div class="entry">
      <span class="tag">${e.tag} — </span>
      ${e.href ? `<a href="${e.href}" target="_blank" rel="noopener">${e.text}</a>` : e.text}
    </div>
  `).join("");
}

document.getElementById("menu-toggle").addEventListener("click", () => {
  const nav = document.getElementById("mobile-nav");
  const open = nav.classList.toggle("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#mobile-nav a").forEach(a => a.addEventListener("click", () => {
  document.getElementById("mobile-nav").classList.remove("open");
}));

document.querySelectorAll(".photo-nav-btn.prev, #gallery-mobile .tap-zone.prev").forEach(b => b.addEventListener("click", () => { prevPhoto(); hoverLocked = true; }));
document.querySelectorAll(".photo-nav-btn.next, #gallery-mobile .tap-zone.next").forEach(b => b.addEventListener("click", () => { nextPhoto(); hoverLocked = true; }));

window.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") { nextPhoto(); hoverLocked = true; }
  if (e.key === "ArrowLeft") { prevPhoto(); hoverLocked = true; }
});

document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("form-name").value;
  const email = document.getElementById("form-email").value;
  const message = document.getElementById("form-message").value;
  const to = ["gupta", "smita13"].join("") + "@" + ["gmail", "com"].join(".");
  const subject = encodeURIComponent("Portfolio contact from " + name);
  const body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
  window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
  document.getElementById("contact-form").style.display = "none";
  document.getElementById("contact-thanks").style.display = "block";
});

renderWork();
renderGallery();
renderWriting();
