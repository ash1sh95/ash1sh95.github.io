import { Database, Cloud, Brain, Code, Rocket, ShieldCheck } from 'lucide-react';
import csuLogo from '../assets/img/education/CSU.jpg';
import vtuLogo from '../assets/img/education/VTU.jpeg';

export const personalInfo = {
    name: "Ashish Arun",
    title: "Technical Principal — Data & AI",
    tagline: "Production agents on Databricks — build, govern, observe, evaluate",
    subtitle: "Agent Governance & Evals | Databricks · Azure | DSPy & Data Infrastructure",
    bio: "Technical Principal — Data & AI at GM Financial with 5+ years of experience, working on production AI agents on Databricks. Focus: agent governance, evals, and control planes that keep agents safe to run. Open-source contributor to Databricks projects.",
    social: {
        linkedin: "https://www.linkedin.com/in/ashish-a/",
        github: "https://github.com/ash1sh95",
        email: "mailto:ashish1995@gmail.com",
        resume: "/resume.pdf"
    }
};

export const techStack = [
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Databricks', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/databricks/databricks-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Argo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg' },
    { name: 'Airflow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg' },
    { name: 'DSPy', icon: 'https://raw.githubusercontent.com/stanfordnlp/dspy/main/docs/static/img/logo.png' }, // Using official repo logo
    { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
];

export const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Suite Projects", value: "6" },
    { label: "Flagship Eval Cases", value: "17/17" },
    { label: "Open-Source PRs into Databricks", value: "2" }
];

export const about = [
    {
        icon: Code,
        title: "Technical Principal",
        description: "Technical Principal — Data & AI at GM Financial with 5+ years of experience building data and AI platforms on Azure and Databricks. Leading end-to-end AI implementations."
    },
    {
        icon: Database,
        title: "Data Engineering Expert",
        description: "Principal-level engineer with 5+ years building production ML systems and cloud-native data platforms. Specialized in Databricks, Azure, and scalable data architecture."
    },
    {
        icon: Brain,
        title: "GenAI & MLOps Leader",
        description: "Architected enterprise GenAI frameworks serving multiple product teams. Works on agent governance, LLM evaluation, and production AI infrastructure. Established Databricks Center of Excellence."
    },
    {
        icon: ShieldCheck,
        title: "Open-Source Contributor",
        description: "Contributor to Databricks open source — two pull requests open in databricks/databricks-ai-bridge (PRs #801 and #802), including a Responses API bug fix with regression tests."
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
        logo: csuLogo
    },
    {
        school: "Visvesvaraya Technological University",
        degree: "Bachelor of Engineering (BE), Electronics and Communication",
        date: "2013 - 2017",
        grade: "First Class with Distinction",
        description: "Ranked in top 1% of class. Organized e-sports tournament and served as placement coordinator.",
        logo: vtuLogo
    }
];

export const experience = [
    {
        company: "GM Financial",
        role: "Technical Principal — Data & AI",
        date: "Present",
        logo: "https://logo.clearbit.com/gmfinancial.com",
        description: [
            "Leads agentic AI work on Databricks — production agents built on Unity Catalog functions, Model Serving, and MLflow.",
            "Designs agent governance and control-plane patterns: judge-before-action policy checks, tool rate limits, human approvals, and audit trails for agent actions.",
            "Owns evaluation practices for GenAI systems — DSPy and MLflow-based evals that gate what ships to production.",
            "Open-source contributor to Databricks projects (databricks-ai-bridge)."
        ]
    },
    {
        company: "GM Financial",
        role: "Data Engineer III",
        date: "Feb 2025 – Present",
        logo: "https://logo.clearbit.com/gmfinancial.com",
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
        logo: "https://logo.clearbit.com/gmfinancial.com",
        description: [
            "Databricks, Azure, IaC, Python and Gen AI development.",
            "Implemented advanced data pipelines and infrastructure automation."
        ]
    },
    {
        company: "GM Financial",
        role: "Data Engineer I",
        date: "Oct 2022 – August 2023",
        logo: "https://logo.clearbit.com/gmfinancial.com",
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
        logo: "https://logo.clearbit.com/snagajob.com",
        description: [
            "Designed and maintained data pipelines using Python, SQL, and AWS services.",
            "Collaborated with data scientists to deploy ML models to production."
        ]
    },
    {
        company: "JBS USA",
        role: "IT Intern",
        date: "Jun 2020 – Aug 2020",
        logo: "https://logo.clearbit.com/jbssa.com",
        description: [
            "Automated database backups with PowerShell, improving efficiency by 50%.",
            "Built GUI for system monitoring using PowerShell Forms and MS SQL."
        ]
    }
];

