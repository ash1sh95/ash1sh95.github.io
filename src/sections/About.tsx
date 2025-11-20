import { motion } from 'framer-motion';
import { about } from '../data/content';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 container mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20 text-center relative z-10"
            >
                <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-6">About Me</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {about.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                                <Icon className="text-primary group-hover:text-white w-8 h-8 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold font-display mb-4 text-text group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-text-muted leading-relaxed text-sm group-hover:text-text transition-colors">
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
