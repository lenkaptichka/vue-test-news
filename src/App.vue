<template>
  <div id="app">
    <h1 class="title">Список популярных новостей</h1>
    <div class="content">
      <Spinner v-if="loadingStatus" />
      <NewsList 
        v-else 
        v-bind:news_data="allNews"
      />
      <div class="content__filters">
        <Filters 
          v-on:sort-by-rating="sortByRating"
          v-on:sort-by-date="sortByDate"
          v-on:sort-by-comments="sortByComments"    
          v-on:sort-by-title="sortByTytle"
          v-on:sort-by-author="sortByAuthor"       
        />
      </div>  
    </div>    
  </div>
</template>

<script>
import NewsList from './components/NewsList';
import Filters from './components/Filters';
import Spinner from './components/Spinner';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {NewsList, Filters, Spinner},

  computed: {
    ...mapGetters(['allNews']),
    ...mapGetters(['loadingStatus']),
  },

  methods: {
    ...mapActions(['fetchNews']),

    sortByRating() {
      this.allNews.sort((a, b) => b.score - a.score);
    },

    sortByDate() {
      this.allNews.sort((a, b) => b.time - a.time);  
    },

    sortByComments() {
      this.allNews.sort((a, b) => b.descendants - a.descendants);
    },

    sortByTytle() {
      this.allNews.sort((a, b) => a.title.localeCompare(b.title));
    },

    sortByAuthor() {
      this.allNews.sort((a, b) => a.by.localeCompare(b.by));
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  height: 75vh;
  width: 20%;
  background-color: #27282B;
  border-radius: 15px;
  color: #e783e7;
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
</style>