---
title: Wedding details
---

<script setup lang="ts">
const today = new Date()
const eventHanoi = new Date(2025, 12, 29)
const eventHCM = new Date(2026, 1, 11)
</script>

## In Hanoi

<Countdown :from="today" :to="eventHanoi" />

## In Ho Chi Minh

<Countdown :from="today" :to="eventHCM" />
