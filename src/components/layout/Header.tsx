import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { ThemeToggle } from '../ui/theme-toggle';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-xl md:text-2xl font-bold gradient-text cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#home');
                        }}
                    >
                        Sushil Satyarthi
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}
                                className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-foreground/80 hover:text-foreground transition-colors relative group cursor-pointer"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center space-x-2 md:hidden">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative w-10 h-10"
                            aria-label="Toggle menu"
                        >
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </motion.div>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isOpen ? 1 : 0,
                        height: isOpen ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    {isOpen && (
                        <div className="py-4 space-y-2">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-all cursor-pointer"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    )}
                </motion.div>
            </nav>
        </motion.header>
    );
};
