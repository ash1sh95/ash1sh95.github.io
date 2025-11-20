import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/content';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { MagneticButton } from '../components/animations/MagneticButton';
import photo from '../assets/img/Ashish_Photo.jpg';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 100]);
    const y2 = useTransform(scrollY, [0, 300], [0, -50]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-background">
            {/* Parallax Background Elements - Enhanced Glow */}
            <motion.div
                style={{ y: y1 }}
                className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[150px] animate-float"
            />
            <motion.div
                style={{ y: y2, animationDelay: '2s' }}
                className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] bg-secondary/5 rounded-full blur-[150px] animate-float"
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-20">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Animated Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-6xl lg:text-8xl font-display font-bold leading-tight mb-6 text-text tracking-tight"
                    >
                        {personalInfo.name}
                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, type: "spring" }}
                            className="text-primary inline-block ml-1"
                        >
                            .
                        </motion.span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-2xl lg:text-4xl text-text-muted font-light mb-8 min-h-[3rem] flex items-center"
                    >
                        <span className="mr-3">I am a</span>
                        <TypeAnimation
                            sequence={[
                                'Senior Data Engineer',
                                2500,
                                'AI Architect',
                                2500,
                                'Cloud Solutions Expert',
                                2500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-primary font-medium border-b-2 border-primary/30 pb-1"
                        />
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-xl text-text-muted max-w-xl mb-12 leading-relaxed font-light"
                    >
                        {personalInfo.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="flex flex-wrap gap-5"
                    >
                        <MagneticButton
                            href="#projects"
                            className="btn-primary flex items-center gap-3 px-8 py-4 text-lg rounded-full relative overflow-hidden group shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                        >
                            <span className="relative z-10">View Work</span>
                            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-white/20 to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 animate-shimmer" />
                        </MagneticButton>

                        <MagneticButton
                            href={personalInfo.social.resume}
                            className="px-8 py-4 rounded-full border border-border font-medium hover:bg-surface hover:border-primary/50 transition-all text-text flex items-center gap-3 text-lg backdrop-blur-sm bg-white/5"
                        >
                            Download CV
                            <Download size={20} />
                        </MagneticButton>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex gap-6 mt-16"
                    >
                        {[
                            { icon: Github, href: personalInfo.social.github },
                            { icon: Linkedin, href: personalInfo.social.linkedin },
                            { icon: Mail, href: personalInfo.social.email }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-primary transition-colors p-3 hover:bg-primary/5 rounded-full border border-transparent hover:border-primary/20"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Content - Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.4 }}
                    className="flex items-center justify-center relative lg:justify-end"
                >
                    <div className="relative w-[380px] h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.7 }}
                            src={photo}
                            alt="Ashish Arun"
                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute -z-10 top-0 right-0 w-full h-full border border-dashed border-primary/20 rounded-full scale-150 opacity-50"
                    />
                    <div className="absolute -z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
