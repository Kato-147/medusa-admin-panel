const path = require("path")
const preset = require("@medusajs/ui-preset")

let extensionPaths = []

try {
  extensionPaths = require("./tailwind.content").content
} catch (e) {
  // ignore
}

let uiPath = ""

try {
  uiPath = path.resolve(
    path.dirname(require.resolve("@medusajs/ui")),
    "../..",
    "**/*.{js,ts,jsx,tsx}"
  )
} catch (e) {
  // ignore
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  darkMode: "class",
  content: [
    path.join(__dirname, "src/**/*.{js,ts,jsx,tsx}"),
    path.join(__dirname, "./index.html"),
    uiPath,
  ].concat(extensionPaths.map((ext) => path.join(__dirname, ext))),
  theme: {
    
    screens: {},
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    
    extend: {
      transitionProperty: {
        width: "width margin",
        height: "height",
        bg: "background-color",
        display: "display opacity",
        visibility: "visibility",
        padding: "padding-top padding-right padding-bottom padding-left",
      },
      colors: {
        grey: {
          0: "#FFFFFF",
          5: "#F9FAFB",
          10: "#F3F4F6",
          20: "#E5E7EB",
          30: "#D1D5DB",
          40: "#9CA3AF",
          50: "#6B7280",
          60: "#4B5563",
          70: "#374151",
          80: "#1F2937",
          90: "#111827",
        },
        violet: {
          5: "#F5F3FF",
          10: "#EDE9FE",
          20: "#DDD6FE",
          30: "#C4B5FD",
          40: "#A78BFA",
          50: "#8B5CF6",
          60: "#7C3AED",
          70: "#6D28D9",
          80: "#5B21B6",
          90: "#4C1D95",
        },
        pink: {
          5: "#FDF2F8",
          10: "#FCE7F3",
          20: "#FBCFE8",
          30: "#F9A8D4",
          40: "#F472B6",
          50: "#EC4899",
          60: "#DB2777",
          70: "#BE185D",
          80: "#9D174D",
          90: "#831843",
        },
        orange: {
          5: "#FFF7ED",
          10: "#FFEDD5",
          20: "#FED7AA",
          30: "#FDBA74",
          40: "#FB923C",
          50: "#F97316",
          60: "#EA580C",
          70: "#C2410C",
          80: "#9A3412",
          90: "#7C2D12",
        },
        teal: {
          5: "#F0FDFA",
          10: "#CCFBF1",
          20: "#99F6E4",
          30: "#5EEAD4",
          40: "#2DD4BF",
          50: "#14B8A6",
          60: "#0D9488",
          70: "#0F766E",
          80: "#115E59",
          90: "#134E4A",
        },
        cyan: {
          5: "#ECFEFF",
          10: "#CFFAFE",
          20: "#BAE6FD",
          30: "#67E8F9",
          40: "#22D3EE",
          50: "#06B6D4",
          60: "#0891B2",
          70: "#0E7490",
          80: "#155E75",
          90: "#164E63",
        },
        indigo: {
          5: "#EEF2FF",
          10: "#E0E7FF",
          20: "#C7D2FE",
          30: "#A5B4FC",
          40: "#818CF8",
          50: "#6366F1",
          60: "#4F46E5",
          70: "#4338CA",
          80: "#3730A3",
          90: "#312E81",
        },
        fuschia: {
          5: "#FDF4FF",
          10: "#FAE8FF",
          20: "#F5D0FE",
          30: "#F0ABFC",
          40: "#E879F9",
          50: "#D946EF",
          60: "#C026D3",
          70: "#A21CAF",
          80: "#86198F",
          90: "#701A75",
        },
        rose: {
          5: "#FFF1F2",
          10: "#FFE4E6",
          20: "#FECDD3",
          30: "#FDA4AF",
          40: "#FB7185",
          50: "#F43F5E",
          60: "#E11D48",
          70: "#BE123C",
          80: "#9F1239",
          90: "#881337",
        },
        yellow: {
          5: "#FEFCE8",
          10: "#FEF9C3",
          20: "#FEF08A",
          30: "#FDE047",
          40: "#FACC15",
          50: "#EAB308",
          60: "#CA8A04",
          70: "#A16207",
          80: "#854D0E",
          90: "#713F12",
        },
        emerald: {
          5: "#ECFDF5",
          10: "#CCFBF1",
          20: "#A7F3D0",
          30: "#6EE7B7",
          40: "#34D399",
          50: "#10B981",
          60: "#059669",
          70: "#047857",
          80: "#065F46",
          90: "#064E3B",
        },
        blue: {
          5: "#EFF6FF",
          10: "#DBEAFE",
          20: "#BFDBFE",
          30: "#93C5FD",
          40: "#60A5FA",
          50: "#3B82F6",
          60: "#2563EB",
          70: "#1D4ED8",
          80: "#1E40AF",
          90: "#1E3A8A",
        },
        vice: {
          start: "#7C53FF",
          stop: "#F796FF",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      heigth: {
        18: "4.5rem",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "2xsmall": "0.25rem",
        xsmall: "0.5rem",
        small: "0.75rem",
        base: "1rem",
        large: "1.5rem",
        xlarge: "2rem",
        "2xlarge": "2.5rem",
        "3xlarge": "3rem",
        "4xlarge": "3.5rem",
        "5xlarge": "4rem",
        "6xlarge": "6rem",
      },
      width: {
        largeModal: "750px",
        18: "4.5rem",
        29: "7.25rem",
        inherit: "inherit",
        eventButton: "127px",
      },
      minWidth: {
        modal: "520px",
        sidebar: "240px",
      },
      maxWidth: {
        sidebar: "240px",
      },
      minHeight: {
        topbar: "56px",
        content: "calc(100vh - 56px)",
        "radix-accodion": "var(--radix-accordion-content-height)",
      },
      maxHeight: {
        topbar: "56px",
      },
      lineHeight: {
        xsmall: "1rem",
        small: "1.25rem",
        base: "1.5rem",
        large: "2.25rem",
        xlarge: "3rem",
        "2xlarge": "4rem",
        "3xlarge": "4.5rem",
        "4xlarge": "6rem",
      },
      fontSize: {
        xsmall: "10px",
        small: "12px",
        base: "14px",
        large: "16px",
        xlarge: "24px",
        "2xlarge": "30px",
        "3xlarge": "40px",
        "4xlarge": "48px",
        "5xlarge": "60px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
        mono: ["Roboto Mono", "Menlo", "monospace"],
      },
      screens: {
        xsmall: "0px",
        small: "769px",
        medium: "1025px",
        large: "1464px",
      },
      boxShadow: {
        cta: "0px 0px 0px 4px rgba(124, 58, 237, 0.1)",
        dropdown: "0px 2px 16px rgba(0, 0, 0, 0.08);",
        input: "0px 0px 0px 4px #8B5CF61A",
        searchModal: "0px 2px 64px 16px rgba(17, 24, 39, 0.08)",
        toaster: "0px 2px 16px rgba(17, 24, 39, 0.08)",
        border: "0px 0px 0px 1px #E5E7EB",
        "focus-border": "0px 0px 0px 1px #7C3AED",
        "error-border": "0px 0px 0px 1px #F43F5E",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-top": {
          "0%": {
            height: "100%",
          },
          "99%": {
            height: "0",
          },
          "100%": {
            visibility: "hidden",
          },
        },
        "accordion-slide-up": {
          "0%": {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          "100%": {
            height: "0",
            opacity: "0",
          },
        },
        "accordion-slide-down": {
          "0%": {
            "min-height": "0",
            "max-height": "0",
            opacity: "0",
          },
          "100%": {
            "min-height": "var(--radix-accordion-content-height)",
            "max-height": "none",
            opacity: "1",
          },
        },
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        ring: "ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        "fade-in-right":
          "fade-in-right 0.3s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-in-top": "fade-in-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-out-top":
          "fade-out-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "accordion-open":
          "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "accordion-close":
          "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
      },
      lineClamp: {
        "[var(--lines)]": "var(--lines)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("tailwindcss-radix")(),
    require("tailwindcss-animate")
  ],
}
