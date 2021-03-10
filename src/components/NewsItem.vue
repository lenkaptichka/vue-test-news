<template>
	<a class="news__item" :href="news_item_data.url" target="_blank">
		<div class="news__info">
			<h3 class="news__author">{{news_item_data.by}}</h3>
			<div class="news__rating">
				<img src="../assets/star.svg" alt="" class="news__rating-icon">
				<h4 class="news__rating-value">{{news_item_data.score}}</h4>
			</div>
		</div>
		<h2 class="news__title">{{news_item_data.title}}</h2>
		<p class="news__date">{{ displayDate }}</p>		
	</a>
</template>


<script>
export default {
	props: {
		news_item_data: {
			type: Object,
			default() {
				return {}
			},
			required: true
		}
	},

	computed: {
		displayDate() {
			const timeFormat = new Date(this.news_item_data.time * 1000);
			let options = {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				timezone: 'UTC',
			};

			return (timeFormat.toLocaleString("ru", options))
		}
	}
}
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;1,300;1,400&display=swap');

.news__item {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-family: 'Raleway', sans-serif;
	background-color: #f4f4ea;
	color: #27282B;
	border-radius: 15px;
	padding: 20px;
	text-decoration: none;
}

.news__item:hover {
	box-shadow: 5px 5px 10px 0px rgba(122, 154, 161, 0.3);	
}

.news__item:last-of-type {
	margin-bottom: 0;
}

.news__info {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}

.news__author {
	margin: 0;
	font-size: 24px;
}

.news__rating {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0;
	color: #7a9aa1;	
}

.news__rating-value {
	margin: 0px 0px 0px 10px;
	text-align: center;
	font-size: 22px;
}

.news__title {
	font-size: 26px;
	line-height: 30px;
	margin: 30px 0px;
}

.news__date {
	margin: 0px;
	font-size: 18px;
	line-height: 24px;
	font-weight: 300;
	font-style: italic;
}
</style>