import { type Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.tsx"],
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
      }
    },
  },
  plugins: [],
} satisfies Config;
