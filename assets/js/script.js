document.addEventListener("DOMContentLoaded", () => {
  // === 🧩 Initialiser les icônes Lucide ===
  lucide.createIcons();

  // === 🎬 Animation du titre de la page ===
  const titles = [
    "🚀 Yassine Nakkabi | DevOps Engineer",
    "⚙️ Automate. Deploy. Innovate.",
    "☁️ Cloud & CI/CD Specialist",
    "💻 Building Scalable Futures"
  ];
  let index = 0;
  function changeTitle() {
    document.title = titles[index];
    index = (index + 1) % titles.length;
  }
  setInterval(changeTitle, 3000);
  document.title = titles[0];

  // === 📱 Menu Mobile ===
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      menuBtn.classList.toggle("open");

      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("animate-slideDown");
      } else {
        mobileMenu.classList.remove("animate-slideDown");
      }
    });
  }

  // === 🎓 Animation des sections (fade-in au scroll) ===
  const fadeElements = document.querySelectorAll(".fade-in");

  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeElements.forEach((el) => observer.observe(el));
  }

  // === 💡 Effet de survol sur les liens du footer (glow dynamique) ===
  const socialLinks = document.querySelectorAll("footer .social a");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => link.classList.add("glow"));
    link.addEventListener("mouseleave", () => link.classList.remove("glow"));
  });
});
