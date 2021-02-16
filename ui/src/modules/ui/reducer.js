import {
  TOGGLE_DARK_MODE,
  SET_DARK_MODE,
  SET_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGE,
} from './actions'

const initialState = {
  darkMode: false,
  flashMessage: null,
}

/**
 * @function UiReducer
 * @param {array} state - Object of darkMode and flashMessage
 * @param {object} action - Action to be reduced
 * @returns {object} - New ui state
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode } // { flashMessage: null, darkMode: !state.darkMode}
    case SET_DARK_MODE:
      return { ...state, darkMode: action.payload.darkMode }
    case SET_FLASH_MESSAGE:
      return { ...state, flashMessage: action.payload.message }
    case CLEAR_FLASH_MESSAGE:
      return { ...state, flashMessage: null }
    default:
      return state
  }
}

// Pure Function -> can predict the result
// don't use side effect -> eg. API, Math, 3rd lib
// don't directly change the value of the props
