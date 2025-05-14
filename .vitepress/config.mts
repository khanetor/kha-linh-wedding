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
       { text: 'Story', link: '/story' },
       { text: 'Events', link: '/events' },
       { text: 'RSVP', link: '/rsvp' },
       { text: 'Gallery', link: '/gallery' },
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
      label: "Vietnamese",
      lang: "vi",
      themeConfig: {
        nav: [
       { text: 'Câu chuyện', link: '/vi/story' },
       { text: 'Sự kiện cưới', link: '/vi/events' },
       { text: 'RSVP', link: '/vi/rsvp' },
       { text: 'Thư viện ảnh', link: '/vi/gallery' },
    ],
      }
    }
  }
})
