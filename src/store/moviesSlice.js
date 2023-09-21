import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesData: {},
        errorMessage: null,
        likedMovies: [],
        dislikedMovies: [],
    },
    reducers: {
        setMoviesData: (state, action) => {
            state.moviesData = action.payload;
            state.errorMessage = null;
        },
        setError: (state, action) => {
            state.errorMessage = action.payload;
            state.moviesData = null;
        },
        likeMovie: (state, action) => {
            const movieId = action.payload;
            // Перевірте, чи фільм з таким movieId вже є у списку likedMovies
            if (!state.likedMovies.includes(movieId)) {
                // Якщо фільм відсутній у списку, додайте його
                state.likedMovies.push(movieId);
            }
        },
        dislikeMovie: (state, action) => {
            const movieId = action.payload;

            if (!state.dislikedMovies.includes(movieId)) {
                state.dislikedMovies.push(movieId);
            }
        },
    },
});

export const { setMoviesData, setError, likeMovie, dislikeMovie } =
moviesSlice.actions;
export default moviesSlice.reducer;