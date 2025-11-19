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
        <section id="skills" className="py-20 px-6 bg-surface transition-colors duration-300">
            <div className="container mx-auto">
                <div className="mb-16 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Cpu size={32} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-text">
                        Technical Arsenal
                    </h2>
                </div>

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
                                    transition={{ delay: catIndex * 0.1 }}
                                    className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold text-text">
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
                                                transition={{ delay: catIndex * 0.1 + itemIndex * 0.03 }}
                                                className="px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-xs font-medium text-text-muted hover:bg-primary/10 hover:text-primary transition-colors"
                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                        {category.items && category.items.length > 6 && (
                                            <span className="px-3 py-1 text-xs font-medium text-primary">
                                                +{category.items.length - 6} more
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Certifications */}
                    <div className="bg-background border border-border rounded-2xl p-8 shadow-lg h-fit">
                        <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3 text-text">
                            <Award className="text-primary" /> Certifications
                        </h3>
                        <div className="space-y-6">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="pb-6 border-b border-border last:border-0 last:pb-0"
                                >
                                    <h4 className="font-bold text-text mb-2 text-sm leading-tight">{cert.name}</h4>
                                    <div className="flex justify-between items-center text-xs font-mono text-text-muted">
                                        <span>{cert.issuer}</span>
                                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                                            {cert.validity.split(' ').pop()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
