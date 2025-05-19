import { defineStore } from "pinia";
const usePostsStore = defineStore("posts", {
  state() {
    return { errors: null, page: 1, loading: false };
  },
});
export default usePostsStore;
