export const profile = {
  name: 'Prajal Jain',
  initials: 'PJ',
  title: 'AI & Robotics Engineering Student',
  heroSubtitle: 'Computer vision on embedded hardware, robotics, and industrial data.',
  heroDescription:
    "Hi, I'm Prajal Jain — an AI & Robotics engineering student. Most interested in computer vision, robotics and embedded systems.",
  resumeUrl: '/resume-prajal-jain.pdf',
  location: 'Nashik, India',
  email: 'prrajal.jain@gmail.com',
  phone: '+91 8766679311',
  summary:
    'AI & Robotics engineering student with a mechatronics background. I build computer vision systems that run on embedded boards — Raspberry Pi, Arduino — where the model has to work inside real power, timing and thermal limits, not just in a notebook.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Prrajaljain' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/prajaljain23' },
  ],
}

export const stats = [
  { label: 'Live Deployments', value: '2' },
  { label: 'Open-Source Repos', value: '4' },
  { label: 'Industry Roles', value: '2' },
  { label: 'B.Tech AI Grad', value: '2027' },
]

export const principles = [
  {
    title: 'Ship it to hardware, then measure',
    description:
      'A model that runs at 30 FPS on a laptop runs at a fraction of that on a Pi. I benchmark on the target board, not the development machine, because that gap is where projects fail.',
  },
  {
    title: 'Mechanical constraints are real constraints',
    description:
      "On my waste sorter, throughput isn't limited by inference — it's limited by how fast a servo can rotate a drum. Knowing which half of a system is the bottleneck saves you optimising the wrong one.",
  },
  {
    title: 'Document the tuning, not just the result',
    description:
      "Every parameter I change gets a comment explaining what raising or lowering it does. Six months later that's the difference between retuning in ten minutes and starting over.",
  },
]

export const skillGroups = [
  {
    title: '01 · AI & Machine Learning',
    skills: [
      'Python',
      'TensorFlow / TFLite',
      'Reinforcement Learning',
      'CNNs',
      'Deep Learning',
      'Model quantisation for edge',
    ],
  },
  {
    title: '02 · Computer Vision',
    skills: [
      'OpenCV',
      'MediaPipe',
      'YOLOv8',
      'Object detection',
      'Image augmentation',
      'Real-time video pipelines',
    ],
  },
  {
    title: '03 · Embedded & Robotics',
    skills: [
      'Raspberry Pi',
      'Arduino',
      'Embedded C / C++',
      'MPU-6050 IMU',
      'Servo & ESC control',
      'PID flight control',
    ],
  },
  {
    title: '04 · Data & Tooling',
    skills: [
      'Google Looker Studio',
      'SQL',
      'Pandas / NumPy',
      'Streamlit',
      'Git',
      'Linux / shell scripting',
    ],
  },
]

