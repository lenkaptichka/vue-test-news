import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		newsList: [],
		loadingStatus: false
	},

	actions: {
		fetchNews({commit}) {
			commit('loadingStatus', true);
			return axios.get('http://newsapi.org/v2/top-headlines?country=ru&pageSize=50&apiKey=e0da008a0d6646b5be1826bc9a93fda3')
      	.then(res => {
					commit('updateNews', res.data.articles);
					commit('loadingStatus', false);
				})
				.catch(error => console.log(error))								
		}
	},

	mutations: {
		updateNews(state, newsList) {
			state.newsList = newsList;
		},

		loadingStatus(state, newLoadingStatus) {
			state.loadingStatus = newLoadingStatus;
		}
	},

	getters: {
		allNews(state) {
			return state.newsList
		},

		loadingStatus(state) {
			return state.loadingStatus
		}
	}
})