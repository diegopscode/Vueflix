export default {
    SET_SEARCH (state, search) {
        state.search = search
    },
    SET_USER (state, user) {
        state.user = user;
    },
    ADD_FAVORITE (state, film) {
        state.user.favorites.push(film)
    },
    REMOVE_FAVORITE (state, index) {
        state.user.favorites.splice(index, 1);
    }
}