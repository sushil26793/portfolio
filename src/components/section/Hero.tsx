import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Code2 } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo, socialLinks } from '../../data/personal';

export const Hero = () => {
    const handleScrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
        },
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto text-center"
                >
                    {/* Greeting */}
                    <motion.div variants={itemVariants} className="mb-4">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                            <Code2 className="w-4 h-4 mr-2" />
                            Welcome to my portfolio
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        Hi, I'm{' '}
                        <span className="gradient-text">{personalInfo.name}</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6"
                    >
                        {personalInfo.title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
                    >
                        {personalInfo.bio}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <Button
                            size="lg"
                            onClick={handleScrollToContact}
                            className="group w-full sm:w-auto text-base px-8 py-6"
                        >
                            Get In Touch
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            asChild
                            className="w-full sm:w-auto text-base px-8 py-6"
                        >
                            <a href="/resume.pdf" download>
                                <Download className="mr-2 h-5 w-5" />
                                Download Resume
                            </a>
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-4"
                    >
                        <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors group"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>
                        <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors group"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>
                        {socialLinks.leetcode && (
                            <a
                                href={socialLinks.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors group"
                                aria-label="LeetCode"
                            >
                                <Code2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </a>
                        )}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 1.5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="w-1.5 h-1.5 rounded-full bg-foreground/60"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
