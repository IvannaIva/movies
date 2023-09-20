import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        name: "",
    },
    reducers: {
        loginSuccess: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
        updateName: (state, action) => {
            state.name = action.payload; // Оновлення імені з отриманого значення
        },

    },
});

export const { loginSuccess, logout, updateName } = authSlice.actions;
export default authSlice.reducer;