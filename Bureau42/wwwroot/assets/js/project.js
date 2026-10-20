/* Layihə səhifəsi: ?id= ilə kartın şəkilləri və faktları.
   hero tam ekran şəkildir. frames: bir şəkil tam en, iki şəkil yarı-yarı.
   site.js applyLang() bu lüğəti ümumi mətnlərə qatır. */
const PROJECTS = {
  nizami: {
    hero: "img/photo-hero.jpg?v=2",
    frames: [
      ["img/gallery/g1.jpg?v=1"],
      ["img/gallery/g5.jpg?v=1", "img/gallery/g8.jpg?v=1"],
      ["img/photo-about-b.jpg?v=2"],
      ["img/gallery/g3.jpg?v=1", "img/gallery/g6.jpg?v=1"],
      ["img/gallery/g2.jpg?v=1"],
      ["img/photo-wood.jpg?v=2", "img/photo-about-a.jpg?v=2"],
      ["img/gallery/g7.jpg?v=1"],
      ["img/gallery/g9.jpg?v=1", "img/gallery/g11.jpg?v=1"]
    ],
    az: {
      title: "Nizami Loft",
      kicker: "İnteryer · Bakı · 2026",
      place: "Bakı",
      service: "İnteryer dizaynı",
      area: "142 m²",
      type: "İnteryer",
      year: "2026",
      lead: "Nizami prospektindəki loft: açıq plan, işıq və saxlama eyni xətt üzrə yazıldı. Mətbəx, qonaq və yataq bir-birinə keçid vermədən nəfəs alır."
    },
    en: {
      title: "Nizami Loft",
      kicker: "Interior · Baku · 2026",
      place: "Baku",
      service: "Interior design",
      area: "142 m²",
      type: "Interior",
      year: "2026",
      lead: "A loft on Nizami Avenue: open plan, light and storage written on one line. Kitchen, living and bedroom breathe without losing the passage between them."
    },
    ru: {
      title: "Лофт Низами",
      kicker: "Интерьер · Баку · 2026",
      place: "Баку",
      service: "Дизайн интерьера",
      area: "142 м²",
      type: "Интерьер",
      year: "2026",
      lead: "Лофт на проспекте Низами: открытый план, свет и хранение написаны одной линией. Кухня, гостиная и спальня дышат, не теряя перехода между собой."
    }
  },
  xezer: {
    hero: "img/photo-house.jpg?v=2",
    frames: [
      ["img/gallery/g4.jpg?v=1"],
      ["img/gallery/g2.jpg?v=1", "img/gallery/g1.jpg?v=1"],
      ["img/photo-wood.jpg?v=2"],
      ["img/gallery/g8.jpg?v=1", "img/gallery/g5.jpg?v=1"],
      ["img/gallery/g6.jpg?v=1"],
      ["img/photo-about-a.jpg?v=2", "img/photo-about-b.jpg?v=2"],
      ["img/gallery/g12.jpg?v=1"],
      ["img/gallery/g10.jpg?v=1", "img/gallery/g7.jpg?v=1"]
    ],
    az: {
      title: "Xəzər Evi",
      kicker: "Memarlıq · Abşeron · 2026",
      place: "Abşeron",
      service: "Memarlıq",
      area: "286 m²",
      type: "Yaşayış",
      year: "2026",
      lead: "Abşeronda bir mərtəbəli ev: həyət, kölgə və dəniz küləyi planın içində qaldı. Otaqlar həyətə açılır, giriş isə küçədən ayrılır."
    },
    en: {
      title: "Caspian House",
      kicker: "Architecture · Absheron · 2026",
      place: "Absheron",
      service: "Architecture",
      area: "286 m²",
      type: "Housing",
      year: "2026",
      lead: "A single-storey house on the Absheron: courtyard, shade and the sea breeze stay inside the plan. Rooms open to the yard, and the entrance stays off the street."
    },
    ru: {
      title: "Каспийский дом",
      kicker: "Архитектура · Апшерон · 2026",
      place: "Апшерон",
      service: "Архитектура",
      area: "286 м²",
      type: "Жильё",
      year: "2026",
      lead: "Одноэтажный дом на Апшероне: двор, тень и морской ветер остаются внутри плана. Комнаты открываются во двор, вход отделён от улицы."
    }
  },
  icheri: {
    hero: "img/photo-about-b.jpg?v=2",
    frames: [
      ["img/gallery/g10.jpg?v=1"],
      ["img/gallery/g9.jpg?v=1", "img/gallery/g11.jpg?v=1"],
      ["img/photo-about-a.jpg?v=2"],
      ["img/gallery/g6.jpg?v=1", "img/gallery/g3.jpg?v=1"],
      ["img/gallery/g5.jpg?v=1"],
      ["img/gallery/g8.jpg?v=1", "img/gallery/g1.jpg?v=1"],
      ["img/photo-office.jpg?v=2"],
      ["img/gallery/g7.jpg?v=1", "img/gallery/g12.jpg?v=1"]
    ],
    az: {
      title: "İçərişəhər Mənzili",
      kicker: "İnteryer · Bakı · 2025",
      place: "Bakı",
      service: "İnteryer dizaynı",
      area: "78 m²",
      type: "İnteryer",
      year: "2025",
      lead: "İçərişəhərdə kiçik mənzil: dar keçidlər yenidən yazıldı, işıq divar boyu uzandı. Saxlama mebelin içində qaldı, otaq boşaldı."
    },
    en: {
      title: "Icherisheher Apartment",
      kicker: "Interior · Baku · 2025",
      place: "Baku",
      service: "Interior design",
      area: "78 m²",
      type: "Interior",
      year: "2025",
      lead: "A small flat in Icherisheher: tight passages were redrawn and light runs the length of the wall. Storage stays inside the furniture, and the room stays clear."
    },
    ru: {
      title: "Квартира в Ичери-шехер",
      kicker: "Интерьер · Баку · 2025",
      place: "Баку",
      service: "Дизайн интерьера",
      area: "78 м²",
      type: "Интерьер",
      year: "2025",
      lead: "Небольшая квартира в Ичери-шехер: узкие проходы переписаны, свет тянется вдоль стены. Хранение остаётся в мебели, комната остаётся свободной."
    }
  },
  gence: {
    hero: "img/photo-office.jpg?v=2",
    frames: [
      ["img/gallery/g2.jpg?v=1"],
      ["img/gallery/g4.jpg?v=1", "img/gallery/g12.jpg?v=1"],
      ["img/photo-wood.jpg?v=2"],
      ["img/gallery/g1.jpg?v=1", "img/gallery/g6.jpg?v=1"],
      ["img/gallery/g8.jpg?v=1"],
      ["img/photo-about-a.jpg?v=2", "img/gallery/g5.jpg?v=1"],
      ["img/photo-hero.jpg?v=2"],
      ["img/gallery/g3.jpg?v=1", "img/gallery/g10.jpg?v=1"]
    ],
    az: {
      title: "Gəncə Atrium",
      kicker: "Kommersiya · Gəncə · 2026",
      place: "Gəncə",
      service: "Kommersiya interyeri",
      area: "640 m²",
      type: "Kommersiya",
      year: "2026",
      lead: "Gəncədə atriumlu ofis: giriş, gözləmə və iş zonası bir işıq quyusunun ətrafında durur. Qonaq yolu iş masalarından ayrılır."
    },
    en: {
      title: "Ganja Atrium",
      kicker: "Commercial · Ganja · 2026",
      place: "Ganja",
      service: "Commercial interior",
      area: "640 m²",
      type: "Commercial",
      year: "2026",
      lead: "An atrium office in Ganja: entry, waiting and work sit around one light well. The visitor path stays clear of the desks."
    },
    ru: {
      title: "Атриум Гянджа",
      kicker: "Коммерция · Гянджа · 2026",
      place: "Гянджа",
      service: "Коммерческий интерьер",
      area: "640 м²",
      type: "Коммерция",
      year: "2026",
      lead: "Офис с атриумом в Гяндже: вход, ожидание и работа стоят вокруг одного светового колодца. Путь гостя не пересекает рабочие столы."
    }
  }
};

