<template>
	<div class="filter">
		<h3 class="filter__title">Время:</h3>
		<select class="filter__select" :value="value" v-on:input="$emit('input', $event.target.value)">
			<option class="filter__option" value="">Все</option>
			<option 
				class="filter__option"
				v-for="time in times"
				v-bind:value="time.borderTime"
				:key="time.id"
			>
			{{time.name}}</option>
		</select>
	</div>
</template>

<script>
export default {
	props: {
		times: {
			type: Array,
			default() {
				return []
			},
			required: true
		},
		value: {
			type: String
		}
	}
}
</script>