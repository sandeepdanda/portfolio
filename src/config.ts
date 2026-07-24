// Site-wide config. Single source of truth for metadata.
export const SITE = {
  name: "Sandeep Danda",
  title: "Sandeep Danda — Software Engineer",
  description:
    "Sandeep Danda - software engineer in Seattle. I build software you only notice when it breaks. Cooking, badminton, and PNW trails off the clock.",
  url: "https://sandeepdanda.pages.dev",
  author: "Sandeep Danda",
  locale: "en-US",
} as const;

export const NAV = [
  { href: "/", label: "Me" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
] as const;

export const SOCIAL = {
  github: "https://github.com/sandeepdanda",
  linkedin: "https://linkedin.com/in/sandeepsde",
  email: "mailto:sandeepdanda.dev@gmail.com",
} as const;
