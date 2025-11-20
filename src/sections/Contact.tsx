import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = personalInfo.social.email.replace('mailto:', '');

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-32 px-6 bg-background relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-background pointer-events-none" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-black text-text mb-8 tracking-tight">
                        Let's <span className="text-primary relative inline-block">
                            Connect
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto font-light">
                        Ready to build something amazing? Drop me an email.
                    </p>
                </motion.div>

                {/* Email Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="group relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 transition-all">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-full bg-primary/20">
                                    <Mail size={32} className="text-primary" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-text-muted mb-1">Email me at</p>
                                    <a
                                        href={personalInfo.social.email}
                                        className="text-2xl md:text-3xl font-bold text-text hover:text-primary transition-colors"
                                    >
                                        {email}
                                    </a>
                                </div>
                            </div>
                            <button
                                onClick={copyEmail}
                                className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-all flex items-center gap-2"
                            >
                                {copied ? (
                                    <>
                                        <Check size={18} />
                                        Copied!
                                    </>
                                ) : (
                                    <>
                                        <Copy size={18} />
                                        Copy Email
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-6 mb-16"
                >
                    {[
                        { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
                        { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="group relative p-4 rounded-full bg-surface border border-border hover:border-primary/50 transition-all"
                        >
                            <social.icon size={24} className="text-text-muted group-hover:text-primary transition-colors" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {social.label}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-border text-center"
                >
                    <p className="text-sm text-text-muted font-mono">
                        © {new Date().getFullYear()} {personalInfo.name}. Built with React + Framer Motion
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
