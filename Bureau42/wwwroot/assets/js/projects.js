/* Projects page: AZ/EN/RU copy + category filter.
   site.js applyLang() merges this into the shared dictionary. */
window.pageI18n = {
  az: {
    "page.docTitle": "Layihələr — Bureau 042",
    "page.kicker": "Portfolio",
    "page.title": "Layihələr",
    "page.lead": "Bakıda və regionda seçilmiş memarlıq və interyer işləri.",
    "skip": "Məzmuna keç",
    "nav.close": "Bağla",
    "nav.primary": "Əsas",
    "filter.label": "Layihə filtrləri",
    "list.eyebrow": "İşlər",
    "list.title": "Hər obyekt öz işığı ilə oxunur.",
    "list.lead":
      "Yaşayış, ofis və kommersiya məkanlarında plan, material və icra eyni dildə qalır.",
    "filter.all": "Hamısı",
    "filter.architecture": "Memarlıq",
    "filter.interior": "İnteryer",
    "filter.commercial": "Kommersiya",
    "p1.cat": "İnteryer",
    "p1.title": "Nizami Loft",
    "p1.loc": "Bakı · 2026",
    "p2.cat": "Memarlıq",
    "p2.title": "Xəzər Evi",
    "p2.loc": "Abşeron · 2026",
    "p3.cat": "İnteryer",
    "p3.title": "İçərişəhər Mənzili",
    "p3.loc": "Bakı · 2025",
    "p4.cat": "Kommersiya",
    "p4.title": "Gəncə Atrium",
    "p4.loc": "Gəncə · 2026",
    "top.label": "Yuxarı"
  },
  en: {
    "page.docTitle": "Projects — Bureau 042",
    "page.kicker": "Portfolio",
    "page.title": "Projects",
    "page.lead": "Selected architecture and interior work across Baku and beyond.",
    "skip": "Skip to content",
    "nav.close": "Close",
    "nav.primary": "Primary",
    "filter.label": "Project filters",
    "list.eyebrow": "Work",
    "list.title": "Each site is read through its own light.",
    "list.lead":
      "Housing, offices and commercial spaces where plan, material and build stay in one language.",
    "filter.all": "All",
    "filter.architecture": "Architecture",
    "filter.interior": "Interior",
    "filter.commercial": "Commercial",
    "p1.cat": "Interior",
    "p1.title": "Nizami Loft",
    "p1.loc": "Baku · 2026",
    "p2.cat": "Architecture",
    "p2.title": "Caspian House",
    "p2.loc": "Absheron · 2026",
    "p3.cat": "Interior",
    "p3.title": "Icherisheher Apartment",
    "p3.loc": "Baku · 2025",
    "p4.cat": "Commercial",
    "p4.title": "Ganja Atrium",
    "p4.loc": "Ganja · 2026",
    "top.label": "Back to top"
  },
  ru: {
    "page.docTitle": "Проекты — Bureau 042",
    "page.kicker": "Портфолио",
    "page.title": "Проекты",
    "page.lead": "Избранная архитектура и интерьеры в Баку и регионе.",
    "skip": "К содержанию",
    "nav.close": "Закрыть",
    "nav.primary": "Основное",
    "filter.label": "Фильтры проектов",
    "list.eyebrow": "Работы",
    "list.title": "Каждый объект читается через свой свет.",
    "list.lead":
      "Жильё, офисы и коммерция, где план, материал и стройка остаются на одном языке.",
    "filter.all": "Все",
    "filter.architecture": "Архитектура",
    "filter.interior": "Интерьер",
    "filter.commercial": "Коммерция",
    "p1.cat": "Интерьер",
    "p1.title": "Лофт Низами",
    "p1.loc": "Баку · 2026",
    "p2.cat": "Архитектура",
    "p2.title": "Каспийский дом",
    "p2.loc": "Апшерон · 2026",
    "p3.cat": "Интерьер",
    "p3.title": "Квартира в Ичери-шехер",
    "p3.loc": "Баку · 2025",
    "p4.cat": "Коммерция",
    "p4.title": "Атриум Гянджа",
    "p4.loc": "Гянджа · 2026",
    "top.label": "Наверх"
  }
};

// Kartın ölçüsü HTML-də yazılmır: görünən kartlar sırası ilə bu dörd ölçünü təkrarlayır.
const CARD_PATTERN = [["is-wide", "is-tall"], ["is-tall"], [], ["is-wide"]];
const CARD_SIZES = ["is-wide", "is-tall", "is-full"];

function layoutCards(cards) {
  const visible = cards.filter((card) => !card.classList.contains("is-hidden"));
  visible.forEach((card, i) => {
    card.classList.remove(...CARD_SIZES);
    // Say tək olanda sonuncu kart sətirdə tək qalır, ona görə tam enə uzanır.
    const alone = visible.length % 2 === 1 && i === visible.length - 1;
    card.classList.add(...(alone ? ["is-full"] : CARD_PATTERN[i % CARD_PATTERN.length]));
  });
}

function initProjectFilters() {
  const root = document.querySelector("[data-project-filters]");
  const gallery = document.querySelector("[data-project-gallery]");
  if (!root || !gallery) return;

  const buttons = [...root.querySelectorAll("button[data-filter]")];
  const cards = [...gallery.querySelectorAll(".work-card")];

  const apply = (filter) => {
    buttons.forEach((btn) => {
      const active = btn.dataset.filter === filter;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    cards.forEach((card) => {
      const show = filter === "all" || card.dataset.cat === filter;
      card.classList.toggle("is-hidden", !show);
    });
    layoutCards(cards);
  };

  root.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-filter]");
    if (!btn || !root.contains(btn)) return;
    apply(btn.dataset.filter);
  });

  apply("all");
}

document.addEventListener("DOMContentLoaded", () => {
  initProjectFilters();
});
