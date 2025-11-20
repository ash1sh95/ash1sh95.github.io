import { motion } from 'framer-motion';
import { skills, certifications } from '../data/content';
import { Award, Cpu, Database, Cloud, Code, Brain, Shield, Zap, type LucideIcon } from 'lucide-react';

const categoryIcons: Record<string, LucideIcon> = {
    'Data & AI Platforms': Database,
    'GenAI & ML': Brain,
    'Programming': Code,
    'Cloud & Infrastructure': Cloud,
    'Data Engineering': Zap,
    'Security & Compliance': Shield,
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 bg-surface transition-colors duration-300 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex items-center gap-4"
                >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Cpu size={32} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-text">
                        Technical Arsenal
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Skills with Visual Icons */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        {skills.map((category, catIndex) => {
                            const Icon = categoryIcons[category.category] || Cpu;
                            return (
                                <motion.div
                                    key={catIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-md"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                                            {category.category}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items?.slice(0, 6).map((item, itemIndex) => (
                                            <motion.span
                                                key={`${catIndex}-${itemIndex}`}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: catIndex * 0.1 + itemIndex * 0.05 }}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-3 py-1 bg-surface border border-border rounded-full text-xs font-medium text-text-muted hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                        {category.items && category.items.length > 6 && (
                                            <span className="px-3 py-1 text-xs font-medium text-primary cursor-pointer hover:underline">
                                                +{category.items.length - 6} more
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-br from-background to-surface border border-border rounded-2xl p-8 shadow-lg h-fit sticky top-24"
                    >
                        <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3 text-text">
                            <Award className="text-primary" /> Certifications
                        </h3>
                        <div className="space-y-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="pb-6 border-b border-border last:border-0 last:pb-0 group"
                                >
                                    <h4 className="font-bold text-text mb-2 text-sm leading-tight group-hover:text-primary transition-colors">{cert.name}</h4>
                                    <div className="flex justify-between items-center text-xs font-mono text-text-muted">
                                        <span>{cert.issuer}</span>
                                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20">
                                            {cert.validity.split(' ').pop()}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