export const projects = [
    {
        title: "agent-control-plane",
        description: "Judge-before-action control plane for AI agents — policy and LLM-judge gate, tool rate limits, duplicate-call prevention, per-call human approvals, and a JSONL audit log. Databricks notebook and Asset Bundle included.",
        tech: ["Python", "AI Agents", "Databricks", "MLflow", "MCP"],
        link: "https://github.com/ash1sh95/agent-control-plane",
        metrics: "Eval 17/17 · 0 false allows"
    },
    {
        title: "databricks-agent-kit",
        description: "Starter kit for building production agents on Databricks — Unity Catalog tool patterns, Model Serving agent loop, MLflow eval templates, and Asset Bundle deployment.",
        tech: ["Databricks", "Unity Catalog", "MLflow", "LangGraph", "Python"],
        link: "https://github.com/ash1sh95/databricks-agent-kit",
        metrics: "25 tests · Eval 8/8"
    },
    {
        title: "DSPy Observability Dashboard",
        description: "Production-grade observability for DSPy pipelines on Databricks — MLflow tracing with cost, latency and error dashboards for LLM pipelines.",
        tech: ["DSPy", "Databricks", "MLflow", "LLMOps", "Python"],
        link: "https://github.com/ash1sh95/dspy-observability-dashboard",
        metrics: "MLflow tracing"
    },
    {
        title: "Databricks Insight Agent",
        description: "Multi-agent system for real-time monitoring and analysis of Databricks system tables — DSPy, MLflow, enterprise-grade evaluation and security patterns.",
        tech: ["Databricks", "Multi-Agent", "DSPy", "MLflow", "Python"],
        link: "https://github.com/ash1sh95/databricks-insight-agent",
        metrics: "Multi-agent system"
    },
    {
        title: "Azure Agentic RAG",
        description: "Agentic RAG pipeline on Azure OpenAI + LangChain — query routing, retrieval and generation with tool-calling, deployable to Azure Functions / App Service.",
        tech: ["RAG", "Azure OpenAI", "LangChain", "Python"],
        link: "https://github.com/ash1sh95/azure-agentic-rag",
        metrics: "Agentic RAG"
    },
    {
        title: "Awesome Databricks GenAI",
        description: "Curated list of tools, tutorials & repos for building GenAI on Databricks (RAG, Agents, Mosaic AI, LLMs).",
        tech: ["Databricks", "GenAI", "RAG", "AI Agents", "LLM"],
        link: "https://github.com/ash1sh95/awesome-databricks-genai",
        metrics: "Curated list"
    }
];

export const skills = [
    {
        category: "Data & AI Platforms",
        items: ["Databricks", "Azure Synapse", "Azure Data Factory", "Apache Spark", "Unity Catalog", "Delta Lake"]
    },
    {
        category: "GenAI & ML",
        items: ["DSPy", "LangChain", "LangGraph", "OpenAI API", "LLM Fine-tuning", "RAG", "LLM Evals", "MLOps", "MCP", "Local LLMs / Ollama"]
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
        items: ["RBAC", "Azure AD", "Key Vault", "Data Security", "Compliance Frameworks", "Agent Governance"]
    }
];

export const certifications = [
    {
        name: "Microsoft Certified: Azure AI Fundamentals",
        issuer: "Microsoft",
        validity: ""
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
