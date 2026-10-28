# Khalid EL GAMOUS — Portfolio

Personal portfolio site built with Next.js and React. All of the content (profile, skills, experience, contact form labels, footer) lives in one JSON file, so updating the site means editing data, not components.

## Features

- **Content-driven:** every piece of text, link, icon and project is read from `data/portfolio.json`.
- **Component-based:** each page section is its own component, built from small reusable UI pieces.
- **Resume download:** the "Export Resume (PDF)" button links to an existing PDF in `public/`.
- **Single-page navigation:** header links scroll to the Home, Experience, Pillars, Cases and Contact sections.

## Project structure

```
.
├── app/
│   └── page.jsx              # Composes the page from data + components
├── components/
│   ├── layout/               # GlowOrbs, Header, Footer
│   ├── sections/             # Hero, About, Services, Portfolio, Contact
│   └── ui/                   # Icon, SectionHeading, MetricBox, ServiceCard, ProjectCard, ContactForm
├── data/
│   └── portfolio.json        # All site content
└── public/
    └── resume.pdf            # Your resume (downloaded by the Hero button)
```

## Getting started

Requires Node.js (use a version supported by your Next.js release).

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
- Project cards use placeholder stock images.
- `education`, `certifications`, `contact.details` and each project's task list are in the JSON but have no section on the page yet.

## Contact

- Email: khalidelgamous1@gmail.com
- LinkedIn: <https://www.linkedin.com/in/khalid-elgamous>
- GitHub: <https://github.com/KhalidElgamous>