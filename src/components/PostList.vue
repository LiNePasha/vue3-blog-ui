<template>
<div>
  <div class="turndigital-container">
    <div class="post-list">
      <div v-for="post in posts" :key="post.id" class="post">
        <router-link :to="{ name: 'post', params: { id: post.id }}" class="router-link">
          <img :src="post.image" alt="" class="post-image" />
        <div class="post-content">
          <div class="category">{{ post.category }}</div>
          <div class="summary">
            {{ post.summary }}
          </div>
          <div class="admin d-flex align-items-center">
              <img src="/admin.webp" alt="">
              <span class="name">Jason Francisco</span>
              <span class="date">August 20, 2022</span>
          </div>
        </div>
    </router-link>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center my-4">
      <button v-if="hasMorePosts" @click="loadMore" class="btn btn-primary load-btn">Load More</button>
    </div>
</div>
  </template>

  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: [],
        page: 1,
        perPage: 6,
        totalPosts: 0, // Total number of posts available
        hasMorePosts: true, // Flag to check if more posts are available
      };
    },
    created() {
      this.fetchPosts();
    },
    methods: {
      fetchPosts() {
      axios.get('/data/posts.json')
        .then(response => {
          const allPosts = response.data;
          this.totalPosts = allPosts.length;
          const startIndex = (this.page - 1) * this.perPage;
          const endIndex = this.page * this.perPage;
          const newPosts = allPosts.slice(startIndex, endIndex);
          this.posts = this.posts.concat(newPosts);
          // Check if there are more posts to load
          if (this.posts.length >= this.totalPosts) {
            this.hasMorePosts = false;
          }
        });
    },
      loadMore() {
        this.page++;
        this.fetchPosts();
      }
    }
  }
  </script>
<style scoped>
.post-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  padding: 1rem;
}

.post {
  background: #fff;
  padding: 1rem;
  border-radius: 0.75rem; /* 12px to rem */
  overflow: hidden;
  border: 1px solid #E8E8EA;
  transition: transform 0.3s ease;
}

.post:hover {
  transform: translateY(-0.625rem); /* 10px to rem */
}

.post-image {
  width: 100%;
  height: 15rem; /* 240px to rem */
  object-fit: cover;
  border-radius: 0.375rem; /* 6px to rem */
}

.post-content .category {
  font-size: 0.88rem;
  font-weight: 500;
  color: #4B6BFB;
  display: inline-block;
  padding: 0.25rem 0.625rem; /* 4px 10px to rem */
  border-radius: 0.375rem; /* 6px to rem */
  margin: 0.8rem 0;
  background-color: #4B6BFB0D;
}

.post-content .summary {
  font-size: 1.5rem; /* 24px to rem */
  font-weight: 600;
  line-height: 1.75rem; /* 28px to rem */
  color: #181A2A;
  margin-bottom: 0.8rem;
}

@media (max-width: 992px) {
  .post-content .summary {
    font-size: 1.625rem; /* 26px to rem */
    line-height: 1.875rem; /* 30px to rem */
  }
}

.post-content .admin img {
  width: 2.25rem; /* 36px to rem */
  height: 2.25rem; /* 36px to rem */
  border-radius: 50%;
  margin-right: 0.75rem; /* 12px to rem */
}

.post-content .admin .name,
.post-content .admin .date {
  color: #97989F;
  font-size: 1rem; /* 16px to rem */
}

.post-content .admin .name {
  font-weight: 600;
  margin-right: 1.125rem; /* 18px to rem */
}

.post-content .admin .date {
  font-weight: 400;
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

.load-btn {
  padding: 0.75rem 1.25rem; /* 12px 20px to rem */
  border-radius: 0.375rem; /* 6px to rem */
  border: 1px solid #696A754D;
  background: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  color: #696A75;
}

.router-link {
  text-decoration: none;
}
</style>
