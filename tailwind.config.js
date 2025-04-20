module.exports = {
  content: [
    './wwwroot/index.html',
    './**/*.razor',
    './**/*.cshtml'
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F8FA',
        text:       '#333333',
        accent1:    '#4F46E5',
        accent2:    '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: []
}
