<script setup>
import useAuthStore from "@/store/auth";
import { reactive } from "vue";

const formData = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
const authStore = useAuthStore();
const handleSubmit = () => {
  authStore.authenticate("register", formData);
};
</script>
<template>
  <div class="flex-1 flex flex-col mt-12 items-center max-w-md mx-auto">
    <h1 class="text-2xl font-bold">Register</h1>
    <form
      class="mt-10 p-6 w-full bg-base-200 rounded-lg shadow space-y-4"
      @submit.prevent="handleSubmit"
    >
      <h1 class="card-title">Register</h1>
      <div class="form-control">
        <label
          :class="[
            'fieldset-label ',
            authStore.errors?.name ? 'text-warning' : '',
          ]"
          >Name:</label
        >
        <input
          type="text"
          placeholder="Enter your name"
          v-model="formData.name"
          :class="[
            'input input-bordered',
            authStore.errors?.name ? 'border-warning' : '',
          ]"
        />
        <p class="text-warning" v-if="authStore.errors.name">
          {{ authStore.errors.name[0] }}
        </p>
      </div>
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
      <div class="form-control">
        <label
          :class="[
            'fieldset-label ',
            authStore.errors?.password_confirmation ? 'text-warning' : '',
          ]"
          >Confirm your password:</label
        >
        <input
          type="password"
          placeholder="Confirm your password"
          v-model="formData.password_confirmation"
          :class="[
            'input input-bordered',
            authStore.errors?.password_confirmation ? 'border-warning' : '',
          ]"
        />
        <p class="text-warning" v-if="authStore.errors.password_confirmation">
          {{ authStore.errors.password_confirmation[0] }}
        </p>
      </div>
      <button class="btn btn-primary w-full mt-4">Register</button>
    </form>
  </div>
</template>
