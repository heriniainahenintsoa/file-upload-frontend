<script setup>
import PostCard from "@/components/posts/PostCard.vue";
import PostCreateForm from "@/components/posts/PostCreateForm.vue";
import { getPosts } from "@/utils/api";
import { onMounted, ref } from "vue";
const posts = ref([]);
onMounted(async () => {
  posts.value = await getPosts();
});
</script>

<template>
  <div class="py-8 space-y-8 max-w-md mx-auto">
    <PostCreateForm />
    <div class="space-y-6">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
