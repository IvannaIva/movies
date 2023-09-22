import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        currentMovieIndex: 0,
        movieDetails: {},
        allMoviesData: [],
        errorMessage: null,
        likedMovies: [],
        dislikedMovies: [],
    },
    reducers: {
        setCurrentMovieIndex: (state, action) => {
            state.currentMovieIndex = action.payload;
        },

        setMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
            state.errorMessage = null;
        },

        setAllMoviesData: (state, action) => {
            state.allMoviesData = action.payload;
            // state.errorMessage = null;
        },
        setError: (state, action) => {
            state.errorMessage = action.payload;
            state.moviesData = null;
        },

        likeMovie: (state, action) => {
            const movieId = action.payload;
            if (state.dislikedMovies.includes(movieId)) {
                // Якщо фільм вже є у списку dislikedMovies, видаліть його
                state.dislikedMovies = state.dislikedMovies.filter(
                    (id) => id !== movieId
                );
            } else if (!state.likedMovies.includes(movieId)) {
                // Якщо фільм відсутній у списку likedMovies, додайте його
                state.likedMovies.push(movieId);
            }
        },

        dislikeMovie: (state, action) => {
            const movieId = action.payload;
            if (state.likedMovies.includes(movieId)) {
                // Якщо фільм вже є у списку likedMovies, видаліть його
                state.likedMovies = state.likedMovies.filter((id) => id !== movieId);
            }
            if (!state.dislikedMovies.includes(movieId)) {
                // Якщо фільм відсутній у списку dislikedMovies, додайте його
                state.dislikedMovies.push(movieId);
            }
        },
    },
});

export const {
    setCurrentMovieId,
    setCurrentMovieIndex,
    setMovieDetails,
    setAllMoviesData,
    setError,
    likeMovie,
    dislikeMovie,
} = moviesSlice.actions;
export default moviesSlice.reducer;