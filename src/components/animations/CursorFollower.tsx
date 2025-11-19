import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CursorFollower = () => {
    const [isVisible, setIsVisible] = useState(false);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, [x, y, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed pointer-events-none z-50 mix-blend-difference"
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            {/* Outer ring */}
            <motion.div
                className="w-8 h-8 border-2 border-white rounded-full"
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            {/* Inner dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />
        </motion.div>
    );
};
