import { configureStore } from '@reduxjs/toolkit'
import toggleSlice from './themeSlice'

export const store = configureStore({
  reducer: {
    toggle:toggleSlice
  },
})