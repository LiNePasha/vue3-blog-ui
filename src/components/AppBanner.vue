<template>
  <div class="turndigital-container">
    <div class="banner-container">
      <img src="/banner.webp" alt="Banner Image" class="banner-image" />
      <div class="banner-content">
        <div class="category">Category Name</div>
        <div class="summary">
          The Impact of Technology on the Workplace: How Technology is Changing
        </div>
        <div class="admin d-flex align-items-center">
          <img src="/admin.webp" alt="Admin Image" />
          <span class="name">Jason Francisco</span>
          <span class="date">August 20, 2022</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBanner'
}
</script>

<style scoped>
.banner-container {
  position: relative;
  width: 100%;
  height: 37.5rem; /* 600px converted to rem */
  margin-bottom: 4.375rem; /* 70px converted to rem */
  margin-top: 1.875rem; /* 30px converted to rem */
}

@media (max-width: 992px) {
  .banner-container {
    margin-bottom: 1rem;
  }
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem; /* 12px converted to rem */
}

.banner-content {
  position: absolute;
  bottom: -9%; 
  left: 5%;
  background-color: #ffffff;
  padding: 2.2rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1); /* 4px 8px converted to rem */
  border-radius: 0.5rem; /* 8px converted to rem */
  max-width: 37.5rem; /* 600px converted to rem */
}

@media (max-width: 992px) {
  .banner-content {
    padding: 1.5rem;
    bottom: 4%; 
  }
}

.category {
  font-size: 0.8rem;
  font-weight: 500;
  color: #ffffff;
  display: inline-block;
  padding: 0.25rem 0.625rem; /* 4px 10px converted to rem */
  border-radius: 0.375rem; /* 6px converted to rem */
  margin-bottom: 1rem;
  background-color: #4B6BFB;
}

.summary {
  font-size: 2.25rem; /* 36px converted to rem */
  font-weight: 600;
  line-height: 2.5rem; /* 40px converted to rem */
  color: #181A2A;
  margin-bottom: 1rem;
}

@media (max-width: 992px) {
  .summary {
    font-size: 1.625rem; /* 26px converted to rem */
    line-height: 1.875rem; /* 30px converted to rem */
  }
}

.admin img {
  width: 2.25rem; /* 36px converted to rem */
  height: 2.25rem; /* 36px converted to rem */
  border-radius: 50%;
  margin-right: 0.75rem; /* 12px converted to rem */
}

.name,
.date {
  color: #97989F;
  font-size: 1rem; /* 16px converted to rem */
}

.name {
  font-weight: 600;
  margin-right: 1.125rem; /* 18px converted to rem */
}

.date {
  font-weight: 400;
}
</style>
