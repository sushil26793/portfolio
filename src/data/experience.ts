import {type  Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Hexadecimal Software',
    role: 'Full Stack Developer',
    duration: 'Jan 2023 - Present',
    location: 'Mumbai, India',
    description: 'Leading development of enterprise-level web applications using MERN stack and blockchain technologies.',
    achievements: [
      'Architected and deployed 5+ production-ready web applications serving 10K+ users',
      'Reduced API response time by 60% through optimization and caching strategies',
      'Implemented blockchain-based authentication system increasing security by 40%',
      'Mentored 3 junior developers and conducted code review sessions',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Solidity'],
  },
  {
    id: '2',
    company: 'Ekana Technology',
    role: 'MERN Stack Developer',
    duration: 'Jun 2022 - Dec 2022',
    location: 'Remote',
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
    company: 'Freelance',
    role: 'Web Developer',
    duration: 'Jan 2022 - May 2022',
    location: 'Remote',
    description: 'Delivered custom web solutions for startups and small businesses.',
    achievements: [
      'Completed 10+ projects with 100% client satisfaction',
      'Designed and developed landing pages with 35% conversion rate improvement',
      'Built RESTful APIs and integrated third-party services',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'CSS3'],
  },
];
