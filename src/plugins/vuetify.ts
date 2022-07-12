// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#009688',
          secondary: '#00bcd4',
          accent: '#e91e63',
          error: '#f44336',
          warning: '#ff9800',
          info: '#ffeb3b',
          success: '#4caf50',
        },
      },
    },
  },
})
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