const id = new URLSearchParams(location.search).get("id");
const project = PROJECTS[id];

if (!project) {
  location.replace("projects.html");
} else {
  const pack = (lang) => ({
    "page.docTitle": project[lang].title + " — Bureau 042",
    "proj.back": lang === "en" ? "← All projects" : lang === "ru" ? "← Все проекты" : "← Bütün layihələr",
    "fact.place": lang === "en" ? "Location" : lang === "ru" ? "Расположение" : "Yerləşmə",
    "fact.service": lang === "en" ? "Services" : lang === "ru" ? "Услуги" : "Xidmətlər",
    "fact.area": lang === "en" ? "Area" : lang === "ru" ? "Площадь" : "Sahə",
    "fact.type": lang === "en" ? "Type" : lang === "ru" ? "Тип" : "Tip",
    "fact.year": lang === "en" ? "Year" : lang === "ru" ? "Год" : "İl",
    "proj.kicker": project[lang].kicker,
    "proj.title": project[lang].title,
    "proj.place": project[lang].place,
    "proj.service": project[lang].service,
    "proj.area": project[lang].area,
    "proj.type": project[lang].type,
    "proj.year": project[lang].year,
    "proj.lead": project[lang].lead,
    "skip": lang === "en" ? "Skip to content" : lang === "ru" ? "К содержанию" : "Məzmuna keç",
    "nav.close": lang === "en" ? "Close" : lang === "ru" ? "Закрыть" : "Bağla",
    "nav.primary": lang === "en" ? "Primary" : lang === "ru" ? "Основное" : "Əsas",
    "top.label": lang === "en" ? "Back to top" : lang === "ru" ? "Наверх" : "Yuxarı"
  });

  window.pageI18n = { az: pack("az"), en: pack("en"), ru: pack("ru") };

  const hero = document.querySelector("[data-proj-hero]");
  if (hero && project.hero) {
    hero.src = project.hero;
    hero.alt = project.az.title;
    hero.dataset.i18nAlt = "proj.title";
  }

  const gallery = document.querySelector("[data-proj-gallery]");
  if (gallery) {
    project.frames.forEach((frame) => {
      const row = document.createElement("div");
      row.className = "proj-row " + (frame.length > 1 ? "is-pair" : "is-full");
      frame.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = project.az.title;
        img.dataset.i18nAlt = "proj.title";
        img.decoding = "async";
        img.loading = "lazy";
        row.appendChild(img);
      });
      gallery.appendChild(row);
    });
  }
}
