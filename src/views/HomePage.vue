<template>
    <div>
      <AppBanner />
        <AppAds :src="'/ads.webp'" />
        <PostList />
        <AppAds :src="'/ads.webp'" />
    </div>
  </template>
  
  <script>
  import AppBanner from '@/components/AppBanner.vue';
  import PostList from '@/components/PostList.vue';
  import AppAds from '@/components/AppAds.vue';
  
  export default {
    components: {
      AppBanner,
      PostList,
      AppAds
    },
  }
  </script>