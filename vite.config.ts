import { defineConfig } from "vite"
// import decap, { createFileCollection, createField } from "vite-plugin-decap-cms"

export default defineConfig({
    publicDir: "public",
    plugins: [
        // decap({
        //     config: {
        //         publishMode: "editorial_workflow",
        //         i18n: {
        //             structure: "multiple_folders",
        //             locales: ["en", "vi"],
        //             default_locale: "en"
        //         },
        //         backend: {
        //             name: "github",
        //             repo: "khanetor/kha-linh-wedding",
        //             squashMerges: true
        //         },
        //         mediaLibrary: {
        //             name: "cloudinary",
        //             config: {
        //                 cloud_name: "khalinh-wedding",
        //                 api_key: "562894652481875"
        //             }
        //         },
        //         mediaFolder: "src/public",
        //         collections: [
        //             createFileCollection({
        //                 name: "pages",
        //                 label: "Pages",
        //                 i18n: {
        //                     structure: "multiple_folders",
        //                     locales: ["en", "vi"]
        //                 },
        //                 files: [
        //                     {
        //                         name: "home",
        //                         label: "Home",
        //                         file: "index.md",
        //                         i18n: true,
        //                         fields: [
        //                             createField("string", { name: "layout", default: "home" }),
        //                             createField("object", {
        //                                 name: "hero",
        //                                 label: "Hero",
        //                                 fields: [
        //                                     createField("string", { name: "name", label: "Name", i18n: true }),
        //                                     createField("string", { name: "text", label: "Text", i18n: true }),
        //                                     createField("string", { name: "tagline", label: "Tagline", i18n: true }),
        //                                     createField("list", {
        //                                         name: "actions", label: "Tagline", fields: [
        //                                             createField("select", { name: "theme", options: ["brand", "alt"] }),
        //                                             createField("string", { name: "text", i18n: true }),
        //                                             createField("string", { name: "link", i18n: true }),
        //                                         ]
        //                                     }),
        //                                 ]
        //                             }),
        //                             createField("list", {
        //                                 name: "features", label: "Features", fields: [
        //                                     createField("string", { name: "title", i18n: true }),
        //                                     createField("string", { name: "details", i18n: true }),
        //                                 ]
        //                             }),
        //                             createField("markdown", { name: "body", i18n: true }),
        //                         ]
        //                     },
        //                     {
        //                         name: "story",
        //                         label: "Our Story",
        //                         file: "story.md",
        //                         i18n: true,
        //                         fields: [
        //                             createField("string", { name: "title", i18n: true }),
        //                             createField("markdown", { name: "body", i18n: true })
        //                         ]
        //                     },
        //                     {
        //                         name: "details",
        //                         label: "Wedding Details",
        //                         file: "details.md",
        //                         i18n: true,
        //                         fields: [
        //                             createField("string", { name: "title", i18n: true }),
        //                             createField("markdown", { name: "body", i18n: true })
        //                         ]
        //                     },
        //                     {
        //                         name: "rsvp",
        //                         label: "RSVP",
        //                         file: "rsvp.md",
        //                         i18n: true,
        //                         fields: [
        //                             createField("string", { name: "title", i18n: true }),
        //                             createField("markdown", { name: "body", i18n: true })
        //                         ]
        //                     },
        //                     {
        //                         name: "gallery",
        //                         label: "Gallery",
        //                         file: "gallery.md",
        //                         i18n: true,
        //                         fields: [
        //                             createField("string", { name: "title", i18n: true }),
        //                             createField("list", {
        //                                 name: "images",
        //                                 field: {
        //                                     name: "image", widget: "image"
        //                                 },
        //                             }),
        //                         ]
        //                     },
        //                 ],
        //             })
        //         ]
        //     }
        // })
    ]
})
