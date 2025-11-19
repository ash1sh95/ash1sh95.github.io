import { Database, Cloud, Brain, Code, Rocket } from 'lucide-react';

export const personalInfo = {
    name: "Ashish Arun",
    title: "Senior Data Engineer",
    tagline: "Building Scalable Data Solutions",
    subtitle: "Azure Cloud Architect | End-to-End AI Implementation | DSPy & Data Infrastructure Expert",
    bio: "Senior Data Engineer at GM Financial with 5+ years of experience. Expert in end-to-end AI pipelines, Azure cloud infrastructure, DSPy, MLOps, and scalable data platforms.",
    social: {
        linkedin: "https://www.linkedin.com/in/ashish-a/",
        github: "https://github.com/ash1sh95",
        email: "mailto:ashish1995@gmail.com",
        resume: "/resume.pdf"
    }
};

export const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "25+" },
    { label: "Certifications", value: "10+" },
    { label: "Data & AI Pipelines", value: "30+" }
];

export const about = [
    {
        icon: Code,
        title: "Technical Lead",
        description: "Highly technical Senior Data Engineer with over 5 years of experience building scalable data platforms on Azure. Leading end-to-end AI implementations."
    },
    {
        icon: Database,
        title: "Data Engineering Expert",
        description: "Staff-level data engineer with 4+ years building production ML systems and cloud-native data platforms. Specialized in Databricks, Azure, and scalable data architecture."
    },
    {
        icon: Brain,
        title: "GenAI & MLOps Leader",
        description: "Architected enterprise GenAI frameworks serving multiple product teams. Expert in DSPy, LLM evaluation, and production AI infrastructure. Established Databricks Center of Excellence."
    },
    {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description: "Azure-certified engineer proficient in IaC (Terraform), CI/CD automation, and Kubernetes. Reduced deployment times by 40% through infrastructure automation and best practices."
    },
    {
        icon: Rocket,
        title: "Technical Mentor",
        description: "Created technical curriculum and mentored senior engineers in advanced Data Engineering, MLOps, and GenAI. Passionate about knowledge sharing and team growth."
    }
];

export const education = [
    {
        school: "Colorado State University",
        degree: "Master's degree, Computer Information Systems",
        date: "Aug 2019 - May 2021",
        grade: "GPA 3.94/4.0",
        description: "STEM-designated program focused on data engineering and cloud computing. Key coursework: Data Mining, Database Systems, Business Intelligence, Cloud Computing.",
        logo: "/assets/img/education/CSU.jpg"
    },
    {
        school: "Visvesvaraya Technological University",
        degree: "Bachelor of Engineering (BE), Electronics and Communication",
        date: "2013 - 2017",
        grade: "First Class with Distinction",
        description: "Ranked in top 1% of class. Organized e-sports tournament and served as placement coordinator.",
        logo: "/assets/img/education/VTU.jpeg"
    }
];

export const experience = [
    {
        company: "GM Financial",
        role: "Data Engineer III",
        date: "Feb 2025 – Present",
        description: [
            "Architected the organization's GenAI reference framework, defining standards for model evaluation, security, and IaC. Serves 3+ product teams, accelerating AI feature time-to-market by 40%.",
            "Led the establishment of the Databricks Center of Excellence, creating technical curriculum and mentoring senior engineers in advanced Data Engineering, MLOps, and GenAI.",
            "Drove the technical evaluation and adoption of DSPy framework over LangChain, proving its superior modularity for complex agentic workflows."
        ]
    },
    {
        company: "GM Financial",
        role: "Data Engineer II",
        date: "August 2023 – Feb 2025",
        description: [
            "Databricks, Azure, IaC, Python and Gen AI development.",
            "Implemented advanced data pipelines and infrastructure automation."
        ]
    },
    {
        company: "GM Financial",
        role: "Data Engineer I",
        date: "Oct 2022 – August 2023",
        description: [
            "Led advanced Synapse pipelines and Databricks notebooks for high-volume data ingestion into Adobe Experience Platform.",
            "Migrated Hive to Unity Catalog; Automated Azure resources with Terraform IaC.",
            "Led CI/CD, RBAC, and AI infrastructure explorations, reducing deployment time by 40%."
        ]
    },
    {
        company: "Snagajob Inc.",
        role: "Associate Data Engineer",
        date: "Jul 2021 – Aug 2022",
        description: [
            "Designed and maintained data pipelines using Python, SQL, and AWS services.",
            "Collaborated with data scientists to deploy ML models to production."
        ]
    },
    {
        company: "JBS USA",
        role: "IT Intern",
        date: "Jun 2020 – Aug 2020",
        description: [
            "Automated database backups with PowerShell, improving efficiency by 50%.",
            "Built GUI for system monitoring using PowerShell Forms and MS SQL."
        ]
    }
];

export const projects = [
    {
        title: "Awesome Databricks GenAI",
        description: "A curated collection of resources, notebooks, and guides for building Generative AI applications on the Databricks platform. Includes best practices for LLM deployment and fine-tuning.",
        tech: ["Databricks", "GenAI", "LLMs", "Python"],
        link: "https://github.com/ash1sh95/awesome-databricks-genai",
        metrics: "Production-ready"
    },
    {
        title: "Azure Agentic RAG",
        description: "Implementation of Retrieval-Augmented Generation with agentic capabilities on Azure. Features intelligent document processing, contextual Q&A, and scalable knowledge base management.",
        tech: ["Azure AI", "RAG", "LangChain", "Python"],
        link: "https://github.com/ash1sh95/azure-agentic-rag",
        metrics: "Agentic RAG"
    },
    {
        title: "AI Essay Writer",
        description: "AI-powered essay writing assistant with advanced language models. Features topic analysis, structure generation, and content enhancement. Includes web interface for easy access.",
        tech: ["Python", "OpenAI API", "Streamlit", "NLP"],
        link: "https://github.com/ash1sh95/essay-writer",
        metrics: "Web Interface"
    }
];

export const skills = [
    {
        category: "Data & AI Platforms",
        items: ["Databricks", "Azure Synapse", "Azure Data Factory", "Apache Spark", "Unity Catalog", "Delta Lake"]
    },
    {
        category: "GenAI & ML",
        items: ["DSPy", "LangChain", "OpenAI API", "LLM Fine-tuning", "RAG", "Model Evaluation", "MLOps"]
    },
    {
        category: "Programming",
        items: ["Python", "PySpark", "SQL", "JavaScript", "TypeScript", "PowerShell"]
    },
    {
        category: "Cloud & Infrastructure",
        items: ["Azure", "Terraform", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Azure DevOps"]
    },
    {
        category: "Data Engineering",
        items: ["ETL/ELT", "Data Modeling", "Data Warehousing", "Stream Processing", "Data Governance"]
    },
    {
        category: "Security & Compliance",
        items: ["RBAC", "Azure AD", "Key Vault", "Data Security", "Compliance Frameworks"]
    }
];

export const certifications = [
    {
        name: "Microsoft Certified: Azure AI Fundamentals",
        issuer: "Microsoft",
        validity: "Valid through 2025"
    },
    {
        name: "Databricks Certified Generative AI Engineer Associate",
        issuer: "Databricks",
        validity: "Valid through 2027"
    },
    {
        name: "Databricks Certified Data Analyst Associate",
        issuer: "Databricks",
        validity: "Valid through 2027"
    },
    {
        name: "Databricks Certified Data Engineer Associate",
        issuer: "Databricks",
        validity: "Valid through 2027"
    }
];
