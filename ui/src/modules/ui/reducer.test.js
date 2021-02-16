import {
  TOGGLE_DARK_MODE,
  SET_DARK_MODE,
  SET_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGE,
} from './actions'
import UiReducer from './reducer'

test('returns default initial state when no action is passed', () => {
  const newState = UiReducer(undefined, {})
  expect(newState).toEqual({
    darkMode: false,
    flashMessage: null,
  })
})

test('returns state of darkMode to true upon receiving an action of type `TOGGLE_DARK_MODE`', () => {
  const newState = UiReducer(undefined, { type: TOGGLE_DARK_MODE })
  expect(newState).toEqual({
    darkMode: true,
    flashMessage: null,
  })
})

test('returns state of darkMode to action.payload.darkMode upon receiving an action of type `SET_DARK_MODE`', () => {
  const newState = UiReducer(undefined, {
    type: SET_DARK_MODE,
    payload: { darkMode: true },
  })
  expect(newState).toEqual({
    darkMode: true,
    flashMessage: null,
  })
})

test('returns state of flashMessage to action.payload.message upon receiving an action of type `SET_FLASH_MESSAGE`', () => {
  const newState = UiReducer(undefined, {
    type: SET_FLASH_MESSAGE,
    payload: { message: 'Hi' },
  })
  expect(newState).toEqual({
    darkMode: false,
    flashMessage: 'Hi',
  })
})

test('returns state of flashMessage to null upon receiving an action of type `CLEAR_FLASH_MESSAGE`', () => {
  const newState = UiReducer(undefined, { type: CLEAR_FLASH_MESSAGE })
  expect(newState).toEqual({
    darkMode: false,
    flashMessage: null,
  })
})
