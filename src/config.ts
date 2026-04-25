// Site-wide config. Single source of truth for metadata.
export const SITE = {
  name: "Sandeep Danda",
  title: "Sandeep Danda — Software Engineer",
  description:
    "Software engineer in Seattle. I build distributed backend systems and ship AI side projects in my spare time.",
  url: "https://sandeepdanda.dev",
  author: "Sandeep Danda",
  locale: "en-US",
} as const;

export const NAV = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
] as const;

export const SOCIAL = {
  github: "https://github.com/sandeepdanda",
  // TODO(sandeep): confirm correct LinkedIn handle
  linkedin: "https://linkedin.com/in/sandeepdanda",
  email: "mailto:sandeepdanda.dev@gmail.com",
} as const;
