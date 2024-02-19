import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        extend: {
          extend: {
            fontFamily: {
              montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
              light: {
                primary: '#FFFFFF',
                secondary: '#F3F4F6',
                tertiary: '#95A9AF',
                tech: '#9F9FFF',
                growth: '#FF877B',
                house: '#6BC970'
              },
              dark: {
                primary: '#1A202C',
                secondary: '#2D3748',
                // Outras cores para o tema escuro
              },
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
      }
    ], logs: false
  },
  content: [
    "./**/*.tsx",
  ],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#08151D',
        secondary: '#95A9AF',
        accent: '#1CA0B5',
        tech: '#9F9FFF',
        growth: '#FF877B',
        house: '#6BC970',
        borderTech: '#9F9FFF',
        borderGrowth: '#FF877B',
        borderHouse: '#6BC970',
        textPrimary: '#08151D',
        textSecondary: '#95A9AF',
        textAccent: '#1CA0B5'
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
};
