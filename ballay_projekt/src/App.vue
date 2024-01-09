<script setup>
import { RouterView } from 'vue-router'
import footervue from './components/footer.vue';
import headervue from './components/header.vue';
</script>

<template>
	<headervue/>
	<RouterView />
	<footervue />
</template>