export const techCategories = [
  {
    id: 'computer-vision',
    number: '01',
    label: 'Computer Vision',
    icon: '👁️',
    skills: [
      { name: 'OpenCV', desc: 'Real-time video stream ingestion, frame augmentation, and processing pipelines.' },
      { name: 'MediaPipe', desc: 'On-device gesture recognition, pose estimation, and landmark tracking.' },
      { name: 'YOLOv8', desc: 'Real-time object detection, custom model training, and bounding-box inference.' },
      { name: 'Object Detection', desc: 'Multi-class target detection, non-maximum suppression, and spatial tracking.' },
      { name: 'Image Augmentation', desc: 'Dataset expansion, geometric transforms, color jittering, and normalization.' },
      { name: 'Image Processing', desc: 'Filtering, edge detection, morphological transforms, and color-space conversions.' },
    ],
  },
  {
    id: 'embedded-robotics',
    number: '02',
    label: 'Embedded & Robotics',
    icon: '⚙️',
    skills: [
      { name: 'Raspberry Pi', desc: 'On-device TFLite vision inference and multi-threaded GPIO hardware control.' },
      { name: 'Arduino', desc: 'Microcontroller programming, sensor polling, and hardware interrupt handling.' },
      { name: 'Embedded C / C++', desc: 'Low-level hardware drivers, register manipulation, and memory-efficient loops.' },
      { name: 'MPU-6050 IMU', desc: '6-axis accelerometer & gyroscope data fusion, complementary filtering, and orientation.' },
      { name: 'Servo & ESC Control', desc: 'PWM signal generation, motor speed controllers, and dual-thread actuation.' },
      { name: 'PID Flight Control', desc: '250 Hz control loops, roll/pitch/yaw feedback stabilization, and flight tuning.' },
    ],
  },
  {
    id: 'ai-ml',
    number: '03',
    label: 'AI & Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'Python', desc: 'Primary programming language for AI algorithms, model pipelines, and APIs.' },
      { name: 'TensorFlow / TFLite', desc: 'Deep neural network architecture, model quantisation, and edge deployment.' },
      { name: 'Reinforcement Learning', desc: 'Reward function design, Q-learning, and autonomous circuit lap evaluation.' },
      { name: 'CNNs', desc: 'Convolutional neural networks for image classification and feature extraction.' },
      { name: 'Deep Learning', desc: 'Backpropagation, loss function optimization, and deep network architectures.' },
      { name: 'Hyperparameter Tuning', desc: 'Grid search, Bayesian optimization, and regularization strategies.' },
    ],
  },
  {
    id: 'data-tooling',
    number: '04',
    label: 'Data & Tooling',
    icon: '🗄️',
    skills: [
      { name: 'Google Looker Studio', desc: '11 shop-floor telemetry monitoring dashboards and automated reporting.' },
      { name: 'SQL', desc: 'Relational database querying, aggregation, schema design, and data joins.' },
      { name: 'Pandas / NumPy', desc: 'Dataframe manipulation, vectorized numerical computing, and data cleaning.' },
      { name: 'Git', desc: 'Version control, branch management, pull requests, and code collaboration.' },
      { name: 'Linux / Shell Scripting', desc: 'Bash scripting, cron automation, system administration, and CLI workflows.' },
    ],
  },
  {
    id: 'genai-llms',
    number: '05',
    label: 'Generative AI & LLMs',
    icon: '✨',
    skills: [
      { name: 'Llama 3 8B', desc: 'Local and cloud inference, system instruction tuning, and contextual reasoning.' },
      { name: 'Hugging Face Inference API', desc: 'Serverless model endpoints, token stream parsing, and API integration.' },
      { name: 'Prompt Engineering', desc: 'Structured system prompts, zero-shot/few-shot formatting, and guardrails.' },
      { name: 'Streamlit', desc: 'Interactive web applications, live AI assistant UIs, and real-time demos.' },
    ],
  },
]

export const experience = [
  {
    role: 'AI & Data Analyst Intern',
    company: 'Rishabh Instruments Limited',
    period: 'Jun 2026 — Present',
    location: 'Nashik, India · On-site',
    isCurrent: true,
    metrics: [
      '11 Looker Studio Dashboards',
      '7.5 hrs/wk manual work saved',
      'Real-time Telemetry Analytics',
      'Cold-chain Environmental ML',
    ],
    summary:
      'Applied AI and analytics to manufacturing operations at an industrial instruments manufacturer, building monitoring dashboards and predictive models on machine telemetry.',
    highlights: [
      'Built 11 interactive Google Looker Studio dashboards for real-time shop-floor monitoring, replacing ~7.5 hours of manual reporting weekly',
      'Developed predictive models on machine telemetry to flag calibration drift before it caused downtime',
      'Analysed voltage, current, temperature and humidity data to characterise environmental effects on instrument accuracy — applied to cold-chain monitoring for temperature-sensitive goods',
    ],
    tags: ['Python', 'Pandas', 'Google Looker Studio', 'SQL', 'Excel'],
  },
  {
    role: 'Machine Learning Engineer Intern',
    company: 'Navikshaa Technologies',
    period: 'Aug 2025 — Dec 2025',
    location: 'Remote',
    isCurrent: false,
    metrics: [
      '89% Lap Completion Rate',
      '85% Validation Accuracy',
      '13 RL Experiments',
      'Sensor & Vision Pipelines',
    ],
    summary:
      'ML development across computer vision and reinforcement learning as part of the engineering team.',
    highlights: [
      'Trained a reinforcement learning agent on sensor data to complete circuit laps autonomously, reaching an 89% lap-completion rate over evaluation episodes',
      'Built a supervised image classification model on X-ray and MRI scans to detect bone fractures and ligament tears, reaching 85% validation accuracy (research context, not clinical use)',
      'Ran 13 experiments across reward functions and hyperparameters to improve lap-completion rate',
      'Built the pre-processing pipeline for camera and sensor inputs — normalisation, outlier handling, and image augmentation to improve generalisation',
    ],
    tags: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Git'],
  },
]

