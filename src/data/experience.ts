import {type  Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Hexadecimal Software',
    role: 'Full Stack Developer',
    duration: 'July 2023 - September 2025',
    location: 'Noida , Uttar Pradesh, India',
    description: 'Leading development of enterprise-level web applications using MERN stack in agile Methdologies.',
    achievements: [
      'Architected and deployed 5+ production-ready web applications serving 10K+ users',
      'Reduced API response time by 60% through optimization and caching strategies',
      'Implemented blockchain-based authentication system increasing security by 40%',
      'Mentored 3 junior developers and conducted code review sessions',
    ],
    technologies: ['React', 'Node.js', 'MongoDB','Postgresql', 'AWS', 'Docker'],
  },
  {
    id: '2',
    company: 'Ekana Technology',
    role: 'MERN Stack Developer',
    duration: 'July 2022 - July 2023',
    location: 'Lucknow, Uttar Pradesh, India',
    description: 'Developed scalable web applications and RESTful APIs for various client projects.',
    achievements: [
      'Built responsive e-commerce platform handling 500+ daily transactions',
      'Integrated payment gateways (Stripe, Razorpay) with 99.9% uptime',
      'Improved application performance by 45% through code optimization',
      'Collaborated with cross-functional teams in Agile environment',
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS'],
  },
  {
    id: '3',
    company: 'Spvaig Software Pvt Ltd',
    role: 'Business Development Manager',
    duration: 'Jun 2021 - July 2022',
    location: 'Varanasi , Uttar Pradesh, India',
    description: 'Spearheaded business development initiatives and client relationship management.',
    achievements: [
      'Secured 5+ new client contracts, increasing annual revenue by 10%',
      'Developed and implemented sales strategies leading to a 20% growth in client base',
      'Conducted market research to identify new business opportunities',
    ],
  },
];
