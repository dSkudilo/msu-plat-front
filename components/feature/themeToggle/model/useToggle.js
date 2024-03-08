import { THEME } from '../constants/THEME_KEY'

export function useToggle (theme) {
  const isDarkMode = ref(theme.global.current.value[THEME.DARK])

  const toggleTheme = () => {
    theme.global.name.value = isDarkMode.value
      ? THEME.LIGHT
      : THEME.DARK
  }

  return {
    isDarkMode,
    toggleTheme
  }
}
