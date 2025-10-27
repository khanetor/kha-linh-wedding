// https://vitepress.dev/guide/custom-theme
// import Layout from "./Layout.vue"
// @ts-ignore
import Countdown from "./components/Countdown.vue"
import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
// @ts-ignore
import ImageViewerP from "@miletorix/vitepress-image-viewer"
import "@miletorix/vitepress-image-viewer/style.css"
import "@catppuccin/vitepress/theme/macchiato/flamingo.css"
import "./style.css"

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.component("Countdown", Countdown)
    ImageViewerP(app)
  },
} satisfies Theme
