import { motion } from 'framer-motion';
import * as SimpleIcons from 'react-icons/si';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { techStack } from '../../data/techStack';
import { Card, CardContent } from '../ui/card';

const categories = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'blockchain', label: 'Blockchain' },
    { key: 'tools', label: 'Tools & DevOps' },
] as const;

export const TechStack = () => {
    return (
        <section id="tech-stack" className="py-20 md:py-32 bg-accent/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Tech Stack"
                    subtitle="Technologies and tools I work with to build amazing products"
                />

                <AnimatedSection>
                    <div className="space-y-12">
                        {categories.map((category, categoryIndex) => {
                            const categoryTechs = techStack.filter(
                                (tech) => tech.category === category.key
                            );

                            if (categoryTechs.length === 0) return null;

                            return (
                                <motion.div
                                    key={category.key}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                >
                                    <h3 className="text-xl md:text-2xl font-bold mb-6">
                                        {category.label}
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                        {categoryTechs.map((tech, index) => {
                                            const IconComponent =
                                                SimpleIcons[tech.icon as keyof typeof SimpleIcons];

                                            return (
                                                <motion.div
                                                    key={tech.name}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay: index * 0.05,
                                                    }}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                                                        <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                                                            {IconComponent && (
                                                                <IconComponent className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300" />
                                                            )}
                                                            <div className="text-center space-y-1">
                                                                <p className="font-semibold text-sm">
                                                                    {tech.name}
                                                                </p>
                                                                <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                                                                    <motion.div
                                                                        initial={{ width: 0 }}
                                                                        whileInView={{ width: `${tech.proficiency}%` }}
                                                                        viewport={{ once: true }}
                                                                        transition={{ duration: 1, delay: 0.2 }}
                                                                        className="h-full bg-primary rounded-full"
                                                                    />
                                                                </div>
                                                                <p className="text-xs text-muted-foreground">
                                                                    {tech.proficiency}%
                                                                </p>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
