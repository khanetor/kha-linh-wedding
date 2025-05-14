---
title: Sự kiện cưới
---

<script setup lang="ts">
const today = new Date()
const eventHanoi = new Date(2025, 11, 29)
const eventHCM = new Date(2026, 0, 11)
</script>

# Save the date

## Ở Hà Nôi

<Countdown :from="today" :to="eventHanoi" locale="vi" />

## Ở Hồ Chí Minh

<Countdown :from="today" :to="eventHCM" locale="vi" />

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.141126724733!2d106.66831587636963!3d10.800501358746464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752928b7208c15%3A0xc7aa798b94e48f8d!2sTan%20Son%20Nhat%20Hotel%20Saigon!5e0!3m2!1sen!2sfi!4v1747257509733!5m2!1sen!2sfi" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>