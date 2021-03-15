<template>
	<div class="filter">
		<h3 class="filter__title">{{name}}:</h3>
		<select class="filter__select" :value="value" @change="$emit('input', $event.target.value)">
			<option class="filter__option" value="">Все</option>
			<option 
				class="filter__option"
				v-for="sourse in items"
				:key="sourse"
			>
			{{ sourse }}</option>
		</select>
	</div>
</template>


<script>
export default {
	props: {
		items: {
			type: Array,
			default() {
				return []
			},
			required: true
		},

		value: {
			type: String,
			default() {
				return ''
			}
		},
		name: {
			type: String,
			default() {
				return ''
			}
		},
	}
}
</script>

<style>
.filter {
	width: 100%;
	margin-bottom: 30px;
}

.filter__title {
	margin: 0px 0px 5px;
	text-align: left;
	font-size: 18px;
}

.filter__select {
	width: 100%;
	padding: 5px;
	font-size: 16px;
	color: #27282c;
	background-color: #f4f4ea;
	border-radius: 3px;
	margin-bottom: 15px;
}

.filter__select:last-of-type {
	margin: 0;
}

.filter__option {
	background-color: #f4f4ea;
}
</style>

