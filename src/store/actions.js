export default {
    SEARCH_FILM ({commit}, title) {
        return $api.get('api.php?title=' + title).then( response => {
            commit('SET_SEARCH');
            return response.data 
        } )
    }
}