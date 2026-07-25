import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Apaarmeet Singh",
  initials: "AS",
  url: "https://apaarmeet.dev",
  location: "Ludhiana, India",
  locationLink: "https://www.google.com/maps/place/ludhiana",
  description:
    "Full-stack developer building real-time systems, AI-powered interfaces, and cloud-native apps. Currently an AI Engineer at Webbee Global.",
  summary:
    "I'm a full-stack developer specializing in real-time systems, AI-powered interfaces, and cloud-native applications. I have strong experience shipping production-ready projects with React, TypeScript, Socket.IO, Cloudflare Workers, and modern backend architectures. Currently, [I work as an AI Engineer at Webbee Global](/#work), where I build LLM integration pipelines that connect project management tools with intelligent, context-aware code assistance. I'm passionate about shipping fast, solving real problems, and working in high-ownership startup environments.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "OpenAI", icon: Icons.openai },
    { name: "Express.js", icon: undefined },
    { name: "Redis", icon: undefined },
    { name: "MongoDB", icon: undefined },
    { name: "WebSockets", icon: undefined },
    { name: "Socket.io", icon: undefined },
    { name: "Cloudflare Workers", icon: undefined },
    { name: "Anthropic API", icon: undefined },
    { name: "Gemini AI", icon: undefined },
    { name: "Langchain", icon: undefined },
    { name: "REST APIs", icon: undefined },
    { name: "JWT", icon: undefined },
    { name: "Zod", icon: undefined },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "apaarmeet5000@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Apaarmeet",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/apaarmeet-singh-67290b28b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/apaarmeet",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:apaarmeet5000@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Webbee Global",
      href: "#",
      badges: [],
      location: "Noida, India",
      title: "AI Engineer",
      logoUrl: "/webbee.png",
      start: "Jan 2026",
      end: "Present",
      description:
        "Built an end-to-end LLM integration pipeline connecting Zoho Projects with intelligent code assistance. Implemented webhook-based automation to capture project issues and codebase context in real-time, and designed a context-aware LLM system that analyzes codebases to generate intelligent first responses for project issues. Developed an automated commenting system that posts LLM-generated solutions directly to Zoho Projects, integrating multiple data sources (code repositories, issue tracking, project context) into a unified AI workflow — reducing initial response time for project issues by 90%.",
    },
  ],
  education: [
    {
      school: "Chandigarh University",
      href: "https://www.cuchd.in",
      degree: "Bachelor of Computer Applications (BCA) · CGPA: 8.2",
      logoUrl: "/chandigarh-university.png",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Harness – Multi-Provider AI Coding Agent",
      href: "https://github.com/Apaarmeet/Coding-Harness",
      dates: "2026",
      active: true,
      description:
        "A multi-provider coding agent supporting Anthropic, OpenAI, and Gemini through a unified tool-calling interface. Includes a modular tool system for file editing, shell execution, search, and web access; semantic, episodic, and procedural memory for context recall across sessions; and parallel sub-agent orchestration for independent task delegation.",
      technologies: [
        "Python",
        "Anthropic API",
        "OpenAI API",
        "Gemini API",
        "Textual",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Apaarmeet/Coding-Harness",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/harness.png",
      video: "",
    },
    {
      title: "Coinbook – Perpetual Futures Trading Platform",
      href: "https://github.com/Apaarmeet/Perps",
      dates: "2026",
      active: true,
      description:
        "A full-stack perpetual futures exchange with an in-memory matching engine for order books, positions, and margin. Microservice communication is architected using Redis streams and pub/sub across the engine, API, and WebSocket layers, with live Binance price feeds driving funding rate calculations and liquidations. Features a Next.js trading dashboard with live charts, order book depth, and position tracking.",
      technologies: [
        "Next.js",
        "Express",
        "Redis",
        "PostgreSQL",
        "WebSockets",
        "Binance API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Apaarmeet/Perps",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/coinbook.png",
      video: "",
    },
    {
      title: "Aura Browse – AI Voice Assistant Chrome Extension",
      href: "https://github.com/Apaarmeet/Aura-Browse",
      dates: "2025",
      active: true,
      description:
        "Hands-free browser automation built with the Web Speech API and Google Gemini. Enables natural language actions like navigation, search, and tab control through a modular system for voice intent parsing and action routing — reducing user interaction steps by up to 80% for common browsing tasks.",
      technologies: [
        "React",
        "TypeScript",
        "Gemini AI",
        "Web Speech API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Apaarmeet/Aura-Browse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/aura-browse.png",
      video: "",
    },
    {
      title: "DevSync – Collaborative Code Editor",
      href: "https://devsync.apaarmeet.dev/home",
      dates: "2025",
      active: true,
      description:
        "A real-time collaborative code editor with sub-100ms editing latency using Socket.IO rooms. Integrates the Monaco Editor to replicate a VS Code-like UX directly in the browser, with a backend architecture supporting shared sessions, live cursor sync, and scalable state sync logic for multi-user editing.",
      technologies: [
        "React",
        "Tailwind",
        "Node.js",
        "Express",
        "Socket.IO",
        "Monaco",
      ],
      links: [
        {
          type: "Website",
          href: "https://devsync.apaarmeet.dev/home",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Apaarmeet/DevSync",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/devsync.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
