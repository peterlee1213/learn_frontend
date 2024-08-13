import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

// 如果我想改变我的默认配置，就在这里改
// module.exports = {
//   theme: {
//     screens: {
//       sm: '480px',
//       md: '768px',
//       lg: '976px',
//       xl: '1440px',
//     },
//     colors: {
//       'blue': '#1fb6ff',
//       'pink': '#ff49db',
//       'orange': '#ff7849',
//       'green': '#13ce66',
//       'gray-dark': '#273444',
//       'gray': '#8492a6',
//       'gray-light': '#d3dce6',
//     },
//     fontFamily: {
//       sans: ['Graphik', 'sans-serif'],
//       serif: ['Merriweather', 'serif'],
//     },
//     extend: {
//       spacing: {
//         '128': '32rem',
//         '144': '36rem',
//       },
//       borderRadius: {
//         '4xl': '2rem',
//       }
//     }
//   }
// }
