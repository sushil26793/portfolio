import {type  Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Hexa Home - Home/PG rental Platform',
    description: 'Modern rental marketplace bridging tenants and property owners.',
    longDescription: 'Hexa Home is a robust Home/PG rental platform designed to simplify property rentals in India. Built with a modern tech stack, it offers seamless search, booking, and management features for tenants and property owners alike. Key functionalities include real-time listing updates, secure messaging, and advanced filtering to help users find their ideal rental effortlessly',
    image: '/portfolio/hexahome.webp',  
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB',"Redis", 'Tailwind CSS'],
    githubUrl: '',
    liveUrl: 'https://www.hexahome.in/',
    featured: true,
  },
  {
    id: '2',
    title: 'Vibe- Your Coding Assistant',
    description: 'Your smart AI code assistant for enhanced productivity.',
    longDescription: 'Vibe is a full-stack code assistant powered by advanced AI language models (LLMs), helping developers code faster and smarter. It supports code completion, error detection, and context-aware suggestions in real-time within an intuitive interface. Vibe integrates secure authentication, seamless database management, and premium features powered by Stripe for subscriptions.',
    image: 'https://code-agent-eight.vercel.app/logo.svg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Inngest', 'react-hook-form', 'e2b', 'Tailwind CSS'],
    githubUrl: 'https://github.com/sushil26793/code_agent',
    liveUrl: 'https://code-agent-eight.vercel.app/',
    featured: true,
  },
  {
    id: '3',
    title: 'Real-Time Chat Application',
    description: 'WebSocket-based chat app with end-to-end encryption and file sharing',
    longDescription: 'Secure messaging platform featuring real-time communication, group chats, file sharing, and end-to-end encryption for private conversations.',
    image: '/chat-app.jpg',  // image should be in public/chat-app.jpg
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Redis', 'JWT'],
    githubUrl: 'https://github.com/yourusername/chat-app',
    liveUrl: 'https://chat-app-demo.vercel.app',
    featured: true,
  },
  {
    id: '4',
    title: 'Task Management System',
    description: 'Collaborative project management tool with team features and analytics',
    longDescription: 'Enterprise-grade task management application with kanban boards, team collaboration, time tracking, and comprehensive project analytics.',
    image: '/task-manager.jpg',  // image should be in public/task-manager.jpg
    technologies: ['React', 'Express.js', 'MongoDB', 'Redux', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    featured: false,
  },
  {
    id: '5',
    title: 'AI Content Generator',
    description: 'AI-powered content creation tool using OpenAI API',
    longDescription: 'Intelligent content generation platform leveraging OpenAI GPT models to create blog posts, social media content, and marketing copy.',
    image: '/ai-content.jpg',  // image should be in public/ai-content.jpg
    technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    githubUrl: 'https://github.com/yourusername/ai-content',
    liveUrl: 'https://ai-content-demo.vercel.app',
    featured: true,
  },
  {
    id: '6',
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking with interactive maps and forecasts',
    longDescription: 'Beautiful weather application with current conditions, 7-day forecasts, interactive maps, and personalized weather alerts.',
    image: '/weather-app.jpg',  // image should be in public/weather-app.jpg
    technologies: ['React', 'OpenWeather API', 'Mapbox', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-demo.vercel.app',
    featured: false,
  },
];
