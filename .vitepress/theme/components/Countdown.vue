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
const hours = computed(() => Math.floor(timedelta.value % 8640 / 60 / 60))
const minutes = computed(() => Math.floor(timedelta.value % 86400 % 3600 / 60))
const seconds = computed(() => Math.floor(timedelta.value % 86400 % 3600 % 60))

const saveTheDate = dayjs(to).locale(locale).format("LL")

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
  <div class="save-the-date">
    {{ saveTheDate }}
  </div>
  <div class="container">
    <div class="time-unit">
      <div class="value">
        {{ days }}
      </div>
      <div v-if="locale === 'vi'" class="unit">
        ngày
      </div>
      <div v-else class="unit">
        days
      </div>
    </div>
    <div class="time-unit">
      <div class="value">
        {{ hours }}
      </div>
      <div v-if="locale === 'vi'" class="unit">
        giờ
      </div>
      <div v-else class="unit">
        hours
      </div>
    </div>
    <div class="time-unit">
      <div class="value">
        {{ minutes }}
      </div>
      <div v-if="locale === 'vi'" class="unit">
        phút
      </div>
      <div v-else class="unit">
        minutes
      </div>
    </div>
    <div class="time-unit">
      <div class="value">
        {{ seconds }}
      </div>
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
}

.container>.time-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 3rem;
  gap: 0.2rem;
}

.container>.time-unit>.value {
  font-weight: bold;
  font-size: 1.2rem;
}

.container>.time-unit>.unit {
  text-transform: capitalize;
}

.save-the-date {
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 0.3rem;
  margin-bottom: 0.7rem;
}
</style>