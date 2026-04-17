// Site-wide config. Single source of truth for metadata.
export const SITE = {
  name: "Sandeep Danda",
  title: "Sandeep Danda — Software Engineer",
  description:
    "Software engineer at Amazon. I work on payments infrastructure and cross-partition data movement.",
  url: "https://sandeepdanda.dev",
  author: "Sandeep Danda",
  locale: "en-US",
} as const;

export const NAV = [
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/now", label: "Now" },
] as const;

export const SOCIAL = {
  github: "https://github.com/sandeepdanda",
  linkedin: "https://linkedin.com/in/sandeep-danda",
  email: "mailto:hello@sandeepdanda.dev",
} as const;
