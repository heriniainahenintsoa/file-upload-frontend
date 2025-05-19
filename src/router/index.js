import useAuthStore from "@/store/auth";
import LoginView from "@/views/Auth/LoginView.vue";
import RegisterView from "@/views/Auth/RegisterView.vue";
import IndexView from "@/views/posts/IndexView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        guest: true,
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        guest: true,
      },
    },
    {
      path: "/posts",
      name: "posts.index",
      component: IndexView,
    },
  ],
});
router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  await authStore.setUser();
  if (authStore.user && to.meta.guest) {
    return { name: "home" };
  }
  if (!authStore.user && to.meta.auth) {
    return { name: "login" };
  }
  if (from == "login" || from == "register") {
    authStore.errors = {};
  }
});
export default router;
