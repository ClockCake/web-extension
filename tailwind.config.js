module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       //自定义图片
      backgroundImage: ({
        'cover': "url('/src/assets/cover.jpg')",
        'custom-gradient': 'linear-gradient(to right, #191815 0%, #252321 5%, #312925 100%)',

       }),
       //自定义颜色
      colors: {
        'FACEA3': '#FACEA3',
        'FFEFD7': '#FFEFD7',
        'F8F8F8': '#F8F8F8',
        'CE9253': '#CE9253',
        '999999': '#999999',
        '222222': '#222222',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
     require('@tailwindcss/forms'),
  ],
}