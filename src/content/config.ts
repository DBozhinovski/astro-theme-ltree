import { z, defineCollection } from "astro:content";

const bioCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
  }),
});

const socialsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string(),
    order: z.number(),
    icon: z
      .array(
        z.enum([
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
        ]),
      )
      .length(1),
  }),
});

const linksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string(),
    order: z.number(),
  }),
});

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    image: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  socials: socialsCollection,
  bio: bioCollection,
  links: linksCollection,
  posts: postsCollection,
};
