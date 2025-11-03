import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { projects } from '../../data/projects';
import { useState } from 'react';

export const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll
        ? projects
        : projects.filter((p) => p.featured);
    return (
        <section id="projects" className="py-20 md:py-32 bg-accent/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="A collection of projects I've built that showcase my skills"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {displayedProjects.map((project, index) => (
                        <AnimatedSection key={project.id} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                <Card className="group h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                                    {/* Project Image */}
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                // Fallback for missing image
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center text-6xl font-bold text-foreground/20">
                            ${project.title.charAt(0)}
                          </div>
                        `;
                                            }}
                                        />
                                        {project.featured && (
                                            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                                <Star className="w-3 h-3 fill-current" />
                                                Featured
                                            </div>
                                        )}
                                    </div>

                                    <CardHeader>
                                        <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                    </CardHeader>

                                    <CardContent className="flex-grow space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    className="text-xs"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>

                                    <CardFooter className="flex gap-3 pt-4 border-t">
                                        {project.githubUrl && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                asChild
                                                className="flex-1 group/btn"
                                            >
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                                                    Code
                                                </a>
                                            </Button>
                                        )}
                                        {project.liveUrl && (
                                            <Button
                                                size="sm"
                                                asChild
                                                className="flex-1 group/btn"
                                            >
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                        )}
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Show More/Less Button */}
                {projects.length > projects.filter((p) => p.featured).length && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12"
                    >
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => setShowAll(!showAll)}
                            className="group"
                        >
                            {showAll ? 'Show Less' : 'View All Projects'}
                            <motion.span
                                animate={{ rotate: showAll ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-2"
                            >
                                ↓
                            </motion.span>
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
