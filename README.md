# BabyMakers IVF — Fertility Clinic Website

A multi-page, responsive website for a fertility and IVF clinic, built with **React 18**, **Vite 5** and **Tailwind CSS 4**. It presents treatments, genetic testing, international patient support and a blog, and lets visitors book a consultation or contact the clinic.

## Features

- **Nine routes:** Home (`/`), About (`/about`), Services (`/services`), International patients (`/international`), Blog (`/blog`), Contact (`/contact`), Genetic Testing (`/genetic`) and Booking (`/booking`)
- **Multi-step booking form** collecting personal details, service, date and time, and notes, then sending the request to the clinic's WhatsApp (`wa.me`)
- **Contact form** that also opens a pre-filled WhatsApp message, plus phone, email and an embedded map
- **Rule-based chatbot ("Aria")** that answers common questions about IVF, ICSI, egg freezing, genetic testing and international care using keyword matching. It is not connected to an AI service
- **Floating call and WhatsApp buttons** on every page
- **Six colour themes** (light, dark, rose, ocean, forest, sunset), saved in `localStorage`
- Image gallery, scroll-to-top on navigation, and a responsive Navbar and Footer

## Tech stack

| Area | Tools |
|---|---|
| UI | React `^18.2.0`, React DOM `^18.2.0` |
| Routing | React Router DOM `^6.22.0` |
| Styling | Tailwind CSS `^4.2.2` (via `@tailwindcss/vite`) plus per-page CSS files |
| Icons | Lucide React `^1.8.0` |
| Build tool | Vite `^5.1.0`, `@vitejs/plugin-react` `^4.2.1` |

## Project structure

```text
babymakerivf/
├── public/images/        # Banners, logo, team and social icons
├── src/
│   ├── components/       # Navbar, Footer, BookingForm, Chatbot,
│   │                     # Floatingcontactbuttons, Gallery, SectionHeader, ScrollToTop
│   ├── pages/            # Home, About, Services, International, Blog,
│   │                     # Contact, GeneticTesting (each with its own CSS)
│   ├── styles/global.css # Global styles and theme variables
│   ├── App.jsx           # Routes, theme state, chatbot and floating buttons
│   └── main.jsx          # Entry point (BrowserRouter)
├── index.html
├── vite.config.mjs
└── package.json
```

## Getting started

Requires Node.js 18 or newer.

```bash
git clone https://github.com/Abhishek7258/BabyMakerIvf.git
cd BabyMakerIvf
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |

## Deployment

`npm run build` produces a static site in `dist/`, which can be hosted on Netlify, Vercel, GitHub Pages or any static host. The app uses `BrowserRouter`, so configure the host to serve `index.html` for unknown paths so refreshing a route such as `/booking` works.

## Before going live

- The WhatsApp number, phone, email and map embed are set in `src/components/BookingForm.jsx`, `src/components/Floatingcontactbuttons.jsx` and `src/pages/Contact.jsx`. Update them together.
- Success rates, prices and other figures in `src/components/Chatbot.jsx` and the page copy are placeholder content. Replace them with figures the clinic can verify.
