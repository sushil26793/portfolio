import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { experiences } from '../../data/experience';

export const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Work Experience"
                    subtitle="My professional journey and key achievements"
                    icon={<Briefcase className="w-8 h-8" />}
                />

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden sm:block" />

                    <div className="space-y-12">
                        {experiences?.map((exp, index) => (
                            <AnimatedSection key={exp.id} delay={index * 0.2}>
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-center ${index % 2 === 0
                                            ? 'md:flex-row'
                                            : 'md:flex-row-reverse'
                                        } flex-col gap-8`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10 hidden sm:block" />

                                    {/* Content */}
                                    <div className="w-full md:w-[calc(50%-2rem)]">
                                        <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                            <CardHeader>
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <CardTitle className="text-xl md:text-2xl mb-1">
                                                            {exp.role}
                                                        </CardTitle>
                                                        <p className="text-lg font-semibold text-primary">
                                                            {exp.company}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        {exp.duration}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        {exp.location}
                                                    </span>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {exp.description}
                                                </p>

                                                {/* Achievements */}
                                                <div className="space-y-2">
                                                    <h4 className="font-semibold text-sm">
                                                        Key Achievements:
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {exp.achievements.map((achievement, idx) => (
                                                            <motion.li
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: idx * 0.1 }}
                                                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                                            >
                                                                <ChevronRight className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                                                                <span>{achievement}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {exp?.technologies?.map((tech) => (
                                                        <Badge
                                                            key={tech}
                                                            variant="secondary"
                                                            className="text-xs"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
