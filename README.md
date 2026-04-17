# MARS CLUB

MARS CLUB is a modern Next.js site for the Mechanical Automation Robotics Society. It presents the club's identity, events, learning resources, team, gallery, achievements, and contact flow in a dark, engineering-focused design.

## Overview

The site is built as a content-driven club showcase rather than a generic landing page. The home page combines a Spline-powered robotic arm hero, editorial section layouts, and reusable UI primitives so the experience feels closer to a real technical society website.

## Features

- Responsive App Router pages for Home, About, Team, Events, Learning, Gallery, Achievements, and Contact
- Spline robotic arm integration in the hero section
- Reusable navbar, footer, cards, section wrappers, and form controls
- Data-backed sections for events, learning resources, team members, gallery items, and achievements
- Dark, futuristic visual language with gradients, glass panels, and motion accents
- Mobile-friendly layouts and shared UI primitives built in a shadcn-style structure

## Tech Stack

- Next.js 14 with the App Router
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- @splinetool/react-spline
- next-themes
- Lucide React
- class-variance-authority, clsx, tailwind-merge

## Getting Started

### Prerequisites

- Node.js 18 or newer
- pnpm recommended

### Install

```bash
pnpm install
```

### Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
pnpm dev      # Start the development server
pnpm build    # Build the production app
pnpm start    # Start the production server
pnpm lint     # Run linting
```

## Project Structure

```text
app/              # Route segments and page layouts
components/       # Shared UI and section components
public/           # Static assets and images
styles/           # Global styling helpers
types/            # TypeScript types
utils/            # Utility helpers
```

## Content Model

Most club content is separated from the page shell so it can be updated without reworking layout code. The homepage and section pages pull from structured data for things like events, learning resources, team spotlights, and gallery content.

If you want to update the site:

- Edit page copy in the relevant route component under `app/`
- Update reusable visuals in `components/`
- Replace images and static assets in `public/`
- Adjust theme tokens and global styles in `app/globals.css` or `styles/globals.css`

## Spline Note

The hero uses an embedded Spline scene. If you want to change the 3D content, update the Spline scene URL or replace the component with a different visual asset.

## Deployment

The project can be deployed to Vercel or any platform that supports Node.js and Next.js.

Typical deployment flow:

1. Push the repository to your Git host.
2. Connect it to your deployment platform.
3. Set the build command to `pnpm build`.
4. Set the start command to `pnpm start` if required.

## Notes

- The repository currently includes some legacy portfolio-related files from an earlier template, but the MARS CLUB pages are the main experience.
- If you add new sections, keep them consistent with the existing dark, engineering-first visual language.
