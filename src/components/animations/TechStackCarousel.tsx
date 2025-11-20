import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef } from 'react';

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
    { name: 'Argo', url: 'https://argoproj.github.io/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg' },
    { name: 'Airflow', url: 'https://airflow.apache.org/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg' },
];

export const TechStackCarousel = () => {
    const controls = useAnimationControls();
    const containerRef = useRef<HTMLDivElement>(null);

    // Duplicate 3 times for smoother looping
    const duplicatedStack = [...techStack, ...techStack, ...techStack];

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: [0, -100 * techStack.length],
                transition: {
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                }
            });
        };
        startAnimation();
    }, [controls]);

    return (
        <div className="w-full overflow-hidden py-16 bg-surface/30 backdrop-blur-sm border-y border-white/5">
            <h3 className="text-2xl font-display font-bold text-text text-center mb-10">
                Technologies I Work With
            </h3>
            <div
                ref={containerRef}
                className="relative flex overflow-hidden mask-gradient"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}
            >
                <motion.div
                    className="flex gap-12 px-12"
                    animate={controls}
                    onHoverStart={() => controls.stop()}
                    onHoverEnd={() => controls.start({
                        x: [null, -100 * techStack.length],
                        transition: {
                            duration: 40,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }
                    })}
                >
                    {duplicatedStack.map((tech, index) => (
                        <a
                            key={`${tech.name}-${index}`}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 group flex flex-col items-center gap-3 min-w-[80px]"
                        >
                            <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-surface border border-white/10 shadow-lg group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all duration-300 group-hover:-translate-y-2">
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <p className="text-xs font-medium text-text-muted group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                                {tech.name}
                            </p>
                        </a>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
