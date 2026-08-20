export const profile = {
  name: 'Prajal Jain',
  initials: 'PJ',
  title: 'AI & Robotics Engineer | Autonomous Systems',
  heroSubtitle: 'Multi-Agent AI Systems, ROS2 Robotics & Production RAG Infrastructure',
  heroDescription:
    'Real-time autonomous systems, computer vision pipelines, multi-agent AI workflows, and embedded edge deployment built for scale.',
  resumeUrl: '/resume-prajal-jain.pdf',
  location: 'Pune, India',
  email: 'prrajal.jain@gmail.com',
  phone: '+91 8766679311',
  summary:
    'AI & Robotics Engineer specializing in real-time autonomous systems, computer vision pipelines, ROS2 navigation stacks, and production AI infrastructure. Experienced in integrating quantized neural networks with embedded edge hardware to achieve 96%+ accuracy and 60+ FPS performance in production environments.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/prajaljain23' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/prajaljain23' },
  ],
}

export const stats = [
  { label: 'Daily Requests Processed', value: '1M+' },
  { label: 'Model Accuracy in Production', value: '96%+' },
  { label: 'Real-Time Edge Inference', value: '60+ FPS' },
  { label: 'Target System Uptime', value: '99.9%' },
]

export const techStack = [
  'ROS2',
  'YOLOv8',
  'PyTorch',
  'TensorFlow',
  'OpenCV',
  'FastAPI',
  'Qdrant',
  'PostgreSQL',
  'Kafka',
  'Redis',
  'Neo4j',
  'Docker',
  'NVIDIA Jetson',
  'STM32',
  'MediaPipe',
  'SLAM',
  'Kubernetes',
  'Terraform',
]

export const skillGroups = [
  {
    title: 'AI & Machine Learning',
    skills: ['YOLOv8', 'TensorFlow', 'PyTorch', 'PPO (Reinforcement Learning)', 'CNNs & ViT', 'LoRA & Unsloth'],
  },
  {
    title: 'Computer Vision & Multimodal',
    skills: ['OpenCV', 'Image Segmentation', 'MediaPipe', 'SLAM', '3D Pose Tracking', 'CLIP & ControlNet'],
  },
  {
    title: 'Robotics & Embedded Systems',
    skills: ['ROS2', 'NVIDIA Jetson', 'STM32 Microcontrollers', 'PLC / SCADA', 'CAN-bus, I2C/SPI/UART', 'PID Flight Control'],
  },
  {
    title: 'Backend & Infrastructure',
    skills: ['Python 3.12+', 'FastAPI', 'Next.js', 'PostgreSQL & Qdrant', 'Kafka & Redis', 'Docker & Kubernetes', 'Terraform'],
  },
]

export const experience = [
  {
    role: 'Machine Learning Engineer Intern',
    company: 'Navikshaa Technologies',
    period: 'Aug 2025 — Dec 2025',
    location: 'Remote',
    description:
      'Built and optimized real-time computer vision pipelines for autonomous mobile robots and UAV systems, deploying quantized models to edge hardware in production and standardizing evaluation workflows across the team.',
    highlights: [
      'Optimized YOLOv8 with TensorRT and INT8 quantization, reaching 60+ FPS on NVIDIA Jetson Orin',
      'Developed TFLite vision pipelines with 94% accuracy, reducing inference latency by 2.5s via pruning',
      'Implemented real-time obstacle avoidance and tracking stacks on NVIDIA Jetson and Raspberry Pi edge boards',
      'Standardized automated model evaluation via mAP/IoU within Git-managed CI/CD production workflows',
    ],
    tags: ['YOLOv8', 'TensorRT', 'NVIDIA Jetson', 'ROS2', 'TFLite'],
  },
]

export const education = [
  {
    degree: 'B.Tech in Artificial Intelligence',
    school: 'Vishwakarma University, Pune',
    period: '2024 — 2027',
    detail: 'GPA: 8.71 / 10',
  },
  {
    degree: 'Diploma in Mechatronics Engineering',
    school: 'Indo-German Tool Room (IGTR), Aurangabad',
    period: '2021 — 2024',
    detail: 'GPA: 7.52 / 10',
  },
]

