export const profile = {
  name: 'Prajal Jain',
  initials: 'PJ',
  title: 'AI & Robotics Engineering Student',
  heroSubtitle: 'Computer vision on embedded hardware, robotics, and industrial data.',
  heroDescription:
    "Hi, I'm Prajal Jain — an AI & Robotics engineering student looking for a Summer 2027 internship. If you're building systems where AI models have to run on real hardware (Raspberry Pi, Arduino, edge devices), I'd like to hear from you.",
  resumeUrl: '/resume-prajal-jain.pdf',
  location: 'Pune, India',
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
  { label: 'Internships', value: '2' },
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
      'Power BI',
      'SQL',
      'Pandas / NumPy',
      'Streamlit',
      'Git',
      'Linux / shell scripting',
    ],
  },
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
  'Power BI',
  'SQL',
  'Pandas',
  'NumPy',
  'Streamlit',
  'Git',
  'Linux',
]

export const experience = [
  {
    role: 'AI & Data Analyst Intern',
    company: 'Rishabh Instruments Limited',
    period: 'Jun 2026 — Present',
    location: 'Nashik, India · On-site',
    summary:
      'Applied AI and analytics to manufacturing operations at an industrial instruments manufacturer, building monitoring dashboards and predictive models on machine telemetry.',
    highlights: [
      'Built 11 interactive Power BI dashboards for real-time shop-floor monitoring, replacing ~7.5 hours of manual reporting weekly',
      'Developed predictive models on machine telemetry to flag calibration drift before it caused downtime',
      'Analysed voltage, current, temperature and humidity data to characterise environmental effects on instrument accuracy — applied to cold-chain monitoring for temperature-sensitive goods',
    ],
    tags: ['Python', 'Pandas', 'Power BI', 'SQL', 'Excel'],
  },
  {
    role: 'Machine Learning Engineer Intern',
    company: 'Navikshaa Technologies',
    period: 'Aug 2025 — Dec 2025',
    location: 'Remote',
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
    period: '2024 — 2027',
    detail: 'GPA: 8.65 / 10',
  },
  {
    degree: 'Diploma in Mechatronics Engineering',
    school: 'Indo-German Tool Room (IGTR), Aurangabad',
    period: '2021 — 2024',
    detail: 'Distinction',
  },
]

export const certifications = [
  {
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI',
    detail: 'Convolutional Networks & Vectorized Architectures',
  },
  {
    title: 'Improving Deep Neural Networks',
    issuer: 'DeepLearning.AI',
    detail: 'Hyperparameter Tuning, Regularization & Optimization',
  },
  {
    title: 'Structuring Machine Learning Projects',
    issuer: 'DeepLearning.AI',
    detail: 'ML Strategy, Error Analysis & Transfer Learning',
  },
  {
    title: 'Databases and SQL for Data Science with Python',
    issuer: 'IBM',
    detail: 'Relational Databases, Queries & Python DB-API',
  },
  {
    title: 'Hands-on Introduction to Linux Commands and Shell Scripting',
    issuer: 'IBM',
    detail: 'Linux Architecture, Bash Scripting & Automation',
  },
]

