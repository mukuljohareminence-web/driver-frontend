import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ExampleState {
  // TODO: define slice state
  value: string | null;
}

const initialState: ExampleState = {
  value: null,
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>): void => {
      state.value = action.payload;
    },
    clearValue: (state): void => {
      state.value = null;
    },
  },
});

export const { setValue, clearValue } = exampleSlice.actions;
export default exampleSlice.reducer;
