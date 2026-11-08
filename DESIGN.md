---
name: Black & White Electrical
description: Authentic, high-contrast, phone-first visual design system for an approved Pretoria North installation electrician.
colors:
  primary: "#f59e0b"
  primary-hover: "#d97706"
  primary-text: "#000000"
  secondary: "#047857"
  secondary-hover: "#059669"
  neutral-dark: "#020617"
  neutral-charcoal: "#0f172a"
  neutral-card: "#1e293b"
  neutral-surface: "#f8fafc"
  neutral-border: "#e2e8f0"
  text-heading: "#0f172a"
  text-body: "#334155"
  text-muted: "#64748b"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-text}"
    rounded: "{rounded.lg}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-whatsapp:
    backgroundColor: "{colors.secondary}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "14px 24px"
  button-whatsapp-hover:
    backgroundColor: "{colors.secondary-hover}"
  card-surface:
    backgroundColor: "#ffffff"
    textColor: "{colors.text-body}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Black & White Electrical

## Overview

Black & White Electrical's visual system expresses direct tradesman authenticity, industrial precision, and straightforward honesty ("Electrical Work in Black & White — Honest, Clear-Cut, No Grey Areas"). Designed specifically for homeowners in distress during power outages or property transfers, the interface prioritizes immediate legibility, high contrast under harsh sunlight and low indoor light, sub-second loading on 3G cellular networks, and zero cognitive friction.

## Colors

The palette is strictly rooted in safety trade conventions and high-contrast functionality:

- **Safety Amber (`#f59e0b` / Tailwind `amber-500`)**: The primary brand accent and main call-to-action color, representing electrical caution, certified craft, and immediate energy. Always paired with pure black (`#000000`) text for uncompromising WCAG AAA contrast (8.5:1).
- **Industrial Black & Charcoal (`#020617` / `#0f172a`)**: Sets the tone for header announcement bars, hero sections, and footer anchors. Delivers weight, authority, and durability.
- **Accessible WhatsApp Emerald (`#047857` / Tailwind `emerald-700`)**: Dedicated communication channel color calibrated specifically to exceed WCAG 2.1 AA 4.5:1 contrast requirements against pure white text (`#ffffff` on `#047857` yields 5.14:1).
- **Clean Architectural Surface (`#f8fafc`)**: A light slate neutral foundation that prevents stark blinding white backgrounds while maintaining clean separation from card containers.
- **Functional Border Slate (`#e2e8f0` / `#cbd5e1`)**: Defines structural edges without decorative card shadows.

## Typography

- **Font Family**: Modern system native sans-serif stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`). Zero font network requests ensures instantaneous text rendering during power outage network congestion.
- **Hierarchy**:
  - **Display (Hero Headline)**: 900 (Black) weight with tight negative letter tracking (`-0.025em`) to emphasize the direct "Black & White" statement.
  - **Headlines (H2/H3)**: 800 (Extra Bold) weight in dark slate (`#0f172a`) with natural conversational phrasing.
  - **Body Copy**: 400 (Regular) weight in balanced slate (`#334155`), line height 1.6, keeping line measure between 60–75 characters for relaxed scanning.
  - **Utility Badges**: 700 (Bold) uppercase tracking (`letter-spacing: 0.05em`) in restrained 12px sizing for statutory citations (SANS 10142-1, CoC).

## Layout

- **Single-Page Phone-First Rhythm**: Built for thumb interaction on mobile devices with a persistent dual-action fixed dock ("Call Paul" + "WhatsApp") pinned above the iOS home indicator bar (`env(safe-area-inset-bottom)`).
- **Section Progression**:
  1. Top Status & Bilingual Bar (Greater Pretoria dispatch + Afrikaans welcome).
  2. Hero Section (Immediate value proposition + primary call/WhatsApp dispatches).
  3. Interactive Problem Triage (Accessible tablist routing common electrical faults).
  4. 4 Service Pillars (CoC, emergency fault finding, DB rewiring, geyser heating).
  5. Home Seller's CoC Compliance Guide (4-step statutory transfer walkthrough).
  6. Meet Paul Badenhorst (Owner-operator credibility and physical workshop base).
  7. Service Areas Directory (Pretoria North base + Greater Pretoria suburb directory).
  8. Direct Contact & Conveyancing Particulars (Phone, WhatsApp, email, workshop address).
