import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const menuTools = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        positionOne: state => {
            state.value = 1
        },
        positionTwo: state => {
            state.value = 2
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
    },
})

export const { positionOne, positionTwo, incrementByAmount } = menuTools.actions

export default menuTools.reducer

export const showPosition = (state: RootState) => state.menu.value