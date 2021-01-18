import { TOGGLE_DARK_MODE, SET_DARK_MODE } from './actions'

const initialState = {
  darkMode: false,
  flashMessage: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode } // { flashMessage: null, darkMode: !state.darkMode}
    case SET_DARK_MODE:
      return { ...state, darkMode: action.payload.darkMode }
    default:
      return state
  }
}

// Pure Function -> can predict the result
// don't use side effect -> eg. API, Math, 3rd lib
// don't directly change the value of the props
