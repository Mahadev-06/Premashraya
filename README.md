# Premashraya Care Web App

A modern, highly performant, and premium web application built for the **Premashraya Charitable Trust**—a free cancer patient shelter based in Bhubaneswar and Cuttack, Odisha, India. The platform is designed to connect patients and their families with the shelter's services, facilitate direct donations, and make it seamless to inquire about stays.

---

## 1. Project Overview
**Premashraya** is a supportive cancer care shelter home providing free hygienic accommodation, nourishing meals, local transport assistance, and mental health/counselling support to cancer patients undergoing treatment (along with one caregiver companion). This web application serves as the digital front desk and trust-building portal for the organization.

---

## 2. The Problem
Cancer treatment (especially chemotherapy and radiation) requires patients to stay near major treatment centers in cities like Bhubaneswar and Cuttack for weeks or months. This introduces severe friction points:
- **Financial Strain:** Accommodations and food near hospitals are prohibitively expensive for low-income families.
- **Lack of Hygiene:** Low-cost options are often crowded and unsanitized, which is dangerous for patients with compromised immune systems undergoing therapy.
- **Logistical Navigation:** Navigating hospital departments, medical documentation, and schedules creates extreme stress.
- **Emotional Exhaustion:** The psychological burden on both patients and caregivers is immense, with little to no emotional support systems.

---

## 3. The Solution
The **Premashraya Care Web App** addresses these problems by providing:
- **Clean Digital Access:** An easy-to-use website where patients, social workers, and families can quickly inspect shelter amenities (rooms, floor plans, sanitization rules, and daily life schedules).
- **Hospital Support Info:** Clear visibility into the shelter's patient assistance and guidance team in hospitals.
- **Frictionless Donations:** A dedicated portal with copy-to-clipboard UPI details, direct Bank Transfer details, and Razorpay integrations to make giving secure and effortless.
- **Bilingual Accessibility:** Fully accessible in both English and Odia to reach local and state-wide demographics.
- **Mobile First Optimization:** Light-speed, lag-free loading optimized for mobile screens (majority of the target user base).

---

## 4. Key Features
- **Bilingual Interface (English & Odia):** Toggle languages instantly via a context-driven state manager without page reloads.
- **Premium User Experience:**
  - Smooth, non-invasive inertia scrolling globally integrated via **Lenis**.
  - Dynamic micro-interactions and transitions powered by **Framer Motion**.
- **Interactive Donation Center:**
  - Impact-linked giving options (e.g., see how ₹500, ₹1,000, ₹2,500, or ₹5,000 directly helps a patient).
  - Secure UPI copy chip and copyable Bank Account details (Axis Bank Ltd) for manual wire transfers.
  - Integration support for Razorpay online checkout.
- **SEO & Performance Optimization:**
  - High-performance media loading utilizing Next.js custom image optimization, responsive `sizes`, and lazy video mounting hooks.
  - Structured metadata schema markup (LD-JSON) for search engine indexing.
- **Bilingual Contact Form:** Fully integrated with Formspree (with client-side character filtering to prevent invalid phone numbers or names dynamically).

---

## 5. Technology Stack
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Core Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion v12](https://www.framer.com/motion/)
- **Smooth Scrolling:** [Lenis](https://lenis.darkroom.engineering/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Form Processing:** [Formspree](https://formspree.io/)
- **State Management:** React Context API (custom `LanguageContext` for i18n translations)
- **Deployment & Language support:** Full static/dynamic server compatibility.
