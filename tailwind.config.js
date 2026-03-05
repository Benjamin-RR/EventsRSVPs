const plugin = require('tailwindcss/plugin')

//Add any missing utilities tailwind doesn't have here.
const moreUtilties = plugin(({addUtilities})=>{
  addUtilities({
    // Normally I add my custom tailwind utilities here, for this project I doublt I'll need it...
  })
})

module.exports = {
  darkMode: ["class", '[darkmode="dark"]'],
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // margin of 5% mobile
      // margin of 7% tabelet and desktop
      // margin auto x after 1536px ( fixed width here on out )
      'sm': '640px',
      'md': '768px', // End of Mobile & Beginning of Tablet
      'lg': '1024px', // End of Tablet & Beginning of Desktop
      'xl': '1280px',
      '2xl': '1536px', // Max width for desktop : page width, after gutter margin will grow : comes out to be max width of 1290px max width
    },
    colors: {
      // theme colors ( not sure if I'll add any yet for this specific project, we will see...)
      
      // social media colors
      facebook: '#1877F2',
      tiktok: '#EE1D51',
      linkedin: '#0A66C2',
      instagram: '#E4405F',
      x: '#14171A',
      reddit: '#FF4500',
    },
    gradientColorStops: {},
    listStyleType: {
      none: "none",
      disc: "disc",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-dmSans)", "sans-serif"],
      },
      boxShadow: {
        
      },
      backgroundImage: {
        
      },
      keyframes: {
        
      },
      animation: {
        
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            // Reset everything
            p: {},
            h1: {},
            h2: {},
            h3: {},
            h4: {},
            h5: {},
            h6: {},
            ul: {},
            ol: {},
            li: {},
            a: {},
            blockquote: {},
            pre: {},
            code: {},
            img: {},
            strong: {},
            em: {},
            table: {},
            thead: {},
            tbody: {},
            tr: {},
            th: {},
            td: {},
            a: {
              textDecoration: "none",
      
              color: "inherit",
              margin: 0,
              padding: 0,
            },
            ul: {
              margin: 0,
              padding: 0,
            },
            li: {
              margin: 0,
              padding: '0px',
            },
            'ul > li': {
              paddingLeft: '0px',
            },
            h1: {
              fontWeight: "600",
              fontSize: "1.75rem",
              color: "inherit",
              margin: 0
            },
            h2: {
              fontWeight: "600",
              color: "inherit",
              margin: 0
            },
            h3: {
              fontWeight: "500",
              color: "inherit",
              margin: 0
            },
            h4: {
              fontWeight: "500",
              color: "inherit",
              margin: 0
            },
            h5: {
              fontWeight: "400",
              color: "inherit",
              margin: 0
            },
            h6: {
              fontWeight: "400",
              color: "inherit",
              margin: 0
            },
            p: {
              fontWeight: "400",
              margin: "0px",
              color: "inherit"
            },
            maxWidth: "100%",
            img: {
              margin: "0px"
            }
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), moreUtilties],
};