export const TOGGLE_DARK_MODE = 'app/ui/TOGGLE_DARK_MODE'
export const SET_DARK_MODE = 'app/ui/SET_DARK_MODE'

export function toggleDarkMode() {
  return {
    type: TOGGLE_DARK_MODE,
  }
}

export function setDarkMode(darkMode) {
  return {
    type: SET_DARK_MODE,
    payload: {
      darkMode,
    },
  }
}
