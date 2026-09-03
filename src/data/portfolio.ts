import notical from "@/assets/projects/notical.png";
import wazibiz from "@/assets/projects/wazibiz.png";
import geekgazette from "@/assets/projects/geekgazette.png";
import harryPotter from "@/assets/projects/harry-potter.png";
import sogy from "@/assets/projects/sogy.png";
import simonsgame from "@/assets/projects/simonsgame.png";

export type Project = {
  slug: string;
  name: string;
  year: string;
  summary: string;
  description: string;
  stack: string[];
  image: string;
  deployLink: string;
  codeLink: string;
};

export type Experience = {
  role: string;
  company: string;
  dates: string;
  location: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Front-End Engineer",
    company: "Resarv",
    dates: "April 2025 - Present",
    location: "Remote",
    highlights: [
      "Translated Figma designs into pixel-perfect, production-ready user journeys.",
      "Led adoption of Next.js 14+ and React Server Components to improve page performance.",
      "Built responsive interfaces with Tailwind CSS and Framer Motion, achieving a 98% Lighthouse performance score.",
      "Reduced content delivery times by 40% with ISR and a headless CMS.",
      "Designed a secure OAuth 2.0 authentication flow with NextAuth.js.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Devligence",
    dates: "May 2024 - Present",
    location: "Nairobi, Kenya",
    highlights: [
      "Architected scalable web applications from concept through deployment, including AI-powered features.",
      "Built a Django REST Framework and PostgreSQL API supporting 10,000+ concurrent users.",
      "Deployed applications on AWS and automated releases with GitHub Actions.",
      "Improved system interoperability and data flow efficiency by 30% through REST and GraphQL APIs.",
      "Implemented Playwright and Cypress testing strategies that reduced post-deployment bugs by 25%.",
    ],
  },
  {
    role: "Software Engineer (Part-time)",
    company: "Mzizi",
    dates: "March 2023 - December 2024",
    location: "Nairobi, Kenya",
    highlights: [
      "Led mobile development of a cross-platform Agritech application with React Native and Expo, delivering the MVP two weeks early.",
      "Improved data-fetching performance by 20% with Apollo Client, GraphQL state management, and caching.",
      "Implemented server-side rendering with Next.js to improve web platform discoverability and organic traffic.",
    ],
  },
];

