# Dhanush Kavin G — Portfolio

A multi-page personal portfolio website — Home, About, Skills, Projects, Articles, Certificates, Experience, and Contact — built with plain HTML, CSS, and JavaScript, styled with an Apple-inspired clean/blue aesthetic and animated with GSAP.

**Live pages:** open `index.html` in a browser, or deploy the folder as-is to GitHub Pages / Netlify / Vercel.

---

## ✨ Features

- 8 fully static, linked HTML pages sharing one design system (`css/style.css`)
- Responsive layout (mobile, tablet, laptop, ultra‑wide) with a fluid container/grid system
- Sticky, blurred navigation bar with an active-page indicator
- Filterable project grid (All / Web Apps / APIs)
- Tabbed skills explorer (Frontend, Backend, Database, Tools, DevOps, Testing, SDLC, Mathematics)
- Data-driven articles grid (edit one array to add/remove articles)
- Contact form with client-side success state
- GSAP-powered motion throughout:
  - Smooth per-page entrance animations (hero, cards, timeline, form, etc.)
  - Animated stat counters on the homepage
  - A subtle parallax hero background + a gentle 3D tilt on the profile card
  - A sliding "pill" indicator that glides behind the active/hovered nav link
  - A slim scroll-progress bar under the navbar

---

## 🗂️ Project Structure

```
portfolio/
├── index.html            # Home
├── about.html             # About
├── skills.html            # Skills
├── projects.html          # Projects
├── articles.html          # Articles
├── certificates.html      # Certificates
├── experience.html        # Experience
├── contact.html           # Contact
│
├── css/
│   └── style.css          # Single shared stylesheet (design tokens, layout, components, responsive rules)
│
└── js/
    ├── common.js           # Shared: mobile menu toggle, nav scroll shadow
    ├── animations.js       # Shared: GSAP page-entrance, nav indicator, scroll progress bar, home hero effects
    ├── home.js             # Home hero entrance timeline
    ├── about.js             # About page entrance animation
    ├── skills.js            # Skills tab switching + entrance animation
    ├── projects.js           # Project category filter + entrance animation
    ├── articles-data.js      # Articles data array + grid renderer
    ├── articles.js            # Articles page entrance animation
    ├── certificates.js         # Certificates page entrance animation
    ├── experience.js            # Experience timeline entrance animation
    └── contact.js               # Contact form submit handler + entrance animation
```

Each page only loads the JS it actually needs, on top of the two shared files (`common.js`, `animations.js`) that every page includes.

---

## 🛠️ Tech Stack

| Layer      | Tech                                            |
|------------|--------------------------------------------------|
| Markup     | Semantic HTML5                                   |
| Styling    | CSS3 (custom properties, Grid, Flexbox, clamp()) |
| Fonts      | Plus Jakarta Sans, Inter, JetBrains Mono (Google Fonts) |
| Icons      | Font Awesome 6                                   |
| Animation  | GSAP 3 + ScrollTrigger                            |
| Hosting    | Static — works on GitHub Pages, Netlify, Vercel   |

No build step, no bundler, no dependencies to install — just static files.

---

## 🚀 Getting Started

Clone the repo and open it directly:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

Then either:
- Double-click `index.html` to open it in your browser, or
- Serve it locally for a proper environment (recommended, since some browsers restrict `file://` requests):

```bash
# Python 3
python3 -m http.server 5500
# then visit http://localhost:5500
```

---

## 🌐 Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then save.
5. Your site will be live at `https://<your-username>.github.io/<your-repo>/`.

---

## ✏️ Updating Content

- **Articles** — edit the `articles` array in `js/articles-data.js`.
- **Projects** — add/edit a `.proj-card` block in `projects.html`.
- **Certificates** — add/edit a `.cert-card` block in `certificates.html`.
- **Skills** — add a chip inside the matching `.skill-group` in `skills.html`.
- **Colors / spacing / fonts** — all design tokens live at the top of `css/style.css` under `:root`.

---

## 📬 Contact

- Email: dhanushkavinofficial@gmail.com
- LinkedIn: [dhanushkaving1](https://www.linkedin.com/in/dhanushkaving1)
- GitHub: [dhanushkavinofficial](https://github.com/dhanushkavinofficial)
- Medium: [@dhanushkavinofficial](https://medium.com/@dhanushkavinofficial)
- Dev.to: [dhanush_kaving](https://dev.to/dhanush_kaving_f68718582)
