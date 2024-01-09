<script setup>
import blogEntriesBannerSecond from '@/components/blog-entries-banner-second.vue';
import blogEntriesMainPage from '@/components/blog-entries-main-page.vue';
import mainBanner from '@/components/main-banner.vue'
</script>

<template>
<mainBanner msg="Recent Posts" msg2="Our Recent Blog Entries"/>
<blogEntriesBannerSecond></blogEntriesBannerSecond>
<blogEntriesMainPage></blogEntriesMainPage>
</template>

<style>

</style>