<template>
	<div class="filters">
		<h2 class="filters__title">Список фильтров</h2>
		<button class="filters__button" v-on:click="$emit('sort-by-rating')">По рейтингу</button>
		<button class="filters__button" v-on:click="$emit('sort-by-date')">Самые новые</button>
		<button class="filters__button" v-on:click="$emit('sort-by-comments')">Самые обсуждаемые</button>
		<button class="filters__button" v-on:click="$emit('sort-by-title')">По заголовку</button>
		<button class="filters__button" v-on:click="$emit('sort-by-author')">По автору</button>		
	</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;1,300;1,400&family=Roboto:wght@500&display=swap');
	
.filters {
	width: 100%;
	color: #7a9aa1;
	display: flex;
	flex-direction: column;
}

.filters__button {
	font-family: 'Raleway', sans-serif;
	font-weight: 500;
	font-size: 14px;
	background-color: #f4f4ea;
	border: none;
	margin-bottom: 15px;
	padding: 7px;
	cursor: pointer;
	border-radius: 5px;
}

.filters__button:hover {
	background-color: #7a9aa1;
}
</style>