import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        'carousel-bg': "url('/images/images/index_head_bg.png')",
      }
    },
  },
  plugins: [],
} satisfies Config;
