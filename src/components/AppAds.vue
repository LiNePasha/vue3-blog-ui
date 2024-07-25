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
  img.ads{
    width: auto;
    margin: 50px 0;
  }
  @media (max-width: 992px) {
    img.ads{
    width: 100%;
    margin: 20px 0;
  }
  }
</style>
  