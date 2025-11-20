import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '../data/content';

const Education = () => {
    return (
        <section id="education" className="py-20 px-6 container mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20 text-center relative z-10"
            >
                <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-6">Education</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                        className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-primary/10"
                    >
                        {/* Logo - Centered and Larger */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-white rounded-2xl p-4 flex-shrink-0 w-32 h-32 flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-primary/20 transition-all duration-300 group-hover:scale-105">
                                {edu.logo ? (
                                    <img
                                        src={edu.logo}
                                        alt={`${edu.school} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <GraduationCap className="text-primary w-16 h-16" />
                                )}
                            </div>
                        </div>

                        {/* Content - Centered */}
                        <div className="text-center space-y-4">
                            {/* Degree - Most Prominent */}
                            <h3 className="text-2xl font-bold font-display text-text leading-tight group-hover:text-primary transition-colors duration-300">
                                {edu.degree}
                            </h3>

                            {/* School Name */}
                            <p className="text-lg text-text-muted font-medium group-hover:text-text transition-colors duration-300">
                                {edu.school}
                            </p>

                            {/* Date */}
                            <div className="flex items-center justify-center gap-2 text-text-muted/80">
                                <Calendar size={16} />
                                <p className="text-sm font-mono">{edu.date}</p>
                            </div>

                            {/* Grade - Highlighted */}
                            <div className="inline-block pt-2">
                                <div className="bg-primary/5 px-6 py-2 rounded-full border border-primary/10 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                                    <p className="text-primary font-bold text-sm">{edu.grade}</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
