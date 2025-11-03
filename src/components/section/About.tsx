import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail, Award } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { personalInfo } from '../../data/personal';

const highlights = [
    {
        icon: Briefcase,
        label: 'Experience',
        value: `${personalInfo.yearsOfExperience}+ Years`,
    },
    {
        icon: MapPin,
        label: 'Location',
        value: personalInfo.location,
    },
    {
        icon: Mail,
        label: 'Email',
        value: personalInfo.email,
    },
    {
        icon: Award,
        label: 'Status',
        value: personalInfo.availability,
    },
];

export const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="About Me"
                    subtitle="Get to know more about my background and expertise"
                />

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Image/Avatar Section */}
                    <AnimatedSection delay={0.2}>
                        <div className="relative">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                                    <img
                                        src={personalInfo.avatar}
                                        alt={personalInfo.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback for missing image
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center text-9xl font-bold text-foreground/20">
                          ${personalInfo.name.charAt(0)}
                        </div>
                      `;
                                        }}
                                    />
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                            </motion.div>
                        </div>
                    </AnimatedSection>

                    {/* Content Section */}
                    <AnimatedSection delay={0.4}>
                        <div className="space-y-6">
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-muted-foreground leading-relaxed">
                                    I'm a passionate Full Stack Developer specializing in the MERN stack and advanced AI technologies. With {personalInfo.yearsOfExperience}+ years of experience, I've helped businesses transform their ideas into scalable, high-performance web applications.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    My expertise stretches from designing intuitive user interfaces with React and Next.js to building robust backend systems using Node.js, MongoDB, and PostgreSQL. I'm particularly enthusiastic about Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), and building smart code assistants like Vibe that leverage cutting-edge AI for real-world problem solving.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing insights with the developer community.
                                </p>

                            </div>

                            {/* Quick Info Cards */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {highlights.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                                            <CardContent className="p-4">
                                                <div className="flex flex-col items-center text-center space-y-2">
                                                    <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                        <item.icon className="w-5 h-5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-muted-foreground font-medium">
                                                            {item.label}
                                                        </p>
                                                        <p className="text-sm font-semibold mt-1">
                                                            {item.value}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};
