export const getNextMovie = (allMovies, likedMovies, dislikedMovies) => {
    // Фільми, які не були лайкнуті або дизлайкнуті
    const availableMovies = allMovies.filter(
        (movie) => !likedMovies.includes(movie.id) && !dislikedMovies.includes(movie.id)
    );

    // Виберіть випадковий фільм з доступних фільмів
    const randomIndex = Math.floor(Math.random() * availableMovies.length);
    return availableMovies[randomIndex];
};