# PFD200 Portfolio

Personal portfolio website built for the PFD200 (Professional Development) module at NCG Leicester, FdSc Computing, Year 2 (Level 5).

Live site: https://robsonrsilva09.github.io/pfd200-portfolio/

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
- Circular profile avatar
- Reusable navigation bar and footer across all four pages

## Tech stack

- HTML5 semantic markup
- CSS3 with custom properties, no framework
- Vanilla JavaScript, no build step and no dependencies
- Hosted on GitHub Pages
- Wireframes and mockups designed in Figma

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
  design/           High-fidelity Figma mockups
  screenshots/      Desktop and mobile captures of the live site
```

## Running it locally

There is no build step. Clone the repository and open `index.html` in a browser, or serve the folder with any static server:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Project plan

- Week 1 (26/05 to 01/06): wireframes, scaffold, Home and About pages
- Week 2 (02/06 to 08/06): Projects, Contact, responsive layout, polish
- Week 3 (09/06 to 12/06): report writing and submission

## Module context

- Module: PFD200, Professional Development
- Course: FdSc Computing, Year 2 (Level 5), NCG Leicester
- Deadline: 12/06/2026

## License

Released under the MIT License. See [LICENSE](LICENSE) for details.

## Author

Robson Da Silva (NCGID125482)
