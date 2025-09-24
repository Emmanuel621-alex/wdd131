/* ================================
   IronFlow Plumbing Script
   ================================ */

/* ---------- Dynamic Year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Mobile Nav Toggle ---------- */
const mobileToggle = document.getElementById("mobile-toggle");
const primaryMenu = document.getElementById("primary-menu");

if (mobileToggle && primaryMenu) {
  mobileToggle.addEventListener("click", () => {
    const expanded = mobileToggle.getAttribute("aria-expanded") === "true";
    mobileToggle.setAttribute("aria-expanded", !expanded);
    primaryMenu.classList.toggle("open");
  });
}

/* ---------- Data: Services & Projects ---------- */
const SERVICE_LIST = [
  { 
    id: "install", 
    title: "Industrial Installations", 
    desc: "Turnkey piping and system commissioning for large plants.", 
    img: "https://www.shutterstock.com/shutterstock/photos/2203830463/display_1500/stock-vector-plumbing-services-isolated-concept-vector-illustration-set-installing-plumbing-fixtures-sinks-and-2203830463.jpg" 
  },
  { 
    id: "drainage", 
    title: "Pipe & Drainage Systems", 
    desc: "Stormwater, sewer and process drainage engineered for capacity.", 
    img: "https://www.gilliesgroup.com.au/wp-content/uploads/2016/08/a21fddc8-d259-44a5-b84a-e0999815ceb5.jpg" 
  },
  { 
    id: "pumps", 
    title: "Pumps & Water Systems", 
    desc: "Booster stations, redundancy and monitoring for 24/7 uptime.", 
    img: "https://tse1.mm.bing.net/th/id/OIP.lqfCVJZ2sioT5tRVDYT2pQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" 
  },
  { 
    id: "emergency", 
    title: "Emergency Repairs", 
    desc: "Rapid response for critical failures and system outages.", 
    img: "https://miro.medium.com/v2/resize:fit:1120/1*lpGlIx6ldsSKqBO9sJYZpg.jpeg" 
  },
  { 
    id: "audit", 
    title: "System Audit & Consulting", 
    desc: "Site audits, compliance checks and preventative planning.", 
    img: "https://tse4.mm.bing.net/th/id/OIP.WE765P7Tw59mSbxV0YlCgQHaDD?rs=1&pid=ImgDetMain&o=7&rm=3" 
  },
  { 
    id: "maintenance", 
    title: "Planned Maintenance", 
    desc: "Scheduled inspections and upkeep contracts.", 
    img: "https://tse3.mm.bing.net/th/id/OIP.wxT-CNDxFNLt5Xyv6y5KoAHaFG?rs=1&pid=ImgDetMain&o=7&rm=3" 
  }
];

const PROJECTS = [
  { 
    title: "Steel Plant Installation", 
    desc: "Full-scale industrial water & piping system for a steel production facility.", 
    img: "https://tse3.mm.bing.net/th/id/OIP.PT0rQFdWgn2pgo6PJbOWMgHaEO?rs=1&pid=ImgDetMain&o=7&rm=3" 
  },
  { 
    title: "High-Rise Fire Safety", 
    desc: "Sprinkler and booster system installation for a 30-story building.", 
    img: "https://th.bing.com/th/id/R.f4b214dcd05b810e52498e28aabb4274?rik=bH97jrC1fgHqcw&pid=ImgRaw&r=0" 
  },
  { 
    title: "Chemical Plant Upgrade", 
    desc: "Replacement of pumps, drainage and safety monitoring systems.", 
    img: "https://th.bing.com/th/id/R.ebd8d8e1cd18a12dfe1606c183113ed4?rik=n0cmLLrwHe5ztg&pid=ImgRaw&r=0" 
  }
];

/* ---------- Populate Services Page ---------- */
const servicesGrid = document.getElementById("services-grid");
if (servicesGrid) {
  SERVICE_LIST.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";

    card.innerHTML = `
      <img src="${service.img}" alt="${service.title}" 
           loading="lazy" 
           style="width:100%; max-width:320px; height:200px; object-fit:cover; border-radius:8px; display:block; margin:0 auto;">
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
    `;

    servicesGrid.appendChild(card);
  });
}

/* ---------- Populate Projects Page ---------- */
const projectsGallery = document.getElementById("projects-gallery");
if (projectsGallery) {
  PROJECTS.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <img src="${project.img}" alt="${project.title}" 
           loading="lazy" 
           style="width:100%; max-width:320px; height:200px; object-fit:cover; border-radius:8px; display:block; margin:0 auto;">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
    `;

    projectsGallery.appendChild(card);
  });
}

/* ---------- Careers Form Validation ---------- */
const careersForm = document.getElementById("careers-form");
if (careersForm) {
  careersForm.addEventListener("submit", e => {
    e.preventDefault();
    const status = document.getElementById("apply-status");
    status.textContent = "Submitting...";

    setTimeout(() => {
      status.textContent = "✅ Thank you! Your application has been received.";
      careersForm.reset();
    }, 1200);
  });
}
