<template>	
	<div class="news">
		<NewsItem 			
			v-for="news of news_data"
			:key="news.id"
			v-bind:news_item_data="news"		
		/>
		<h3 class="news__empty" v-if="news_data.length === 0">Нет доступных новостей :(</h3>	
	</div>
</template>

<script>
import NewsItem from './NewsItem'
export default {
	components: {NewsItem},
	props: {
		news_data: {
			type: Array,
			default: () => {
				return []
			}
		}
	}
}
</script>

<style scoped>

.news {
	width: 75%;
	display: grid;
  grid-template-columns: repeat(3, calc((100% - 20px * 2)/3));
  grid-template-rows: max-content;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .news {   
		width: 100%;
    grid-template-columns: repeat(2, calc((100% - 16px)/2));
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }
}

@media screen and (max-width: 767px) {
  .news {
    width: fit-content;
    grid-template-columns: 100%;
    grid-row-gap: 10px;
		
  }
}

.news__empty {
	grid-column-start: 1;
  grid-column-end: 4;
	color: #27282c;
	font-size: 24px;
	margin: 40px auto 0px;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .news__empty {   
		grid-column-start: 1;
		grid-column-end: 3;
  }
}

@media screen and (max-width: 767px) {
  .news__empty {
		width: 100%;
		grid-column-start: 1;
    grid-column-end: 2;
		text-align: center;		
  }
}
</style>