export const certifications = [
  {
    title: 'Neural Networks and Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    detail: 'CNNs, Hyperparameter Tuning & Deep Architectures',
  },
  {
    title: 'Professional Data Analytics Certificate',
    issuer: 'Google',
    detail: 'Advanced SQL, R Programming & Data Pipelines',
  },
  {
    title: 'Data Science Professional Certificate',
    issuer: 'IBM',
    detail: 'Python for Analytics, Linux & Shell Scripting',
  },
]

export const projects = [
  {
    id: 1,
    slug: 'atlas-rag-enterprise-pipeline',
    title: 'Atlas RAG - Enterprise Retrieval Platform',
    description:
      'Production-grade RAG platform architected for 10M+ PDFs and hundreds of millions of chunks. Combines hybrid search (dense ANN + sparse BM25), GraphRAG, bounded tool use, SSE streaming, multi-tenant isolation, and cloud infrastructure-as-code.',
    tags: ['Python', 'Next.js', 'Qdrant', 'PostgreSQL', 'Kafka', 'Redis', 'Neo4j'],
    year: '2026',
    featured: true,
    category: 'AI Infrastructure',
    status: 'Open Source',
    impact: 'Production RAG platform for 10M+ documents with hybrid search, GraphRAG, and streaming',
    href: 'https://github.com/prajaljain23',
    repo: 'https://github.com/prajaljain23',
  },
  {
    id: 2,
    slug: 'autonomous-racing-line',
    title: 'Autonomous Racing Line & Trajectory Prediction',
    description:
      'A reinforcement learning agent trained with PPO in CARLA for path planning and racing trajectory prediction, with ROS2 nodes bridging simulation to physical servos for active aerodynamics control.',
    tags: ['CARLA', 'PPO', 'ROS2', 'Python', 'C++'],
    year: '2025',
    featured: true,
    category: 'Robotics & RL',
    status: 'Live Simulation',
    impact: 'Sub-10ms latency autonomous trajectory planning with physical servo actuation',
    href: 'https://github.com/prajaljain23',
    repo: 'https://github.com/prajaljain23',
  },
  {
    id: 3,
    slug: 'industrial-ai-waste-sorter',
    title: 'Industrial AI Waste Sorter (Industry 4.0)',
    description:
      'An automated defect detection pipeline using CNNs, integrated with PLC/SCADA over MQTT for real-time telemetry and TinyML models deployed to STM32 MCUs for on-line motor control.',
    tags: ['PLC', 'TensorFlow', 'STM32', 'OpenCV', 'TinyML'],
    year: '2024',
    featured: true,
    category: 'Embedded AI',
    status: 'Industry 4.0',
    impact: 'Closed-loop microsecond motor control for real-time industrial sorting',
    href: 'https://github.com/prajaljain23',
    repo: 'https://github.com/prajaljain23',
  },
  {
    id: 4,
    slug: 'vision-autonomous-drone-stack',
    title: 'Vision-Based Autonomous Drone Stack',
    description:
      'A navigation stack using Kalman filters to improve tracking stability, with failsafe logic and PID control for stable autonomous flight through high-speed maneuvers.',
    tags: ['MediaPipe', 'Kalman Filters', 'Embedded C++', 'OpenCV', 'PID'],
    year: '2024',
    featured: true,
    category: 'Computer Vision',
    status: 'Open Source',
    impact: '94% tracking stability during dynamic high-speed UAV flight',
    href: 'https://github.com/prajaljain23',
    repo: 'https://github.com/prajaljain23',
  },
  {
    id: 5,
    slug: 'sehatsaathi-health-assistant',
    title: 'SehatSaathi - Offline Multilingual Health Assistant',
    description:
      'Offline multilingual AI health assistant supporting 10+ voice inputs with quantized edge deployment (GGUF/Ollama) and speech-driven interaction via Whisper.',
    tags: ['Gemma 4', 'Unsloth', 'LoRA', 'GGUF', 'Ollama', 'Whisper'],
    year: '2025',
    featured: false,
    category: 'Healthcare AI',
    status: 'Open Source',
    impact: 'Offline voice-first AI support for underserved, low-connectivity regions',
    href: 'https://github.com/prajaljain23',
    repo: 'https://github.com/prajaljain23',
  },
]

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Tech Stack', href: '/about#skills' },
]
