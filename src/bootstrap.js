import Axios from 'Axios'

window.$api = Axios.create({
  baseURL: 'http://netflixroulette.net/api/'
})