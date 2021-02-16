const TOGGLE_DARK_MODE = 'app/ui/TOGGLE_DARK_MODE'
const SET_DARK_MODE = 'app/ui/SET_DARK_MODE'
const SET_FLASH_MESSAGE = 'app/ui/SET_FLASH_MESSAGE'
const CLEAR_FLASH_MESSAGE = 'app/ui/CLEAR_FLASH_MESSAGE'

/**
 * @function toggleDarkMode
 * @returns {object} - Action object with type `TOGGLE_DARK_MODE`
 */
function toggleDarkMode() {
  return {
    type: TOGGLE_DARK_MODE,
  }
}

function setDarkMode(darkMode) {
  return {
    type: SET_DARK_MODE,
    payload: {
      darkMode,
    },
  }
}

function setFlashMessage(message) {
  return {
    type: SET_FLASH_MESSAGE,
    payload: {
      message,
    },
  }
}

function clearFlashMessage(message) {
  return {
    type: CLEAR_FLASH_MESSAGE,
  }
}

export {
  TOGGLE_DARK_MODE,
  SET_DARK_MODE,
  SET_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGE,
  toggleDarkMode,
  setDarkMode,
  setFlashMessage,
  clearFlashMessage,
}
