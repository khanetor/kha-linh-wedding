---
en:
  title: Wedding details
  body: |-
    <script setup lang="ts">
    const today = new Date()
    const eventHanoi = new Date(2025, 12, 29)
    const eventHCM = new Date(2026, 1, 11)
    </script>

    ## In Hanoi

    <Countdown :from="today" :to="eventHanoi" />

    ## In Ho Chi Minh City

    <Countdown :from="today" :to="eventHCM" />
vi:
  title: Thông tin về đám cưới
  body: |-
    <script setup lang="ts">
    const today = new Date()
    const eventHanoi = new Date(2025, 12, 29)
    const eventHCM = new Date(2026, 1, 11)
    </script>

    ## Ở Hà Nội

    <Countdown :from="today" :to="eventHanoi" />

    ## Ở thành phố Hồ Chí Minh

    <Countdown :from="today" :to="eventHCM" />
---
