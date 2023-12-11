import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const themeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggle: (state,action) => {

      state.value = action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle, decrement, incrementByAmount } = themeSlice.actions

export default themeSlice.reducer