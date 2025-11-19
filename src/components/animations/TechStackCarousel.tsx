import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface TechLogo {
    name: string;
    url: string;
    logo: string;
}

const techStack: TechLogo[] = [
    { name: 'Python', url: 'https://python.org', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Databricks', url: 'https://databricks.com', logo: 'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg' },
    { name: 'Snowflake', url: 'https://snowflake.com', logo: 'https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg' },
    { name: 'AWS', url: 'https://aws.amazon.com', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Azure', url: 'https://azure.microsoft.com', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'OpenAI', url: 'https://openai.com', logo: 'https://www.vectorlogo.zone/logos/openai/openai-icon.svg' },
    { name: 'LangChain', url: 'https://langchain.com', logo: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4' },
    { name: 'Kafka', url: 'https://kafka.apache.org', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg' },
    { name: 'Terraform', url: 'https://terraform.io', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    { name: 'Docker', url: 'https://docker.com', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', url: 'https://kubernetes.io', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'React', url: 'https://react.dev', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', url: 'https://typescriptlang.org', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'PostgreSQL', url: 'https://postgresql.org', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Git', url: 'https://git-scm.com', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

export const TechStackCarousel = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 50, damping: 20 });

    // Duplicate for seamless loop
    const duplicatedStack = [...techStack, ...techStack, ...techStack];

    useEffect(() => {
        const interval = setInterval(() => {
            const current = x.get();
            const itemWidth = 112; // 80px width + 32px gap
            const totalWidth = techStack.length * itemWidth;

            if (current <= -totalWidth) {
                x.set(0);
            } else {
                x.set(current - 1);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [x]);

    return (
        <div className="w-full overflow-hidden py-12 bg-surface/50">
            <h3 className="text-2xl font-display font-bold text-text text-center mb-8">
                Technologies I Work With
            </h3>
            <div
                ref={containerRef}
                className="relative cursor-grab active:cursor-grabbing"
            >
                <motion.div
                    className="flex gap-8"
                    style={{ x: springX }}
                    drag="x"
                    dragConstraints={{ left: -techStack.length * 112, right: 0 }}
                    dragElastic={0.1}
                >
                    {duplicatedStack.map((tech, index) => (
                        <a
                            key={`${tech.name}-${index}`}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 group"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110">
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <p className="text-xs text-text-muted text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                {tech.name}
                            </p>
                        </a>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
