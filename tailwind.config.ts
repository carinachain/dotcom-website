import { type Config } from 'tailwindcss';
// import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        body: [
          'Hiragino Sans',
          'ヒラギノ角ゴシック',
          'メイリオ',
          'Meiryo',
          'MS Ｐゴシック',
          'MS PGothic',
          'sans-serif',
          'YuGothic',
          'Yu Gothic',
        ],
      },
      backgroundImage: {
        'carousel-bg': "url('/images/images/index_head_bg.png')",
      },
      zIndex: {
        '100': '100',
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        neon1: {
          from: {
            textShadow:
              '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177, 0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177',
          },
          to: {
            textShadow:
              '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177, 0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177',
          },
        },
        neon2: {
          from: {
            textShadow:
              '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff, 0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff',
          },
          to: {
            textShadow:
              '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff, 0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff',
          },
        },
        neon3: {
          from: {
            textShadow:
              '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ffdd1b, 0 0 70px #ffdd1b, 0 0 80px #ffdd1b, 0 0 100px #ffdd1b, 0 0 150px #ffdd1b',
          },
          to: {
            textShadow:
              '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ffdd1b, 0 0 35px #ffdd1b, 0 0 40px #ffdd1b, 0 0 50px #ffdd1b, 0 0 75px #ffdd1b',
          },
        },
        neon4: {
          from: {
            textShadow:
              '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #b6ff00, 0 0 70px #b6ff00, 0 0 80px #b6ff00, 0 0 100px #b6ff00, 0 0 150px #b6ff00',
          },
          to: {
            textShadow:
              '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #b6ff00, 0 0 35px #b6ff00, 0 0 40px #b6ff00, 0 0 50px #b6ff00, 0 0 75px #b6ff00',
          },
        },
        neon5: {
          from: {
            textShadow:
              '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff9900, 0 0 70px #ff9900, 0 0 80px #ff9900, 0 0 100px #ff9900, 0 0 150px #ff9900',
          },
          to: {
            textShadow:
              '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff9900, 0 0 35px #ff9900, 0 0 40px #ff9900, 0 0 50px #ff9900, 0 0 75px #ff9900',
          },
        },
        neon6: {
          from: {
            textShadow:
              '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de',
          },
          to: {
            textShadow:
              '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de',
          },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'slide-in-bottom': 'slide-in-bottom 0.8s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        neon1: 'neon1 1.5s ease-in-out infinite alternate',
        neon2: 'neon2 1.5s ease-in-out infinite alternate',
        neon3: 'neon3 1.5s ease-in-out infinite alternate',
        neon4: 'neon4 1.5s ease-in-out infinite alternate',
        neon5: 'neon5 1.5s ease-in-out infinite alternate',
        neon6: 'neon6 1.5s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
} satisfies Config;
