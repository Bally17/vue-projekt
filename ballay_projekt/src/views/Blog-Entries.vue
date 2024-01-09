<script setup>
import blogEntriesMainPage from '@/components/blog-entries-main-page.vue';
import mainBanner from '@/components/main-banner.vue'
import secondBanner from '@/components/second-banner.vue';
</script>

<template>
<mainBanner msg="Recent Posts" msg2="Our Recent Blog Entries"/>
<secondBanner />
<blogEntriesMainPage></blogEntriesMainPage>
</template>

<style>

</style>