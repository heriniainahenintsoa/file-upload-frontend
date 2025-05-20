<script setup>
import useAuthStore from "@/store/auth";
import { reactive } from "vue";

const formData = reactive({
  email: "",
  password: "",
});
const authStore = useAuthStore();
const handleSubmit = () => {
  authStore.authenticate("login", formData);
};
</script>
<template>
  <div class="flex-1 flex flex-col items-center max-w-md mx-auto mt-12">
    <h1 class="text-2xl font-bold">Login</h1>
    <form
      class="mt-10 w-full p-6 bg-base-200 rounded-lg shadow space-y-4"
      @submit.prevent="handleSubmit"
    >
      <div class="form-control">
        <label
          :class="[
            'fieldset-label ',
            authStore.errors?.email ? 'text-warning' : '',
          ]"
          >Email:</label
        >
        <input
          type="email"
          placeholder="Enter your email"
          v-model="formData.email"
          :class="[
            'input input-bordered',
            authStore.errors?.email ? 'border-warning' : '',
          ]"
        />
        <p class="text-warning" v-if="authStore.errors.email">
          {{ authStore.errors.email[0] }}
        </p>
      </div>
      <div class="form-control">
        <label
          :class="[
            'fieldset-label ',
            authStore.errors?.password ? 'text-warning' : '',
          ]"
          >Password:</label
        >
        <input
          type="password"
          placeholder="Enter your password"
          v-model="formData.password"
          :class="[
            'input input-bordered',
            authStore.errors?.password ? 'border-warning' : '',
          ]"
        />
        <p class="text-warning" v-if="authStore.errors.password">
          {{ authStore.errors.password[0] }}
        </p>
      </div>

      <button class="btn btn-primary w-full mt-4">Login</button>
    </form>
  </div>
</template>
