import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { Mail, Linkedin, Github, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [showEmailTooltip, setShowEmailTooltip] = useState(false);

    // Obfuscate email using character codes for better bot protection
    const getEmail = () => {
        // Character codes for: ashish1995@gmail.com
        const codes: number[] = [97, 115, 104, 105, 115, 104, 49, 57, 57, 53, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109];
        return String.fromCharCode(...codes);
    };

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const email = getEmail();
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
                        Ready to build something amazing? Let's get in touch.
                    </p>
                </motion.div>

                {/* Social Links - Including Email */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-6 mb-16"
                >
                    {[
                        {
                            icon: Mail,
                            href: '#',
                            label: 'Email',
                            isEmail: true,
                            onClick: handleEmailClick
                        },
                        {
                            icon: Github,
                            href: personalInfo.social.github,
                            label: 'GitHub',
                            isEmail: false
                        },
                        {
                            icon: Linkedin,
                            href: personalInfo.social.linkedin,
                            label: 'LinkedIn',
                            isEmail: false
                        },
                    ].map((social, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            onMouseEnter={() => social.isEmail && setShowEmailTooltip(true)}
                            onMouseLeave={() => social.isEmail && setShowEmailTooltip(false)}
                        >
                            <motion.a
                                href={social.href}
                                target={social.isEmail ? undefined : "_blank"}
                                rel={social.isEmail ? undefined : "noopener noreferrer"}
                                onClick={social.onClick}
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative p-5 rounded-full bg-surface border border-border hover:border-primary/50 transition-all flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-primary/20"
                            >
                                <social.icon size={28} className="text-text-muted group-hover:text-primary transition-colors" />

                                {/* Label tooltip */}
                                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {social.isEmail && copied ? (
                                        <span className="flex items-center gap-1 text-primary font-medium">
                                            <Check size={12} />
                                            Copied!
                                        </span>
                                    ) : (
                                        social.label
                                    )}
                                </span>
                            </motion.a>

                            {/* Email tooltip - shows actual email on hover */}
                            {social.isEmail && showEmailTooltip && !copied && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-surface border border-primary/30 shadow-xl whitespace-nowrap pointer-events-none z-20"
                                >
                                    <p className="text-sm font-mono text-text">{getEmail()}</p>
                                    <p className="text-xs text-text-muted mt-1">Click to copy</p>
                                    {/* Arrow */}
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface border-r border-b border-primary/30 rotate-45" />
                                </motion.div>
                            )}
                        </motion.div>
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
