// CONATIG — JS puro, sem dependências externas
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Em telas pequenas, permite tocar no item de menu com submenu pra abrir/fechar
  if (window.matchMedia("(max-width: 900px)").matches) {
    document.querySelectorAll(".main-nav > .container > ul > li").forEach(function (li) {
      var submenu = li.querySelector(".submenu");
      if (!submenu) return;
      var link = li.querySelector(":scope > a, :scope > .no-link");
      link.addEventListener("click", function (e) {
        if (!li.classList.contains("active")) {
          e.preventDefault();
          document.querySelectorAll(".main-nav li.active").forEach(function (el) {
            el.classList.remove("active");
          });
          li.classList.add("active");
        }
      });
    });
  }

  // Slider simples da home (fade automático entre as imagens reais do banner original)
  var slides = document.querySelectorAll(".hero-slider .slide");
  if (slides.length > 1) {
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 5000);
  }
});
