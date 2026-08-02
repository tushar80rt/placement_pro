export interface ProjectGuide {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Full Stack & MERN' | 'AI & Machine Learning' | 'Cloud & Systems' | 'Mobile & Web3';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  techStack: string[];
  stars?: string;
  highlights: string[];
  overview: string;
  systemArchitecture: string;
  keyFeatures: string[];
  interviewQuestions: {
    question: string;
    answer: string;
    keyTip?: string;
  }[];
  githubUrl: string;
  demoUrl?: string;
}

export const placementProjects: ProjectGuide[] = [
  {
    id: 'proj-1',
    slug: 'ai-mock-interview-platform',
    title: 'AI Mock Interviewer & Feedback Platform',
    tagline: 'Real-time AI voice & technical interview simulation with speech-to-text, score breakdown, and custom rubric evaluations.',
    category: 'AI & Machine Learning',
    difficulty: 'Advanced',
    techStack: ['Next.js 14', 'Node.js', 'FastAPI', 'OpenAI Whisper & GPT-4', 'WebRTC', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    highlights: ['Live speech analysis', 'Dynamic follow-up questions', 'Detailed scoring rubric report'],
    overview: 'An end-to-end full stack platform that simulates real technical & HR interview rounds. Candidates speak to an AI avatar or voice bot that listens via WebRTC/Whisper, analyzes response depth, and generates structured feedback reports with improvement roadmaps.',
    systemArchitecture: 'Client captures audio stream via WebRTC -> Audio piped to FastAPI backend running Whisper API -> Transcribed text analyzed with prompt chains via OpenAI API -> Real-time TTS response synthesized back -> Session transcript & scores saved to PostgreSQL with Prisma ORM.',
    keyFeatures: [
      'Real-time low-latency voice streaming using WebSockets & WebRTC',
      'AI dynamic questioning based on candidate answers (multi-turn reasoning)',
      'Granular performance metrics: Technical accuracy, Communication, Confidence score',
      'PDF report generator for interview summaries with downloadable scorecard'
    ],
    interviewQuestions: [
      {
        question: 'How did you handle real-time low-latency audio streaming between frontend and backend?',
        answer: 'I used WebRTC for peer streaming and WebSockets for low-latency bi-directional audio packet transmission. Audio chunks were buffered in small 500ms intervals before streaming to Whisper to maintain an instant conversational feel.',
        keyTip: 'Mention latency optimization and packet buffering mechanisms.'
      },
      {
        question: 'How do you prevent prompt injection or hallucination in the evaluation engine?',
        answer: 'I separated user answers from evaluation system prompts using strict delimiter boundaries and structured JSON schema output validation. The evaluation prompt enforces strict rubrics (scoring 1-10 with required evidence citations from the transcript).',
        keyTip: 'Highlight schema validation and prompt engineering safeguards.'
      },
      {
        question: 'How would you scale this application to handle 10,000 concurrent interview sessions?',
        answer: 'I would decouple speech transcription with a distributed worker queue (Redis BullMQ / Celery), scale stateless FastAPI services on Kubernetes, and use CDN edge caching for audio delivery and static assets.',
        keyTip: 'Discuss worker queues, caching, and horizontal scaling.'
      }
    ],
    githubUrl: 'https://github.com/topics/ai-interview-platform'
  },
  {
    id: 'proj-2',
    slug: 'collaborative-code-editor',
    title: 'Real-Time Collaborative Code Editor & Sandbox',
    tagline: 'Google Docs for code with live multi-cursor synchronization, sandboxed code execution, and WebRTC audio chat.',
    category: 'Full Stack & MERN',
    difficulty: 'Advanced',
    techStack: ['React', 'TypeScript', 'Node.js', 'Socket.IO', 'Yjs (CRDT)', 'Monaco Editor', 'Docker Sandboxing', 'Redis'],
    highlights: ['Conflict-free Replicated Data Types (CRDT)', 'Docker sandbox runner', 'Multi-language execution'],
    overview: 'A shared collaborative coding environment allowing multiple developers to type, execute, and debug code together in real-time with zero merge conflicts using CRDT algorithms.',
    systemArchitecture: 'Monaco Editor binds to Yjs CRDT data model -> Socket.IO synchronizes document vector clocks -> Node.js worker pools spawn ephemeral isolated Docker containers with memory & CPU limits to execute user code and return stdout/stderr securely.',
    keyFeatures: [
      'Sub-millisecond multi-cursor sync with custom colored caret names',
      'Sandboxed code execution for Python, Java, C++, and JavaScript with timeout security',
      'In-room live chat and syntax theme customizations',
      'Room sharing via short invite codes with Redis session storage'
    ],
    interviewQuestions: [
      {
        question: 'Why did you choose CRDTs (Yjs) over Operational Transformation (OT)?',
        answer: 'CRDTs operate peer-to-peer and are mathematically guaranteed to converge to the same state without requiring a central serialization authority, making them more resilient to network partitions and packet reordering compared to traditional OT.',
        keyTip: 'Explain mathematical convergence and state-based vs operation-based sync.'
      },
      {
        question: 'How do you prevent malicious code (like fork bombs or file system attacks) inside the code runner?',
        answer: 'Code runs inside an isolated, unprivileged Docker container with dropped Linux capabilities, read-only root filesystem, strict memory limits (--memory=128m), CPU quotas (--cpus=0.5), disabled network access (--network none), and a 5-second hard execution timeout.',
        keyTip: 'Emphasize security layers: CPU/memory quotas, network disabling, and timeouts.'
      }
    ],
    githubUrl: 'https://github.com/topics/collaborative-code-editor'
  },
  {
    id: 'proj-3',
    slug: 'smart-ats-resume-parser',
    title: 'Smart ATS Resume Analyzer & Career Matcher',
    tagline: 'NLP-powered resume scoring against company JD, missing keyword detector, and LaTeX resume builder.',
    category: 'AI & Machine Learning',
    difficulty: 'Intermediate',
    techStack: ['Python', 'FastAPI', 'spaCy / NLTK', 'Sentence-Transformers', 'React', 'TailwindCSS', 'PDFPlumber'],
    highlights: ['Semantic similarity embeddings', 'ATS score calculator', 'Action verb & quantified impact detector'],
    overview: 'An intelligent applicant tracking simulator that parses PDF/DOCX resumes, extracts entities (skills, experience, education), computes cosine similarity against target job descriptions, and gives actionable bullet-point recommendations.',
    systemArchitecture: 'PDF uploaded -> PyMuPDF / PDFPlumber extracts raw text & layout -> NER model tags tech stack, roles, metrics -> Sentence-Transformers creates embeddings -> Cosine similarity calculates relevance score -> React frontend renders interactive feedback dashboard.',
    keyFeatures: [
      'Instant ATS compatibility score with section-by-section breakdown',
      'Missing critical keywords and hard skill gap suggestions',
      'Bullet-point optimizer highlighting weak action verbs and missing metrics',
      'Exportable clean ATS-friendly LaTeX & PDF templates'
    ],
    interviewQuestions: [
      {
        question: 'How does your semantic matching work beyond simple exact keyword matching?',
        answer: 'Instead of just checking string presence, I use a fine-tuned Sentence-Transformers model (`all-MiniLM-L6-v2`) to generate dense vector embeddings of candidate skills and job requirements, calculating cosine similarity. This allows recognizing that "React.js" matches "frontend web frameworks".',
        keyTip: 'Mention vector embeddings and cosine similarity vs simple TF-IDF.'
      },
      {
        question: 'How do you handle unstructured PDF formatting like multi-column tables?',
        answer: 'I use spatial bounding box analysis with PDFPlumber to sort text blocks in natural reading order (top-to-bottom, left-to-right per column) before passing the text to NLP tokenizers, preventing interleaved column text.',
        keyTip: 'Discuss spatial text extraction and column detection.'
      }
    ],
    githubUrl: 'https://github.com/topics/ats-resume-analyzer'
  },
  {
    id: 'proj-4',
    slug: 'microservices-ecommerce-engine',
    title: 'Event-Driven E-Commerce Microservices Engine',
    tagline: 'Distributed microservices architecture with Saga pattern for distributed transactions, Kafka event bus, and Stripe payments.',
    category: 'Cloud & Systems',
    difficulty: 'Advanced',
    techStack: ['Node.js', 'Express', 'Apache Kafka / RabbitMQ', 'Docker Compose', 'Redis', 'MongoDB', 'PostgreSQL', 'Stripe API'],
    highlights: ['Saga distributed transactions', 'Kafka event streaming', 'Decoupled services'],
    overview: 'A scalable distributed backend featuring independent Order, Payment, Inventory, and Notification services communicating asynchronously via Kafka event streams with compensations for failed payment transactions.',
    systemArchitecture: 'Client -> API Gateway (Reverse Proxy & JWT Auth) -> Kafka Broker distributes events -> Order Service creates pending order -> Payment Service processes Stripe charge -> Inventory Service reserves stock -> If any step fails, compensation events roll back previous states.',
    keyFeatures: [
      'Choreography-based Saga pattern for reliable distributed transactions',
      'API Gateway with Rate Limiting (Token Bucket via Redis) and JWT Auth',
      'Idempotent payment webhooks preventing duplicate deductions',
      'Centralized Prometheus and Grafana metrics dashboard'
    ],
    interviewQuestions: [
      {
        question: 'What is the Saga pattern and why did you use it instead of 2PC (Two-Phase Commit)?',
        answer: 'Two-Phase Commit is synchronous and creates a single point of failure with high lock contention in distributed microservices. The Saga pattern breaks transactions into a sequence of local transactions with compensating actions to roll back changes asynchronously if a step fails.',
        keyTip: 'Explain why 2PC does not scale and how compensating transactions work.'
      },
      {
        question: 'How did you ensure message idempotency in your event consumer?',
        answer: 'Each event has a unique UUID. Consumers check a distributed Redis key `processed_event:<uuid>` inside an atomic transaction before processing. If already processed, the consumer acknowledges and skips the event.',
        keyTip: 'Mention unique message IDs and Redis atomic checks.'
      }
    ],
    githubUrl: 'https://github.com/topics/ecommerce-microservices'
  },
  {
    id: 'proj-5',
    slug: 'distributed-key-value-store',
    title: 'Distributed Key-Value Store with Raft Consensus',
    tagline: 'High-throughput in-memory key-value database with leader election, log replication, and persistence engine.',
    category: 'Cloud & Systems',
    difficulty: 'Advanced',
    techStack: ['Go / C++', 'gRPC', 'Protocol Buffers', 'Raft Consensus Algorithm', 'LSM-Tree / WAL'],
    highlights: ['Raft Consensus Algorithm', 'Write-Ahead Logging (WAL)', 'Fault-Tolerant High Availability'],
    overview: 'A distributed database built from scratch that implements the Raft consensus protocol to maintain strong consistency across node clusters even during network partitions and server crashes.',
    systemArchitecture: 'Cluster of 3-5 nodes -> Heartbeats elect single leader -> Leader receives client writes -> Appends to local WAL -> Replicates log entry via gRPC to followers -> Commits once majority quorum acknowledges -> Applies to state machine.',
    keyFeatures: [
      'Leader election with randomized election timeouts preventing split votes',
      'Log compaction and snapshots for fast recovery and minimal disk usage',
      'Write-Ahead Logging (WAL) ensuring durability across sudden crashes',
      'Benchmarked to deliver 40,000+ QPS with sub-millisecond read latency'
    ],
    interviewQuestions: [
      {
        question: 'How does Raft handle network partitions (split-brain scenarios)?',
        answer: 'Raft requires a majority quorum (floor(N/2) + 1) to elect a leader and commit entries. In a 5-node cluster split into 2 and 3 nodes, the 2-node partition cannot achieve quorum and rejects writes, while the 3-node partition continues safely. When reconnected, the higher term leader overwrites uncommitted logs.',
        keyTip: 'Clearly define majority quorum and term numbers.'
      },
      {
        question: 'What is the purpose of Write-Ahead Logging (WAL)?',
        answer: 'WAL ensures that before any mutation is applied to memory or disk, it is sequentially appended to an immutable append-only log file on disk. During recovery after power failure, the engine replays the log to restore the exact state.',
        keyTip: 'Differentiate sequential disk I/O from random disk writes.'
      }
    ],
    githubUrl: 'https://github.com/topics/raft-consensus'
  },
  {
    id: 'proj-6',
    slug: 'college-placement-alumni-portal',
    title: 'PlacementPro: Campus Placement & Alumni Network Portal',
    tagline: 'Complete campus placement management system with role-based dashboards, verified alumni referral system, and automated eligibility filters.',
    category: 'Full Stack & MERN',
    difficulty: 'Intermediate',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB / Mongoose', 'Cloudinary', 'JWT & OAuth2', 'TailwindCSS'],
    highlights: ['Role-based Access Control (Student / TPO / Alumni)', 'Automated eligibility criteria filter', 'Referral request board'],
    overview: 'A complete campus placement ecosystem connecting Students, Training & Placement Officers (TPOs), and Alumni. Automates drive announcements, eligibility checks based on CGPA & backlogs, application tracking, and alumni 1:1 referral requests.',
    systemArchitecture: 'MERN Stack architecture with JWT authentication, role-based middleware guards, MongoDB aggregation pipelines for fast analytical queries, and Cloudinary for secure resume & offer letter document storage.',
    keyFeatures: [
      'Automated eligibility filter matching students against job CGPA, branch, and backlog criteria',
      'TPO Admin dashboard with one-click drive exports (CSV/Excel) and shortlisting tools',
      'Alumni referral board where verified alumni can post internal openings and review junior resumes',
      'Email notifications via SendGrid on shortlisting and interview schedule changes'
    ],
    interviewQuestions: [
      {
        question: 'How did you implement Role-Based Access Control (RBAC) securely?',
        answer: 'I encoded roles (Student, TPO, Alumni) inside cryptographically signed JWT tokens and verified them using custom Express middleware before granting access to protected routes. Sensitive mutations also verify the database user status to prevent stale token privilege escalations.',
        keyTip: 'Explain token verification, middleware chains, and permission checks.'
      },
      {
        question: 'How did you optimize MongoDB queries for filtering thousands of students by multiple criteria?',
        answer: 'I created compound indexes on `{ branch: 1, cgpa: -1, activeBacklogs: 1 }` and used MongoDB Aggregation Pipelines (`$match`, `$project`, `$facet`) for fast paginated responses without full collection scans.',
        keyTip: 'Talk about compound indexing and aggregation pipelines.'
      }
    ],
    githubUrl: 'https://github.com/topics/placement-portal'
  }
];
