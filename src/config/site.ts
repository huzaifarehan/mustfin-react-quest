const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const siteConfig = {
  name: "Mustfin React Quest",
  description: "MustFin React Developer Quest Project",
  url: siteUrl,
  ogImage: `${siteUrl}/og.png`,
  author: {
    name: "Huzaifa Rehan",
    email: "huzaifarehan001@gmail.com",
    website: "",
  },
  links: {
    linkedIn: "https://www.linkedin.com/in/huzaifa-rehan",
    github: "https://github.com/huzaifarehan/mustfin-react-quest",
  },
};

export type SiteConfig = typeof siteConfig;
