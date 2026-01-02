import type { SafeUser } from '@/features/auth/schema/responses/SafeUserSchema';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  user: SafeUser | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SafeUser | null>): void => {
      state.user = action.payload;
    },
    clearUser: (state): void => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
