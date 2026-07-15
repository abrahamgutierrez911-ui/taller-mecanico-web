document.documentElement.classList.add("js-enabled");

// Datos editables del taller: cambia aquí teléfono, WhatsApp, dirección, horarios, mapa y redes.
const business = {
  name: "GF Mechanic & Aesthetic",
  phone: "+52 5573934426",
  whatsappLabel: "+52 5573934426",
  whatsappNumber: "5573934426",
  address: "Av. Principal 123, Ciudad de México",
  hours: "Lunes a sábado, 9:00 a.m. a 6:00 p.m.",
  email: "contacto@gfmechanic.com",
  mapsEmbedUrl: "https://www.google.com/maps/place/AGP+motors/@19.31561,-99.2223238,17z/data=!3m1!4b1!4m6!3m5!1s0x85cdff1ea1cef9c5:0xa7ae1f385ad5a571!8m2!3d19.31561!4d-99.2223238!16s%2Fg%2F11kz_w8_4f!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  defaultMessage: "Hola, quiero agendar una cita para mi auto."
};

const header = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const contactForm = document.getElementById("contactForm");
const year = document.getElementById("year");

const setBusinessText = () => {
  document.querySelectorAll("[data-business]").forEach((element) => {
    const key = element.dataset.business;
    if (business[key]) {
      element.textContent = business[key];
    }
  });
};

const buildWhatsAppUrl = (message = business.defaultMessage) => {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const setContactLinks = () => {
  document.querySelectorAll("[data-link='whatsapp']").forEach((link) => {
    link.href = buildWhatsAppUrl();
  });

  document.querySelectorAll("[data-link='phone']").forEach((link) => {
    link.href = `tel:${business.phone.replace(/\s/g, "")}`;
  });

  document.querySelectorAll("[data-link='email']").forEach((link) => {
    link.href = `mailto:${business.email}`;
  });

  const socialLinks = {
    facebook: business.facebook,
    instagram: business.instagram
  };

  Object.entries(socialLinks).forEach(([name, url]) => {
    document.querySelectorAll(`[data-link='${name}']`).forEach((link) => {
      link.href = url;
    });
  });

  const mapFrame = document.querySelector("[data-map-frame]");
  if (mapFrame) {
    mapFrame.src = business.mapsEmbedUrl;
  }
};

const closeMenu = () => {
  menuToggle.classList.remove("is-open");
  mainNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

const initMenu = () => {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("is-open");
    mainNav.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
};

const initScrollEffects = () => {
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
};

const initActiveNav = () => {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".main-nav a[href^='#']");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
};

const initForm = () => {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const message = [
      `Hola, soy ${formData.get("name")}.`,
      `Mi teléfono es ${formData.get("phone")}.`,
      `Me interesa: ${formData.get("service")}.`,
      `Mensaje: ${formData.get("message")}`
    ].join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener");
    contactForm.reset();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setBusinessText();
  setContactLinks();
  initMenu();
  initScrollEffects();
  initActiveNav();
  initForm();
  year.textContent = new Date().getFullYear();
});
