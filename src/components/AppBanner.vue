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
            <img src="/admin.webp" alt="">
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
  height: 600px; /* Adjust height as needed */
  margin-bottom: 70px;
  margin-top: 30px;
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
  border-radius: 12px;
}

.banner-content {
  position: absolute;
    bottom: -9%;
    left: 5%;
    background-color: #ffffff;
    padding: 2.2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    max-width: 600px;
}

  @media (max-width: 992px) {
    .banner-content {
      padding: 1.5rem;
      bottom: 4%;
    }
  }

.banner-content .category {
    font-size: 0.8rem;
    font-weight: 500;
    color: #ffffff;
    display: inline-block;
    padding: 4px 10px 4px 10px;
    border-radius: 6px;
    margin-bottom: 0.8rem;
    background-color: #4B6BFB;
}

.banner-content .summary {
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;
  color: #181A2A;
  margin-bottom: 0.8rem;
}

@media (max-width: 992px) {
    .banner-content .summary {
      font-size: 26px;
      line-height: 30px;
    }
  }

.banner-content .admin img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
}

.banner-content .admin .name,
.banner-content .admin .date{
  color: #97989F;
  font-size: 16px;
}

.banner-content .admin .name {
  font-weight: 600;
  margin-right: 18px;
}

.banner-content .admin .date {
  font-weight: 400;
}
</style>
