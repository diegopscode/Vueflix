import local from "../localstorage"

export default {
    user(state) {
        return state.user;
    },
    favorites(state) {
        return state.user.favorites
    }
}