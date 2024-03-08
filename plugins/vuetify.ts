import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#ffffff',
    white: '#FFFFFF',
    // surface: '#FEEDDB',
    // 'surface-bright': '#FFFFFF',
    // 'surface-bright': '#FFFFFF',
    // 'on-surface': '#FFFFFF',
    primary: '#827BFD',
    'primary-darken-1': '#7772e5',
    'primary-darken-2': '#6865cb',
    // 'primary-darken-1': '#3700B3',
    secondary: '#FFA654',
    // 'secondary-darken-1': '#018786',
    error: '#F77291',
    info: '#5ECFEF',
    success: '#4CAF50',
    warning: '#FFA654',
    'grey-lighten-4': '#F5F5F5',
    'grey-lighten-3': '#EEEEEE',
    'grey-lighten-2': '#E0E0E0',
    'grey-lighten-1': '#BDBDBD',
    'grey-darken-1': '#757575',
    'grey-darken-2': '#616161'
  }
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme
      }
    }
  })
  app.vueApp.use(vuetify)
})