- **Responsive Max-Width Container**: `max-w-6xl` (1152px) with 16px mobile gutters expanding to 32px on desktop.

## Elevation & Depth

- **Tactile, Flat-Layered Architectural Depth**: The design deliberately rejects diffuse, colored drop-shadows and artificial blurred gradients.
- **Subtle Structural Borders**: Cards use clean 1px or 2px solid borders (`border-slate-200` or `border-amber-300`) with modest ambient elevation (`shadow-sm`) to feel physically grounded like an electrical panel or certificate binder.
- **Mobile Action Dock**: Pinned `z-50` dock with `bg-slate-950/95 backdrop-blur border-t border-slate-800 shadow-2xl` to elevate urgent conversion above scrolling content.

## Shapes

- **Consistent Geometric Radii**:
  - `rounded-xl` (12px) for primary action buttons, tab pills, and quick-jump navigation tags.
  - `rounded-2xl` (16px) for primary service and diagnostic cards.
  - `rounded-full` (pill) for status indicators and small geographic badges.
- **Logo Mark**: Solid high-contrast black square badge with a 2px white internal border and crisp, uppercase lettering (`B&W ELEC`).

## Components

- **Primary Call Button**:
  - Background: `#f59e0b` (Amber-500), Hover: `#d97706` (Amber-600).
  - Text: `#000000` (Black font-black).
  - Minimum touch target: 48px height on mobile (`py-3.5`).
  - Tactile press feedback: `active:scale-95 transition-transform`.
- **WhatsApp Action Button**:
  - Background: `#047857` (Emerald-700), Hover: `#059669` (Emerald-600).
  - Text: `#ffffff` (White font-bold).
  - Pre-formatted dynamic query text tailored to the selected problem category.
- **Interactive Problem Triage Selector**:
  - Semantic `role="tablist"` with keyboard arrow navigation (`ArrowLeft` / `ArrowRight`).
  - Active Tab: High-contrast amber background with black bold text.
  - Inactive Tab: Subtle light slate background with dark slate border and accessible text contrast.
  - Pre-rendered static HTML fallback for instant zero-JS resilience during weak mobile connections.
- **Persistent Mobile Action Dock**:
  - Fixed dual-column dock visible only on mobile screens (`md:hidden`).
  - Includes `env(safe-area-inset-bottom)` clearance for iPhone gesture bars.

## Do's and Don'ts

### Do
- **Do keep conversion direct**: Every conversion path must route immediately to Paul's phone (`071 213 8108`) or pre-formatted WhatsApp.
- **Do maintain accessible text contrast**: Always use black or amber-950 text on amber backgrounds, and dark emerald (`#047857`) for WhatsApp CTAs.
- **Do honor physical trade facts**: Ground copy in genuine statutory credentials (SANS 10142-1, DoL registered, 15 President Steyn St base).
- **Do test touch targets**: Ensure all interactive buttons and tabs maintain at least 44x44px bounding boxes.
- **Do support bilingual Pretoria context**: Maintain welcoming bilingual cues (*"Tweetalige diens • Praat gerus Afrikaans"*).

### Don't
- **Don't use decorative gradient text**: AI gradient text obscures glyph legibility and undermines trade authenticity.
- **Don't use incongruous iconography**: Never use chemistry beakers or generic lab symbols for domestic geyser repairs. Use hot water/element icons.
- **Don't fabricate fake digital reviews**: Never insert generic 5-star review badges or artificial quotes. Credibility rests on statutory license and physical accountability.
- **Don't add asynchronous email quote forms**: Stressed homeowners with tripped power will not fill out 6-step quote wizards; preserve direct phone access.
