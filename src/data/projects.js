export const domainColors = {
  'AI/ML': { bg: 'rgba(99,102,241,0.15)', text: '#818CF8', border: '#6366F1', emoji: '🔵' },
  'Systems': { bg: 'rgba(245,158,11,0.15)', text: '#F59E0B', border: '#D97706', emoji: '🟠' },
  'Security': { bg: 'rgba(168,85,247,0.15)', text: '#C084FC', border: '#A855F7', emoji: '🟣' },
  'Web': { bg: 'rgba(34,197,94,0.15)', text: '#4ADE80', border: '#22C55E', emoji: '🟢' },
  'Hardware': { bg: 'rgba(239,68,68,0.15)', text: '#F87171', border: '#EF4444', emoji: '🔴' },
  'Finance': { bg: 'rgba(16,185,129,0.15)', text: '#34D399', border: '#10B981', emoji: '🟢' },
};

export const filterCategories = [
  'All', 'AI/ML', 'Systems', 'Security', 'Hardware', 'Finance', 'Web'
];

export const projects = [
  {
    id: 1,
    name: 'Parallel Neural Chess AI Engine',
    description: 'Neural-network evaluation engine combining multi-threaded parallel alpha-beta minimax with Monte Carlo Tree Search (MCTS), dual policy/value heads, and interactive self-play analysis.',
    domain: 'AI/ML',
    stack: ['PyTorch', 'Parallel Alpha-Beta', 'MCTS', 'Flask', 'Multi-Threading'],
    github: 'https://github.com/snowowl69/parallel-chess-programming-engine',
    highlight: 'Sub-millisecond branch pruning with distributed search parallelism and deep neural position evaluations.',
    span: 'col-span-2', // Row 1: 2 cols
  },
  {
    id: 2,
    name: 'Fuzzy Concept Bottleneck (Skin Cancer XAI)',
    description: 'Interpretable medical imaging diagnostic system combining Concept Bottleneck Models (CBM) with fuzzy logic rules to generate clinically actionable explanations and counterfactual attributions for dermatologists.',
    domain: 'AI/ML',
    stack: ['PyTorch', 'Explainable AI', 'Concept Bottlenecks', 'Computer Vision', 'Fuzzy Logic'],
    github: 'https://github.com/snowowl69/Fuzzy-Concept-Bottleneck-Skin-Cancer-Diagnosis',
    highlight: 'Eliminates black-box opacity in clinical diagnostics with provable, human-verifiable concept attributions.',
    span: 'col-span-1', // Row 1: 1 col
  },
  {
    id: 3,
    name: 'KneeSync Smart IoT Orthopedic Sleeve',
    description: 'Biomedical rehabilitation wearable integrating high-frequency IMU kinematics with on-device motion processing, sub-10ms telemetry streaming, and real-time physician monitoring dashboards.',
    domain: 'Hardware',
    stack: ['ESP32', 'C++', 'PlatformIO', '6-Axis IMU', 'WebSockets'],
    github: 'https://github.com/snowowl69/KneeSync',
    highlight: 'End-to-end embedded IoT hardware pipeline delivering sub-10ms joint kinematics and clinical recovery curves.',
    span: 'col-span-1', // Row 2: 1 col
  },
  {
    id: 4,
    name: 'SkewShield — Distributed Spark Skew Optimizer',
    description: 'Automated data skew detection and dynamic rebalancing engine for distributed analytical pipelines, applying selective salting, Adaptive Query Execution (AQE), and broadcast joins to eliminate partition stragglers.',
    domain: 'Systems',
    stack: ['Apache Spark', 'PySpark', 'Distributed Systems', 'Pandas', 'Streamlit'],
    github: 'https://github.com/snowowl69/skewshield',
    highlight: 'Cuts shuffle overhead by 20% and prevents executor out-of-memory crashes on massive skewed workloads.',
    span: 'col-span-2', // Row 2: 2 cols
  },
  {
    id: 5,
    name: 'QuantEdge — Algorithmic Trading & FinBERT NLP Platform',
    description: 'Production-grade event-driven algorithmic trading engine featuring live exchange feeds, FinBERT headline sentiment scoring, institutional risk gates ("The Shield"), and a Bloomberg-grade dark theme terminal.',
    domain: 'Finance',
    stack: ['Python', 'EventBus', 'FinBERT NLP', 'Kelly Criterion', 'WebSockets', 'Streamlit'],
    github: 'https://github.com/snowowl69/algorithmic-trading-system',
    highlight: 'Sub-millisecond tick evaluations with automated Kelly-criterion position sizing and intraday circuit breakers.',
    span: 'col-span-2', // Row 3: 2 cols
  },
  {
    id: 6,
    name: 'WatchGuard — Multi-Stream AI Facial Surveillance',
    description: 'Multi-camera real-time surveillance platform featuring edge facial biometric recognition, sub-second identity verification, RTSP stream multiplexing, and automated security audit logging.',
    domain: 'Security',
    stack: ['OpenCV', 'Deep Learning', 'Node.js', 'WebRTC RTSP', 'SQLite'],
    github: 'https://github.com/snowowl69/watchguard',
    highlight: 'Sub-second facial identification across concurrent camera feeds with encrypted audit trails.',
    span: 'col-span-1', // Row 3: 1 col
  },
  {
    id: 7,
    name: 'CloudShield — Multi-AZ High-Availability AWS Architecture',
    description: 'Multi-Availability Zone fault-tolerant cloud infrastructure provisioned via Terraform IaC, featuring external ALB health check routing, dynamic auto-scaling groups, and zero-downtime rolling deployments.',
    domain: 'Web',
    stack: ['Terraform', 'AWS VPC', 'Application Load Balancer', 'Auto-Scaling', 'Docker'],
    github: 'https://github.com/snowowl69/high-availability-cloud-architecture',
    highlight: 'Architected for 99.99% uptime with automated health checks, security group isolation, and self-healing node recovery.',
    span: 'col-span-1', // Row 4: 1 col
  },
  {
    id: 8,
    name: 'Autonomous Vehicle Deep Q-Learning (DQN) Agent',
    description: 'End-to-end autonomous driving agent trained from scratch using Deep Q-Networks (DQN) with experience replay, 5-point continuous range-finder lidar sensors, and target network stabilization for continuous sine-road navigation.',
    domain: 'AI/ML',
    stack: ['PyTorch', 'Deep Q-Learning', 'Raycasting Lidar', 'Pygame', 'Reinforcement Learning'],
    github: 'https://github.com/snowowl69/self-driving-car-dqn',
    highlight: 'Mastered proactive counter-steering on curved sine-wave tracks with zero human demonstrations.',
    span: 'col-span-2', // Row 4: 2 cols
  },
  {
    id: 9,
    name: 'KhataBook Core — Offline-First Desktop Enterprise Ledger',
    description: 'High-performance cross-platform desktop accounting system engineered for businesses with sub-millisecond local SQLite reconciliations, customer credit ledgers, and automated PDF invoice generation.',
    domain: 'Systems',
    stack: ['Electron', 'React', 'TypeScript', 'SQLite', 'Tailwind CSS'],
    github: 'https://github.com/snowowl69/khatabook',
    highlight: 'Offline-first architecture guaranteeing zero-latency transactions and encrypted local financial persistence.',
    span: 'col-span-1', // Row 5: 1 col
  },
  {
    id: 10,
    name: 'OmniReach — High-Throughput Cold Outreach Suite',
    description: 'Cross-platform outreach automation platform spanning a Manifest V3 Gmail automation extension with in-page delivery toasts, an Android mobile app, a web dashboard, and a headless rate-limited CLI mailer.',
    domain: 'Systems',
    stack: ['Chrome Extension V3', 'Android Capacitor', 'Node.js CLI', 'REST API'],
    github: 'https://github.com/snowowl69/cold-email-extension',
    highlight: 'End-to-end recruitment and outreach automation with dynamic variable interpolation and completion feedback.',
    span: 'col-span-2', // Row 5: 2 cols
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
