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
                return prev + 2;
            });
        }, 30);
        return () => clearInterval(interval);
    }, []);

    // Binary rain effect
    const binaryColumns = Array.from({ length: 20 }, (_, i) => i);

    return (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden">
            {/* Binary Rain Background */}
            <div className="absolute inset-0 opacity-5">
                {binaryColumns.map((col) => (
                    <motion.div
                        key={col}
                        className="absolute top-0 text-primary font-mono text-xs"
                        style={{ left: `${col * 5}%` }}
                        initial={{ y: -100 }}
                        animate={{ y: '100vh' }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: 'linear'
                        }}
                    >
                        {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
                    </motion.div>
                ))}
            </div>

            {/* Data Pipeline Visualization */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg width="100%" height="100%" className="max-w-4xl">
                    {/* Animated data flow lines */}
                    <motion.path
                        d="M 100 300 Q 300 100 500 300 T 900 300"
                        stroke="var(--color-primary)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M 100 400 Q 300 600 500 400 T 900 400"
                        stroke="var(--color-secondary)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    />
                </svg>
            </div>

            {/* Main Content */}
            <div className="text-center relative z-10 px-6">
                {/* Personal Branding - Initials */}
                <motion.div
                    className="mb-12 relative"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <div className="relative w-32 h-32 mx-auto">
                        {/* Outer hexagon */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <polygon
                                    points="50 1 95 25 95 75 50 99 5 75 5 25"
                                    fill="none"
                                    stroke="var(--color-primary)"
                                    strokeWidth="2"
                                    opacity="0.5"
                                />
                            </svg>
                        </motion.div>

                        {/* Inner rotating ring */}
                        <motion.div
                            className="absolute inset-4 border-2 border-secondary/40 rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Initials */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.span
                                className="text-5xl font-display font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                AA
                            </motion.span>
                        </div>

                        {/* Pulsing particles */}
                        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-primary rounded-full"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transformOrigin: '0 0',
                                }}
                                animate={{
                                    rotate: angle,
                                    x: [0, 60, 0],
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Loading Text with Data Theme */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-8"
                >
                    <h2 className="text-3xl font-display font-bold text-text mb-2">
                        <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            Initializing Data Pipeline
                        </motion.span>
                    </h2>
                    <p className="text-sm text-text-muted font-mono">
                        {progress < 30 && '// Loading infrastructure...'}
                        {progress >= 30 && progress < 60 && '// Connecting to data sources...'}
                        {progress >= 60 && progress < 90 && '// Compiling AI models...'}
                        {progress >= 90 && '// Ready to deploy...'}
                    </p>
                </motion.div>

                {/* Progress Bar with Data Metrics */}
                <div className="w-80 max-w-full mx-auto">
                    <div className="flex justify-between text-xs text-text-muted mb-2 font-mono">
                        <span>0%</span>
                        <span className="text-primary font-bold">{progress}%</span>
                        <span>100%</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden border border-border">
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full relative"
                            style={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Shimmer effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Tech Stack Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 flex gap-4 justify-center text-xs text-text-muted font-mono"
                >
                    {['Azure', 'Databricks', 'GenAI', 'DSPy'].map((tech, i) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: progress > (i + 1) * 20 ? 1 : 0.3 }}
                            className={progress > (i + 1) * 20 ? 'text-primary' : ''}
                        >
                            [{tech}]
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
