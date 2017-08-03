import local from "../localstorage"

export default {
  SEARCH_FILM ({commit}, search) {
    let query = ""

    if(search.title) query = `?title=${search.title}`
    if(search.director) query = `?director=${search.director}`
    if(search.actor) query = `?actor=${search.actor}`

    return $api.get('api.php' + query)
    .then( response => {
      let data = Array.isArray(response.data) ? response.data : [response.data]
      commit('SET_SEARCH', data)
      return data 
    })
    .catch( error => {
      console.log(error.response.data)
      return false;
    })
  },

  AUTH ({commit}) {
    let auth = local.get("auth")

    if(!auth) {
      return false
    } else {
      commit("SET_USER", local.get("users").find(item => item.name == auth))
      return true
    }
  },

  LOGIN ({commit}, user) {
    let users = local.get("users")
    let userLogged

    if(!users) {
      users = []
      local.set("users", users)
    }

    userLogged = users.find(item => item.name == user.name)

    if(userLogged) {

      commit("SET_USER", userLogged)
    } else {
      user.name = user.name.toLowerCase()
      users.push(user)
      local.set("users", users)
      commit("SET_USER", user)
    }

    local.set("auth", user.name)

    return true;
  },

  LOGOUT ({commit}) {
    commit("SET_USER", {})
    local.remove("auth")
  },

  GET_FAVORITES ({commit, getters}, data) {
    let user = getters.user

      let film = user.favorites.findIndex(item => item.show_id == data.show_id)
      return film
  },

  SET_FAVORITES ({commit, getters}, data) {
    let favs = getters.user.favorites

    if(favs) {
      let filmIndex = favs.findIndex(item => item.show_id == data.show_id)

      if(filmIndex != -1) {
        commit("REMOVE_FAVORITE", filmIndex)
      } else {
        commit("ADD_FAVORITE", data)
      }

      local.updateUser(getters.user, "favorites")
    }

  },
}