import { defineStore } from "pinia";
const usePostsStore = defineStore("posts", {
  state() {
    return {
      errors: null,
      currentPage: 1,
      lastPage: 1,
      loading: false,
      posts: [],
    };
  },
  actions: {
    async fetchPosts() {
      if (this.loading || this.currentPage > this.lastPage) {
        return;
      }
      this.loading = true;
      try {
        const res = await fetch(`/api/posts?page=${this.currentPage}`);
        const data = await res.json();
        if (res.ok) {
          this.posts.push(...data.posts);
          this.currentPage = data.current_page + 1;
          this.lastPage = data.last_page;
        }
      } catch (error) {
        this.errors = { fetch: "error while fetching posts" };
      } finally {
        this.loading = false;
      }
    },
    resetPosts() {
      this.posts = [];
      this.currentPage = 1;
      this.lastPage = 1;
    },
  },
});
export default usePostsStore;
