<script setup>
import PostCard from "@/components/posts/PostCard.vue";
import PostCreateForm from "@/components/posts/PostCreateForm.vue";
import usePostsStore from "@/store/posts";
import { useScroll } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { onMounted, useTemplateRef, watch } from "vue";

const postsStore = usePostsStore();
const { posts, loading } = storeToRefs(postsStore);

onMounted(async () => {
  postsStore.resetPosts();
  postsStore.fetchPosts();
});

const scrollContainerRef = useTemplateRef("scrollContainer");

const { y, arrivedState } = useScroll(scrollContainerRef, {
  behavior: "smooth",
});

watch(y, () => {
  if (arrivedState.bottom) {
    postsStore.fetchPosts();
  }
});
</script>

<template>
  <div
    class="flex-1 max-h-screen overflow-y-scroll no-scrollbar pb-32"
    ref="scrollContainer"
  >
    <div class="pb-8 space-y-8 max-w-md mx-auto">
      <PostCreateForm />
      <div class="space-y-6">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <div v-if="true" class="flex items-center justify-center text-neutral">
        <span class="loading loading-dots loading-xl"></span>
      </div>
    </div>
  </div>
</template>
