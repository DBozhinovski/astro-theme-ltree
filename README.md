# 🌳 LTree 🌳

LTree is a free and open-source theme for [Astro](https://astro.build). It's a result of exploring how to build a clone of Linkinbio and Linktree, rolled into one, using Astro. Blog post here -> https://darko.io/posts/linktree-and-linkinbio-clone-with-astro-and-tinacms.

### [[Demo here](https://ltree.darko.io)]

![image](https://github.com/DBozhinovski/astro-theme-ltree/assets/64415791/5b38139f-26f9-4da5-a4f9-cfb8d1c091e6)

![image](https://github.com/DBozhinovski/astro-theme-ltree/assets/64415791/4897e109-7312-4c40-8fdb-e2c8293731cc)

## Quickstart

1. Run `npx degit https://github.com/DBozhinovski/astro-theme-ltree my-site-name` to get a "clean slate" copy of this repo.
2. Run `npm install` inside the cloned directory to install dependencies.
3. Customize and deploy!

Requires Node.js v18+.

## Features

- A ready-to-use clone of Linkinbio and Linktree, hostable as a static site.
- Optional TinaCMS integration for editing the site content.
- Uses the Astro content collection API, which means you can edit the raw markdown files.
- Lightweight, minimalistic, and easy to customize.
- Tailwind for styling.
- Dark & Light mode dynamically supported

### TinaCMS

LTree comes with optional TinaCMS integration. It's already enabled by default in local mode (look at the `run` and `start` scripts in `package.json`).

You can also enable it in production via Tina Cloud by following the instructions: https://tina.io/docs/tina-cloud/overview/. More on the integration and steps to enable it here: https://darko.io/posts/linktree-and-linkinbio-clone-with-astro-and-tinacms.

## Development and customization notes

### Pages and components

The project has two pages - `index.astro` and `postlinks.astro`. The former is the Linktree clone, and the latter is the Linkinbio clone. Both pages follow a similar structure but render different mid-section contents.

There is only one custom component - `src/components/SocialIcon.astro`. It's used to render the social icons in the social sections of both pages.

### Styling

The theme uses Tailwind for styling without any customizations. As there's not a lot of styling, it would be trivial to remove it if you'd go for vanilla CSS instead. The same goes for customization via Tailwind config - you can likely add any fonts or plugins and customize the colors to your liking.

### Content

If you opt-in for TinaCMS and would like to make some changes to the data model, you'd have to edit the schema in both `src/content/config.ts` and `src/tina/config.ts.` Otherwise, the theme is built to rely only on the Astro content collection API for reading the content.

## Credits and acknowledgments

If you find this theme useful, please consider starring the repo, and sharing it.

@leowilkin contributed to dark mode, and styling updates
