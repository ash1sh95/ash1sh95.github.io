import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const increment = Math.random() * 1.5 + 0.3;
                return Math.min(prev + increment, 100);
            });
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 bg-white dark:bg-black flex items-center justify-center z-50 overflow-hidden">
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center px-6 w-full max-w-md">
                {/* Infinity Symbol - Clean Animation */}
                <motion.div
                    className="mb-16 sm:mb-20 relative w-64 h-32 sm:w-80 sm:h-40"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Infinity Symbol SVG */}
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 200 100"
                        style={{ overflow: 'visible' }}
                    >
                        {/* Infinity Outline - Pure Black/White */}
                        <motion.path
                            d="M 30,50 C 30,30 40,20 55,20 C 70,20 77,30 85,50 C 93,70 100,80 115,80 C 130,80 140,70 140,50 C 140,30 130,20 115,20 C 100,20 93,30 85,50 C 77,70 70,80 55,80 C 40,80 30,70 30,50 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="text-black dark:text-white"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </svg>
                </motion.div>

                {/* Name Reveal - E-ink Typography */}
                <motion.div
                    className="mb-4 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                >
                    <h1 className="text-2xl sm:text-3xl font-display font-light tracking-[0.3em] text-black dark:text-white uppercase text-center">
                        Ashish Arun
                    </h1>
                </motion.div>

                {/* Tagline */}
                <motion.div
                    className="mb-16 sm:mb-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.3, duration: 0.8 }}
                >
                    <p className="text-xs sm:text-sm font-mono text-black/60 dark:text-white/60 tracking-widest uppercase text-center">
                        Data Engineer · AI Architect
                    </p>
                </motion.div>

                {/* Minimalist Progress Bar - E-ink Style */}
                <div className="w-full max-w-xs sm:max-w-sm">
                    <motion.div
                        className="h-[2px] bg-black/10 dark:bg-white/10 rounded-full overflow-hidden relative"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-black dark:bg-white"
                            style={{ width: `${progress}%` }}
                            transition={{ ease: "easeOut" }}
                        />
                    </motion.div>

                    {/* Progress Percentage */}
                    <motion.div
                        className="mt-3 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.7 }}
                    >
                        <span className="text-xs font-mono text-black/50 dark:text-white/50 tracking-wider">
                            {Math.round(progress)}%
                        </span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
