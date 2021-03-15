<template>
  <div id="app">
    <h1 class="title">Список популярных новостей</h1>
    <div class="content">
      <Spinner v-if="loadingStatus" />
      <NewsList 
        v-else
        v-bind:news_data="findIntersection(filteredNewsBySource, filteredNewsByTime, filteredNewsByAuthor)"
      />
      <div class="content__filters">
        <h2 class="content__filters-title">Список фильтров</h2>
        <FilterBySource 
          v-model="source"
          v-bind:name="sourceFilter.name"
          v-bind:items="getUniqueOptions(allNews, sourceFilter.getter)"
        />
        <FilterByTime 
          v-bind:times="timeFilter"
          v-model="time"
        />
        <FilterByAuthor
          v-bind:filter="authorFilter"  
          v-model="author"         
        />
        <button class="content__button" v-on:click="resetFilters">Сбросить фильтры</button>
      </div>  
    </div>    
  </div>
</template>

<script>
import NewsList from './components/NewsList';
import Spinner from './components/Spinner';
import FilterBySource from './components/FilterBySource';
import FilterByTime from './components/FilterByTime';
import FilterByAuthor from './components/FilterByAuthor'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {NewsList, Spinner, FilterBySource, FilterByTime, FilterByAuthor},

  data() {
    return {
      source: '',
      time: null,
      author: 'all',
      sourceArr: [],
      timeArr: [],
      authorArr: [],

      sourceFilter: {name: 'Список источников', value: '', getter: obj => obj.source.name},

      timeFilter: [
        {
          name: 'За последний час', 
          id: '1', 
          borderTime: (Date.now() - 60 * 60 * 1000)
        },
        {
          name: 'За последние 3 часа', 
          id: '2',
          borderTime: (Date.now() - 3 * 60 * 60 * 1000)
        },
        {
          name: 'За последние сутки', 
          id: '3',
          borderTime: (Date.now() - 24 * 60 * 60 * 1000)     
        }
      ],

      authorFilter: [
        {title: 'Указан', id: 'indicated', value: 'true'},
        {title: 'Не указан', id: 'not-indicated', value: ''},
      ]
    }
   
  },



  computed: {
    ...mapGetters(['allNews']),
    ...mapGetters(['loadingStatus']),

    filteredNewsBySource() {
      this.sourceArr = [];
      if (!this.source) {
        this.sourceArr.push(...this.allNews);
      } else {
        this.allNews.forEach(item => {
          if (item.source.name === this.source) {
            this.sourceArr.push(item)
          }
        });
      }
      return this.sourceArr;
    },

    filteredNewsByTime() {
      this.timeArr = [];
      if (!this.time) {
        this.timeArr.push(...this.allNews);
      } else {
        this.allNews.forEach(item => {
          if (Date.parse(item.publishedAt) > +this.time) {
            this.timeArr.push(item)
          }
        });
      }            
      return this.timeArr;
    },

    filteredNewsByAuthor() {
      this.authorArr = [];
      if (this.author === 'all') {
        this.authorArr.push(...this.allNews);
      } else {
        this.allNews.forEach(item => {        
          if (!!item.author === !!this.author) {
            this.authorArr.push(item)
          }
        });
      }         
      return this.authorArr;
    }
  },

  methods: {
    ...mapActions(['fetchNews']),

    getUniqueOptions(array, getter) {
      return [...new Set(array.map(getter))]
    },

    findIntersection(arr1, arr2, arr3) {
      return [arr1, arr2, arr3].reduce((a, b) => a.filter(c => b.includes(c)));

    },

    resetFilters() {
      this.source = '';
      this.time = null;
      this.author = 'all';
    }
  },

  mounted() {
    this.fetchNews();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;1,300;1,400&family=Roboto:wght@500&display=swap');

body {
  background-color: #dcdacd;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #27282B;
  padding: 60px;
  background-color: #dcdacd;
  display: flex;
  flex-direction: column;
}

.title {
  font-family: 'Roboto', sans-serif;
  font-size: 42px;
  letter-spacing: 3px;
  margin: 0px auto 50px;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media screen and (max-width: 1023px) {
  .content {       
    flex-direction: column-reverse;
  }
}

.content__filters {
  height: 85vh;
  width: 20%;
  border-radius: 15px;
  color: #7a9aa1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #27282c;
}

@media screen and (max-width: 1023px) {
  .content__filters {   
    width: calc(100% - 30px);
    height: fit-content;
    margin-bottom: 20px;
  }
}
.content__button {
  font-family: 'Raleway', sans-serif;
	font-weight: 500;
	font-size: 20px;
	background-color: #f4f4ea;

	border: none;
	margin-top: 25px;
	padding: 7px;
	cursor: pointer;
	border-radius: 5px;
}

.content__button:hover {
	background-color: #7a9aa1;
  color: #f4f4ea;
}
</style>