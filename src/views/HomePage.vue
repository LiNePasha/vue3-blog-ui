<template>
    <div>
      <AppBanner />
        <AppAds :src="'/ads.webp'" />
        <PostList />
        <AppAds :src="'/ads.webp'" />
    </div>
  </template>
  
  <script setup>
  import AppBanner from '@/components/AppBanner.vue';
  import PostList from '@/components/PostList.vue';
  import AppAds from '@/components/AppAds.vue';
  </script>