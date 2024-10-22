import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "nextui", // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
            layout: {}, // light theme layout tokens
            colors: {
              background: 'rgba(255, 255, 255, 1)',
              foreground: "rrgba(36,43,46,0.8)",
              primary: {
                200: 'rgba(15, 127, 254, 0.3)',
                400: 'rgba(15, 127, 254, 0.5)',
                500: 'rgba(15, 127, 254, 1)',
                700: 'rgba(13, 60, 153, 1)',
                foreground: "rgba(255, 255, 255, 1)",
                DEFAULT: "#0E80FF",
              },
              default: {
                300: 'rgba(178, 180, 181, 1)',
                400: "#71717a",
                500: "#a1a1aa",
                600: "#d4d4d8",
                700: 'rgba(145, 145, 145, 1)',
                800: 'rgba(30, 30, 30, 1)',
                900: 'rgba(0, 0, 0, 0.4)'
              },
              success: {
                300: '#74DFA2',
                400: '#45D483',
                500: '#17C964',
                600: 'rgba(0, 173, 52, 1)',
                700: '#0E793C',
                800: '#095028'
              },
              danger: {
                200: 'rgb(255, 8, 78)'
              }
            } // light theme colors
          },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: 'rgba(0, 0, 0, 0.8)',
            foreground: "rgba(255, 255, 255, 1)",
            primary: {
              200: 'rgba(78, 12, 248, 0.3)',
              400: 'rgba(78, 12, 248, 0.5)',
              500: 'rgba(78, 12, 248, 1)',
              700: '#4E0CF8',
              foreground: "rgba(255, 255, 255, 1)",
              DEFAULT: "#4E0CF8",
            },
            default: {
              300: 'rgba(178, 180, 181, 1)',
              400: "#27272a",
              500: "#3f3f46",
              600: "#52525b",
              700: "rgba(145, 145, 145, 1)",
              800: 'rgba(30, 30, 30, 1)',
              900: 'rgba(0, 0, 0, 0.4)'
            },
            danger: {
              200: 'rgb(255, 8, 78)'
            }
          } // dark theme colors
        }, // light theme colors
      },
  })],
};
export default config;
