import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kha & Linh: Our Forever Begins",
  description:
    "Join us in celebrating the wedding of Kha & Linh. Find all the information you need about our special day.",
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-macchiato",
    },
  },
  themeConfig: {
    nav: [
      { text: "Events", link: "/events" },
      { text: "Our story", link: "/story" },
      { text: "Gallery", link: "/gallery" },
      { text: "RSVP", link: "/rsvp" },
      { text: "Gift", link: "/gifts" },
    ],
    sidebar: [],
    socialLinks: [
      // { icon: "facebook", link: "https://www.facebook.com/nlhkha/" },
    ],
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    vi: {
      title: "Kha & Linh: Ngày Chung Đôi",
      description:
        "Chào mừng bạn đến với website đám cưới của Kha & Linh. Tại đây bạn có thể tìm thấy tất cả thông tin về ngày trọng đại của chúng tôi.",
      label: "Tiếng Việt",
      lang: "vi",
      themeConfig: {
        nav: [
          { text: "Sự kiện", link: "/vi/events" },
          { text: "Câu chuyện", link: "/vi/story" },
          { text: "Album ảnh", link: "/vi/gallery" },
          { text: "Xác nhận tham dự", link: "/vi/rsvp" },
          { text: "Quà mừng", link: "/vi/gifts" },
        ],
        outline: {
          label: "Danh mục",
        },
      },
    },
  },
});
