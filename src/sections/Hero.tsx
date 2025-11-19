import { motion, useScroll, useTransform } from 'framer-motion';
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
            {/* Parallax Background Elements */}
            <motion.div
                style={{ y: y1 }}
                className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-float"
            />
            <motion.div
                style={{ y: y2, animationDelay: '2s' } as any}
                className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px] animate-float"
            />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Animated Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-text"
                    >
                        {personalInfo.name}
                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-primary"
                        >
                            .
                        </motion.span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-2xl lg:text-3xl text-text-muted font-light mb-6"
                    >
                        {personalInfo.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="text-xl text-primary font-medium mb-8"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="text-lg text-text-muted max-w-xl mb-10 leading-relaxed"
                    >
                        {personalInfo.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <MagneticButton
                            href="#projects"
                            className="btn-primary flex items-center gap-2 relative overflow-hidden group"
                        >
                            <span className="relative z-10">View Work</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-20 animate-shimmer" />
                        </MagneticButton>

                        <MagneticButton
                            href={personalInfo.social.resume}
                            className="px-6 py-3 rounded-lg border border-border font-medium hover:bg-surface hover:border-primary/50 transition-all text-text flex items-center gap-2"
                        >
                            Download CV
                            <Download size={18} />
                        </MagneticButton>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                        className="flex gap-6 mt-12"
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
                                className="text-text-muted hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full relative group"
                                whileHover={{ y: -5, scale: 1.1 }}
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Content - Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center justify-center relative"
                >
                    <div className="relative w-[350px] h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-surface group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.7 }}
                            src={photo}
                            alt="Ashish Arun"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-10 right-10 w-full h-full border-2 border-primary/30 rounded-2xl translate-x-4 translate-y-4" />
                    <div className="absolute -z-20 -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
