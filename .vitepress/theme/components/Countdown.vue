<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

const { from, to } = defineProps<{
  from: Date,
  to: Date,
}>()

const timedelta = ref(Math.floor((to.getTime() - from.getTime()) / 1000))

const days = computed(() => Math.floor(timedelta.value / 86400))
const hours = computed(() => Math.floor(timedelta.value % 8640 / 60 / 60))
const minutes = computed(() => Math.floor(timedelta.value % 86400 % 3600 / 60))
const seconds = computed(() => Math.floor(timedelta.value % 86400 % 3600 % 60))

let intervalId: number

onMounted(function () {
  intervalId = setInterval(function () {
    timedelta.value -= 1
  }, 1000)
})

onUnmounted(function() {
  clearInterval(intervalId)
})
</script>

<template>
  {{ days }} days {{ hours }} hours {{ minutes }} minutes {{ seconds }} seconds
</template>
