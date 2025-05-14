---
title: Thông tin đám cưới
---

<script setup lang="ts">
const today = new Date()
const eventHanoi = new Date(2025, 12, 29)
const eventHCM = new Date(2026, 1, 11)
</script>

## Ở Hà Nôi

<Countdown :from="today" :to="eventHanoi" />

## Ở Hồ Chí Minh

<Countdown :from="today" :to="eventHCM" />
