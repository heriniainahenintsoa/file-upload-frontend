<script setup>
import { formatDistance } from "date-fns";
defineProps({
  post: { type: Object, required: true },
});
</script>

<template>
  <div class="card bg-neutral p-4 space-y-2">
    <div
      class="bg-base-200 p-4 rounded-field flex items-center justify-between"
    >
      <div class="flex items-center gap-2">
        <div class="avatar">
          <div class="size-10 rounded-box">
            <img
              class="mask mask-squircle"
              src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
            />
          </div>
        </div>
        <div>
          <p class="font-semibold">{{ post.user.name }}</p>
          <p class="font-thin text-xs">
            {{
              formatDistance(new Date(post.created_at), new Date(), {
                addSuffix: true,
              })
            }}
          </p>
        </div>
      </div>
      <div>...</div>
    </div>
    <p>{{ post.id }} {{ post.content }}</p>
    <div class="carousel carousel-end rounded-field">
      <div
        v-for="(image, index) in post.images"
        :key="index"
        class="carousel-item w-full max-h-[500px]"
      >
        <img
          :src="image.url"
          class="w-full object-center object-cover"
          :alt="`Image ${index + 1}`"
        />
      </div>
    </div>
  </div>
</template>
