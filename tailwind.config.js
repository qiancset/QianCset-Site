
import { nextui } from "@nextui-org/react";

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#ea7411",
            },
           
          },
        },
        dark: {
          colors: { 
            primary: {
              DEFAULT: "#ea7411",
            },
          },        
        }
      },
    }),

  ]
}
export default config