export const education = [
  {
    degree: 'B.Tech in Artificial Intelligence',
    school: 'Vishwakarma University, Pune',
    period: '2024 — Present',
    detail: 'GPA: 8.65 / 10',
  },
  {
    degree: 'Diploma in Mechatronics Engineering',
    school: 'Indo-German Tool Room (IGTR), Chh. Sambhajinagar (Aurangabad)',
    period: '2021 — 2024',
    detail: 'Distinction',
  },
]

export const certifications = [
  {
    id: 1,
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    logoUrl: '/images/logos/google.png',
    date: 'Nov 2025',
    credentialId: '0QPYERU0YMNA',
    detail: 'Professional Certificate (9-course series covering data pipelines, SQL, Tableau & R)',
    verifyUrl: 'https://coursera.org/verify/professional-cert/0QPYERU0YMNA',
    credentialUrl: '/certifications/Specilization Certificate - Data Analytics.pdf',
    verified: true,
  },
  {
    id: 2,
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI',
    logoUrl: '/images/logos/deeplearning-ai.png',
    date: 'May 2025',
    credentialId: 'ZCZH96PQNYH6',
    detail: 'Convolutional Networks & Vectorized Architectures (Course 1 of 5)',
    verifyUrl: 'https://coursera.org/verify/ZCZH96PQNYH6',
    credentialUrl: '/certifications/Neural Networks and Deep Learning.pdf',
    verified: true,
  },
  {
    id: 3,
    title: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
    issuer: 'DeepLearning.AI',
    logoUrl: '/images/logos/deeplearning-ai.png',
    date: 'May 2025',
    credentialId: 'BTGW3M1ZYZ77',
    detail: 'Hyperparameter Tuning, Regularization & Optimization (Course 2 of 5)',
    verifyUrl: 'https://coursera.org/verify/BTGW3M1ZYZ77',
    credentialUrl: '/certifications/Improving Deep Neural Networks Hyperparameter, Tuning, Regularization and Optimization.pdf',
    verified: true,
  },
  {
    id: 4,
    title: 'Structuring Machine Learning Projects',
    issuer: 'DeepLearning.AI',
    logoUrl: '/images/logos/deeplearning-ai.png',
    date: 'May 2025',
    credentialId: 'RNBSJ2GZXMK4',
    detail: 'ML Strategy, Error Analysis & Transfer Learning (Course 3 of 5)',
    verifyUrl: 'https://coursera.org/verify/RNBSJ2GZXMK4',
    credentialUrl: '/certifications/Structuring Machine Learning Projects.pdf',
    verified: true,
  },
  {
    id: 5,
    title: 'Databases and SQL for Data Science with Python — with Honors',
    issuer: 'IBM',
    logoUrl: '/images/logos/ibm.png',
    date: 'Mar 2025',
    credentialId: 'PB6DS27FYG80',
    detail: 'Relational Databases, Advanced SQL Queries & Python DB-API (with Honors)',
    verifyUrl: 'https://coursera.org/verify/PB6DS27FYG80',
    credentialUrl: '/certifications/Databases and SQL for Data Science with Python.pdf',
    verified: true,
  },
  {
    id: 6,
    title: 'BI Dashboards with IBM Cognos Analytics and Google Looker',
    issuer: 'IBM',
    logoUrl: '/images/logos/ibm.png',
    date: 'May 2025',
    credentialId: 'K5SPQQ8XRU59',
    detail: 'Interactive Dashboard Architecture, Cognos Analytics & Looker Studio',
    verifyUrl: 'https://coursera.org/verify/K5SPQQ8XRU59',
    credentialUrl: '/certifications/BI Dashboards with IBM Cognos Analytics and Google Looker.pdf',
    verified: true,
  },
]

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  specBadges: string[]
  description: string
  specs: string
  tags: string[]
  year: string
  featured: boolean
  status: string
  impact: string
  role: string
  context: string
  href?: string
  repo?: string
  video?: string
  poster?: string
  videoAriaLabel?: string
  detailCaption?: string
  note?: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'ai-powered-payload-drone',
    title: 'AI-Powered Payload Drone',
    category: 'Robotics · Computer Vision',
    specBadges: ['8-Rotor Heavy-Lift', 'CNN Safety Layer', 'Army Demonstrated'],
    description:
      "An 8-rotor heavy-lift octocopter with onboard obstacle detection, built for field demonstration. CNN-based collision avoidance runs on a Raspberry Pi as an independent layer, with a separate flight controller owning stabilisation — so a stall in perception can't take down flight control. Demonstrated to Indian Army Southern Command.",
    specs: '100kg payload class · 6–8 min flight time',
    tags: ['Python', 'CNN', 'Raspberry Pi', 'Computer Vision'],
    year: '2026',
    featured: true,
    status: 'Field Demonstrated',
    impact: '100kg payload class octocopter with independent Raspberry Pi CNN safety layer demonstrated to Indian Army',
    role: 'End-to-end flight stack architecture — hardware integration, independent Raspberry Pi safety layer design, CNN collision model training, and flight controller tuning.',
    context: 'Heavy-lift 8-rotor octocopter built for high-reliability payload delivery. Perception runs independently on a Raspberry Pi using a custom lightweight CNN, decoupling flight control from perception failures. Successfully demonstrated to Indian Army Southern Command.',
    href: 'https://github.com/Prrajaljain',
    video: '/octocopter-hover.mp4',
    poster: '/octocopter-hover-poster.jpg',
    videoAriaLabel: 'Payload octocopter in flight during field demonstration',
    detailCaption: 'Field demonstration footage · 12s, no audio',
  },
  {
    id: 2,
    slug: 'ai-crowd-monitor',
    title: 'Real-Time Crowd Detection',
    category: 'Computer Vision · Real-Time Systems',
    specBadges: ['5,000+ Crowd Limit', 'YOLOv8 Real-Time', 'Navratri Deployed'],
    description:
      'Live headcount estimation and automated safety alerts from video feeds, deployed at Shri Mahalaxmi Temple, Pune during Navratri 2025 with peak crowds of 5,000+. Counts are smoothed over a rolling window because raw per-frame detection jitters as people occlude each other, and alerts re-arm only after the count drops back below threshold.',
    specs: '5,000+ peak crowd · YOLOv8 · automated email alerts',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Real-Time Systems'],
    year: '2025',
    featured: true,
    status: 'Live Deployment',
    impact: 'Deployed at Shri Mahalaxmi Temple, Pune during Navratri 2025 (5,000+ crowd limit with automated alerts)',
    role: 'Real-time computer vision pipeline engineer — stream ingestion, multi-frame rolling window smoothing, threshold debouncing, and automated email alert system.',
    context: 'Deployed live at Shri Mahalaxmi Temple, Pune during Navratri 2025. Processed high-density crowd video feeds with rolling-window noise filtering to eliminate false alerts while maintaining sub-second alert triggers for security teams.',
    repo: 'https://github.com/Prrajaljain/AI-Crowd-Monitor',
  },
  {
    id: 3,
    slug: 'ai-waste-sorting',
    title: 'AI Waste Sorting System',
    category: 'Embedded AI · Computer Vision · Robotics',
    specBadges: ['On-Device TFLite', '92–96% Class Accuracy', 'Threaded Vision Pipeline'],
    description:
      'On-device waste segregation. A hopper-mounted camera classifies each item as metal, paper or plastic, a rotating drum positions the correct bin underneath, and a tray releases it. All inference runs on a Raspberry Pi — no cloud, no network.',
    specs: '92–96% accuracy across classes · on-device TFLite · ~1 item / 4–5 s',
    tags: ['Python', 'MediaPipe', 'TFLite', 'Raspberry Pi', 'OpenCV'],
    year: '2024',
    featured: false,
    status: 'Hardware Prototype',
    impact: 'On-device TFLite segregation running multi-threaded vision & servo control on Raspberry Pi',
    role: 'Embedded vision & hardware engineer — TFLite model optimization, dual-thread Python architecture separating vision inference from servo actuation.',
    context: 'Zero-cloud on-device waste sorting prototype. Classification runs on a Raspberry Pi via TFLite while a rotating drum positions bins below a hopper. Multithreading prevents motor delay from stalling camera inference.',
    href: 'https://github.com/Prrajaljain/ai-waste-sorting',
    repo: 'https://github.com/Prrajaljain/ai-waste-sorting',
    video: '/waste-sorter.mp4',
    poster: '/waste-sorter-poster.jpg',
    videoAriaLabel: 'Sorting rig operating on-device waste segregation',
    detailCaption: 'Sorting rig in operation · 12s, no audio',
  },
  {
    id: 4,
    slug: 'arduino-quadcopter-tuned',
    title: 'Arduino Quadcopter — Tuned Flight Controller',
    category: 'Embedded Systems · Flight Control',
    specBadges: ['250 Hz Control Loop', 'Receiver Failsafe', 'Custom PID Tuning'],
    description:
      "A 450-class quadcopter built from components, with the open-source YMFC-AL flight controller re-tuned and extended. Added a receiver failsafe the original lacked: on transmitter signal loss an RC receiver freezes its outputs, so the aircraft flies on at its last throttle until the battery dies.",
    specs: '1.5kg all-up · 1400KV motors · 3S 3100mAh · 250 Hz control loop',
    tags: ['Embedded C', 'C++', 'Arduino', 'MPU-6050', 'PID Control'],
    year: '2022–23',
    featured: false,
    status: 'Open Source',
    note: 'Fork of YMFC-AL by Joop Brokking; modifications documented in the repository.',
    impact: '250 Hz control loop with a receiver failsafe the stock firmware lacked, plus a gyro integration constant fix',
    role: 'Embedded C++ flight controller developer — receiver failsafe logic, MPU-6050 gyro angle calculation bug fix, and PID flight stabilization tuning.',
    context: 'Custom 450-class quadcopter running re-tuned YMFC-AL flight controller software. Engineered a receiver failsafe to auto-land if RC receiver pulse train drops out.',
    href: 'https://github.com/Prrajaljain/arduino-quadcopter-tuned',
    repo: 'https://github.com/Prrajaljain/arduino-quadcopter-tuned',
    video: '/quadcopter-takeoff.mp4',
    poster: '/quadcopter-takeoff-poster.jpg',
    videoAriaLabel: 'Arduino 450-class quadcopter takeoff during flight test',
    detailCaption: 'Takeoff, 450-class build · 11s, no audio',
  },
  {
    id: 5,
    slug: 'ai-engineering-assistant',
    title: 'AI Engineering Assistant',
    category: 'Applied AI · Web',
    specBadges: ['Llama 3 8B Model', 'Session Memory', 'Streamlit Cloud'],
    description:
      'A live chat assistant for mechatronics and embedded systems questions. Llama 3 8B Instruct through the Hugging Face Inference API, with a domain system prompt and session-scoped memory, deployed at zero hosting cost.',
    specs: 'Llama 3 8B Instruct · Hugging Face API · Streamlit Cloud',
    tags: ['Python', 'Streamlit', 'LLM', 'Hugging Face'],
    year: '2025',
    featured: false,
    status: 'Live Web App',
    impact: 'Domain-tailored engineering assistant answering hardware & embedded inquiries',
    role: 'Full-stack AI developer — Hugging Face Inference API integration, domain-specific system prompt design, and Streamlit UI implementation.',
    context: 'Specialized AI chat interface for mechatronics & embedded hardware engineers. Answers real-time questions on sensor interfaces, pinouts, and microcontroller code.',
    href: 'https://my-ai-chatbot-hqdpyxpnpsrfrl89o5hywz.streamlit.app/',
    repo: 'https://github.com/Prrajaljain/my-ai-chatbot',
  },
]

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Tech Stack', href: '/#tech-stack' },
]

export const techStack = [
  'Python',
  'TensorFlow',
  'TFLite',
  'OpenCV',
  'YOLOv8',
  'MediaPipe',
  'Raspberry Pi',
  'Arduino',
  'Embedded C++',
  'MPU-6050',
  'Google Looker Studio',
  'SQL',
  'Pandas',
  'NumPy',
  'Streamlit',
  'Git',
  'Linux',
]

