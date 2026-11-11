# Wassim Mnasri — Portfolio

Bilingual (English and French) portfolio of Wassim Mnasri, full-stack web developer.

**Live site:** <https://wassimmnasri.github.io/portfolio/>  ·  **Français :** <https://wassimmnasri.github.io/portfolio/fr/>

## About this project

A static website with no build step on the server, no framework, and no tracking.

- **Fast and light:** plain HTML, one stylesheet, one small script, optimized images. No third-party requests, no web fonts.
- **Accessible:** semantic landmarks, skip link, keyboard navigation, visible focus, light and dark themes, respect for reduced-motion preferences.
- **Mobile first:** responsive layout, collapsible menu, large touch targets, safe-area support.
- **Search and sharing:** one URL per language with `hreflang`, canonical links, sitemap, Open Graph and Twitter cards, `schema.org` structured data.
- **Privacy:** no cookies, no analytics, no external content. See the [privacy and legal notice](https://wassimmnasri.github.io/portfolio/privacy/).
- **Security:** strict Content Security Policy declared in each page.
- **Downloadable CV:** English and French versions in PDF and Word, single-column and text-based so recruitment systems can read them.

## Structure

```
.
├── index.html                   English home page
├── fr/index.html                French home page
├── privacy/index.html           Privacy and legal notice (English)
├── fr/confidentialite/          Privacy and legal notice (French)
├── 404.html                     Not-found page
├── sitemap.xml                  Sitemap with language alternates
├── cv/                          CV files (PDF and DOCX, EN and FR)
├── assets/
│   ├── style.css                Styles
│   ├── main.js                  Theme, menu, and scroll behavior
│   └── img/                     Portrait, logo, icons, social preview images
├── LICENSE
└── README.md
```

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

## License

Copyright © 2026 Wassim Mnasri. All rights reserved. See [LICENSE](LICENSE).

## Contact

mn.wacym@gmail.com · [LinkedIn](https://www.linkedin.com/in/wassim-m-nasri/) · [GitHub](https://github.com/WassimMNASRI)
