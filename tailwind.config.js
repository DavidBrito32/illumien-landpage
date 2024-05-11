/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slideInRotate ease-in-out 3s infinite',
        'slide-out': 'slideOutRotate ease-in-out 2.9s infinite',
        'slide-out-z': 'slideOutZRotate ease-in-out 2.5s infinite',
        'maquina': 'Worlds 20s infinite',
        'maquinaSpanish': 'WorldsSpanish 20s infinite',
        'cursor': 'cursor .6s infinite, digita 20s steps(15) infinite'
      },
      colors: {
        "primary": "#2D0D62",
        "secundary": "#EBBD06",
        "overlay": "#D5D5D560",
        "caramel": "#FFE586",
        "theme": "#500D6D",
        "theme-g": "#57197185",
        "theme-two": "#69327D",
      },
      width: {
        "100": "35rem",
        "99": "32.4rem",
        "82": "24rem",
        "76": "20rem"
      }, 
      height: {
        "100": "35rem",
        "96": "33rem",
        "99": "32.4rem",
        "82": "24rem",
        "76": "20rem"
      },
      padding: {
        "26": "8.75rem",
        "30": "19.75rem"
      },
      backgroundImage: {
        "fundo": "url('./public/fundo site.png')"
      }
    },
  },
  plugins: [],
}

