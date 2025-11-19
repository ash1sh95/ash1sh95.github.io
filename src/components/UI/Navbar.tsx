import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Updates', href: '#updates' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto glass-panel rounded-full px-6 py-3 flex items-center gap-6 shadow-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-black/80 backdrop-blur-xl"
            >
                {/* Logo */}
                <motion.a
                    href="#"
                    className="font-display font-bold text-xl tracking-tight text-text"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    ASHISH<span className="text-primary">.</span>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5 relative group"
                        >
                            {link.name}
                            <span className="absolute inset-x-4 bottom-2 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </a>
                    ))}
                </div>

                <div className="w-[1px] h-6 bg-border hidden md:block" />

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-text transition-colors relative overflow-hidden"
                    aria-label="Toggle Theme"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={theme}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.div>
                    </AnimatePresence>
                </button>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-text"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-4 top-24 z-40 pointer-events-auto bg-surface/95 backdrop-blur-2xl rounded-3xl border border-border flex flex-col justify-center items-center shadow-2xl"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-4xl font-display font-bold text-text hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
