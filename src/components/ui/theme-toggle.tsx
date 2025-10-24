import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { Button } from './button';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === 'dark' ? 0 : 1,
                    opacity: theme === 'dark' ? 0 : 1,
                    rotate: theme === 'dark' ? 180 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Sun className="h-5 w-5" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === 'dark' ? 1 : 0,
                    opacity: theme === 'dark' ? 1 : 0,
                    rotate: theme === 'dark' ? 0 : -180,
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Moon className="h-5 w-5" />
            </motion.div>
        </Button>
    );
};
