import { motion } from 'framer-motion';
import { about } from '../data/content';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-text mb-4">About Me</h2>
                <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {about.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl hover:border-primary/50 transition-all group hover:-translate-y-2"
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <Icon className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold font-display mb-4 text-text">{item.title}</h3>
                            <p className="text-text-muted leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default About;
