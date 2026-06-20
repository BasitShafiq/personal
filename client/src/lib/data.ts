import { Briefcase, Code2, GraduationCap, Server, Layout, Database, Smartphone, ShoppingCart, Globe, Zap } from "lucide-react";

export const personalInfo = {
  name: "Basit Shafiq",
  title: "Software Engineer",
  email: "abdulbasit.devblends@gmail.com",
  phone: "+923104249093",
  linkedin: "https://linkedin.com/in/basitshafiq/",
  github: "https://github.com/BasitShafiq",
  summary: "Results-driven Software Engineer with a passion for building scalable, robust web and mobile applications. Experienced in modern frameworks, seamless user experiences, and efficient backend architectures."
};

export const experience = [
  {
    id: 1,
    role: "Java/Spring Boot Developer",
    company: "i2c Inc.",
    period: "July 2024 - Present",
    description: "Backend developer on a financial platform — built transaction history modules, scheduled batch processing with multithreading, and an Android receipt management module. Established a full Selenium/Gradle automation suite integrated into CI/CD with Allure reporting.",
    icon: Server,
  },
  {
    id: 2,
    role: "Mean Stack Developer",
    company: "DevSaga",
    period: "Nov 2023 - June 2024",
    description: "Built an Angular admin panel and Ionic mobile app for an e-commerce platform. Led Node.js/PostgreSQL backend, implemented social auth, push notifications, and Firebase, PostgreSQL data sync.",
    icon: Code2,
  },
  {
    id: 3,
    role: "Web Developer",
    company: "DevBlends",
    period: "July 2023 - Nov 2023",
    description: "Developed and maintained applications implementing complex Flutter state management architectures and implemented Redis caching for optimized data retrieval.",
    icon: Layout,
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor in Software Engineering",
    institution: "Punjab University College of Information and Technology (PUCIT)",
    period: "2020 - 2024",
    details: "CGPA: 3.56/4.00. Focus on core computer science principles, software architecture, and modern application development.",
  },
  {
    id: 2,
    degree: "FSc (Pre-Engineering)",
    institution: "Government College University Lahore (GCU)",
    period: "2018 - 2020",
    details: "Strong foundation in mathematics and analytical problem solving.",
  }
];
export const projects = [
  {
    id: 1,
    title: "Spot Arena",
    category: "Mobile Platform",
    description: "A comprehensive mobile platform for booking sports courts across football, cricket, basketball, and tennis with real-time availability.",
    tech: ["AngularJS", "Ionic", "Node.js", "PostgreSQL", "Firebase"],
    icon: Smartphone,
    image: "/images/arean.png",
    link: "https://apps.apple.com/pk/app/spot-arenas/id6480377957",
  },
  {
    id: 2,
    title: "Fitness Community App",
    category: "Mobile App",
    description: "Social fitness app with workout sharing, group session scheduling via video conferencing, and nutrition tracking APIs.",
    tech: ["Flutter", "Firebase", "ZegoCloud", "Nutrition APIs"],
    icon: Smartphone,
    image: "/images/fitness2", // fix this extension
    github: "https://github.com/BasitShafiq/Fit-Social",
  },
  {
    id: 3,
    title: "Accurate Services Pakistan",
    category: "WordPress Platform",
    description: "Professional WordPress site for a global freight forwarding firm covering Afghan Transit, Sea Freight, and Marine Logistics services.",
    tech: ["WordPress", "UI/UX Design"],
    icon: Globe,
    image: "/images/accurate-service.png",
    link: "http://www.accurateservicespakistan.com/",
  },
  {
    id: 4,
    title: "Realtime Food Truck",
    category: "Full Stack App",
    description: "Final Year Project — location-aware food truck tracking with real-time updates, review system, and secure online payments.",
    tech: ["Flutter", "REST APIs", "Redis", "Node.js", "Firebase"],
    icon: Smartphone,
    image: "/images/food truck.jpg",
    github: "https://github.com/BasitShafiq/Tacco-Truck-Backend",
  },
  {
    id: 5,
    title: "Qeemat App",
    category: "Mobile Platform",
    description: "Cross-platform mobile application for browsing and purchasing grocery items online with integrated payments and real-time order tracking.",
    tech: ["Angular", "Ionic", "Firebase", "Paymob", "Firebase Cloud Messaging"],
    icon: ShoppingCart,
    image: "/images/Qeemat-app.jpg",
    link: "https://devsaga.io",
    github: "https://github.com/BasitShafiq",
  },
  {
    id: 6,
    title: "YouTube Smart-Pause",
    category: "Browser Extension",
    description: "Productivity Chrome extension automating video playback based on tab visibility — 50+ daily active users on the Chrome Web Store.",
    tech: ["JavaScript", "Chrome APIs", "Automation"],
    icon: Zap,
    image: "/images/yt-play-pause.png",
    link: "https://chromewebstore.google.com/detail/hgbimjhokmpbblbofpdecgjekjaibpkn/preview?hl=en-GB&authuser=0",
  },
  {
    id: 7,
    title: "Hostel Mess System",
    category: "Full Stack App",
    description: "Management system for hostel dining with attendance tracking, meal reservations, and Stripe payment integration.",
    tech: ["Python", "Flask", "MongoDB", "Bootstrap", "Stripe"],
    icon: Layout,
    image: "/images/hostel_menu",
    github: "https://github.com/BasitShafiq/Hostel_Mess",
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Dart", "Python", "C++", "C", "SQL"],
  frontend: ["Angular", "Flutter", "Ionic", "jQuery", "Bootstrap", "React", "WordPress"],
  backend: ["Node.js", "Express.js", "Flask", "ASP.NET", "Spring Boot"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
  tools: ["Git", "Selenium", "Gradle", "PyTorch", "AWS", "Chrome APIs"]
};

export const skillProficiency = [
  { name: "Java / Spring Boot", level: 88, color: "#f07178", category: "Backend" },
  { name: "Angular / Ionic", level: 85, color: "#82aaff", category: "Frontend" },
  { name: "Node.js / Express", level: 80, color: "#c3e88d", category: "Backend" },
  { name: "Flutter / Dart", level: 78, color: "#89ddff", category: "Mobile" },
  { name: "React / TypeScript", level: 75, color: "#c792ea", category: "Frontend" },
  { name: "PostgreSQL / MongoDB", level: 80, color: "#ffcb6b", category: "Database" },
  { name: "Firebase / AWS", level: 72, color: "#f78c6c", category: "Cloud" },
  { name: "Python / Flask", level: 70, color: "#e879f9", category: "Backend" },
];

export const awards = [
  "Runner-Up App Hackathon PUCon",
  "Participant Competitive Programming Code Fest"
];
