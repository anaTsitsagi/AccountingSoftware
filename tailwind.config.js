module.exports = {
  content: [
    './wwwroot/index.html',
    './**/*.razor',
    './**/*.cshtml'
    ],
    safelist: [
        'flip-card',
        'flip-card-inner',
        'flipped',
        'flip-card-front',
        'flip-card-back'
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
          space: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
      }
    }
  },
  plugins: []
}
