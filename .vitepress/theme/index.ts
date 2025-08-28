// https://vitepress.dev/guide/custom-theme
// import Layout from "./Layout.vue"
// @ts-ignore
import Countdown from "./components/Countdown.vue";
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "@catppuccin/vitepress/theme/macchiato/flamingo.css";
import "viewerjs/dist/viewer.min.css";
import "./style.css";
import imageViewer from "vitepress-plugin-image-viewer";
import { useRoute } from "vitepress";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app, router, siteData }) {
    app.component("Countdown", Countdown);
  },
  setup() {
    const route = useRoute();
    imageViewer(route);
  },
} satisfies Theme;
