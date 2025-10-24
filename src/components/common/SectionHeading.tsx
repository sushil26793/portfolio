import { type ReactNode } from "react";
import { motion } from 'framer-motion';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    icon?: ReactNode;
    alignment?: 'left' | 'center';
}


export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, icon, alignment }) => {
    const itemsAlign = alignment === 'center' ? 'items-center' : 'items-start';
    const textAlign = alignment === 'center' ? 'text-center' : 'text-left';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mb-12 md:mb-16 flex flex-col ${itemsAlign}`}
        >
            {
                icon && (
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="mb-4 text-primary"
                    >
                        {icon}
                    </motion.div>

                )
            }
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 ${textAlign}`}>
                {title}
            </h2>

            {subtitle && (
                <p className={`text-muted-foreground text-lg max-w-2xl ${textAlign}`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    )
}