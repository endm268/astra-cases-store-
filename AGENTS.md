# Astra Cases - Project Agents & Development Guidelines

## 1. Project Overview

Astra Cases is a premium e-commerce landing page and storefront for mobile accessories, phone cases, and related products.

The visual identity is inspired by astral exploration, space stations, cosmic travel, and the feeling of a futuristic journey across galaxies. The design can take light inspiration from the atmosphere of Honkai: Star Rail, especially the ideas of space travel, stations, paths, and an express train journey, but it must not copy game assets, logos, characters, UI screens, or copyrighted visuals.

The project should feel like a clean premium tech store with a soft space-inspired identity, not like a heavy game interface.

---

## 2. Product Vision

The goal is to build a simple, elegant, and usable online store.

The user should be able to:

- Browse products.
- View categories.
- Add products to cart.
- Review cart items.
- Click a purchase button.
- Open WhatsApp with a pre-filled invoice/order message sent to the store number configured in the dashboard.

The store should focus on clarity, product presentation, smooth user experience, and mobile-first usage.

---

## 3. Tech Stack

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- UI Components: shadcn/ui
- Animation: GSAP only
- Scroll Animation: GSAP ScrollTrigger
- ORM: Drizzle ORM
- Database: Neon Postgres
- Validation: Zod
- Icons: Lucide React

Do not use Framer Motion for animations. All animation work must use GSAP.

---

## 4. Core Features

### Storefront

- Landing page
- Hero section
- Product categories
- Featured products
- Product listing
- Product details
- Cart
- WhatsApp checkout
- Arabic and English support
- RTL and LTR layout support

### Admin Dashboard

- Manage products
- Manage categories
- Manage store settings
- Manage WhatsApp checkout number
- Manage homepage content if needed
- Manage featured products
- Simple order preview if needed later

The dashboard should be simple, clean, and practical. Avoid over-engineering.

---

## 5. Storefront Flow

The checkout flow should work as follows:

1. User browses products.
2. User adds products to cart.
3. User opens cart.
4. User reviews selected products and quantities.
5. User clicks "Buy via WhatsApp".
6. The system generates a clean invoice/order summary.
7. The website opens WhatsApp using the store number from settings.
8. The WhatsApp message includes product names, quantities, prices, total amount, and optional customer notes.

No online payment integration is required at this stage.

---

## 6. Admin Dashboard Scope

The admin dashboard should include:

### Products

- Product name in Arabic and English
- Description in Arabic and English
- Price
- Discount price if needed
- Product image
- Category
- Stock status
- Featured flag
- Active/inactive status

### Categories

- Category name in Arabic and English
- Description
- Icon or image
- Sort order
- Active/inactive status

### Store Settings

- Store name
- Store description
- WhatsApp phone number
- Main hero title
- Main hero subtitle
- Logo
- Social links if needed
- Default language
- Currency

---

## 7. Database & Data Management

Use Drizzle ORM with Neon Postgres.

The database should remain simple and focused.

Recommended tables:

- products
- categories
- store_settings

Optional later:

- orders
- users
- admin_sessions

Do not expose database credentials in documentation, code comments, GitHub, or public files. All secrets must be stored in environment variables only.

---

## 8. Agent Responsibilities

### UI/UX Agent

Responsible for keeping the design aligned with the Astra Cases visual identity.

Rules:

- Follow DESIGN.md strictly.
- Keep the design premium, clean, and product-focused.
- Use astral and space-inspired details subtly.
- Do not create a cluttered gaming interface.
- Do not copy Honkai: Star Rail assets, characters, logos, or exact UI.

### Frontend Agent

Responsible for implementing the storefront.

Rules:

- Use reusable React components.
- Use shadcn/ui where useful.
- Use Tailwind CSS for styling.
- Use GSAP for animations.
- Support Arabic and English.
- Support RTL and LTR.
- Keep layouts responsive and mobile-first.

### Dashboard Agent

Responsible for implementing the admin dashboard.

Rules:

- Keep the dashboard simple and practical.
- Prioritize product, category, and settings management.
- Avoid unnecessary complex analytics at this stage.
- Make forms clean and easy to use.

### Data Agent

Responsible for database schema, Drizzle setup, validation, and data flow.

Rules:

- Use Drizzle ORM.
- Use Zod validation.
- Keep database models simple.
- Never hard-code secrets.
- Keep settings editable from dashboard where possible.

### QA Agent

Responsible for quality checks.

Rules:

- Check responsive layout.
- Check RTL and LTR behavior.
- Check accessibility.
- Check animation performance.
- Respect prefers-reduced-motion.
- Remove unused code.
- Keep TypeScript strict and clean.

---

## 9. Development Rules

- Mobile-first design.
- GSAP only for animations.
- No Framer Motion.
- No cluttered UI.
- No heavy gaming HUD style.
- No direct copyrighted game assets.
- No exposed secrets.
- No random gradients.
- No unnecessary dependencies.
- Keep the storefront fast.
- Keep the dashboard simple.
- Products must remain the main visual focus.

---

## 10. Execution Phases

### Phase 1: Foundation

- Project structure
- Tailwind theme
- shadcn/ui setup
- Fonts
- Basic layout
- AGENTS.md and DESIGN.md finalized

### Phase 2: Landing Page

- Navbar
- Hero section
- Categories section
- Featured products
- Cart preview
- Footer
- GSAP entrance animations
- ScrollTrigger animations

### Phase 3: Store Functionality

- Product listing
- Product details
- Cart state
- WhatsApp checkout

### Phase 4: Database

- Drizzle setup
- Neon Postgres connection
- Products table
- Categories table
- Store settings table

### Phase 5: Admin Dashboard

- Product management
- Category management
- Store settings management

### Phase 6: Polish

- RTL/LTR refinement
- Animation polish
- Performance audit
- Accessibility audit
- Mobile testing
