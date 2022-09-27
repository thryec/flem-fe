module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        header: ['Messapia', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        alegreya: ['Alegreya', 'serif'],
        inconsolata: ['Inconsolata', 'monospace'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        midnight: '#1b2536',
        seablue: '#003C54',
        purple: '#9A74F6',
        lightpurple: '#C7B9FF',
        darkpurple: '#390281',
      },
      maxHeight: {
        128: '32rem',
        160: '40rem',
      },
    },
  },
  plugins: [],
}
