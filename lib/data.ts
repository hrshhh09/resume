import { BrainCircuit, CloudCog, Code2, Database, LineChart, Network, ServerCog, Workflow } from 'lucide-react';

export const profile = {
  name: 'Harsh Aathavale',
  initials: 'HA',
  title: 'Senior Software Engineer',
  location: 'Mumbai, India',
  email: 'aathavaleharsh@gmail.com',
  phone: '+91 93723 11512',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  resumePath: '/api/resume',
};

export const metrics = [
  { value: '50K+', label: 'Daily inferences served' },
  { value: '4x', label: 'GPU throughput gain' },
  { value: '8.69', label: 'BTech CGPA' },
];

export const experiences = [
  {
    role: 'Senior AI Engineer',
    company: 'Fulcrum Digital',
    period: 'Jun 2025 - Present',
    bullets: [
      'Architected production ML serving infrastructure on AKS and Kubernetes, processing 50K+ inference requests daily with sub-200ms latency.',
      'Built full-stack GenAI apps with React, FastAPI, LangGraph agentic workflows, and RAG pipelines, reducing manual document processing by 70%.',
      'Designed event-driven microservices with Kafka and RabbitMQ for real-time data ingestion across distributed systems.',
      'Implemented observability with Grafana and Prometheus; optimized pipelines with Numba/CUDA for 4x throughput improvement.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Pertsol',
    period: 'Nov 2024 - Jun 2025',
    bullets: [
      'Engineered a real-time target proximity prediction system via REST APIs, reducing location lookup latency by 60%.',
      'Built a speaker diarization pipeline and optimized ingestion scripts for audio processing at scale.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Dyma.ai',
    period: 'Jul - Nov 2024',
    bullets: [
      'Built a production agentic RAG system for document retrieval, improving retrieval accuracy by 35% through systematic benchmarking.',
    ],
  },
  {
    role: 'Research Intern',
    company: 'Ernst & Young (EY)',
    period: 'Jan - Jul 2024',
    bullets: [
      'Developed ML-based document retrieval and fraud detection systems, reducing the false-positive rate by 40%.',
    ],
  },
];

export const skillGroups = [
  { label: 'Languages', skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
  { label: 'Backend', skills: ['FastAPI', 'Spring Boot', 'Node.js', 'gRPC', 'REST APIs', 'Nginx'] },
  { label: 'Frontend', skills: ['React', 'Next.js', 'HTML/CSS'] },
  { label: 'Cloud & DevOps', skills: ['AWS', 'Azure', 'GCP', 'AKS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD'] },
  { label: 'Data & Messaging', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ'] },
  { label: 'AI / ML', skills: ['PyTorch', 'Hugging Face', 'LangGraph', 'RAG', 'CUDA', 'Numba'] },
  { label: 'Observability', skills: ['Grafana', 'Prometheus', 'ELK Stack'] },
  { label: 'Tools', skills: ['Git', 'Linux', 'Docker Compose', 'Jira', 'Agile/Scrum'] },
];

export const projects = [
  {
    title: 'Distributed ML Training & Inference Platform',
    description: 'End-to-end ML training pipeline with LoRA fine-tuning, 8-bit quantization, and Kubernetes orchestration for GPU scaling. Designed for cost-efficient model iteration.',
    tech: ['Python', 'PyTorch', 'Kubernetes', 'Docker', 'LoRA', 'Quantization'],
    icon: BrainCircuit,
    source: 'https://github.com/',
    demo: '#contact',
  },
  {
    title: 'Real-Time Issue Processing System',
    description: 'Event-driven full-stack system with real-time WebSocket streaming, agentic workflows, and Docker Compose plus Nginx architecture built for high availability.',
    tech: ['React', 'TypeScript', 'FastAPI', 'WebSockets', 'Docker Compose', 'Nginx'],
    icon: Workflow,
    source: 'https://github.com/',
    demo: '#contact',
  },
  {
    title: 'Production ML Serving Infrastructure',
    description: 'AKS and Kubernetes serving stack processing 50K+ inference requests daily with sub-200ms latency. Instrumented with Grafana and Prometheus observability.',
    tech: ['Kubernetes', 'AKS', 'FastAPI', 'Grafana', 'Prometheus'],
    icon: ServerCog,
    source: 'https://github.com/',
    demo: '#contact',
  },
  {
    title: 'Agentic RAG Document Retrieval',
    description: 'Production RAG system for enterprise document retrieval, improving retrieval accuracy by 35% through systematic benchmarking of chunking and embedding strategies.',
    tech: ['LangGraph', 'RAG', 'Python', 'Vector DB'],
    icon: Database,
    source: 'https://github.com/',
    demo: '#contact',
  },
  {
    title: 'Event-Driven Microservices',
    description: 'Real-time data ingestion pipeline across distributed systems using Kafka and RabbitMQ. Handles high-throughput streams with backpressure and DLQs.',
    tech: ['Kafka', 'RabbitMQ', 'FastAPI', 'Node.js'],
    icon: Network,
    source: 'https://github.com/',
    demo: '#contact',
  },
  {
    title: 'GPU-Accelerated Pipelines',
    description: 'Optimized data pipelines using Numba and CUDA, achieving 4x throughput improvement over the CPU baseline for numerical and inference workloads.',
    tech: ['CUDA', 'Numba', 'Python', 'PyTorch'],
    icon: CloudCog,
    source: 'https://github.com/',
    demo: '#contact',
  },
];

export const blogPosts = [
  {
    slug: 'serving-50k-inference-requests-on-kubernetes',
    title: 'Serving 50K Inference Requests a Day on Kubernetes',
    date: 'May 14, 2025',
    readTime: '8 min read',
    excerpt: 'Lessons from architecting production ML serving on AKS and hitting sub-200ms latency without burning through GPU budget.',
    tags: ['MLOps', 'Kubernetes'],
    body: [
      'The hard part of serving machine learning models in production is rarely a single model endpoint. It is the operational system around it: autoscaling, batching, cold starts, observability, and cost control.',
      'For this platform, Kubernetes handled isolation and scheduling while FastAPI provided a predictable request layer. The biggest win came from treating model servers as measurable services instead of opaque GPU boxes.',
      'The resulting stack handled more than 50K inference requests per day with sub-200ms latency by combining right-sized GPU workers, request queueing, and Prometheus-driven scaling signals.',
    ],
  },
  {
    slug: 'building-agentic-rag-systems-that-work',
    title: 'Building Agentic RAG Systems That Actually Work',
    date: 'Apr 2, 2025',
    readTime: '7 min read',
    excerpt: 'Six months of production RAG taught me that retrieval quality dominates, not the LLM. Here is how we improved accuracy by 35%.',
    tags: ['RAG', 'LangGraph'],
    body: [
      'Agentic RAG becomes useful when the system can inspect its own uncertainty and choose the next retrieval step deliberately.',
      'The largest quality gains came from better chunking, corpus-specific embeddings, and benchmark sets that mirrored real user questions. The agent layer only helped after the retrieval layer was trustworthy.',
      'LangGraph made the orchestration explicit enough to test each decision point, which turned vague prompt tuning into a measurable engineering loop.',
    ],
  },
  {
    slug: 'kafka-vs-rabbitmq-in-real-event-driven-systems',
    title: 'Kafka vs. RabbitMQ in Real Event-Driven Systems',
    date: 'Feb 18, 2025',
    readTime: '6 min read',
    excerpt: 'Both are great. Neither is universal. Here is how I decide when designing event-driven microservices.',
    tags: ['Distributed Systems', 'Kafka'],
    body: [
      'Kafka and RabbitMQ solve different shapes of messaging problems. Kafka shines when durable event history, replay, and high-throughput stream processing matter.',
      'RabbitMQ is often better when routing semantics, work queues, acknowledgements, and operational simplicity are more important than replayable logs.',
      'In real systems, the decision usually follows the recovery story: what must happen after a consumer fails, a downstream system slows down, or a message needs to be replayed?',
    ],
  },
];

export const services = [
  { label: 'Backend APIs', icon: Code2 },
  { label: 'Cloud Platforms', icon: CloudCog },
  { label: 'ML Observability', icon: LineChart },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}