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
    description: "Developing CSP-compliance features for the Cardholder 3 app. Built an Android receipt module and managed the automation test suite using Selenium and Gradle.",
    icon: Server,
  },
  {
    id: 2,
    role: "Mean Stack Developer",
    company: "DevSaga",
    period: "Nov 2023 - June 2024",
    description: "Engineered robust web applications utilizing Angular for the admin panel and Ionic for user-facing applications, powered by a Node.js and PostgreSQL backend.",
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
    title: "Qeemat App",
    category: "E-commerce Platform",
    description: "Cross-platform mobile application for browsing and purchasing grocery items online with integrated payments and real-time order tracking.",
    tech: ["Angular", "Ionic", "Firebase", "Paymob", "Firebase Cloud Messaging"],
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1512941691920-25bda36ae95e?w=500&h=300&fit=crop",
    link: "https://devsaga.io",
  },
  {
    id: 2,
    title: "Spot Arena",
    category: "Mobile Platform",
    description: "A comprehensive mobile platform designed for booking sports courts seamlessly across football, cricket, basketball, and tennis.",
    tech: ["AngularJS", "Ionic", "Node.js", "PostgreSQL", "Firebase"],
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
  },
  {
    id: 3,
    title: "YouTube Smart-Pause Chrome Extension",
    category: "Browser Extension",
    description: "Productivity-focused browser extension that automates video playback based on tab visibility, serving 50+ daily active users.",
    tech: ["JavaScript", "Chrome APIs", "Automation"],
    icon: Zap,
    image: "https://images.unsplash.com/photo-1553531088-a8e5c9c34aa9?w=500&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Accurate Services Pakistan",
    category: "WordPress Platform",
    description: "Professional WordPress platform for a global freight forwarding firm showcasing specialized services like Afghan Transit, Sea Freight, and Marine Logistics.",
    tech: ["WordPress", "UI/UX Design"],
    icon: Globe,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    link: "http://www.accurateservicespakistan.com/",
  },
  {
    id: 5,
    title: "Realtime Food Truck (FYP)",
    category: "Full Stack App",
    description: "Location-aware food truck tracking application with real-time location updates, review system, and secure payments.",
    tech: ["Flutter", "REST APIs", "Redis", "Node.js", "Firebase"],
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1565521409009-f567dc6f9a48?w=500&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Hostel Mess System",
    category: "Web Application",
    description: "Complete management system for hostel dining facilities including attendance tracking, reservations, and online payment processing.",
    tech: ["Python", "Flask", "MongoDB", "Bootstrap", "Stripe"],
    icon: Layout,
    image: "https://images.unsplash.com/photo-1563770660941-20978e92a410?w=500&h=300&fit=crop",
  },
  {
    id: 7,
    title: "Fitness Community App",
    category: "Mobile App",
    description: "Social fitness application enabling users to share workouts, schedule group sessions with video conferencing, and track nutrition.",
    tech: ["Flutter", "Firebase", "ZegoCloud", "Nutrition APIs"],
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=300&fit=crop",
  }
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Dart", "Python", "C++", "C", "SQL"],
  frontend: ["Angular", "Flutter", "Ionic", "jQuery", "Bootstrap", "React", "WordPress"],
  backend: ["Node.js", "Express.js", "Flask", "ASP.NET", "Spring Boot"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
  tools: ["Git", "Selenium", "Gradle", "PyTorch", "AWS", "Chrome APIs"]
};

export const awards = [
  "Runner-Up App Hackathon PUCon",
  "Participant Competitive Programming Code Fest"
];
