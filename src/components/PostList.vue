<template>
  <div>
    <div class="turndigital-container">
      <div v-if="loading" class="spinner-container">
        <div class="spinner"></div>
      </div>
      <div v-else class="post-list">
        <div v-for="post in posts" :key="post.id" class="post">
          <router-link :to="{ name: 'post', params: { id: post.id }}" class="router-link">
            <img :src="post.image" alt="post image" class="post-image" />
            <div class="post-content">
              <div class="category">{{ post.category }}</div>
              <div class="summary">{{ post.summary }}</div>
              <div class="admin d-flex align-items-center">
                <img src="/admin.webp" alt="admin-image">
                <span class="name">Jason Francisco</span>
                <span class="date">August 20, 2022</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center my-4">
      <button v-if="hasMorePosts && !loading" @click="loadMore" class="btn btn-primary load-btn">Load More</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);
const page = ref(1);
const perPage = ref(6);
const totalPosts = ref(0);
const hasMorePosts = ref(true);
const loading = ref(false);

const fetchPosts = () => {
  loading.value = true;
  axios.get('/data/posts.json')
    .then(response => {
      const allPosts = response.data;
      totalPosts.value = allPosts.length;
      const startIndex = (page.value - 1) * perPage.value;
      const endIndex = page.value * perPage.value;
      const newPosts = allPosts.slice(startIndex, endIndex);
      posts.value = posts.value.concat(newPosts);
      if (posts.value.length >= totalPosts.value) {
        hasMorePosts.value = false;
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

const loadMore = () => {
  page.value++;
  fetchPosts();
};

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
.turndigital-container {
  position: relative;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #4B6BFB;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.post-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  padding: 1rem;
}

.post {
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #E8E8EA;
  transition: transform 0.3s ease;
}

.post:hover {
  transform: translateY(-10px);
}

.post-image {
  width: 100%;
  height: 15rem;
  object-fit: cover;
  border-radius: 0.375rem;
}

.post-content .category {
  font-size: 0.88rem;
  font-weight: 500;
  color: #4B6BFB;
  display: inline-block;
  padding: 0.25rem 0.625rem;
  border-radius: 0.375rem;
  margin: 0.8rem 0;
  background-color: #4B6BFB0D;
}

.post-content .summary {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.75rem;
  color: #181A2A;
  margin-bottom: 0.8rem;
}

.post-content .admin img {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  margin-right: 0.75rem;
}

.post-content .admin .name,
.post-content .admin .date {
  color: #97989F;
  font-size: 1rem;
}

.post-content .admin .name {
  font-weight: 600;
  margin-right: 1.125rem;
}

.post-content .admin .date {
  font-weight: 400;
}

.load-btn {
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  border: 1px solid #696A754D;
  background: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  color: #696A75;
}

.router-link {
  text-decoration: none;
}

@media (min-width: 600px) {
  .post-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .post-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
