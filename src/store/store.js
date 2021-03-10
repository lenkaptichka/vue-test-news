import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const mainUrl = 'https://hacker-news.firebaseio.com';
const numberOfNews = 50;
function getNewsById(articleId, storageArr) {
	return axios.get(`${mainUrl}/v0/item/${articleId}.json`)
		.then (res => {storageArr.push(res.data)})
}

export default new Vuex.Store({
	state: {
		newsList: [],
		loadingStatus: false
	},

	actions: {
		fetchNews({commit}) {
			commit('loadingStatus', true);
			let arrOfNewsId;
			let arrOfNews = [];
			return axios.get(`${mainUrl}/v0/topstories.json?print=pretty&orderBy="$key"&limitToFirst=${numberOfNews}`)
      	.then(res => {
					arrOfNewsId = res.data;
					arrOfNewsId.forEach(id => {
						getNewsById(id, arrOfNews);						
					});
					commit('updateNews', arrOfNews);
					commit('loadingStatus', false);
				})
				.catch(error => console.log(error))								
		},
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