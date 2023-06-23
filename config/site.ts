export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "English Summative",
  description:
    "Grade 12 English summative website with games",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Marxist Lens",
      href: "/marxist",
    },
    {
      title: "San Junipero",
      href: "/san-junipero",
    },
    {
      title: "The Handmaid's Tale",
      href: "/handmaids-tale",
    },
    {
      title: "Conclusion",
      href: "/conclusion",
    },
  ],
  links: {
    github: "https://github.com/happi89",
    docs: "https://ui.shadcn.com",
  },
}
