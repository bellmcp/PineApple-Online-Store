import {
  TOGGLE_DARK_MODE,
  SET_DARK_MODE,
  SET_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGE,
  toggleDarkMode,
  setDarkMode,
  setFlashMessage,
  clearFlashMessage,
} from './actions'

describe('toggleDarkMode', () => {
  test('returns an action with type `TOGGLE_DARK_MODE`', () => {
    const action = toggleDarkMode()
    expect(action).toEqual({ type: TOGGLE_DARK_MODE })
  })
})

// describe('setDarkMode', () => {
//   test('returns an action with type `SET_DARK_MODE` and payload', () => {
//     const action = SET_DARK_MODE({ darkMode: true })
//     expect(action).toEqual({ type: SET_DARK_MODE, payload: { darkMode: true } })
//   })
// })
