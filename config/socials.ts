import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@techglobix",
    icon: Icons.gitHub,
    link: "https://github.com/techglobix",
  },
  {
    name: "LinkedIn",
    username: "TechGlobix",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/techglobix",
  },
  // {
  //   name: "Twitter",
  //   username: "@techglobix",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/techglobix",
  // },
  {
    name: "Gmail",
    username: "techglobix",
    icon: Icons.gmail,
    link: "mailto:techglobix@gmail.com",
  },
];
