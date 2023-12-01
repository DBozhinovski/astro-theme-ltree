import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "bio",
        label: "Bio",
        path: "src/content/bio",
        fields: [
          {
            name: "name",
            type: "string",
            label: "Name",
            required: true,
            isTitle: true,
          },
          {
            name: "biodescription",
            type: "rich-text",
            label: "Bio",
            required: true,
            isBody: true,
          },
          {
            name: "avatar",
            type: "image",
            label: "Avatar",
            required: true,
          },
        ],
      },
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "url",
            label: "URL",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
            required: true,
          },
        ],
      },
      {
        name: "link",
        label: "Links",
        path: "src/content/links",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "url",
            label: "URL",
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Order",
            required: true,
          },
        ],
      },
      {
        name: "socials",
        label: "Socials",
        path: "src/content/socials",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "url",
            label: "URL",
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Order",
            required: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icon",
            required: true,
            list: true,
            ui: {
              component: "select",
            },
            options: [
              "github",
              "twitter",
              "linkedin",
              "instagram",
              "facebook",
              "youtube",
              "twitch",
              "tiktok",
              "snapchat",
              "reddit",
              "pinterest",
              "medium",
              "dev",
              "dribbble",
              "behance",
              "codepen",
              "producthunt",
              "discord",
              "slack",
              "whatsapp",
              "telegram",
              "email",
            ],
          },
        ],
      },
    ],
  },
});
