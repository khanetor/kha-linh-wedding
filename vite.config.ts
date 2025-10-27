import { defineConfig } from "vite"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"


export default defineConfig({
    publicDir: "public",
    plugins: [
        ViteImageOptimizer({
            include: ["images/**/*"],
            includePublic: true,
            test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
            jpeg: { quality: 10 },
            jpg: { quality: 10 },
        })
    ]
})
