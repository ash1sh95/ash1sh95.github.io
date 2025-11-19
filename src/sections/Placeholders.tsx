import React from 'react';

const Section = ({ id, title, children }: { id: string, title: string, children?: React.ReactNode }) => (
    <section id={id} className="min-h-screen py-20 px-6 container mx-auto">
        <h2 className="text-4xl font-orbitron text-primary mb-12">{title}</h2>
        {children}
    </section>
);

export const About = () => <Section id="about" title="About Me"><div className="text-gray-400">Coming soon...</div></Section>;
export const Experience = () => <Section id="experience" title="Experience"><div className="text-gray-400">Coming soon...</div></Section>;
export const Projects = () => <Section id="projects" title="Projects"><div className="text-gray-400">Coming soon...</div></Section>;
export const Skills = () => <Section id="skills" title="Skills"><div className="text-gray-400">Coming soon...</div></Section>;
export const Contact = () => <Section id="contact" title="Contact"><div className="text-gray-400">Coming soon...</div></Section>;

export default Section;
