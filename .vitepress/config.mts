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
  }
})
