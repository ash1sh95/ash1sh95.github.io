import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '../data/content';

const Education = () => {
    return (
        <section id="education" className="py-20 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-text mb-4">Education</h2>
                <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="glass-panel p-8 rounded-2xl hover:border-primary/50 transition-all group hover:-translate-y-2 hover:shadow-2xl"
                    >
                        {/* Logo - Centered and Larger */}
                        <div className="flex justify-center mb-6">
                            <div className="bg-white rounded-xl p-4 flex-shrink-0 w-28 h-28 flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-primary/20 transition-shadow">
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
                            <h3 className="text-xl font-bold font-display text-text leading-tight">
                                {edu.degree}
                            </h3>

                            {/* School Name */}
                            <p className="text-lg text-primary font-semibold">
                                {edu.school}
                            </p>

                            {/* Date */}
                            <div className="flex items-center justify-center gap-2 text-text-muted">
                                <Calendar size={16} />
                                <p className="text-sm font-mono">{edu.date}</p>
                            </div>

                            {/* Grade - Highlighted */}
                            <div className="inline-block">
                                <div className="bg-primary/10 px-6 py-2 rounded-full border border-primary/20">
                                    <p className="text-primary font-bold text-sm">{edu.grade}</p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-text-muted leading-relaxed text-sm pt-2">
                                {edu.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