export const projects = [
  {
    id: 1,
    slug: 'autonomous-payload-drone',
    title: 'Autonomous Payload Drone',
    category: 'Robotics · Computer Vision',
    description:
      "An 8-rotor heavy-lift octocopter with onboard obstacle detection, built for field demonstration. CNN-based collision avoidance runs on a Raspberry Pi as an independent layer, with a separate flight controller owning stabilisation — so a stall in perception can't take down flight control. Demonstrated to Indian Army Southern Command.",
    specs: '100kg payload class · 6–8 min flight time · GPS waypoint navigation',
    tags: ['Python', 'CNN', 'Raspberry Pi', 'Computer Vision', 'GPS'],
    year: '2026',
    featured: true,
    status: 'Field Demonstrated',
    impact: 'Demonstrated to Indian Army Southern Command with independent Pi safety layer',
    href: 'https://github.com/Prrajaljain',
    repo: 'https://github.com/Prrajaljain',
  },
  {
    id: 2,
    slug: 'ai-crowd-monitor',
    title: 'Real-Time Crowd Detection',
    category: 'Computer Vision · Real-Time Systems',
    description:
      'Live headcount estimation and automated safety alerts from video feeds, deployed at Shri Mahalaxmi Temple, Pune during Navratri 2025 with peak crowds of 5,000+. Counts are smoothed over a rolling window because raw per-frame detection jitters as people occlude each other, and alerts re-arm only after the count drops back below threshold — otherwise a crowd hovering at the limit fires an alert every frame.',
    specs: '5,000+ peak crowd · YOLOv8 · automated email alerts',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Real-Time Systems'],
    year: '2025',
    featured: true,
    status: 'Live Deployment',
    impact: 'Deployed at Shri Mahalaxmi Temple, Pune during Navratri 2025 (5,000+ crowd)',
    href: 'https://github.com/Prrajaljain/AI-Crowd-Monitor',
    repo: 'https://github.com/Prrajaljain/AI-Crowd-Monitor',
  },
  {
    id: 3,
    slug: 'ai-waste-sorting',
    title: 'AI Waste Sorting System',
    category: 'Embedded AI · Computer Vision · Robotics',
    description:
      'On-device waste segregation. A hopper-mounted camera classifies each item as metal, paper or plastic, a rotating drum positions the correct bin underneath, and a tray releases it. All inference runs on a Raspberry Pi — no cloud, no network. Detection and actuation run on separate threads, because doing servo work inside the vision callback froze the pipeline for the full mechanical cycle.',
    specs: '92–96% accuracy across classes · on-device TFLite · ~1 item / 4–5 s',
    tags: ['Python', 'MediaPipe', 'TFLite', 'Raspberry Pi', 'OpenCV'],
    year: '2024',
    featured: true,
    status: 'Hardware Prototype',
    impact: 'On-device TFLite segregation running multi-threaded vision & servo control',
    href: 'https://github.com/Prrajaljain/ai-waste-sorting',
    repo: 'https://github.com/Prrajaljain/ai-waste-sorting',
  },
  {
    id: 4,
    slug: 'arduino-quadcopter-tuned',
    title: 'Arduino Quadcopter — Tuned Flight Controller',
    category: 'Embedded Systems · Flight Control',
    description:
      "A 450-class quadcopter built from components, with the open-source YMFC-AL flight controller re-tuned and extended. Added a receiver failsafe the original lacked: on transmitter signal loss an RC receiver freezes its outputs, so the aircraft flies on at its last throttle until the battery dies. Stick values can't detect that — a frozen 1700µs throttle is identical to a real one — so the watchdog detects the pulse train stopping instead. Also fixed a latent bug where a hardcoded gyro constant silently corrupted the angle calculation if the sensor range changed.",
    specs: '1.5kg all-up · 1400KV motors · 3S 3100mAh · 250 Hz control loop',
    tags: ['Embedded C', 'C++', 'Arduino', 'MPU-6050', 'PID Control'],
    year: '2022–23',
    featured: true,
    status: 'Open Source',
    note: 'Fork of YMFC-AL by Joop Brokking; modifications documented in the repository.',
    impact: '250 Hz control loop with custom failsafe watchdog & gyro angle fix',
    href: 'https://github.com/Prrajaljain/arduino-quadcopter-tuned',
    repo: 'https://github.com/Prrajaljain/arduino-quadcopter-tuned',
  },
  {
    id: 5,
    slug: 'ai-engineering-assistant',
    title: 'AI Engineering Assistant',
    category: 'Applied AI · Web',
    description:
      'A live chat assistant for mechatronics and embedded systems questions. Llama 3 8B Instruct through the Hugging Face Inference API, with a domain system prompt and session-scoped memory, deployed at zero hosting cost.',
    specs: 'Llama 3 8B Instruct · Hugging Face API · Zero-cost deployment',
    tags: ['Python', 'Streamlit', 'LLM', 'Hugging Face'],
    year: '2025',
    featured: false,
    status: 'Live Web App',
    impact: 'Live mechatronics & embedded AI assistant deployed on Streamlit Cloud',
    href: 'https://my-ai-chatbot-hqdpyxpnpsrfrl89o5hywz.streamlit.app/',
    repo: 'https://github.com/Prrajaljain/my-ai-chatbot',
  },
]

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'About', href: '/about' },
  { label: 'Tech Stack', href: '/about#skills' },
]
