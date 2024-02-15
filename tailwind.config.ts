import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: [
    "./**/*.tsx",
    './**/*.css',
  ],
  theme: {
    container: { center: true },
    darkMode: false,
    extend: {
      extend: {
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
        },
        colors: {
          primary: '#FFFFFF',
          secondary: '#F3F4F6',
          tertiary: '#95A9AF',
          tech: '#9F9FFF',
          growth: '#FF877B',
          house: '#6BC970'
        },
      },
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
