---
name: Black & White Electrical — Pretoria Warm Craft
description: Daylight sandstone, workshop charcoal, burnished amber, and bushveld olive visual system for an approved Pretoria North installation electrician.
colors:
  primary: "#f59e0b"
  primary-hover: "#d97706"
  primary-text: "#1c1917"
  secondary: "#365314"
  secondary-hover: "#3f6212"
  neutral-dark: "#1c1917"
  neutral-charcoal: "#292524"
  neutral-card: "#fffdf9"
  neutral-surface: "#f6f2ea"
  neutral-surface-alt: "#ede7dc"
  neutral-border: "#dfd7ca"
  text-heading: "#1c1917"
  text-body: "#44403c"
  text-muted: "#57534e"
  accent-copper: "#b45309"
typography:
  display:
    fontFamily: "'Bitter', Georgia, Cambria, serif"
    fontSize: "clamp(2rem, 5vw, 3.35rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Bitter', Georgia, Cambria, serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  xl: "22px"
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
    backgroundColor: "{colors.neutral-card}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Black & White Electrical (Pretoria Warm Craft)

## Overview

Black & White Electrical's visual system ("Pretoria Warm Craft") pairs a calm, daylight sandstone foundation (`#f6f2ea`) with grounded workshop charcoal (`#1c1917`), burnished amber (`#f59e0b`), and bushveld olive (`#365314`). Built for homeowners in distress during power faults or property transfers, it prioritizes effortless outdoor/indoor readability, direct phone and WhatsApp access, and authentic Pretoria craftsman warmth.

## Colors

- **Burnished Amber (`#f59e0b`)**: Primary call-to-action accent paired with deep workshop charcoal (`#1c1917`) text for strong contrast.
- **Workshop Charcoal (`#1c1917` / `#292524`)**: Grounds the announcement bar, direct contractor dispatch card, CoC walkthrough band, contact channel card, footer, and mobile action dock.
- **Bushveld Olive (`#365314` / `#3f6212`)**: Accessible WhatsApp communication channel color against pure white text (`#ffffff`).
- **Daylight Limestone & Parchment (`#f6f2ea` / `#fffdf9` / `#ede7dc`)**: Warm, glare-friendly surface hierarchy separated by subtle stone borders (`#dfd7ca`).

## Typography

- **Display & Headings**: `Bitter` (600/700, with italic `#b45309` emphasis in the hero) — sturdy craftsman serif warmth with `Georgia` fallback.
- **Body Copy**: `Source Sans 3` (400/500/600/700) — high-legibility humanist sans with system fallbacks.
- **Technical Specs & Indices**: `IBM Plex Mono` for phone readouts, SANS 10142-1 references, and CoC step numbers.

## Layout & Components

- **Hero Split**: Warm daylight hero on the left with a grounded `#1c1917` Direct Contractor Line ledger card on the right.
- **Interactive Problem Triage**: Accessible `role="tablist"` with warm stone inactive tabs and amber active state routing straight to pre-filled WhatsApp queries.
- **Service Pillars & CoC Walkthrough**: Soft `22px` rounded cards with `14px` rounded action buttons and subtle `rgba(28, 25, 23, 0.05)` elevation.
- **Persistent Mobile Dock**: Fixed bottom Call + WhatsApp bar on mobile (`md:hidden`) with `env(safe-area-inset-bottom)` clearance.
