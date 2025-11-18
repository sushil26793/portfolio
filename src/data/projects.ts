import { type Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'HexaHome – Home/PG Rental Platform',
    description: 'Cloud-native rental marketplace connecting tenants and property owners across India.',
    longDescription:
      'HexaHome is a production-grade Home/PG rental platform that streamlines how tenants discover, filter, and book verified properties across India. It features high-performance search, secure authentication, and responsive UI flows tailored for property owners and renters, designed to support growing traffic and real-world business workflows.',
    image: '/portfolio/hexahome.webp',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    githubUrl: '',
    liveUrl: 'https://www.hexahome.in/',
    featured: true,
  },
  {
    id: '2',
    title: 'Vibe – AI Coding Assistant',
    description: 'Full-stack AI-powered coding assistant for faster, smarter development.',
    longDescription:
      'Vibe is a full-stack AI coding assistant built on top of modern LLMs to help developers write, refactor, and debug code more efficiently. It provides context-aware suggestions, error detection, and workflow automation, backed by secure authentication, a relational data model, and subscription billing for premium features.',
    image: 'https://code-agent-eight.vercel.app/logo.svg',
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Inngest',
      'react-hook-form',
      'e2b',
      'Tailwind CSS',
    ],
    githubUrl: 'https://github.com/sushil26793/code_agent',
    liveUrl: 'https://code-agent-eight.vercel.app/',
    featured: true,
  },
  {
    id: '3',
    title: 'DevCollab – Developer Collaboration Platform',
    description: 'Team-focused dev collaboration hub with secure workspaces and live communication.',
    longDescription:
      'DevCollab is a developer collaboration platform that simulates a real-world engineering workspace with secure access, team workspaces, and live communication. Developers can organize projects, manage access via role-based permissions, and collaborate through integrated messaging with code-snippet support, mirroring how modern teams work with Git, feature branches, and auth-protected tools. The UI is optimized for clarity, responsiveness, and a smooth onboarding experience.',
    image: 'https://portfolio-p-1.netlify.app/logo.png',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/sushil26793/dev-collab',
    liveUrl: 'https://portfolio-p-1.netlify.app/',
    featured: true,
  },
  {
    id: '4',
    title: 'Secure Auth System – JWT, Refresh Tokens & Redis',
    description: 'Production-grade Node.js authentication system with JWT, refresh tokens, and rate limiting.',
    longDescription:
      'A production-ready authentication system for MERN-style applications built with Node.js, Express, TypeScript, MongoDB, and Redis. It implements short-lived access tokens and rotating refresh tokens, token revocation with a Redis blacklist, token versioning for instant session invalidation, and HTTP-only cookie support. The system also includes rate limiting on sensitive endpoints, strong password policies with bcrypt hashing, schema validation with Zod, and security hardening via Helmet and CORS, following modern backend security best practices.',
    image: '/portfolio/node-auth-system.webp',
    technologies: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'MongoDB',
      'Mongoose',
      'Redis',
      'JWT',
      'Zod',
      'Docker',
    ],
    githubUrl: 'https://github.com/sushil26793/node-auth-system',
    liveUrl: '', // backend service; leave empty or point to API docs if you host them
    featured: true,
  },
];
