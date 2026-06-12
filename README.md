# PFD200 Portfolio

Personal portfolio website built for the PFD200 (Professional Development) module at NCG Leicester, FdSc Computing, Year 2 (Level 5).

**Live site:** https://robsonrsilva09.github.io/pfd200-portfolio/

## About this project

This is a personal portfolio site I built from scratch with HTML, CSS, and vanilla JavaScript. It covers Task 2 (mini-project) and Task 3 (digital portfolio) of the module assessment in a single deliverable.

The aim was to put UI/UX principles and front-end fundamentals into practice, and to ship a real, deployed website using a code-first workflow instead of a website builder.

## Pages

- **Home:** short intro, a "What I do" section, and a featured project
- **About:** background, a skills and tools grid, and an education timeline
- **Projects:** a filterable grid of my course and personal projects
- **Contact:** direct contact details and a simple message form

## Features

- Dark theme built on CSS custom properties (design tokens for colour, type, spacing, and radius)
- Responsive layout for desktop, tablet, and mobile
- Mobile navigation with a hamburger toggle
- Project filter chips (All, Web, Security, IoT) driven by vanilla JavaScript
- Multi-category project tagging (a single project can appear in more than one filter)
- Circular profile avatar
- Reusable navigation bar and footer across all four pages
- `mailto:` contact form (no backend required)

## Tech stack

- HTML5 semantic markup
- CSS3 with custom properties, no framework
- Vanilla JavaScript, no build step and no dependencies
- Hosted on GitHub Pages
- Wireframes and mockups designed in Figma

## How this was built, step by step

This section is the actual development journey, written as it happened.

### 1. Initial setup

- Created the public GitHub repository `pfd200-portfolio`
- Added a starter README, MIT licence, and a Node-template `.gitignore`
- Enabled GitHub Pages on the `main` branch
- Applied the Jekyll `cayman` theme as a placeholder while the site was still empty, so the URL was never broken

### 2. Wireframes in Figma

- Drafted a v1 of all four pages in Figma to set hierarchy, spacing, and rough layout
- Iterated to v2 after review, adjusting the education timeline labels, refining project card descriptions, and replacing one tag on the CMP214 As1 card
- Exported PNGs to `design/` so the wireframes live alongside the code

### 3. Methodology pivot: code-first prototyping

- The original Task 1 proposal mentioned TypeScript and a longer Figma phase
- After two Figma iterations I switched to a code-first approach: the browser became the working canvas, with Figma kept only for the planning phase
- This decision is reflected in the report under Section 2 (Application of Technical Skills)

### 4. HTML scaffolding

- Created four HTML pages (`index.html`, `about.html`, `projects.html`, `contact.html`) with the same `<head>`, semantic structure, and shared assets
- Set up the folder structure: `css/`, `js/`, `assets/img/`, `design/`, `screenshots/`

### 5. CSS reset and design tokens

- Added `css/reset.css` based on Bell (2019), the modern reset
- Built `css/style.css` around CSS custom properties (`--color-*`, `--space-*`, `--font-*`, `--radius-*`)
- Tokens live at the top of the file so a single change updates the whole site

### 6. Section by section, page by page

- Started with the Home page: navigation, hero, "What I do" cards, featured project, footer
- Reused the nav and footer on every other page by copying the markup, since there is no templating engine
- Built the About page next: bio block, skills grid, education timeline
- Then Projects: page header, filter chips, and the project grid
- Finally Contact: direct contact cards on the left, the message form on the right

### 7. Responsive design

- Mobile-first breakpoint at 768px
- Grids collapse to a single column on small screens
- The desktop navigation collapses into a hamburger toggle, controlled by vanilla JavaScript

### 8. JavaScript interactions

- `js/main.js` contains the mobile nav toggle and the filter chip logic on the Projects page
- The filters read `data-category` from each card and toggle a hidden class, with no page reload
- One project (CMP214 As2) is tagged in two categories at once (web and security), so it appears under both filters

### 9. Real profile photo

- Replaced the grey "Profile photo" placeholder on the About page with my GitHub avatar (`assets/img/perfilfoto.jpeg`)
- Styled it as a circular image with `border-radius: 50%`, `aspect-ratio: 1 / 1`, and a soft border in the accent colour
- The avatar reduces in size on mobile so it does not dominate the layout

### 10. Editorial cleanup

- Removed every long dash and short dash from the site, since they read as AI-generated boilerplate
- Substitutions were contextual: colons for titles, commas for mid-sentence dashes, `to` for year ranges

### 11. Testing

- Smoke tested all four pages on desktop and on a real iPhone 12 Pro (390 by 844)
- Verified the filter chips, the hamburger toggle, and the `mailto:` form
- Confirmed there is no horizontal scroll at 390px width

### 12. Real-site screenshots

- Captured each of the four pages on desktop and on mobile
- Saved them in `screenshots/` so they can be embedded in the report and reused as evidence

## Key decisions

A short list of choices the report explains in more detail.

- **TypeScript replaced by vanilla JavaScript.** The original Task 1 proposal mentioned TypeScript. I removed it from this version to focus on browser fundamentals first.
- **Figma kept for planning only.** After two mockup versions, the browser was a faster place to validate spacing and responsive behaviour.
- **`mailto:` instead of a contact form backend.** The form opens the visitor's email client, which keeps the project entirely static and within scope.
- **Cross-disciplinary project tagging.** One project can sit in more than one category. CMP214 As2 is tagged as both web and security, because that is what it actually is.

## Project structure

```
pfd200-portfolio/
  index.html        Home page
  about.html        About page
  projects.html     Projects page
  contact.html      Contact page
  css/
    reset.css       Modern CSS reset (Bell, 2019)
    style.css       Design tokens and all page styles
  js/
    main.js         Mobile nav toggle and project filters
  assets/img/       Images (profile avatar)
  design/           Figma wireframes and mockups (v1 and v2)
  screenshots/      Desktop and mobile captures of the live site
  notes/            Working notes used during development
```

## Running it locally

There is no build step. Clone the repository and open `index.html` in a browser, or serve the folder with any static server:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Development timeline (what actually happened)

- **Week 1 (26/05 to 01/06):** repo, GitHub Pages, README, Figma wireframes (v1 and v2)
- **Week 2 (02/06 to 08/06):** HTML scaffolding, CSS tokens, Home and About pages, responsive layout, mobile navigation
- **Week 3 (09/06 to 12/06):** Projects page with working filters, Contact page with `mailto:`, screenshots, editorial cleanup, report writing and submission

## Module context

- Module: PFD200, Professional Development
- Course: FdSc Computing, Year 2 (Level 5), NCG Leicester
- Module leader: Dr Bhavya Krishna Balasubramanian
- Submission date: 12/06/2026

## License

Released under the MIT License. See [LICENSE](LICENSE) for details.

## Author

Robson Da Silva (NCGID125482)
