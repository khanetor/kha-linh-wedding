---
title: Wedding Events
---

<script setup lang="ts">
const today = new Date()
const eventHanoi = new Date(2025, 11, 28)
const eventHCM = new Date(2026, 0, 11)
</script>

# Our Wedding Celebrations

We are thrilled to invite you to celebrate our marriage! We will be hosting two special events to share our joy with all our loved ones.

## Celebration Party in Hanoi

Join us for a joyous celebration in the beautiful city of Hanoi. We can't wait to celebrate with our family and friends in the North.

- ⏰ **Date:** Monday, December 29, 2025
- 📍 **Venue:** TBD

<Countdown :from="today" :to="eventHanoi" locale="en" />

## Wedding Party in Ho Chi Minh City

Our main wedding celebration will take place in the vibrant Ho Chi Minh City. We look forward to sharing this momentous occasion with all of you.

- ⏰ **Date:** Sunday, January 11, 2026
- 📍 **Venue:** Pavillon Tan Son Nhat, 202 Hoang Van Thu st., Ward 9, District Phu Nhuan, Ho Chi Minh, Vietnam

<Countdown :from="today" :to="eventHCM" locale="en" />

<div class="responsive-iframe-container">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.134738705387!2d106.66826771125325!3d10.800990889304837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752928b68fbc3f%3A0xc58bea5686708420!2zVHJ1bmcgVMOibSBI4buZaSBOZ2jhu4sgJiBUaeG7h2MgQ8aw4bubaSBQYXZpbGxvbiBUw6JuIFPGoW4gTmjhuqV0!5e0!3m2!1sfi!2sfi!4v1759253938944!5m2!1sfi!2sfi" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

## Travel and Accommodation

For our beloved guests traveling from out of town, we've put together some helpful information to make your journey and stay as comfortable as possible.

### Flights

*   **Hanoi:** Noi Bai International Airport (HAN)
*   **Ho Chi Minh City:** Tan Son Nhat International Airport (SGN)

We recommend booking your flights in advance for the best rates and availability.

### Hotels

We will provide recommendations for hotels near our venues in both Hanoi and Ho Chi Minh City soon. Please check back for updates.

### Transportation

Information on local transportation options, including taxis, ride-sharing services like Grab and Xanh, and public transport, will be provided closer to the event dates. For those without personal vehicles, Grab and Xanh will be the main recommended ways of transportation.

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
