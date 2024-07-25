<template>
  <div>
    <div class="container">
      <div class="row w-100 my-5">
        <div class="col-md-10 col-xl-7 col-xxl-8 mx-auto">
          <div class="post-content mx-auto">
            <div class="category">{{ post.category }}</div>
            <div class="summary">{{ post.summary }}</div>
            <div class="admin d-flex align-items-center">
              <img src="/admin.webp" alt="admin" />
              <span class="name">Jason Francisco</span>
              <span class="date">August 20, 2022</span>
            </div>
            <div class="post-image w-100">
              <img :src="post.image" class="w-100" alt="post image" />
            </div>
            <div class="topic">
              <p>
                Traveling is an enriching experience that opens up new
                horizons, exposes us to different cultures, and creates
                memories that last a lifetime. However, traveling can also be
                stressful and overwhelming, especially if you don't plan and
                prepare adequately. In this blog article, we'll explore tips
                and tricks for a memorable journey and how to make the most of
                your travels.
              </p>
              <p>
                One of the most rewarding aspects of traveling is immersing
                yourself in the local culture and customs. This includes trying
                local cuisine, attending cultural events and festivals, and
                interacting with locals. Learning a few phrases in the local
                language can also go a long way in making connections and
                showing respect.
              </p>
            </div>
            <div class="topic">
              <h5>Research Your Destination</h5>
              <p>
                Traveling is an enriching experience that opens up new
                horizons, exposes us to different cultures, and creates
                memories that last a lifetime. However, traveling can also be
                stressful and overwhelming, especially if you don't plan and
                prepare adequately. In this blog article, we'll explore tips
                and tricks for a memorable journey and how to make the most of
                your travels.
              </p>
              <p>
                One of the most rewarding aspects of traveling is immersing
                yourself in the local culture and customs. This includes trying
                local cuisine, attending cultural events and festivals, and
                interacting with locals. Learning a few phrases in the local
                language can also go a long way in making connections and
                showing respect.
              </p>
            </div>
            <div class="topic">
              <h5>Research Your Destination</h5>
              <p>
                Traveling is an enriching experience that opens up new
                horizons, exposes us to different cultures, and creates
                memories that last a lifetime. However, traveling can also be
                stressful and overwhelming, especially if you don't plan and
                prepare adequately. In this blog article, we'll explore tips
                and tricks for a memorable journey and how to make the most of
                your travels.
              </p>
              <p>
                One of the most rewarding aspects of traveling is immersing
                yourself in the local culture and customs. This includes trying
                local cuisine, attending cultural events and festivals, and
                interacting with locals. Learning a few phrases in the local
                language can also go a long way in making connections and
                showing respect.
              </p>
            </div>
            <div class="p-4 bg-light rounded-lg border-start border-4 border-muted mt-4">
              <p class="text-dark fst-italic fs-4">
                “ Traveling can expose you to new environments and potential
                health risks, so it's crucial to take precautions to stay safe
                and healthy. ”
              </p>
            </div>
            <AppAds :src="'/ads.webp'" />
            <div class="topic">
              <h5>Research Your Destination</h5>
              <p>
                Traveling is an enriching experience that opens up new
                horizons, exposes us to different cultures, and creates
                memories that last a lifetime. However, traveling can also be
                stressful and overwhelming, especially if you don't plan and
                prepare adequately. In this blog article, we'll explore tips
                and tricks for a memorable journey and how to make the most of
                your travels.
              </p>
            </div>
            <div class="topic">
              <h5>Research Your Destination</h5>
              <p>
                Traveling is an enriching experience that opens up new
                horizons, exposes us to different cultures, and creates
                memories that last a lifetime. However, traveling can also be
                stressful and overwhelming, especially if you don't plan and
                prepare adequately. In this blog article, we'll explore tips
                and tricks for a memorable journey and how to make the most of
                your travels.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- <h1>{{ post.title }}</h1>
        <img :src="post.image" alt="Post Image" />
        <p>{{ post.summary }}</p> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppAds from "@/components/AppAds.vue";

export default {
  data() {
    return {
      post: {},
    };
  },
  components: {
    AppAds,
  },
  created() {
    const postId = parseInt(this.$route.params.id);
    axios.get("/data/posts.json").then((response) => {
      this.post = response.data.find((post) => post.id === postId);
    });
  },
};
</script>

<style scoped>
.post-content .category {
  font-size: 0.88rem;
  font-weight: 500;
  color: #ffffff;
  display: inline-block;
  padding: 0.25rem 0.625rem;
  border-radius: 0.375rem;
  margin: 0.8rem 0;
  background-color: #4b6bfb;
}

.post-content .summary {
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 2.5rem;
  color: #181a2a;
  margin-bottom: 0.8rem;
}

@media (max-width: 992px) {
  .post-content .summary {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
}

.post-content .admin img {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  margin-right: 0.75rem;
}

.post-content .admin .name,
.post-content .admin .date {
  color: #97989f;
  font-size: 1rem;
}

.post-content .admin .name {
  font-weight: 600;
  margin-right: 1.125rem;
}

.post-content .admin .date {
  font-weight: 400;
}

.post-content .post-image img {
  border-radius: 0.75rem;
  margin: 2rem 0;
}

.post-content .topic p {
  font-weight: 400;
  font-size: 1.25rem;
  color: #3b3c4a;
}

.post-content .topic p:first-of-type {
  padding-bottom: 1rem;
}

.post-content .topic h5 {
  color: #181a2a;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 2rem 0 1rem 0;
}
</style>
