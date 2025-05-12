import { defineConfig } from "vite"
import decap, { createFileCollection, createField } from "vite-plugin-decap-cms"

export default defineConfig({
    publicDir: "public",
    plugins: [
        decap({
            config: {
                publishMode: "editorial_workflow",
                i18n: {
                    structure: "multiple_folders",
                    locales: ["en", "vi"],
                    default_locale: "en"
                },
                backend: {
                    name: "github",
                    repo: "khanetor/kha-linh-wedding",
                    squashMerges: true
                },
                mediaLibrary: {
                    name: "cloudinary",
                    config: {
                        cloud_name: "khalinh-wedding",
                        api_key: "562894652481875"
                    }
                },
                mediaFolder: "src/public",
                collections: [
                    createFileCollection({
                        name: "pages",
                        label: "Pages",
                        files: [
                            {
                                name: "home",
                                label: "Home",
                                file: "index.md",
                                fields: [
                                    createField("string", { name: "layout", default: "home" }),
                                    createField("object", {
                                        name: "hero",
                                        label: "Hero",
                                        fields: [
                                            createField("string", { name: "name", label: "Name" }),
                                            createField("string", { name: "text", label: "Text" }),
                                            createField("string", { name: "tagline", label: "Tagline" }),
                                            createField("list", {
                                                name: "actions", label: "Tagline", fields: [
                                                    createField("select", { name: "theme", options: ["brand", "alt"] }),
                                                    createField("string", { name: "text" }),
                                                    createField("string", { name: "link" }),
                                                ]
                                            }),
                                        ]
                                    }),
                                    createField("list", {
                                        name: "features", label: "Features", fields: [
                                            createField("string", { name: "title" }),
                                            createField("string", { name: "details" }),
                                        ]
                                    }),
                                    createField("markdown", { name: "body" }),
                                ]
                            },
                            {
                                name: "story",
                                label: "Our Story",
                                file: "story.md",
                                fields: [
                                    createField("string", { name: "title" }),
                                    createField("markdown", { name: "body" })
                                ]
                            },
                            {
                                name: "details",
                                label: "Wedding Details",
                                file: "details.md",
                                fields: [
                                    createField("string", { name: "title" }),
                                    createField("markdown", { name: "body" })
                                ]
                            },
                            {
                                name: "rsvp",
                                label: "RSVP",
                                file: "rsvp.md",
                                fields: [
                                    createField("string", { name: "title" }),
                                    createField("markdown", { name: "body" })
                                ]
                            },
                            {
                                name: "gallery",
                                label: "Gallery",
                                file: "gallery.md",
                                fields: [
                                    createField("string", { name: "title" }),
                                    createField("list", {
                                        name: "images",
                                        field: {
                                            name: "image", widget: "image"
                                        },
                                    }),
                                ]
                            },
                        ],
                    })
                ]
            }
        })
    ]
})
