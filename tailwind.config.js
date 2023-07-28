/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  extend: {
    colors: {
      background: '#F15156',
    },
    fontFamily: {
      'sans': ['nunito', ...defaultTheme.fontFamily.sans],
    },
  },
}
export const plugins = []
