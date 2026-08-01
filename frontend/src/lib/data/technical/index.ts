import type { MCQ } from '../types';

export const technicalMCQs: MCQ[] = [
    {
        id: 'tech-1',
        topic: 'Operating System',
        difficulty: 'Medium',
        question: 'Which of the following is not a condition for Deadlock?',
        options: ['Mutual Exclusion', 'Hold and Wait', 'No Preemption', 'Circular Wait', 'Starvation'],
        answer: 4,
        explanation: 'The four Coffman conditions necessary for a deadlock are Mutual exclusion, Hold and wait, No preemption, and Circular wait. Starvation is a completely different concept where a process is perpetually denied necessary resources.'
    },
    {
        id: 'tech-2',
        topic: 'DBMS',
        difficulty: 'Medium',
        question: 'Which normal form is considered adequate for normal relational database design?',
        options: ['1NF', '2NF', '3NF', '4NF'],
        answer: 2,
        explanation: '3NF is generally considered adequate for normal relational database design because it eliminates most redundancy and anomalies by ensuring every non-prime attribute is non-transitively dependent on the primary key.'
    },
    {
        id: 'tech-3',
        topic: 'Computer Networks',
        difficulty: 'Hard',
        question: 'In the OSI model, which layer is responsible for routing the packets from the source to the destination?',
        options: ['Transport Layer', 'Network Layer', 'Data Link Layer', 'Session Layer'],
        answer: 1,
        explanation: 'The Network Layer (Layer 3) is responsible for packet forwarding including routing through intermediate routers. IP (Internet Protocol) operates at this layer.'
    },
    {
        id: 'tech-4',
        topic: 'OOP',
        difficulty: 'Easy',
        question: 'Which of the following concepts allows a class to have multiple methods with the same name but different signatures?',
        options: ['Overriding', 'Overloading', 'Encapsulation', 'Abstraction'],
        answer: 1,
        explanation: 'Method Overloading allows a class to have multiple methods with the same name, provided their parameter lists (signatures) are different. It is a form of compile-time polymorphism.'
    },
    {
        id: 'tech-5',
        topic: 'System Design',
        difficulty: 'Hard',
        question: 'Which of the following is used to distribute incoming network traffic across multiple servers to ensure no single server bears too much demand?',
        options: ['API Gateway', 'Load Balancer', 'Message Queue', 'Reverse Proxy'],
        answer: 1,
        explanation: 'A Load Balancer acts as the "traffic cop" sitting in front of your servers and routing client requests across all servers capable of fulfilling those requests in a manner that maximizes speed and capacity utilization.'
    },
    {
        id: 'tech-6',
        topic: 'System Design',
        difficulty: 'Hard',
        question: 'According to the CAP theorem, a distributed database system can only guarantee two out of three characteristics at the same time. Which of the following is NOT one of those three characteristics?',
        options: ['Consistency', 'Availability', 'Concurrency', 'Partition Tolerance'],
        answer: 2,
        explanation: 'The CAP theorem states that a distributed data store can simultaneously provide only two of the following three guarantees: Consistency, Availability, and Partition Tolerance. Concurrency is not part of the CAP theorem.'
    },
    {
        id: 'tech-7',
        topic: 'System Design',
        difficulty: 'Medium',
        question: 'In a microservices architecture, which pattern is used to handle transactions that span multiple services by executing a sequence of local transactions?',
        options: ['Two-Phase Commit', 'Saga Pattern', 'Circuit Breaker', 'API Gateway'],
        answer: 1,
        explanation: 'The Saga pattern is used to manage distributed transactions in microservices. It consists of a sequence of local transactions, where each transaction updates data within a single service and publishes an event that triggers the next local transaction in the saga.'
    },
    {
        id: 'tech-8',
        topic: 'OOP',
        difficulty: 'Medium',
        question: 'Which of the SOLID principles states that a class should have one, and only one, reason to change?',
        options: ['Single Responsibility Principle', 'Open/Closed Principle', 'Liskov Substitution Principle', 'Dependency Inversion Principle'],
        answer: 0,
        explanation: 'The Single Responsibility Principle (SRP) states that a class should do one thing and therefore it should have only a single reason to change. This makes software easier to implement and prevents unexpected side-effects of future changes.'
    },
    {
        id: 'tech-9',
        topic: 'Operating System',
        difficulty: 'Hard',
        question: 'What is the primary purpose of a Translation Lookaside Buffer (TLB)?',
        options: ['To cache disk blocks', 'To translate virtual IP addresses to physical IP addresses', 'To cache recent virtual-to-physical address translations', 'To buffer output from the CPU to the monitor'],
        answer: 2,
        explanation: 'The TLB is a memory cache that is used to reduce the time taken to access a user memory location. It stores the recent translations of virtual memory to physical memory and is a part of the memory-management unit (MMU).'
    },
    {
        id: 'tech-10',
        topic: 'DBMS',
        difficulty: 'Hard',
        question: 'Which of the following database isolation levels completely prevents dirty reads, non-repeatable reads, and phantom reads?',
        options: ['Read Uncommitted', 'Read Committed', 'Repeatable Read', 'Serializable'],
        answer: 3,
        explanation: 'Serializable is the highest isolation level. It guarantees that transactions will yield the exact same results as if they were executed one after the other serially, thereby preventing dirty, non-repeatable, and phantom reads.'
    },
    {
        id: 'tech-11',
        topic: 'Computer Networks',
        difficulty: 'Easy',
        question: 'Which protocol is used to translate an IP address into a MAC address?',
        options: ['DNS', 'ARP', 'DHCP', 'RARP'],
        answer: 1,
        explanation: 'ARP (Address Resolution Protocol) is used to map an IP address (Network Layer) to a physical MAC address (Data Link Layer) on a local network.'
    },
    {
        id: 'tech-12',
        topic: 'Operating System',
        difficulty: 'Medium',
        question: 'What is the phenomenon called when the memory is divided into fixed-size blocks, and a process requests a slightly smaller amount, leaving a small unusable block of memory inside the allocated region?',
        options: ['External Fragmentation', 'Paging', 'Internal Fragmentation', 'Segmentation'],
        answer: 2,
        explanation: 'Internal Fragmentation happens when memory is allocated in fixed-size blocks (pages), and if a process needs less memory than the block size, the remaining space inside the block is wasted.'
    },
    {
        id: 'tech-13',
        topic: 'DBMS',
        difficulty: 'Medium',
        question: 'Which of the following SQL commands is used to completely remove a table structure and its data from the database?',
        options: ['DELETE', 'TRUNCATE', 'DROP', 'REMOVE'],
        answer: 2,
        explanation: 'DROP is a Data Definition Language (DDL) command that removes the entire table structure along with its data from the database. TRUNCATE removes data but keeps the structure, and DELETE removes specific rows.'
    },
    {
        id: 'tech-14',
        topic: 'OOP',
        difficulty: 'Hard',
        question: 'Which of the following design patterns ensures that only one instance of a class is created and provides a global point of access to it?',
        options: ['Factory Method', 'Singleton', 'Observer', 'Decorator'],
        answer: 1,
        explanation: 'The Singleton pattern restricts the instantiation of a class to exactly one object. It is useful when exactly one object is needed to coordinate actions across the system (e.g., a database connection pool).'
    },
    {
        id: 'tech-15',
        topic: 'System Design',
        difficulty: 'Medium',
        question: 'Which caching strategy involves writing data directly to the cache, and then asynchronously writing that same data to the database in the background?',
        options: ['Write-Through', 'Write-Around', 'Write-Back', 'Cache-Aside'],
        answer: 2,
        explanation: 'Write-Back (or Write-Behind) caching writes data to the cache first and immediately confirms the write to the user. The data is then asynchronously written to the database, improving write latency at the risk of data loss if the cache crashes.'
    },
    {
        id: 'tech-16',
        topic: 'Computer Networks',
        difficulty: 'Medium',
        question: 'Which of the following HTTP status codes indicates that the requested resource has been permanently moved to a new URL?',
        options: ['200 OK', '301 Moved Permanently', '404 Not Found', '500 Internal Server Error'],
        answer: 1,
        explanation: 'HTTP 301 indicates a permanent redirect. Search engines update their links to the new URL, and browsers automatically forward the request to the new location.'
    },
    {
        id: 'tech-17',
        topic: 'DBMS',
        difficulty: 'Hard',
        question: 'What type of index alters the physical arrangement of data rows in a database table to match the index order?',
        options: ['Non-Clustered Index', 'Hash Index', 'Clustered Index', 'Bitmap Index'],
        answer: 2,
        explanation: 'A Clustered Index determines the physical order of data in a table. Because the data can only be sorted in one physical order, there can be only one clustered index per table (typically the Primary Key).'
    },
    {
        id: 'tech-18',
        topic: 'Operating System',
        difficulty: 'Hard',
        question: 'Which CPU scheduling algorithm gives every process an equal, fixed amount of time (time quantum) to execute before preempting it?',
        options: ['First Come First Serve (FCFS)', 'Shortest Job Next (SJN)', 'Round Robin', 'Priority Scheduling'],
        answer: 2,
        explanation: 'Round Robin assigns a fixed time quantum to each process in the ready queue sequentially. If a process does not finish within its quantum, it is preempted and moved to the back of the queue.'
    },
    {
        id: 'tech-19',
        topic: 'OOP',
        difficulty: 'Medium',
        question: 'What is the term for a class that cannot be instantiated and is designed to be subclassed by other classes?',
        options: ['Static Class', 'Abstract Class', 'Sealed Class', 'Final Class'],
        answer: 1,
        explanation: 'An Abstract Class cannot be instantiated on its own. It typically contains abstract methods that must be implemented by its subclasses, serving as a template.'
    },
    {
        id: 'tech-20',
        topic: 'System Design',
        difficulty: 'Hard',
        question: 'In highly distributed systems, what algorithm is commonly used to efficiently determine which cache server should store a specific key, minimizing data movement when servers are added or removed?',
        options: ['Round Robin', 'Consistent Hashing', 'Least Recently Used (LRU)', 'Paxos'],
        answer: 1,
        explanation: 'Consistent Hashing maps both keys and servers to a logical ring. When a server is added or removed, only a small fraction of keys (K/N) need to be remapped, making it highly efficient for distributed caching systems like Redis or Memcached.'
    }
];
