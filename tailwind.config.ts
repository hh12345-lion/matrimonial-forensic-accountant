import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      nav: "1200px",
    },
    extend: {
      colors: {
        /** Deep plum-slate: primary brand, heroes, footer */
        navy: "#2A2235",
        /** Warm copper: accents, CTAs, highlights */
        gold: "#B8865B",
        "gold-light": "#D4A574",
        "gold-muted": "#E8D4C4",
        charcoal: "#5C5568",
        "section-alt": "#F8F6F9",
        line: "#E8E4EC",
        heading: "#2A2235",
        body: "#4A4455",
        cream: "#FDFCFA",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)"],
        sans: ["var(--font-source-sans)"],
      },
      borderRadius: {
        card: "8px",
      },
      boxShadow: {
        card: "0 2px 14px rgba(42, 34, 53, 0.07), 0 1px 4px rgba(42, 34, 53, 0.04)",
        "card-hover":
          "0 8px 24px rgba(42, 34, 53, 0.1), 0 2px 8px rgba(184, 134, 91, 0.08)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #2A2235 0%, #3D3250 48%, #2A2235 100%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(184, 134, 91, 0.18) 0%, transparent 55%)",
      },
      minHeight: {
        touch: "44px",
      },
      minWidth: {
        touch: "44px",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-cream",
    "bg-page",
    "bg-hero-gradient",
    "bg-hero-glow",
    "bg-section-alt",
    "bg-gold",
    "bg-gold-light",
    "bg-gold-muted",
    "text-gold",
    "text-gold-light",
    "text-body",
    "text-heading",
    "text-charcoal",
    "text-navy",
    "border-gold",
    "border-gold/40",
    "border-gold/50",
    "border-gold/60",
    "border-line",
    "border-line/80",
    "divide-line",
    "border-gold-light",
    "shadow-card",
    "shadow-card-hover",
    "rounded-card",
    "hover:shadow-card-hover",
    "hover:border-gold",
    "hover:border-gold/40",
    "hover:bg-gold-light",
    "hover:text-gold",
    "hover:text-gold-light",
    "hover:text-navy",
    "hover:bg-gold/10",
    "hover:bg-gold-muted",
    "focus-visible:ring-gold",
    "focus-visible:ring-gold-light",
  ],
};

export default config;
