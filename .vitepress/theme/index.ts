// https://vitepress.dev/guide/custom-theme
// import Layout from "./Layout.vue"
import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import "./style.css"
import "@catppuccin/vitepress/theme/macchiato/flamingo.css"

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {

    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
