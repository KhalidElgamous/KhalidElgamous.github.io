# Khalid EL GAMOUS — Portfolio

Personal portfolio site built with Next.js, React and Tailwind CSS. All of the content (profile, skills, experience, contact form labels, footer) lives in one JSON file, so updating the site means editing data, not components.

## Features

- **Content-driven:** every piece of text, link, icon and project is read from `data/portfolio.json`.
- **Component-based:** each page section is its own component, built from small reusable UI pieces.
- **Resume download:** the "Export Resume (PDF)" button links to an existing PDF in `public/`.
- **Single-page navigation:** header links scroll to the Home, Experience, Pillars, Cases and Contact sections.
- **Responsive:** styled with Tailwind utility classes, mobile first, with a collapsing menu on phones.

## Project structure

```
.
├── app/
│   ├── globals.css           # Brand tokens, Tailwind theme colours, base styles
│   └── page.jsx              # Composes the page from data + components
├── components/
│   ├── layout/               # GlowOrbs, Header (client component), Footer
│   ├── sections/             # Hero, About, Services, Portfolio, Contact
│   └── ui/                   # Section, Button, Icon, SectionHeading, MetricBox, ServiceCard, ProjectCard, ContactForm
├── data/
│   └── portfolio.json        # All site content
├── lib/
│   └── cn.js                 # Tiny helper to join class names
└── public/
    └── resume.pdf            # Your resume (downloaded by the Hero button)
```

## Getting started

Requires Node.js (use a version supported by your Next.js release).

### 1. Tailwind CSS (v4)

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

Create `postcss.config.mjs` in the project root:

```js
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
```

In `app/layout.jsx`, import the styles (and Font Awesome, which the icons need):

```jsx
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // npm install @fortawesome/fontawesome-free
```

<details>
<summary>Using Tailwind v3 instead</summary>

```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

1. Create `tailwind.config.js`:

   ```js
   module.exports = {
     content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
     theme: {
       extend: {
         colors: {
           main: "var(--bg-main)",
           surface: "var(--bg-surface)",
           card: "var(--bg-card)",
           line: "var(--border-color)",
           fg: "var(--text-primary)",
           muted: "var(--text-secondary)",
           accent: "var(--accent)",
         },
       },
     },
   };
   ```

2. In `app/globals.css`, replace `@import "tailwindcss";` with `@tailwind base; @tailwind components; @tailwind utilities;` and delete the `@theme inline { ... }` block.
3. Use `postcss.config.js` with `tailwindcss` and `autoprefixer` as plugins.

The components render the same on v3 and v4.

</details>

### 2. Run it

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

To create and run a production build:

```bash
npm run build
npm start
```

## Styling

All styling is Tailwind classes written in the components. `app/globals.css` only holds the brand tokens, the Tailwind colour names and a few base styles.

**Colours.** The CSS variables from the original style sheet are kept (`--bg-main`, `--accent`, ...) and exposed as Tailwind colours:

| Class | Variable |
| --- | --- |
| `bg-main` | `--bg-main` (page background) |
| `bg-surface` | `--bg-surface` (About and Projects sections) |
| `bg-card` | `--bg-card` (glass cards) |
| `border-line` | `--border-color` |
| `text-fg` | `--text-primary` |
| `text-muted` | `--text-secondary` |
| `text-accent` | `--accent` |

The two gradients are used as `bg-[image:var(--gradient-accent)]` and `bg-[image:var(--gradient-text)]` (with `bg-clip-text text-transparent` for gradient text).

**Breakpoints.** Classes are mobile first: a class without a prefix applies to every screen, and a prefixed class applies from that width up.

| Prefix | From | What changes |
| --- | --- | --- |
| none | 0 | Phone: single column, hero stacked with the card on top, menu button instead of links |
| `md:` | 768px | Inline nav, hero in a row, 2-column card grids, form fields side by side |
| `lg:` | 1024px | 3-column card grids, About text and stats side by side |
| `xl:` | 1280px | Full desktop sizes from the original design (64px title, larger padding) |

**Sizes.** The original CSS set `html { font-size: 62.5% }` so that `1rem` was 10px, then shrank it at smaller widths. Tailwind assumes a 16px root, so that rule is gone and sizes are written in pixels (`text-[15px]`, `p-[25px]`) or in Tailwind's own scale. Below `xl:` the sizes are about 80% of the desktop ones, as in the original.

To change a size, edit the class in the component, for example `text-[40px] xl:text-[64px]` on the hero title.

## Editing content

Everything below is edited in `data/portfolio.json`.

| Key | What it controls |
| --- | --- |
| `site` | Brand name shown in the header, owner name, profession |
| `resume` | PDF path, downloaded file name, button label and icon |
| `orbs` | Position of the decorative background glows |
| `nav` | Header links (`label` and `href`) |
| `hero` | Title line, name, summary, primary button, hero icon |
| `about` | Section heading, description text, and the stat boxes (`metrics`) |
| `services` | "Core Expertise" cards: one per skill category |
| `portfolio` | Project cards: title, description, image, tags |
| `education`, `certifications` | Stored for future use (not displayed yet) |
| `contact` | Section heading, form labels and placeholders, contact details |
| `footer` | Copyright line and "back to top" link |

### Adding a project card

Add an object to `portfolio.projects`:

```json
{
  "title": "Project name",
  "description": "One or two sentences about the project.",
  "image": "https://example.com/cover.jpg",
  "imageAlt": "Short image description",
  "tags": ["Python", "Docker"]
}
```

Extra fields on a project (`company`, `location`, `period`, `tasks`) are kept in the data but are not rendered by the current card.

### Updating the resume

1. Put your PDF in the `public/` folder (at the project root, next to `app/`).
2. Make sure `resume.file` in `data/portfolio.json` matches its name, for example `"/resume.pdf"`. Do not include `public` in the path.
3. `resume.downloadName` sets the file name visitors get when they download it.

To check it, run the dev server and open <http://localhost:3000/resume.pdf>.

### Icons

Icon names in the JSON (for example `"fa-database"`) are rendered as Font Awesome classes (`<i class="fas fa-database">`). The Font Awesome stylesheet must be loaded in your app, for example in `app/layout.jsx`, and the names must exist in the version you load.

## Known limitations

- The contact form has `action="#"`, so submitting it does not send anything yet. Connect it to a Next.js server action, an API route or a form service.
- The "Home" link is always highlighted; it does not follow the scroll position.
- Project cards use placeholder stock images, and descriptions are cut to 3 lines with "…".
- The 7th skill card sits alone on the last row of the grid.
- `education`, `certifications`, `contact.details` and each project's task list are in the JSON but have no section on the page yet.

## Contact

- Email: khalidelgamous1@gmail.com
- LinkedIn: <https://www.linkedin.com/in/khalid-elgamous>
- GitHub: <https://github.com/KhalidElgamous>