import { motion } from 'framer-motion';
import { Linkedin, Globe } from 'lucide-react';

const Updates = () => {
    return (
        <section id="updates" className="py-20 px-6 bg-surface border-t border-border">
            <div className="container mx-auto">
                <h2 className="text-5xl md:text-7xl font-display font-black text-text mb-12 text-center uppercase tracking-tight">
                    Live <span className="text-primary">Feed</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {[
                        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7383278812974731264?collapsed=1",
                        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7354903193392222209?collapsed=1"
                    ].map((url, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-background border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                        >
                            {/* Browser Header */}
                            <div className="bg-surface border-b border-border p-3 flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex-1 bg-background border border-border rounded-md px-3 py-1 text-xs font-mono flex items-center gap-2 text-text-muted">
                                    <Globe size={12} /> linkedin.com/feed...
                                </div>
                            </div>

                            {/* Iframe */}
                            <div className="p-2 bg-white flex-1">
                                <iframe
                                    src={url}
                                    height="600"
                                    width="100%"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="Embedded post"
                                    className="w-full h-[500px] md:h-[600px]"
                                ></iframe>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href="https://www.linkedin.com/in/ashish-a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-3"
                    >
                        <Linkedin size={24} />
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Updates;
