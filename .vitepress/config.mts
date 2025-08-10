import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kha & Linh wedding",
  description: "A website to host the wedding information and pictures for Kha and Linh",
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-macchiato",
    }
  },
  themeConfig: {
    nav: [
      { text: 'Events', link: '/events' },
      { text: 'Our story', link: '/story' },
      { text: 'Gallery', link: '/gallery' },
      { text: 'RSVP', link: '/rsvp' },
    ],
    sidebar: [],
    socialLinks: [
      // { icon: "facebook", link: "https://www.facebook.com/nlhkha/" },
    ]
  },
  locales: {
    root: {
      label: "English",
      lang: "en"
    },
    vi: {
      title: "Đám cưới Kha và Linh",
      label: "Tiếng Việt",
      lang: "vi",
      themeConfig: {
        nav: [
          { text: 'Sự kiện', link: '/vi/events' },
          { text: 'Câu chuyện', link: '/vi/story' },
          { text: 'Album ảnh', link: '/vi/gallery' },
          { text: 'Xác nhận tham dự', link: '/vi/rsvp' },
        ],
        outline: {
          label: "Danh mục"
        }
      }
    }
  }
})
