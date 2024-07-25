<template>
    <div class="turndigital-container d-flex justify-content-center">
      <img :src="src" class="ads" alt="Advertisement">
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppAds',
    props: {
      src: {
        type: String,
        required: true
      }
    }
  }
  </script>

<style scoped>
img.ads {
  width: auto;
  margin: 3.125rem 0; /* 50px converted to rem */
}
@media (max-width: 992px) {
  img.ads {
    width: 100%;
    margin: 1.25rem 0; /* 20px converted to rem */
  }
}
</style>
  