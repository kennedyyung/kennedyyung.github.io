import { projectAccents } from "./site";

export const projects = [
  {
    slug: "EcoChef",
    title: "EcoChef",
    titleBefore: "Eco",
    titleEmphasis: "Chef",
    dateLabel: "Sept 2024",
    image: { src: "/ecochef.png", alt: "EcoChef preview" },
    tags: ["React Native", "Python", "AWS Services"],
    description:
      "Mobile app that analyzes nutritional preferences and suggests meals using AWS Bedrock and DynamoDB.",
    accent: projectAccents[0],
    links: [
      { label: "GitHub", href: "https://github.com/kennedyyung/CIC_Hackathon2024" },
    ],
    paragraphs: [
      "A mobile app built at UBC CIC Hackathon 2024. React Native front-end, Python (Flask) back-end. AWS Bedrock and DynamoDB read your preferences and suggest recipes from what's already in your fridge — each one tagged with the carbon and water it saves.",
      {
        before: "Aligned with ",
        emphasis: "UN SDG #12",
        after: " — Responsible Consumption and Production.",
      },
    ],
  },
  {
    slug: "ArcQuest",
    title: "Arc'Quest",
    titleBefore: "Arc'",
    titleEmphasis: "Quest",
    dateLabel: "Apr 2024",
    image: { src: "/Arc'Quest.png", alt: "Arc'Quest preview" },
    tags: ["React Native"],
    featured: true,
    description:
      "Omnichannel Arc'teryx app for outdoor activities, wellness practices, and eco-friendly rewards.",
    accent: projectAccents[1],
    award: "Winner of YouCode x Arc'teryx 2024",
    links: [
      { label: "GitHub", href: "https://github.com/ktran003/YouCode" },
      { label: "Devpost", href: "https://devpost.com/software/arc-quest" },
    ],
    paragraphs: [
      "An omnichannel mobile application designed for Arc'teryx to increase user activity and promote wellness. Users explore personalized recommendations for trails, yoga classes, community events, and clothing — earning points for outdoor activities redeemable for rewards or environmental donations.",
      "Built with React Native, Google Maps API, and OpenWeather API. I implemented the maps integration and UI as one of two developers on the team.",
    ],
  },
  {
    slug: "BudgetBuddies",
    title: "Budget Buddies",
    titleBefore: "Budget",
    titleEmphasis: "Buddies",
    dateLabel: "Mar 2024",
    image: { src: "/BudgetBuddies.PNG", alt: "Budget Buddies preview" },
    tags: ["React.js", "TailwindCSS"],
    featured: true,
    description:
      "Gamified financial literacy app with a Cohere-powered chatbot and passwordless login.",
    accent: projectAccents[2],
    award: "Best DEI Hack — MLH & Fidelity at cmd-F 2024",
    links: [
      { label: "GitHub", href: "https://github.com/ktran003/cmdf" },
      { label: "Devpost", href: "https://devpost.com/software/budget-buddies-18osn5?ref_content=user-portfolio&ref_feature=in_progress" },
    ],
    paragraphs: [
      "A gamified mobile application that makes learning about financial management fun and accessible. Built on React with a mobile-first TailwindCSS UI, featuring a Cohere-powered chatbot and passwordless login via 1Password's Passage API.",
      "I was one of two developers — responsible for Cohere API integration, text-to-speech tooling, and front-end implementation alongside my teammate.",
    ],
  },
  {
    slug: "HarmonyHealth",
    title: "Harmony Health",
    titleBefore: "Harmony",
    titleEmphasis: "Health",
    dateLabel: "Jan 2024",
    image: { src: "/HarmonyHealth.png", alt: "Harmony Health preview" },
    tags: ["React.js", "TailwindCSS", "TypeScript"],
    description:
      "Mobile app for tracking daily health symptoms for yourself and loved ones.",
    accent: projectAccents[3],
    links: [
      { label: "GitHub", href: "https://github.com/kennedyyung/Nwhacks2024" },
      { label: "Devpost", href: "https://devpost.com/software/harmony-health-qkhbgw?ref_content=user-portfolio&ref_feature=in_progress" },
    ],
    paragraphs: [
      "Built during NWHacks 2024 — a mobile application for tracking daily health conditions for yourself and loved ones. Inspired by forgetting symptoms at the doctor's office, with multi-user support for caregivers managing family health.",
      "Created with React.js, TailwindCSS, and TypeScript.",
    ],
  },
  {
    slug: "HarvestHub",
    title: "Harvest Hub",
    titleBefore: "Harvest",
    titleEmphasis: "Hub",
    dateLabel: "Jan 2024",
    image: { src: "/Harvesthub.png", alt: "Harvest Hub preview" },
    tags: ["Figma"],
    description: "UX design tackling food waste, created during UX-athon 2024.",
    accent: projectAccents[0],
    links: [
      { label: "Devpost", href: "https://devpost.com/software/harvest-hub-uz1fhq" },
      { label: "Figma", href: "https://www.figma.com/proto/hwkU4pbmkUJ4fNahmi1vWR/Untitled?type=design&node-id=21-314&t=hE7X80I3sAtObDar-1&scaling=scale-down&page-id=0%3A1&mode=design" },
    ],
    paragraphs: [
      "A UX design project created during UX-athon 2024 using Figma. The application aims to tackle the issue of food waste through thoughtful product design.",
    ],
  },
  {
    slug: "Inteflow",
    title: "Inteflow",
    titleBefore: "Inte",
    titleEmphasis: "flow",
    dateLabel: "Aug 2023",
    image: { src: "/Inteflow.png", alt: "Inteflow preview" },
    tags: ["Swift", "SwiftUI"],
    featured: true,
    description:
      "iOS app that scans math problems and walks you through solutions with a chatbot.",
    accent: projectAccents[1],
    award: "Third Best Overall Project — IgnitionHacks 2023",
    links: [
      { label: "GitHub", href: "https://github.com/jn-han/IgnitionHacks2023" },
      { label: "Devpost", href: "https://devpost.com/software/inteflow" },
    ],
    paragraphs: [
      "An iOS app that scans formula and text-based math problems, then breaks them down with detailed explanations through a chatbot. Includes curated practice problems and textbooks to reinforce understanding.",
      "Our team of three developers — I implemented the UI design and page functionality using SwiftUI.",
    ],
  },
  {
    slug: "Kizuna",
    title: "Kizuna",
    titleBefore: "Kiz",
    titleEmphasis: "una",
    dateLabel: "Jan 2023",
    image: { src: "/kizuna.jpg", alt: "Kizuna preview" },
    tags: ["React.js", "CSS", "HTML"],
    featured: true,
    description: "Livestreaming web app inspired by Twitch, built with Livepeer.",
    accent: projectAccents[2],
    award: "LivePeer Best Overall Video Application — nwHacks 2023",
    links: [
      { label: "GitHub", href: "https://github.com/jn-han/NWHacks2023" },
      { label: "Devpost", href: "https://devpost.com/software/kizuna-gevr8p" },
    ],
    paragraphs: [
      "A livestreaming web application using LivePeer Studio's API to help small creators build stronger communities in real time — reducing the barriers of being a new streamer.",
      "Built with React and Livepeer's API for uploads and livestreams. UI designed in Figma, inspired by Twitch, with a Friends page fostering interaction between streamers and viewers.",
    ],
  },
  {
    slug: "Pomo",
    title: "Pomo's Paradise",
    titleBefore: "Pomo's",
    titleEmphasis: "Paradise",
    dateLabel: "Feb 2023",
    image: { src: "/pomo.PNG", alt: "Pomo's Paradise preview" },
    tags: ["React.js", "CSS", "HTML"],
    description:
      "AI-powered study tool with generated sets, chatbot, and student collaboration.",
    accent: projectAccents[3],
    links: [
      { label: "GitHub", href: "https://github.com/ktran003/CMD-F-Hackathon" },
      { label: "Devpost", href: "https://devpost.com/software/pomo-s-paradise" },
    ],
    paragraphs: [
      "An educational study tool from CMD-f 2023 with AI-generated study sets, an interactive chatbot with study questions, and student collaboration features.",
      "Built with React.js, HTML, and CSS, using Co:Here's text summarization and generation API for study set and question production.",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  return projects[(index + 1) % projects.length];
}

export function getProjectAccent(index) {
  return projectAccents[index % projectAccents.length];
}
