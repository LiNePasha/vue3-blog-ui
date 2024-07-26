<script setup>
  import AppNavigation from '@/components/AppNavigation.vue';
  import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
    <main >
      <AppNavigation />
      <router-view></router-view>
        <AppFooter />
    </main>
</template>