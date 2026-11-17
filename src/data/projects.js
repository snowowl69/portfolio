export const domainColors = {
  'AI/ML': { bg: 'rgba(99,102,241,0.15)', text: '#818CF8', border: '#6366F1', emoji: '🔵' },
  'Systems': { bg: 'rgba(245,158,11,0.15)', text: '#af995f', border: '#634e2b', emoji: '🟠' },
  'Security': { bg: 'rgba(168,85,247,0.15)', text: '#C084FC', border: '#A855F7', emoji: '🟣' },
  'Web': { bg: 'rgba(34,197,94,0.15)', text: '#499e68e9', border: '#21482f', emoji: '🟢' },
  'Hardware': { bg: 'rgba(239,68,68,0.15)', text: '#9a4a4a', border: '#EF4444', emoji: '🔴' },
  'Finance': { bg: 'rgba(107,114,128,0.15)', text: '#9CA3AF', border: '#6B7280', emoji: '⚫' },
};

export const filterCategories = [
  'All', 'AI/ML', 'Systems', 'Security', 'Web', 'Hardware', 'Finance'
];

export const projects = [
  {
    id: 1,
    name: 'Parallel Chess Programming Engine',
    description: 'Neural-network chess AI engine combining Monte Carlo Tree Search (MCTS) with dual-headed policy/value neural networks, parallel search, and an interactive Flask dashboard.',
    domain: 'AI/ML',
    stack: ['Python', 'PyTorch', 'MCTS', 'Flask', 'Distributed Search'],
    github: 'https://github.com/snowowl69/parallel-chess-programming-engine',
    highlight: 'Combines deep learning with parallel alpha-beta pruning and real-time self-play training loops.',
    span: 'col-span-2', // wide
  },
  {
    id: 2,
    name: 'Fuzzy Concept Bottleneck (Skin Cancer XAI)',
    description: 'Interpretable medical imaging AI utilizing fuzzy concept bottleneck models to provide human-interpretable clinical concept attributions and actionable counterfactual generation.',
    domain: 'AI/ML',
    stack: ['PyTorch', 'Explainable AI', 'AWS Cloud', 'Flask', 'Computer Vision'],
    github: 'https://github.com/snowowl69/Fuzzy-Concept-Bottleneck-Skin-Cancer-Diagnosis',
    highlight: 'Overcomes the black-box nature of deep neural networks in dermatology with provable concept attributions.',
    span: 'col-span-1 row-span-2', // tall
  },
  {
    id: 3,
    name: 'KneeSync IoT Rehabilitation Device',
    description: 'Smart biomedical knee sleeve with real-time ML-driven gait analytics, flexion tracking, hardware telemetry bridge, and cloud physician monitoring.',
    domain: 'Hardware',
    stack: ['ESP32', 'C++', 'PlatformIO', 'Python', 'WebSockets'],
    github: 'https://github.com/snowowl69/KneeSync',
    highlight: 'End-to-end wearable IoT architecture with sub-10ms sensor telemetry, physical simulation, and live doctor dashboard.',
    span: 'col-span-1',
  },
  {
    id: 4,
    name: 'WatchGuard AI Vision Surveillance',
    description: 'Real-time multi-camera facial identification, automated attendance tracking, and threat monitoring system with role-based dashboard access.',
    domain: 'Security',
    stack: ['OpenCV', 'Deep Learning', 'Node.js', 'Express', 'WebRTC'],
    github: 'https://github.com/snowowl69/watchguard',
    highlight: 'Sub-second facial recognition with multi-camera RTSP stream analysis and automated audit logging.',
    span: 'col-span-1',
  },
  {
    id: 5,
    name: 'Cold Email 2.0 / Outreach Platform',
    description: 'Cross-platform outreach automation system featuring a Manifest V3 Chrome Extension, Android Capacitor mobile client, dynamic email rendering, and delivery tracking.',
    domain: 'Systems',
    stack: ['Chrome Extension V3', 'Android Capacitor', 'Node.js', 'REST API'],
    github: 'https://github.com/snowowl69/cold-email-extension',
    highlight: 'Automated recruitment and outreach pipeline with dynamic templating and real-time analytics.',
    span: 'col-span-1',
  },
  {
    id: 6,
    name: 'EcoStay Sustainable Hospitality Platform',
    description: 'Full-stack sustainable accommodation booking platform featuring dynamic pricing, real-time room availability, verified review loops, and admin management.',
    domain: 'Web',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/snowowl69/ecostay',
    highlight: 'Full-stack booking platform with secure authentication, automated invoice generation, and carbon footprint tracking.',
    span: 'col-span-2', // wide
  },
  {
    id: 7,
    name: 'KhataBook Enterprise Accounting',
    description: 'High-performance cross-platform desktop accounting and ledger system for businesses with instant reconciliation, customer credit ledgers, and automated PDF invoicing.',
    domain: 'Systems',
    stack: ['Electron', 'React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/snowowl69/khatabook',
    highlight: 'Offline-first desktop architecture with instant balance reconciliations and encrypted transaction storage.',
    span: 'col-span-1',
  },

  {
    id: 8,
    name: 'SkewShield Big Data Skew Optimizer',
    description: 'Automated data skew detection and dynamic rebalancing engine for Apache Spark and distributed analytical pipelines, eliminating partition bottlenecks.',
    domain: 'Systems',
    stack: ['Apache Spark', 'Python', 'Distributed Systems', 'Pandas'],
    github: 'https://github.com/snowowl69',
    highlight: 'Eliminates straggler partitions and reduces distributed compute cluster execution time by up to 40%.',
    span: 'col-span-1',
  },
  {
    id: 9,
    name: 'Self-Driving Car (Deep Q-Learning DQN)',
    description: 'Autonomous vehicle navigation agent trained from scratch using Deep Q-Networks (DQN) with experience replay and target networks in dynamic continuous environments.',
    domain: 'AI/ML',
    stack: ['Python', 'TensorFlow', 'Reinforcement Learning', 'Gymnasium'],
    github: 'https://github.com/snowowl69',
    highlight: 'End-to-end DQN policy mastering lane centering, adaptive speed control, and multi-obstacle avoidance autonomously.',
    span: 'col-span-2', // wide
  },
  {
    id: 10,
    name: 'Algorithmic Trading & Quant Strategy Engine',
    description: 'Modular high-frequency algorithmic trading pipeline with exchange WebSockets, automated Kelly criterion risk management, and multi-asset backtesting.',
    domain: 'Finance',
    stack: ['Python', 'Pandas', 'WebSockets', 'Quant Analytics', 'NumPy'],
    github: 'https://github.com/snowowl69',
    highlight: 'Processes live market feeds with sub-millisecond strategy evaluations and dynamic risk draw-down protections.',
    span: 'col-span-1',
  },
  {
    id: 11,
    name: 'High-Availability Cloud Architecture',
    description: 'Multi-AZ fault-tolerant cloud infrastructure on AWS featuring active-passive failover, elastic load balancing, auto-scaling groups, and zero-downtime rolling deploys.',
    domain: 'Web',
    stack: ['AWS EC2', 'Auto-Scaling', 'Route 53', 'Terraform', 'Nginx'],
    github: 'https://github.com/snowowl69',
    highlight: 'Engineered for 99.99% availability with automated health monitoring and self-healing disaster recovery.',
    span: 'col-span-1',
  },
];

export const techStack = [
  'Python', 'PyTorch', 'TensorFlow', 'React', 'TypeScript', 'Node.js',
  'Apache Spark', 'AWS', 'ESP32 / IoT', 'Docker', 'MongoDB',
  'Vite', 'OpenCV', 'Reinforcement Learning (DQN)', 'Pandas', 'Electron',
  'WebSockets', 'Tailwind CSS', 'SQL', 'C++',
];

export const patents = [
  {
    id: 1,
    title: 'An Artificial Intelligence-Powered System for Detecting and Preventing Fraudulent NEFT Transactions',
    number: 'Patent No. 202541104671',
    abstract: 'A novel AI-driven system designed to detect and prevent fraudulent National Electronic Funds Transfer (NEFT) transactions in real time. This system captures NEFT transaction before they occur through an AI - learning and adapting platform that does not consider novel ways to commit fraud. By analyzing user behaviour biometrically,  it increasingly differentiates the real user from the threatening ones. Each transaction gets inscribed into a blockchain for an immutable audit trail, there by complying with legal standards. the system performs multilayer verification fast without delaying or interrupting legitimate transactions to catch fraud.',
    status: 'Granted',
    year: '2025',
    domain: 'Cybersecurity',
    stages: ['Drafting', 'Filed', 'In Progress', 'Granted'],
    currentStage: 3,
  },
  {
    id: 2,
    title: 'Adaptive reservation intent token system with intentguardnet for equitable tatkal ticket allocation',
    number: 'Patent No. 202641090991',
    abstract: 'An innovative authentication framework that combines distributed ledger technology with multi-modal biometric verification. The system provides enterprise-grade security while maintaining sub-second authentication speeds, eliminating single points of failure in identity verification.',
    status: 'Granted',
    year: '2026',
    domain: 'Artificial Intelligence & Machine Learning',
    stages: ['Drafting', 'Filed', 'In Progress', 'Granted'],
    currentStage: 3,
  },
  {
    id: 3,
    title: 'A Cryptographic Method for Automatic Message Invalidation Upon Copying, Replay, or Abnormal Transmission Delay',
    number: 'Patent No. 202641096651',
    abstract: 'A cryptographic mechanism for decentralized and offline-capable secure communications that automatically and irreversibly invalidates messages upon unauthorized copying, replay, or abnormal transmission delay. By cryptographically binding message decryptability to entropy-dependent verification conditions and transmission-context parameters, any misuse causes mathematical collapse of the decryption key—rendering ciphertext permanently indistinguishable from random data without reliance on external servers, synchronized clocks, or application-level deletion.',
    status: 'In Progress',
    year: '2026',
    domain: 'Cryptography & Secure Communications',
    stages: ['Drafting', 'Filed', 'In Progress', 'Granted'],
    currentStage: 2,
  },
];
