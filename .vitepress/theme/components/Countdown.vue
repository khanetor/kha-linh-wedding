<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"
import "dayjs/locale/vi"

dayjs.extend(localizedFormat)

const { from, to, locale } = defineProps<{
  from: Date,
  to: Date,
  locale: "en" | "vi"
}>()

const timedelta = ref(Math.floor((to.getTime() - from.getTime()) / 1000))

const days = computed(() => Math.floor(timedelta.value / 86400))
const hours = computed(() => Math.floor(timedelta.value % 86400 / 3600))
const minutes = computed(() => Math.floor(timedelta.value % 3600 / 60))
const seconds = computed(() => Math.floor(timedelta.value % 60))

let intervalId: ReturnType<typeof setInterval>

onMounted(function () {
  intervalId = setInterval(function () {
    timedelta.value -= 1
  }, 1000)
})

onUnmounted(function () {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="container">
    <div class="time-unit">
      <Transition name="slide-up" mode="out-in">
        <div class="value" :key="days">
          {{ days }}
        </div>
      </Transition>
      <div v-if="locale === 'vi'" class="unit">
        ngày
      </div>
      <div v-else class="unit">
        days
      </div>
    </div>
    <div class="time-unit">
      <Transition name="slide-up" mode="out-in">
        <div class="value" :key="hours">
          {{ hours }}
        </div>
      </Transition>
      <div v-if="locale === 'vi'" class="unit">
        giờ
      </div>
      <div v-else class="unit">
        hours
      </div>
    </div>
    <div class="time-unit">
      <Transition name="slide-up" mode="out-in">
        <div class="value" :key="minutes">
          {{ minutes }}
        </div>
      </Transition>
      <div v-if="locale === 'vi'" class="unit">
        phút
      </div>
      <div v-else class="unit">
        minutes
      </div>
    </div>
    <div class="time-unit">
      <Transition name="slide-up" mode="out-in">
        <div class="value" :key="seconds">
          {{ seconds }}
        </div>
      </Transition>
      <div v-if="locale === 'vi'" class="unit">
        giây
      </div>
      <div v-else class="unit">
        seconds
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: center; /* Center items horizontally */
  flex-wrap: wrap; /* Allow items to wrap to the next line */
}

.container > .time-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 3rem;
  gap: 0.2rem;
  flex-grow: 1; /* Allow items to grow and fill space */
  flex-basis: 0; /* Allow items to shrink */
}

.container > .time-unit .value {
  font-weight: bold;
  font-size: 2rem; /* Adjusted font size */
}

.slide-up-leave-active {
  transition: all 0.3s ease-in;
}

.slide-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.container > .time-unit > .unit {
  text-transform: capitalize;
  font-size: 1rem; /* Adjusted font size for unit */
}

/* Media queries for smaller screens */
@media (max-width: 600px) {
  .container {
    gap: 1rem; /* Reduce gap on smaller screens */
  }

  .container > .time-unit {
    min-width: 2.5rem; /* Further reduce min-width */
  }
}
</style>
