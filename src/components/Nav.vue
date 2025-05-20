<script setup>
import useAuthStore from "@/store/auth";
import { RouterLink } from "vue-router";
const authStore = useAuthStore();
</script>
<template>
  <div
    class="flex items-center justify-between p-2 rounded-xl fixed top-0 left-0 right-0 z-10 bg-base-100"
  >
    <RouterLink :to="{ name: 'home' }">
      <h1 class="font-bold text-2xl">P</h1>
    </RouterLink>

    <ul
      class="menu menu-horizontal bg-base-200 rounded-box space-x-2 items-center"
    >
      <li>
        <RouterLink :to="{ name: 'posts.index' }">Posts</RouterLink>
      </li>
      <div v-if="!authStore.user" class="flex space-x-2">
        <li>
          <RouterLink :to="{ name: 'login' }">Login</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'register' }">Register</RouterLink>
        </li>
      </div>
      <div v-else class="flex space-x-2">
        <li>
          <details class="dropdown dropdown-end">
            <summary>
              <div class="avatar">
                <div class="size-6 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                  />
                </div>
              </div>
              <p>{{ authStore.user.name }}</p>
            </summary>
            <ul
              class="menu dropdown-content bg-base-200 rounded-box z-1 max-w-52 w-full space-y-2 p-2 shadow-sm"
            >
              <li><a>Profile</a></li>
              <li><a>Dashboard</a></li>
              <li>
                <button @click="authStore.logout" class="btn btn-warning">
                  Logout
                </button>
              </li>
            </ul>
          </details>
        </li>
      </div>
    </ul>
  </div>
</template>
