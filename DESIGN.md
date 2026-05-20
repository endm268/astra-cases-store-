# DESIGN.md - Astra Cases Visual Identity & Design System

## 1. Introduction

This document defines the visual identity and design system for the "Astra Cases" storefront. The goal is to build a clean, modern "premium tech" store for phone cases, featuring a soft space-inspired touch drawing from astral exploration, space stations, and high-speed galactic journeys.

We are utilizing the layout of the **TG wireless** store as our primary starting point, adopting its clean structure, cool color tones, and soft rounded interfaces, while adapting unique elements to fit our distinct space-inspired identity without copying copyrighted game UI.

---

## 2. Color Palette

We will adopt a cool, clean, space-inspired color palette, which acts as an evolution of the reference image's tones.

| Element               | Proposed Color                    | Description                                           | Application                                            |
| :-------------------- | :-------------------------------- | :---------------------------------------------------- | :----------------------------------------------------- |
| **Primary**           | Deep Space Blue                   | Represents deep space; provides high contrast.        | Gallery background card (Right)                        |
| **Accent**            | Stellar Blue (Radiant light blue) | Represents twinkling stars; used for highlighting.    | Primary buttons, availability icons, navigation arrows |
| **Secondary**         | Nebulous Blue (Pale light blue)   | Represents gas nebulas; used for soft backgrounds.    | Text card background (Left)                            |
| **Background**        | Station White (Pure white)        | Represents the cleanliness of modern space stations.  | Main page background                                   |
| **Text**              | Dark Gray / Soft Black            | Ensures high readability and contrast.                | Headlines, body text, descriptions                     |
| **Subtle Highlights** | Stardust Gold (Faint yellow)      | A very subtle, optional touch for "stardust" accents. | Orbiting text ring in the gallery                      |

---

## 3. Typography

We use clean, modern geometric fonts suitable for tech and space themes, ensuring readability across all devices, with a focus on blending Arabic and English smoothly.

| Type          | Proposed Font                                              | Description                                  | Application                                   |
| :------------ | :--------------------------------------------------------- | :------------------------------------------- | :-------------------------------------------- |
| **Headlines** | Modern geometric (e.g., **Inter** or standard shadcn font) | Clean, strong, and tech-forward.             | Main headlines, product names, section titles |
| **Body Text** | Modern geometric (e.g., **Inter**)                         | Clear and highly legible for longer reading. | Descriptions, trust metrics, button text      |

---

## 4. Layout & Structure

We adopt the general page structure from the reference design, modifying elements specifically for Astra Cases.

- **Top Navbar:** Astra Cases logo, navigation links (Home, Cases, Catalog, Contacts), search bar, and a shopping cart icon.
- **Split Hero Section:**
  - **Left Card (White/Light):**
    - Availability badge (Light blue icon) with text: "Cases are available".
    - Main Headline: "Your source for premium galaxy-inspired phone cases".
    - Description: "Scale your style with cases for top-brand devices".
    - Primary Button: "Browse Cases" with an arrow icon.
    - Phone brand compatibility logos (e.g., Apple, Samsung, Google).
    - Trust metrics (e.g., "8,450+ stellar customers", "6 month warranty").
  - **Right Card (Deep Blue):**
    - Gallery of high-quality phone cases (showcasing soft space designs).
    - A rotating star ring effect around the product with repeating text like "Browse cases" (replacing the "Learn more" rotation in the reference), resembling orbiting planets.
    - Image navigation buttons (Light blue arrows).
    - Stock status indicator ("In Stock" with an icon).

---

## 5. Components & Animations

We use standard `shadcn/ui` components as a base, customizing the appearance (colors, rounded borders) based on the color palette. All animations are strictly executed using GSAP.

### 5.1 Components (shadcn/ui)

- **Buttons:** Standard shadcn/ui buttons, customized with Primary (Deep Blue) or Accent (Stellar Blue) colors.
- **Inputs:** Clean, standard shadcn/ui search bars and form fields.
- **Cards:** Using heavily rounded corners for hero sections and product grids to maintain the clean, friendly aesthetic.

### 5.2 Animations (GSAP Only)

- **Entrance Animations:** Smooth entry effects on page load:
  - Gradual fade-ins for text and images.
  - Subtle scale-ins for main cards.
  - Smooth translation (movement) for headlines and buttons.
- **Scroll Animations (ScrollTrigger):** Animating elements during scrolling:
  - Triggering product cards to appear as they enter the viewport.
  - Slight parallax effects for background elements.
- **Rotation Effect:** Using GSAP to continuously and smoothly rotate the star/text ring in the hero gallery, creating a spatial "orbiting" sensation.

---

## 6. Space Theme Adaptation

Adapting space elements smartly without compromising the clean e-commerce feel.

- **Icons:** Clean, minimal icons (Lucide React) with slight nods to space (e.g., a cart icon that subtly resembles a space station module or express train car).
- **Background:** An optional, extremely subtle scattered starfield texture (tiny dots) on the white background to deepen the stellar feel without creating clutter.
- **Orbit:** The dotted circle in the gallery acts visually like comets or asteroids orbiting a central planet (the phone case).
- **Terminology:** Using precise, immersive terms like "Catalog", "Stellar Clients", or "Collection".

---

## 7. Design Rules Compliance Checklist

- **Mobile-first design:** Integrated into the core structure.
- **GSAP only for animations:** Clearly defined; Framer Motion is strictly prohibited.
- **No cluttered UI:** Focus remains on clean spaces and rounded cards.
- **No heavy HUD style:** Interfaces remain standard web e-commerce, not video game menus.
- **No direct copyrighted game assets:** Inspiration is purely atmospheric and thematic.
- **No random gradients:** Colors are solidly defined.
- **Products remain the visual focus:** The layout inherently directs the eye to the product gallery.
