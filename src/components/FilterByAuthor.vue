<template>
	<div class="filter">
		<h3 class="filter__title">Наличие указанного автора статьи:</h3>				
		<select class="filter__select" :value="value" @change="$emit('input', $event.target.value)">
			<option class="filter__option" value="all">Все статьи</option>
			<option class="filter__option"
				v-for="item in filter"
				v-bind:value="item.value"
				:key="item.id"
			>
			{{ item.title }}</option>
		</select>
	</div>
</template>


<script>
export default {
	props: {
		filter: {
			type: Array,
			default() {
				return []
			}
		},
		value: {
			type: String,
			default() {
				return ''
			}
		},
	}
}
</script>