export const projects: Project[] = [
  // {
  //   slug: "notical",
  //   name: "Notical",
  //   year: "2024",
  //   summary:
  //     "A Notion-to-Google-Calendar bridge that lets you manage Notion tasks straight from your calendar.",
  //   description:
  //     "Notycal is a dynamic integration tool designed to seamlessly connect your Notion workspace with your Google Calendar. It empowers you to edit and manage your Notion tasks straight from your Google Calendar interface. With Notycal, balancing your schedule and tasks becomes more efficient than ever before.",
  //   stack: ["TypeScript", "Next.js", "Supabase", "MUI", "Redux"],
  //   image: notical,
  //   deployLink: "https://app.noticale.com/",
  //   codeLink: "https://github.com/kiptanuiBoaz/notical-app",
  // },
  {
    slug: "wazibiz-ecommerce",
    name: "WaziBiz Ecommerce",
    year: "2024",
    summary:
      "Full commerce stack with Stripe card checkout and M-Pesa STK push for mobile money.",
    description:
      "An eCommerce application that enables users to browse products, add items to their cart, and proceed to a secure checkout via card using Stripe and mobile money via M-Pesa. Developed using the MERN stack with additional support from Firebase for authentication and data storage. It demonstrates the successful integration of MERN, Firebase and Stripe to build a functional eCommerce platform.",
    stack: ["Node.js", "TypeScript", "React", "Firebase", "Redux"],
    image: wazibiz,
    deployLink: "https://wazibiz.vercel.app/",
    codeLink: "https://github.com/kiptanuiBoaz/wazibiz",
  },
  {
    slug: "geek-gazette",
    name: "Geek Gazette",
    year: "2023",
    summary:
      "A publishing platform for geek culture — tags, categories and a reading-first article view.",
    description:
      "The ultimate destination blog site for geeks. It covers a wide range of topics including culture, politics, technology, business, finance, food and drink, podcasts, sports, spirituality and music. The blog is a platform for people to share their thoughts and ideas on the latest trends and news in these areas.",
    stack: ["MongoDB", "TypeScript", "Node.js", "React", "Redux"],
    image: geekgazette,
    deployLink: "https://geekgazette.vercel.app/",
    codeLink: "https://github.com/kiptanuiBoaz/geekgazette/",
  },
  // {
  //   slug: "harry-potter",
  //   name: "Harry Potter",
  //   year: "2023",
  //   summary:
  //     "App Router experiment fetching the Harry Potter API into an indexed character register.",
  //   description:
  //     "The Harry Potter web application is a Next.js project that utilises the App Router, fetching data from the Harry Potter API to display character information in a table. The character names serve as links to individual character pages with more details.",
  //   stack: ["TypeScript", "Next.js", "SCSS", "Redux"],
  //   image: harryPotter,
  //   deployLink: "https://harry-potter-lovat-ten.vercel.app/",
  //   codeLink: "https://github.com/kiptanuiBoaz/harry-potter",
  // },
  // {
  //   slug: "sogy-landing-page",
  //   name: "Sogy Landing Page",
  //   year: "2022",
  //   summary:
  //     "A hotel landing page — my first React project and a study in interface craft.",
  //   description:
  //     "Sogy is a landing page for an imaginary hotel and represents my first project in React, marking a significant milestone in my journey as a web developer. After transitioning from vanilla JavaScript, HTML and CSS, I immersed myself in React to enhance my skills and explore the possibilities it offers. Sogy showcases my technical abilities alongside my growing expertise in designing appealing user interfaces.",
  //   stack: ["JavaScript", "React", "SCSS"],
  //   image: sogy,
  //   deployLink: "https://sogy-poc.vercel.app/",
  //   codeLink: "https://github.com/kiptanuiBoaz/sogy-poc",
  // },
  {
    slug: "simonsgame",
    name: "Simon Game",
    year: "2022",
    summary:
      "The classic memory sequence game, built in pure JavaScript against the raw DOM.",
    description:
      "Simon, invented by Ralph H. Baer and Howard J. Morrison, is an electronic game that tests short-term memory skills. It presents a sequence of tones and lights for the user to replicate. As the user succeeds, the sequence lengthens and becomes more challenging. Using pure JavaScript I implemented this game, deepening my understanding of the DOM and JavaScript methods. Failing to replicate the pattern ends the game, requiring the player to restart.",
    stack: ["JavaScript", "HTML", "CSS"],
    image: simonsgame,
    deployLink: "https://kiptanuiboaz.github.io/simon-s-game/",
    codeLink: "https://github.com/kiptanuiBoaz/simon-s-game/",
  },
];

export const skills: { text: string; note: string; level: number }[] = [
  { text: "Python", note: "Django / DRF", level: 4 },
  { text: "JavaScript / TypeScript", note: "Web Applications", level: 5 },
  { text: "Node.js", note: "NestJS / Services", level: 4 },
  { text: "React", note: "Next.js / Native", level: 5 },
  { text: "REST / GraphQL", note: "APIs / Contracts", level: 4 },
  { text: "PostgreSQL / MySQL", note: "Relational Data", level: 4 },
  { text: "MongoDB", note: "Document Data", level: 4 },
  { text: "AWS", note: "EC2 / S3 / Lambda", level: 3 },
  { text: "CI/CD", note: "GitHub Actions", level: 4 },
  { text: "Docker", note: "Containerization", level: 3 },
  { text: "Playwright / Cypress", note: "End-to-end Testing", level: 4 },
];

export const stack = [
  "Python",
  "Django",
  "Django REST Framework",
  "Node.js",
  "NestJS",
  "React",
  "TypeScript",
  "Next.js",
  "React Native",
  "Expo",
  "GraphQL",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "AWS",
  "Docker",
  "GitHub Actions",
  "Playwright",
  "Cypress",
  "Git",
];

export const socials = [
  { label: "GitHub", href: "https://github.com/kiptanuiBoaz" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/boaz-serem-466154217/" },
  { label: "X", href: "https://twitter.com/kiptanui_boazo" },
  { label: "WhatsApp", href: "https://wa.me/254705935133?text=Hello%20there!" },
];

export const RESUME_URL =
  "https://drive.google.com/file/d/1fNee8VPCeI6TwWxv-k8jN9JkN0glyVfF/view?usp=drive_link";
