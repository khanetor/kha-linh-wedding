---
title: Sự kiện cưới
---

<script setup lang="ts">
const today = new Date()
const eventHanoi = new Date("2025-12-29T11:00:00+07:00")
const eventHCM = new Date("2026-01-11T11:00:00+07:00")
</script>

# Các sự kiện cưới

Sự hiện diện của các bạn là niềm vinh hạnh cho gia đình và vợ chồng mình.

## Tiệc báo hỉ tại Hà Nội

Mời bạn đến tham dự bữa tiệc thân mật cùng gia đình chúng mình.

- ⏰ **Ngày:** Thứ Hai, 11:00, ngày 29 tháng 12 năm 2025
- 📍 **Địa điểm:** Trống Đồng Palace, 40 Hàng Cót, Hoàn Kiếm, Hà Nội

<Countdown :from="today" :to="eventHanoi" locale="vi" />

<div class="responsive-iframe-container">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8738140325736!2d105.84422976119241!3d21.037734437388757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb95cf9d3d1%3A0xf3f702ec451c57e2!2zVHLhu5FuZyDEkOG7k25nIFBhbGFjZQ!5e0!3m2!1sfi!2sfi!4v1759608602595!5m2!1sfi!2sfi" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

## Lễ thành hôn tại Thành phố Hồ Chí Minh

Lễ cưới chính của chúng mình sẽ diễn ra tại Thành phố Hồ Chí Minh sôi động. Chúng mình mong chờ được chia sẻ khoảnh khắc trọng đại này với tất cả các bạn.

- ⏰ **Ngày:** Chủ Nhật, 11:00, ngày 11 tháng 1 năm 2026
- 📍 **Địa điểm:** Trung tâm tiệc cưới Pavillon Tân Sơn Nhất, 202 Đ. Hoàng Văn Thụ, Phường 9, Phú Nhuận, Hồ Chí Minh

<Countdown :from="today" :to="eventHCM" locale="vi" />

<div class="responsive-iframe-container">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.134738705387!2d106.66826771125325!3d10.800990889304837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752928b68fbc3f%3A0xc58bea5686708420!2zVHJ1bmcgVMOibSBI4buZaSBOZ2jhu4sgJiBUaeG7h2MgQ8aw4bubaSBQYXZpbGxvbiBUw6JuIFPGoW4gTmjhuqV0!5e0!3m2!1sfi!2sfi!4v1759253938944!5m2!1sfi!2sfi" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

<style>
.responsive-image {
    max-width: 100%;
    height: auto;
    display: block; /* Remove extra space below image */
    margin: 0 auto; /* Center the image */
}

.responsive-iframe-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio (height / width * 100) */
    height: 0;
    overflow: hidden;
    margin: 1rem 0; /* Add some margin */
}

.responsive-iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>