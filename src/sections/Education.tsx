import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
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

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="glass-panel p-8 rounded-2xl hover:border-primary/50 transition-all group hover:-translate-y-2"
                    >
                        <div className="flex items-start gap-6 mb-6">
                            <div className="bg-white rounded-xl p-3 flex-shrink-0 w-20 h-20 flex items-center justify-center overflow-hidden shadow-lg">
                                {edu.logo ? (
                                    <img
                                        src={edu.logo}
                                        alt={`${edu.school} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <GraduationCap className="text-primary w-10 h-10" />
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold font-display text-text mb-2">
                                    {edu.school}
                                </h3>
                                <p className="text-primary font-semibold mb-1">{edu.degree}</p>
                                <p className="text-text-muted text-sm">{edu.date}</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="bg-primary/10 px-4 py-2 rounded-lg inline-block">
                                <p className="text-primary font-semibold text-sm">{edu.grade}</p>
                            </div>
                            <p className="text-text-muted leading-relaxed text-sm">
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
