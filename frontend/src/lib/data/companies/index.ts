import type { Company } from '../types';

export const companiesData: Company[] = [
    {
        id: 'google', name: 'Google', initials: 'Go', sector: 'Technology', hiring: true, difficulty: 'Very high', ctc: '₹30–65 LPA', pattern: '4-5 DSA/System Design rounds', color: 'from-blue-500 to-red-500', logo: '/api/logo/google',
        generalStrategy: 'Google places an extremely heavy emphasis on Data Structures and Algorithms. You must be able to write bug-free code on a whiteboard/Google Doc and explain the time/space complexity flawlessly. System Design is required for L4+. Googleyness (Behavioral) evaluates how you handle ambiguity and teamwork.',
        interviewQuestions: [
            { round: 'Technical (DSA)', question: 'Design a data structure that supports insert, delete, and getRandom in O(1) time.', advice: 'This is a classic hash map + array combination problem. Explain how removing an element from the middle of the array can be done in O(1) by swapping it with the last element.' },
            { round: 'System Design', question: 'Design Google Docs (Collaborative Editing).', advice: 'Focus on Operational Transformation (OT) or CRDTs for conflict resolution. Discuss WebSocket connections and how state is synchronized across multiple clients.' }
        ]
    },
    {
        id: 'amazon', name: 'Amazon', initials: 'Am', sector: 'Technology', hiring: true, difficulty: 'Very high', ctc: '₹28–50 LPA', pattern: 'OA · DSA · Leadership Principles', color: 'from-orange-500 to-amber-400', logo: '/api/logo/amazon',
        generalStrategy: 'Amazon interviews are 50% Technical and 50% Leadership Principles (LPs). You CANNOT pass Amazon without deeply studying their 16 LPs. Prepare at least two STAR method stories for every single LP. Technical rounds usually involve LeetCode Medium/Hard graphs, trees, or arrays.',
        interviewQuestions: [
            { round: 'Behavioral (LPs)', question: 'Tell me about a time you had to make a decision without having all the data. (Bias for Action)', advice: 'Use the STAR method. Emphasize that waiting for perfect data would have missed a critical business window, so you made a calculated risk, monitored the outcome, and course-corrected.' },
            { round: 'System Design', question: 'Design Amazon Locker.', advice: 'This is an Object-Oriented Design (LLD) problem. Define the classes (Locker, Package, User, Code), their relationships, and the state machine for a locker (Available, Reserved, Occupied).' }
        ]
    },
    {
        id: 'microsoft', name: 'Microsoft', initials: 'Mi', sector: 'Technology', hiring: false, difficulty: 'High', ctc: '₹40–45 LPA', pattern: 'OA · DSA · System Design', color: 'from-blue-600 to-cyan-500', logo: '/api/logo/microsoft',
        generalStrategy: 'Microsoft focuses heavily on practical coding, system design, and CS fundamentals (OS, DBMS, Networks). They often ask LeetCode Mediums related to Strings, Linked Lists, and Trees. They care deeply about clean code, testing, and edge cases. Behavioral rounds are generally relaxed and focus on collaboration.',
        interviewQuestions: [
            { round: 'Technical (DSA)', question: 'Reverse a Linked List in groups of K.', advice: 'Edge case handling is critical here. Ask the interviewer what to do if the last group has fewer than K nodes. Write modular code (e.g., a helper function to reverse a sublist).' },
            { round: 'Technical (Fundamentals)', question: 'Explain how a Mutex differs from a Semaphore, and write a thread-safe Singleton in Java/C++.', advice: 'Demonstrate deep OS knowledge. For the Singleton, discuss double-checked locking and why the volatile keyword is necessary.' }
        ]
    },
    {
        id: 'meta', name: 'Meta', initials: 'Me', sector: 'Technology', hiring: true, difficulty: 'Very high', ctc: '₹45–80 LPA', pattern: 'Screening · Jedi · Ninja · Pirate', color: 'from-blue-600 to-blue-400', logo: '/api/logo/meta',
        generalStrategy: 'Meta values speed above all else. You will often be asked 2 LeetCode Medium/Hard questions in a 45-minute round. You must recognize patterns instantly and code them without bugs. They do not care about syntax perfection as much as algorithm correctness and speed.',
        interviewQuestions: [
            { round: 'Ninja (Coding)', question: 'Given an array of integers and an integer k, find the total number of continuous subarrays whose sum equals to k.', advice: 'Use a prefix sum with a Hash Map. You must solve this in O(N) time and explain why the sliding window approach fails if negative numbers are present.' },
            { round: 'Pirate (System Design)', question: 'Design Instagram\'s News Feed.', advice: 'Focus on read-heavy architecture. Discuss push vs. pull models for fanout. Explain how you would handle celebrity accounts (Justin Bieber effect) using a hybrid approach.' }
        ]
    },
    {
        id: 'apple', name: 'Apple', initials: 'Ap', sector: 'Technology', hiring: false, difficulty: 'Very high', ctc: '₹35–60 LPA', pattern: 'Domain Specific · DSA · Architecture', color: 'from-gray-700 to-gray-500', logo: '/api/logo/apple',
        generalStrategy: 'Apple hires for specific teams, not a general pool. Interviews are highly domain-specific (e.g., iOS, Hardware, Kernel, Machine Learning). You must know the fundamentals of your specific domain inside out. Culture fit revolves around privacy, design, and attention to detail.',
        interviewQuestions: [
            { round: 'Domain Technical', question: 'Explain the internal memory management of an iOS app (ARC) and how retain cycles occur.', advice: 'Discuss strong, weak, and unowned references. Give a practical example of a closure capturing \'self\' strongly and how to break it using a capture list.' },
            { round: 'Technical (DSA)', question: 'Implement an LRU Cache.', advice: 'This is a staple. You must use a Hash Map + Doubly Linked List to achieve O(1) for both get and put operations.' }
        ]
    },
    {
        id: 'netflix', name: 'Netflix', initials: 'Ne', sector: 'Technology', hiring: true, difficulty: 'Very high', ctc: '₹50–90 LPA', pattern: 'Values · Domain · System Design', color: 'from-red-600 to-red-400', logo: '/api/logo/netflix',
        generalStrategy: 'Netflix only hires Senior engineers (rarely freshers). They test heavily on their unique culture ("Freedom and Responsibility"). Technical rounds focus deeply on distributed systems, microservices, and high-availability architecture.',
        interviewQuestions: [
            { round: 'Culture Fit', question: 'Tell me about a time you disagreed with your manager and proceeded to do what you thought was right anyway.', advice: 'Netflix values "Courage" and "Context not Control". Show that you backed your decision with data, communicated clearly, and owned the outcome (good or bad).' },
            { round: 'System Design', question: 'Design a global video streaming CDN.', advice: 'Focus on edge caching, latency, and predictive pre-fetching based on user behavior (e.g., caching the next episode of a series a user is currently watching).' }
        ]
    },
    {
        id: 'uber', name: 'Uber', initials: 'Ub', sector: 'Technology', hiring: true, difficulty: 'Very high', ctc: '₹40–75 LPA', pattern: 'DSA · Machine Coding · System Design', color: 'from-black to-gray-800', logo: '/api/logo/uber',
        generalStrategy: 'Uber focuses on real-world engineering. You will likely face a Machine Coding round where you must build a working, scalable mini-application in 90 minutes. System design focuses heavily on geospatial data and real-time processing.',
        interviewQuestions: [
            { round: 'Machine Coding', question: 'Design and implement an in-memory Key-Value store with nested transactions (Begin, Commit, Rollback).', advice: 'Use a stack of hash maps to keep track of state at different transaction levels. Ensure your code is clean, modular, and handles edge cases.' },
            { round: 'System Design', question: 'Design a system to match riders with drivers (Uber Dispatch).', advice: 'Discuss geospatial indexing (Quadtrees/Geohashes). Explain how to handle the real-time location updates of millions of drivers concurrently.' }
        ]
    },
    {
        id: 'adobe', name: 'Adobe', initials: 'Ad', sector: 'Technology', hiring: true, difficulty: 'High', ctc: '₹20–40 LPA', pattern: 'OA · DSA · CS Fundamentals', color: 'from-red-500 to-red-400', logo: '/api/logo/adobe',
        generalStrategy: 'Adobe strongly prefers candidates with deep knowledge of Core CS fundamentals (OS, C++, Memory Management, Pointers). Their DSA questions often involve Strings, Arrays, and Dynamic Programming.',
        interviewQuestions: [
            { round: 'Technical (DSA)', question: 'Find the maximum product subarray in an array of integers.', advice: 'Explain the dynamic programming approach where you keep track of both the maximum and minimum product up to the current index, as multiplying two negative numbers yields a positive.' },
            { round: 'Technical (Fundamentals)', question: 'What is a Virtual Destructor in C++ and why is it necessary?', advice: 'Explain how it prevents memory leaks when deleting a derived class object through a base class pointer. Write a quick code snippet to demonstrate.' }
        ]
    },
    {
        id: 'nvidia', name: 'NVIDIA', initials: 'Nv', sector: 'Technology', hiring: true, difficulty: 'Very high', ctc: '₹35–65 LPA', pattern: 'Domain · C++ / Python · Architecture', color: 'from-green-500 to-green-400', logo: '/api/logo/nvidia',
        generalStrategy: 'NVIDIA interviews are intensely technical. Software roles focus heavily on C/C++, system architecture, parallel computing (CUDA), or deep learning frameworks depending on the exact team.',
        interviewQuestions: [
            { round: 'Domain Technical', question: 'Explain how GPU memory hierarchy differs from CPU memory hierarchy.', advice: 'Discuss global memory, shared memory, and registers. Explain warp divergence and memory coalescing if interviewing for a systems/CUDA role.' },
            { round: 'Coding', question: 'Implement a thread-safe lock-free queue.', advice: 'This tests your knowledge of atomic operations, compare-and-swap (CAS), and concurrency models in C++.' }
        ]
    },
    {
        id: 'salesforce', name: 'Salesforce', initials: 'Sa', sector: 'Technology', hiring: true, difficulty: 'High', ctc: '₹25–45 LPA', pattern: 'OA · DSA · Object Oriented Design', color: 'from-blue-400 to-blue-300', logo: '/api/logo/salesforce',
        generalStrategy: 'Salesforce focuses heavily on Object-Oriented Design (LLD), Java fundamentals, and web architecture. You must be able to write clean interfaces and design patterns.',
        interviewQuestions: [
            { round: 'LLD', question: 'Design an Elevator System.', advice: 'Identify the classes (Elevator, Button, Controller). Use the State design pattern. Discuss the algorithm for optimizing requests (e.g., SCAN algorithm).' },
            { round: 'Technical', question: 'How does Garbage Collection work in Java?', advice: 'Discuss the JVM memory model (Young, Old, Metaspace). Explain generational garbage collection and the difference between minor and major GC.' }
        ]
    },
    {
        id: 'oracle', name: 'Oracle', initials: 'Or', sector: 'Technology', hiring: true, difficulty: 'High', ctc: '₹20–45 LPA', pattern: 'OA · DSA · Database Concepts', color: 'from-red-600 to-red-500', logo: '/api/logo/oracle',
        generalStrategy: 'Oracle values strong fundamental CS knowledge, especially in databases, operating systems, and core Java/C++. Their OCI (Cloud) interviews are highly rigorous and comparable to AWS/Azure.',
        interviewQuestions: [
            { round: 'Technical', question: 'Explain the difference between clustered and non-clustered indexes. How are they implemented?', advice: 'Discuss B-Trees. Explain that a clustered index determines the physical order of data, while a non-clustered index is a separate structure.' },
            { round: 'DSA', question: 'Merge K Sorted Lists.', advice: 'Do not use brute force. Use a Min-Heap (Priority Queue) to keep track of the current smallest element from each list, resulting in O(N log K) time.' }
        ]
    },
    {
        id: 'linkedin', name: 'LinkedIn', initials: 'Li', sector: 'Technology', hiring: true, difficulty: 'Very high', ctc: '₹35–60 LPA', pattern: 'DSA · Concurrency · System Design', color: 'from-blue-600 to-blue-500', logo: '/api/logo/linkedin',
        generalStrategy: 'LinkedIn is known for asking questions strictly from their LeetCode tagged list. If you do the top 50 LinkedIn questions, you will likely see a repeat. They heavily test concurrency and API design.',
        interviewQuestions: [
            { round: 'DSA', question: 'Serialize and Deserialize a Binary Tree.', advice: 'Explain how you will use a preorder traversal with a delimiter (like comma) and a special character (like X) for null nodes.' },
            { round: 'System Design', question: 'Design LinkedIn\'s connection recommendation system.', advice: 'Discuss graph databases, collaborative filtering, and pre-computing recommendations offline using Hadoop/Spark pipelines.' }
        ]
    },
    {
        id: 'atlassian', name: 'Atlassian', initials: 'At', sector: 'Technology', hiring: true, difficulty: 'High', ctc: '₹30–65 LPA', pattern: 'Coding · System Design · Values', color: 'from-blue-500 to-blue-400', logo: '/api/logo/atlassian',
        generalStrategy: 'Atlassian focuses heavily on practical coding and system design. They care deeply about their core values (e.g., "Don\'t #@!% the customer").',
        interviewQuestions: [
            { round: 'Machine Coding', question: 'Implement a rate limiter.', advice: 'Focus on the Token Bucket or Leaky Bucket algorithm. Write clean, modular code that handles concurrent requests safely.' },
            { round: 'Values', question: 'Tell me about a time you prioritized a customer over a technical refactor.', advice: 'Align your answer with their "Don\'t #@!% the customer" value. Show that you understand business priorities.' }
        ]
    },
    {
        id: 'stripe', name: 'Stripe', initials: 'St', sector: 'Technology', hiring: true, difficulty: 'Very high', ctc: '₹40–80 LPA', pattern: 'Machine Coding · Bug Squashing', color: 'from-indigo-500 to-purple-500', logo: '/api/logo/stripe',
        generalStrategy: 'Stripe completely ignores LeetCode puzzles. Instead, their interviews mirror actual engineering work. You will use your own laptop and IDE. You must be exceptional at reading large codebases and writing production-ready code.',
        interviewQuestions: [
            { round: 'Bug Squashing', question: 'Given a repository with a simulated API and a test suite with 3 failing tests, find and fix the bugs in 45 minutes.', advice: 'Do not just hack a fix. Understand the root cause, and implement a clean fix that handles edge cases.' },
            { round: 'Machine Coding', question: 'Implement a ledger system for processing payments.', advice: 'Focus on idempotency and concurrency. How do you handle network retries? Stripe values robust code over theoretical algorithms.' }
        ]
    },
    {
        id: 'airbnb', name: 'Airbnb', initials: 'Ai', sector: 'Technology', hiring: false, difficulty: 'Very high', ctc: '₹40–70 LPA', pattern: 'DSA · UI/UX · Core Values', color: 'from-rose-500 to-pink-500', logo: '/api/logo/airbnb',
        generalStrategy: 'Airbnb heavily emphasizes culture fit and product sense. Frontend interviews focus deeply on UI architecture, React performance, and accessibility. Backend focuses on microservices and API design.',
        interviewQuestions: [
            { round: 'Frontend', question: 'Build a calendar widget from scratch.', advice: 'Focus on state management, accessibility (ARIA tags), and rendering performance. Do not rely on external libraries.' },
            { round: 'Values', question: 'Tell me about a time you made someone feel like they belong.', advice: 'Airbnb\'s mission is "Belong Anywhere". Prepare stories that highlight your empathy and focus on inclusion.' }
        ]
    },
    {
        id: 'databricks', name: 'Databricks', initials: 'Da', sector: 'Technology', hiring: true, difficulty: 'Very high', ctc: '₹50–90 LPA', pattern: 'DSA · Distributed Systems', color: 'from-red-600 to-orange-500', logo: '/api/logo/databricks',
        generalStrategy: 'Databricks has one of the hardest interview loops in the industry. They test heavily on distributed systems, Spark internals, and advanced C++/Scala/Java programming.',
        interviewQuestions: [
            { round: 'Technical', question: 'Implement a thread-safe Lazy evaluation class.', advice: 'Test your knowledge of concurrency primitives. Ensure that the computation happens exactly once, even if multiple threads access it simultaneously.' },
            { round: 'System Design', question: 'Design a distributed task scheduler.', advice: 'Discuss how you handle worker failures, task retries, and exactly-once execution semantics.' }
        ]
    },
    {
        id: 'snowflake', name: 'Snowflake', initials: 'Sn', sector: 'Technology', hiring: true, difficulty: 'Very high', ctc: '₹45–85 LPA', pattern: 'Systems · Databases · Algorithms', color: 'from-blue-400 to-sky-300', logo: '/api/logo/snowflake',
        generalStrategy: 'Snowflake focuses heavily on database internals, query optimization, and C++ systems programming. It is highly specific to data engineering and backend infrastructure.',
        interviewQuestions: [
            { round: 'Technical', question: 'Explain how columnar storage formats (like Parquet) work and why they are efficient for analytics.', advice: 'Discuss run-length encoding, dictionary encoding, and how columnar layout improves CPU cache utilization.' },
            { round: 'Coding', question: 'Implement an efficient substring search algorithm.', advice: 'Implement KMP or Rabin-Karp. Explain the time complexity and why a naive search is inefficient.' }
        ]
    },
    {
        id: 'coinbase', name: 'Coinbase', initials: 'Co', sector: 'Technology', hiring: true, difficulty: 'High', ctc: '₹35–65 LPA', pattern: 'Pair Programming · System Design', color: 'from-blue-600 to-blue-500', logo: '/api/logo/coinbase',
        generalStrategy: 'Coinbase has a unique process. They heavily utilize pair programming and take-home assignments. They value clean code, testing, and practical engineering over LeetCode.',
        interviewQuestions: [
            { round: 'Pair Programming', question: 'Given an SQLite database and a set of requirements, build a REST API in 90 minutes.', advice: 'Focus on clean architecture. Write unit tests as you go. The interviewer acts as your co-worker.' },
            { round: 'System Design', question: 'Design a cryptocurrency exchange.', advice: 'Focus on the matching engine, order book data structures, and how to guarantee consistency during high volatility.' }
        ]
    },
    {
        id: 'bloomberg', name: 'Bloomberg', initials: 'Bl', sector: 'Technology', hiring: true, difficulty: 'High', ctc: '₹35–60 LPA', pattern: 'DSA · C++ / Systems', color: 'from-gray-900 to-gray-700', logo: '/api/logo/bloomberg',
        generalStrategy: 'Bloomberg asks questions almost exclusively from their tagged LeetCode list. They focus heavily on Strings, Hash Maps, and C++ memory management. You must write extremely optimized code.',
        interviewQuestions: [
            { round: 'DSA', question: 'Design an Underground System (LeetCode 1396).', advice: 'Use two hash maps: one to track ongoing trips and another to store aggregate data for completed trips. Optimize for O(1) time.' },
            { round: 'Technical', question: 'What causes a segmentation fault in C++?', advice: 'Provide examples like dereferencing a null pointer, accessing out-of-bounds arrays, or stack overflow.' }
        ]
    },
    {
        id: 'intel', name: 'Intel', initials: 'In', sector: 'Technology', hiring: true, difficulty: 'High', ctc: '₹20–35 LPA', pattern: 'Hardware · C/C++ · OS', color: 'from-blue-700 to-blue-500', logo: '/api/logo/intel',
        generalStrategy: 'Intel focuses heavily on low-level programming, computer architecture, and operating systems. If you apply for a software role, expect deep questions on memory, pointers, and bit manipulation.',
        interviewQuestions: [
            { round: 'Technical', question: 'Write a C macro to swap two nibbles in a byte.', advice: 'Use bitwise operators: `(x & 0x0F) << 4 | (x & 0xF0) >> 4`. Be prepared to explain endianness.' },
            { round: 'Architecture', question: 'Explain the difference between L1, L2, and L3 cache.', advice: 'Discuss latency, size, and location on the die. Explain the concept of cache coherence in multi-core systems.' }
        ]
    },
    {
        id: 'amd', name: 'AMD', initials: 'AM', sector: 'Technology', hiring: true, difficulty: 'High', ctc: '₹20–35 LPA', pattern: 'Hardware · C/C++ · Architecture', color: 'from-black to-red-600', logo: '/api/logo/amd',
        generalStrategy: 'Similar to Intel, AMD focuses on low-level systems, hardware-software co-design, and graphics architecture. Strong knowledge of C/C++ and computer organization is required.',
        interviewQuestions: [
            { round: 'Technical', question: 'Explain how a pipeline stall occurs in a CPU and how to prevent it.', advice: 'Discuss data hazards, control hazards, and structural hazards. Mention branch prediction and out-of-order execution.' },
            { round: 'Coding', question: 'Implement a memory allocator (malloc/free).', advice: 'Discuss free lists, fragmentation (internal vs external), and alignment.' }
        ]
    },
    {
        id: 'cisco', name: 'Cisco', initials: 'Ci', sector: 'Technology', hiring: true, difficulty: 'Moderate', ctc: '₹15–25 LPA', pattern: 'Networking · DSA · OS', color: 'from-blue-500 to-blue-400', logo: '/api/logo/cisco',
        generalStrategy: 'Cisco interviews focus heavily on Computer Networks (OSI model, TCP/IP, Routing protocols). The coding rounds are generally easier (LeetCode Easy/Medium).',
        interviewQuestions: [
            { round: 'Technical', question: 'Explain the TCP 3-way handshake and 4-way teardown.', advice: 'Be able to draw the state diagram. Mention SYN, SYN-ACK, ACK, FIN packets.' },
            { round: 'DSA', question: 'Reverse a string without using built-in functions.', advice: 'Use a simple two-pointer approach swapping characters from the start and end until they meet in the middle.' }
        ]
    },
    {
        id: 'qualcomm', name: 'Qualcomm', initials: 'Qu', sector: 'Technology', hiring: true, difficulty: 'High', ctc: '₹18–30 LPA', pattern: 'C/C++ · OS · Embedded', color: 'from-blue-600 to-blue-400', logo: '/api/logo/qualcomm',
        generalStrategy: 'Qualcomm tests deeply on embedded systems, C programming, operating systems, and wireless communication concepts. Strong bit manipulation skills are a must.',
        interviewQuestions: [
            { round: 'Technical', question: 'What is the volatile keyword in C and when do you use it?', advice: 'Explain that it tells the compiler not to optimize the variable because it can change unexpectedly (e.g., memory-mapped hardware registers, ISRs).' },
            { round: 'Coding', question: 'Count the number of set bits in an integer.', advice: 'Implement Brian Kernighan’s algorithm (`n = n & (n - 1)`) and explain why it is faster than a simple loop.' }
        ]
    },
    {
        id: 'goldman-sachs', name: 'Goldman Sachs', initials: 'GS', sector: 'Financial services', hiring: true, difficulty: 'High', ctc: '₹22–35 LPA', pattern: 'Math · DSA · Core Java', color: 'from-blue-700 to-blue-600', logo: '/api/logo/goldman-sachs',
        generalStrategy: 'Goldman Sachs asks heavy math, probability, and array/string manipulation questions. They prefer Java. Be prepared to optimize for time and space complexity rigorously.',
        interviewQuestions: [
            { round: 'DSA', question: 'Find the 2nd smallest element in an array in a single traversal.', advice: 'Keep track of the smallest and second smallest variables as you iterate. Handle edge cases like arrays with identical elements.' },
            { round: 'Math/Puzzles', question: 'You have 25 horses and a track that can race 5 horses at a time. Find the top 3 fastest horses in minimum races.', advice: 'This is a classic puzzle. The answer is 7 races. Explain the logic step-by-step.' }
        ]
    },
    {
        id: 'jp-morgan', name: 'JPMorgan Chase', initials: 'JP', sector: 'Financial services', hiring: true, difficulty: 'Moderate', ctc: '₹15–25 LPA', pattern: 'HireVue · DSA · Java/Spring', color: 'from-gray-800 to-gray-600', logo: '/api/logo/jp-morgan',
        generalStrategy: 'JPMC uses HireVue for initial screening (video responses + simple coding). In-person rounds focus heavily on Java, Spring Boot, OOPs, and basic system design for the specific team.',
        interviewQuestions: [
            { round: 'HireVue', question: 'Why do you want to work for JP Morgan?', advice: 'Highlight the intersection of technology and finance. Mention their tech budget and specific initiatives like Onyx (blockchain) if relevant.' },
            { round: 'Technical', question: 'Explain the internal working of a HashMap in Java.', advice: 'Discuss hashing, collision resolution (chaining vs open addressing), and the change in Java 8 where chains become Red-Black trees after a threshold.' }
        ]
    },
    {
        id: 'morgan-stanley', name: 'Morgan Stanley', initials: 'MS', sector: 'Financial services', hiring: true, difficulty: 'High', ctc: '₹20–30 LPA', pattern: 'OA · Core Java · System Design', color: 'from-blue-800 to-blue-700', logo: '/api/logo/morgan-stanley',
        generalStrategy: 'Morgan Stanley interviews are notoriously detailed on Core Java fundamentals. You will be grilled on multithreading, JVM internals, garbage collection, and design patterns.',
        interviewQuestions: [
            { round: 'Technical', question: 'What is the difference between Callable and Runnable in Java?', advice: 'Explain that Callable returns a Future object and can throw checked exceptions, while Runnable returns void and cannot.' },
            { round: 'System Design', question: 'Design a low-latency trading system.', advice: 'Discuss avoiding garbage collection pauses, using memory-mapped files, and utilizing UDP vs TCP for market data.' }
        ]
    },
    {
        id: 'american-express', name: 'American Express', initials: 'AE', sector: 'Financial services', hiring: true, difficulty: 'Moderate', ctc: '₹14–22 LPA', pattern: 'OA · OOPs · SQL', color: 'from-blue-600 to-blue-500', logo: '/api/logo/american-express',
        generalStrategy: 'Amex focuses heavily on data handling, SQL, and Object-Oriented Programming. Coding questions are typically LeetCode Easy/Medium.',
        interviewQuestions: [
            { round: 'Technical', question: 'Write a SQL query to find the 3rd highest salary of an employee.', advice: 'Use the `DENSE_RANK()` window function, or subqueries. Explain the performance implications of your choice.' },
            { round: 'Behavioral', question: 'Tell me about a time you had to deal with a difficult team member.', advice: 'Focus on communication, empathy, and aligning on common goals. Never speak negatively about the person.' }
        ]
    },
    {
        id: 'visa', name: 'Visa', initials: 'Vi', sector: 'Financial services', hiring: true, difficulty: 'Moderate', ctc: '₹15–28 LPA', pattern: 'OA · Java/C++ · Security', color: 'from-blue-700 to-yellow-500', logo: '/api/logo/visa',
        generalStrategy: 'Visa looks for strong fundamentals in distributed systems, security, and transaction processing. Standard LeetCode Mediums and behavioral questions about integrity are common.',
        interviewQuestions: [
            { round: 'Technical', question: 'How would you ensure a payment transaction is processed exactly once?', advice: 'Discuss idempotency keys, two-phase commit, and database transaction isolation levels.' },
            { round: 'DSA', question: 'Detect a cycle in a Linked List.', advice: 'Implement Floyd’s Cycle-Finding Algorithm (Tortoise and Hare) and explain why it uses O(1) space.' }
        ]
    },
    {
        id: 'mastercard', name: 'Mastercard', initials: 'Ma', sector: 'Financial services', hiring: true, difficulty: 'Moderate', ctc: '₹15–25 LPA', pattern: 'OA · Java · API Design', color: 'from-red-500 to-yellow-500', logo: '/api/logo/mastercard',
        generalStrategy: 'Mastercard focuses on secure API design, microservices, and Java fundamentals. Expect questions on Spring Boot, REST principles, and database normalization.',
        interviewQuestions: [
            { round: 'Technical', question: 'Explain the principles of RESTful API design.', advice: 'Discuss statelessness, resource-based URLs, HTTP methods (GET, POST, PUT, DELETE), and proper status codes.' },
            { round: 'Behavioral', question: 'Describe a time you proposed a new idea to your manager.', advice: 'Show initiative and how you backed your idea with data or a prototype.' }
        ]
    },
    {
        id: 'samsung', name: 'Samsung', initials: 'Sa', sector: 'Technology', hiring: true, difficulty: 'Very high', ctc: '₹16–22 LPA', pattern: 'Advanced Coding Test · Technical HR', color: 'from-blue-600 to-blue-500', logo: '/api/logo/samsung',
        generalStrategy: 'Samsung R&D (SRI) relies entirely on their infamous 3-hour Advanced Coding Test. You are given one hard problem (usually graph/backtracking/DP) and you must pass all 50 hidden test cases. You cannot use standard libraries (STL in C++ or util in Java).',
        interviewQuestions: [
            { round: 'Coding Test', question: 'Solve the Traveling Salesperson Problem (or a variation) on a 2D grid.', advice: 'You must implement your own Queue/Stack/Vector from scratch. Use Backtracking with aggressive pruning or Bitmask DP.' },
            { round: 'Technical HR', question: 'Explain your approach to the coding test problem.', advice: 'Be ready to defend your space and time complexity, and explain how you handled edge cases.' }
        ]
    },
    {
        id: 'flipkart', name: 'Flipkart', initials: 'Fl', sector: 'E-commerce', hiring: true, difficulty: 'High', ctc: '₹25–35 LPA', pattern: 'Machine Coding · DSA · System Design', color: 'from-blue-500 to-yellow-400', logo: '/api/logo/flipkart',
        generalStrategy: 'Flipkart popularized the Machine Coding round in India. You will have 90 minutes to build a functional CLI application (e.g., a Snake & Ladder game, or a Splitwise clone) using OOP principles.',
        interviewQuestions: [
            { round: 'Machine Coding', question: 'Design and implement an in-memory Ride Sharing application.', advice: 'Focus on separating models, controllers, and services. Do not connect a database. Code quality, extensibility, and design patterns are evaluated.' },
            { round: 'System Design', question: 'Design Flipkart\'s Flash Sale system (Big Billion Days).', advice: 'Discuss handling massive sudden spikes in traffic, redis queues for order taking, and eventual consistency.' }
        ]
    },
    {
        id: 'phonepe', name: 'PhonePe', initials: 'Ph', sector: 'Fintech', hiring: true, difficulty: 'Very high', ctc: '₹30–40 LPA', pattern: 'Machine Coding · LLD · HLD', color: 'from-purple-600 to-purple-500', logo: '/api/logo/phonepe',
        generalStrategy: 'PhonePe has a rigorous engineering culture. They test heavily on concurrency, low-level design, and handling high-throughput transactional systems.',
        interviewQuestions: [
            { round: 'Machine Coding', question: 'Design a generic event bus / pub-sub system in memory.', advice: 'Focus on thread safety. Use proper locking mechanisms or concurrent data structures to ensure multiple producers and consumers work correctly.' },
            { round: 'System Design', question: 'Design a UPI payment switch.', advice: 'Discuss idempotency, distributed transactions, retry mechanisms, and interacting with third-party banking APIs.' }
        ]
    },
    {
        id: 'razorpay', name: 'Razorpay', initials: 'Ra', sector: 'Fintech', hiring: true, difficulty: 'High', ctc: '₹25–35 LPA', pattern: 'DSA · LLD · System Design', color: 'from-blue-600 to-blue-500', logo: '/api/logo/razorpay',
        generalStrategy: 'Razorpay focuses on secure, reliable backend systems. Interviews heavily feature PHP/Go/Java concepts, API design, and handling financial transactions.',
        interviewQuestions: [
            { round: 'Technical', question: 'Design a Webhook delivery system.', advice: 'Discuss how to handle failures, exponential backoff for retries, and ensuring webhooks are delivered at-least-once.' },
            { round: 'DSA', question: 'Find the longest increasing subsequence in an array.', advice: 'Implement the O(N log N) solution using Binary Search and Patience Sorting.' }
        ]
    },
    {
        id: 'meesho', name: 'Meesho', initials: 'Me', sector: 'E-commerce', hiring: true, difficulty: 'High', ctc: '₹25–35 LPA', pattern: 'DSA · Machine Coding · System Design', color: 'from-pink-500 to-pink-400', logo: '/api/logo/meesho',
        generalStrategy: 'Meesho focuses on building for the next billion users. Expect questions on scalable system design, React/Android for frontend, and Java/Spring for backend.',
        interviewQuestions: [
            { round: 'System Design', question: 'Design a reselling platform where users can share catalogs via WhatsApp.', advice: 'Focus on image optimization, caching frequent catalogs, and handling unique referral tracking links at scale.' },
            { round: 'Machine Coding', question: 'Implement an in-memory cache with an LFU (Least Frequently Used) eviction policy.', advice: 'Use a combination of a hash map and a doubly linked list or multiple doubly linked lists grouped by frequency.' }
        ]
    },
    {
        id: 'swiggy', name: 'Swiggy', initials: 'Sw', sector: 'Consumer Tech', hiring: true, difficulty: 'High', ctc: '₹25–35 LPA', pattern: 'Machine Coding · System Design', color: 'from-orange-500 to-orange-400', logo: '/api/logo/swiggy',
        generalStrategy: 'Swiggy focuses heavily on real-time systems, logistics, and geospatial data. Machine coding rounds often revolve around delivery dispatch or restaurant management.',
        interviewQuestions: [
            { round: 'Machine Coding', question: 'Design an in-memory Food Delivery application.', advice: 'Define entities: Restaurant, User, DeliveryExecutive, Order. Implement a simple matching algorithm to assign the nearest executive to an order.' },
            { round: 'System Design', question: 'Design the delivery tracking system (live map).', advice: 'Discuss WebSockets for real-time updates, Geohashing for location indexing, and Kafka for streaming coordinates.' }
        ]
    },
    {
        id: 'zomato', name: 'Zomato', initials: 'Zo', sector: 'Consumer Tech', hiring: true, difficulty: 'High', ctc: '₹20–30 LPA', pattern: 'DSA · System Design', color: 'from-red-600 to-red-500', logo: '/api/logo/zomato',
        generalStrategy: 'Zomato looks for pragmatic engineers. Interviews focus on database optimization, API design, and scaling search infrastructure.',
        interviewQuestions: [
            { round: 'System Design', question: 'Design Zomato\'s restaurant search functionality.', advice: 'Discuss Elasticsearch for fast text search, handling spelling mistakes, and caching popular queries in Redis.' },
            { round: 'Technical', question: 'How do you optimize a slow SQL query?', advice: 'Mention `EXPLAIN ANALYZE`, adding indexes, avoiding `SELECT *`, and denormalizing data if necessary.' }
        ]
    },
    {
        id: 'cred', name: 'CRED', initials: 'CR', sector: 'Fintech', hiring: true, difficulty: 'Very high', ctc: '₹30–45 LPA', pattern: 'Take-home assignment · Architecture', color: 'from-gray-900 to-gray-800', logo: '/api/logo/cred',
        generalStrategy: 'CRED places extreme importance on UI/UX and code quality. Frontend interviews are brutally detailed on animations and React performance. Backend relies on take-home assignments requiring production-ready code.',
        interviewQuestions: [
            { round: 'Frontend', question: 'Implement a buttery smooth swipe-to-pay button.', advice: 'Do not use standard HTML drag events. Use `requestAnimationFrame`, CSS transforms, and handle touch events perfectly for mobile web.' },
            { round: 'Backend', question: 'Review this PR. What is wrong with it?', advice: 'Look for security vulnerabilities, race conditions, N+1 query problems, and lack of test coverage.' }
        ]
    },
    {
        id: 'groww', name: 'Groww', initials: 'Gr', sector: 'Fintech', hiring: true, difficulty: 'High', ctc: '₹20–35 LPA', pattern: 'DSA · LLD · Culture', color: 'from-green-500 to-emerald-400', logo: '/api/logo/groww',
        generalStrategy: 'Groww values fast execution and strong fundamentals. Expect standard LeetCode Mediums and system design questions focused on high-frequency data.',
        interviewQuestions: [
            { round: 'System Design', question: 'Design a live stock ticker.', advice: 'Discuss Server-Sent Events (SSE) vs WebSockets. Explain how to handle the massive firehose of data from the stock exchange.' },
            { round: 'DSA', question: 'Find the maximum profit in buying and selling stocks (k transactions).', advice: 'Use Dynamic Programming. Explain the state transition clearly.' }
        ]
    },
    {
        id: 'myntra', name: 'Myntra', initials: 'My', sector: 'E-commerce', hiring: true, difficulty: 'High', ctc: '₹20–30 LPA', pattern: 'Machine Coding · DSA · System Design', color: 'from-pink-500 to-rose-400', logo: '/api/logo/myntra',
        generalStrategy: 'Myntra, being a subsidiary of Flipkart, follows a very similar interview pattern including the 90-minute Machine Coding round.',
        interviewQuestions: [
            { round: 'Machine Coding', question: 'Implement a shopping cart with promotional rules (e.g., Buy 1 Get 1 Free, 20% off on orders above $100).', advice: 'Use the Strategy Design Pattern for the discount rules so that new promotions can be added without modifying the core cart logic.' },
            { round: 'Technical', question: 'Explain how you would handle thousands of variations of a single clothing item in a database.', advice: 'Discuss the EAV (Entity-Attribute-Value) model or using JSONB columns in PostgreSQL.' }
        ]
    },
    {
        id: 'ola', name: 'Ola', initials: 'Ol', sector: 'Consumer Tech', hiring: true, difficulty: 'Moderate', ctc: '₹15–25 LPA', pattern: 'DSA · System Design', color: 'from-lime-400 to-green-500', logo: '/api/logo/ola',
        generalStrategy: 'Ola interviews focus on algorithms, data structures, and spatial routing. Expect questions on graphs and shortest path algorithms.',
        interviewQuestions: [
            { round: 'DSA', question: 'Implement Dijkstra’s algorithm to find the shortest path between two nodes.', advice: 'Write clean code using a Priority Queue. Be prepared to explain its time complexity (O(E log V)).' },
            { round: 'System Design', question: 'Design a surge pricing system.', advice: 'Discuss how you aggregate supply (drivers) and demand (riders) in real-time within specific geohashes.' }
        ]
    },
    {
        id: 'zoho', name: 'Zoho', initials: 'Zo', sector: 'Software', hiring: true, difficulty: 'Moderate', ctc: '₹6–12 LPA', pattern: 'Aptitude · C Programming · Advanced Programming', color: 'from-blue-600 to-blue-500', logo: '/api/logo/zoho',
        generalStrategy: 'Zoho has a very unique, rigorous process heavily focused on pure C/C++ or Java programming without IDEs. They often conduct paper-and-pen coding rounds.',
        interviewQuestions: [
            { round: 'C Programming', question: 'Predict the output of these complex pointer and macro snippets in C.', advice: 'Brush up on pointer arithmetic, function pointers, and edge cases in C memory management.' },
            { round: 'Advanced Programming', question: 'Design a railway reservation system.', advice: 'You will have 2-3 hours to build this in an IDE without internet access. Focus on handling edge cases like waitlists and cancellations.' }
        ]
    },
    {
        id: 'freshworks', name: 'Freshworks', initials: 'Fr', sector: 'Software', hiring: true, difficulty: 'Moderate', ctc: '₹10–18 LPA', pattern: 'OA · Machine Coding · HR', color: 'from-emerald-500 to-teal-400', logo: '/api/logo/freshworks',
        generalStrategy: 'Freshworks values strong frontend skills (Ember.js, React) and solid backend API design (Ruby on Rails, Node). Their rounds emphasize practical problem solving over algorithmic puzzles.',
        interviewQuestions: [
            { round: 'Machine Coding', question: 'Build a helpdesk ticketing system CLI.', advice: 'Focus on CRUD operations, state transitions (Open, Pending, Resolved), and clean modular architecture.' },
            { round: 'Behavioral', question: 'Tell me about a time you had to learn a new technology rapidly.', advice: 'Show enthusiasm for learning. Explain your structured approach to picking up new languages.' }
        ]
    },
    {
        id: 'tcs', name: 'Tata Consultancy Services', initials: 'TC', sector: 'IT Services', hiring: true, difficulty: 'Moderate', ctc: '₹3.3–9 LPA', pattern: 'NQT (Aptitude + Coding) · Technical HR', color: 'from-blue-800 to-blue-600', logo: '/api/logo/tcs',
        generalStrategy: 'TCS hires primarily through the National Qualifier Test (NQT). The focus is heavily on Quantitative Aptitude, Logical Reasoning, and basic Verbal ability. For TCS Digital/Prime, expect competitive programming style questions (Medium-Hard).',
        interviewQuestions: [
            { round: 'NQT Coding', question: 'Write a program to find the nth term of a mixed series (e.g., alternating prime numbers and Fibonacci).', advice: 'Speed is key. Write separate helper functions for isPrime and Fibonacci to keep the code clean and debuggable.' },
            { round: 'Technical HR', question: 'Explain the 4 pillars of Object-Oriented Programming.', advice: 'Provide clear, real-world examples for Abstraction, Encapsulation, Inheritance, and Polymorphism.' }
        ]
    },
    {
        id: 'infosys', name: 'Infosys', initials: 'In', sector: 'IT Services', hiring: true, difficulty: 'Moderate', ctc: '₹3.6–9 LPA', pattern: 'Aptitude · Pseudo Code · Technical HR', color: 'from-blue-600 to-indigo-500', logo: '/api/logo/infosys',
        generalStrategy: 'Infosys assessments typically include logical reasoning, quantitative aptitude, and a specific "Pseudo-code" section where you must dry-run logic. For the Power Programmer role (HackWithInfy), you need strong competitive programming skills.',
        interviewQuestions: [
            { round: 'Pseudo Code', question: 'Dry run this nested loop structure and determine the final value of the counter.', advice: 'Trace the variables carefully on paper. Watch out for post/pre-increment operators.' },
            { round: 'Technical HR', question: 'What is the difference between TRUNCATE, DELETE, and DROP in SQL?', advice: 'Explain that DELETE is DML and can be rolled back, TRUNCATE is DDL and cannot, and DROP removes the entire table structure.' }
        ]
    },
    {
        id: 'wipro', name: 'Wipro', initials: 'Wi', sector: 'IT Services', hiring: true, difficulty: 'Moderate', ctc: '₹3.5–7 LPA', pattern: 'NLTH · Technical HR', color: 'from-blue-500 to-blue-400', logo: '/api/logo/wipro',
        generalStrategy: 'Wipro hires through the National Level Talent Hunt (NLTH). The process includes Aptitude, English, Coding (Basic), and an Essay Writing section. Interviews are generally straightforward and resume-focused.',
        interviewQuestions: [
            { round: 'NLTH Coding', question: 'Check if a string is a palindrome or an anagram of a palindrome.', advice: 'Use a frequency array or hash map to count character occurrences. For a palindrome, at most one character can have an odd frequency.' },
            { round: 'Technical HR', question: 'Explain your final year project and your specific contribution.', advice: 'Be prepared to draw the architecture of your project and defend your technology choices.' }
        ]
    },
    {
        id: 'accenture', name: 'Accenture', initials: 'Ac', sector: 'IT Services', hiring: true, difficulty: 'Moderate', ctc: '₹4.5–6.5 LPA', pattern: 'Cognitive · Coding · Communication', color: 'from-purple-600 to-purple-500', logo: '/api/logo/accenture',
        generalStrategy: 'Accenture focuses heavily on communication skills alongside technical ability. Their assessment includes a unique automated Communication Test (spoken English) followed by standard cognitive and coding sections.',
        interviewQuestions: [
            { round: 'Coding', question: 'Calculate the total sum of even numbers present in an array.', advice: 'This is a very basic question. Focus on writing clean, bug-free code quickly.' },
            { round: 'HR', question: 'Are you willing to relocate or work in different shifts?', advice: 'Service-based companies value flexibility. It is generally advisable to say yes to increase your chances of selection.' }
        ]
    },
    {
        id: 'capgemini', name: 'Capgemini', initials: 'Ca', sector: 'IT Services', hiring: true, difficulty: 'Moderate', ctc: '₹4–7.5 LPA', pattern: 'Game-based Aptitude · Spoken English · Coding', color: 'from-cyan-600 to-cyan-500', logo: '/api/logo/capgemini',
        generalStrategy: 'Capgemini has a unique game-based aptitude test (e.g., deductive logic games, grid challenges) instead of traditional MCQs, followed by a spoken English test and a coding round.',
        interviewQuestions: [
            { round: 'Game-based Aptitude', question: 'Memorize the pattern on a grid and reproduce it after a distraction task.', advice: 'Practice memory and spatial reasoning games. Stay calm; these tests assess working memory and speed.' },
            { round: 'Technical HR', question: 'What is the difference between an abstract class and an interface?', advice: 'Provide technical details: interfaces support multiple inheritance, while abstract classes can have constructors and member variables.' }
        ]
    },
    {
        id: 'cognizant', name: 'Cognizant', initials: 'Co', sector: 'IT Services', hiring: true, difficulty: 'Moderate', ctc: '₹4–8 LPA', pattern: 'GenC Aptitude · Automata Fix · Technical HR', color: 'from-blue-700 to-blue-600', logo: '/api/logo/cognizant',
        generalStrategy: 'Cognizant (GenC/GenC Elevate) uses the AMCAT platform. They feature an "Automata Fix" round where you must debug existing code rather than write from scratch.',
        interviewQuestions: [
            { round: 'Automata Fix', question: 'Given a C program to sort an array that is currently outputting garbage values, find and fix the logical errors.', advice: 'Look for out-of-bounds array accesses, incorrect loop conditions, or uninitialized variables.' },
            { round: 'Technical HR', question: 'Explain the concept of normalization in databases.', advice: 'Explain 1NF, 2NF, and 3NF with a simple example of an Employee-Department table.' }
        ]
    },
    {
        id: 'ibm', name: 'IBM', initials: 'IB', sector: 'Technology', hiring: true, difficulty: 'Moderate', ctc: '₹4.5–9 LPA', pattern: 'Cognitive Ability · Coding · English', color: 'from-blue-800 to-blue-600', logo: '/api/logo/ibm',
        generalStrategy: 'IBM uses IPAT (Information Processing Aptitude Test) which includes number series and quantitative aptitude. The coding round usually features LeetCode Easy/Medium problems. They value fundamental CS knowledge and cloud concepts.',
        interviewQuestions: [
            { round: 'Coding', question: 'Convert a Roman Numeral to an Integer.', advice: 'Use a hash map to map characters to values. Iterate through the string, and if a smaller value precedes a larger value, subtract it.' },
            { round: 'Technical', question: 'What is a container and how does Docker work?', advice: 'Explain OS-level virtualization, namespaces, and cgroups. Differentiate it from a Virtual Machine.' }
        ]
    },
    {
        id: 'deloitte', name: 'Deloitte', initials: 'De', sector: 'Consulting', hiring: true, difficulty: 'Moderate', ctc: '₹6–9 LPA', pattern: 'AMCAT · Technical HR · Partner Round', color: 'from-green-600 to-green-500', logo: '/api/logo/deloitte',
        generalStrategy: 'Deloitte places a very strong emphasis on communication, business acumen, and consulting mindset alongside technical skills. You must demonstrate that you can translate technical concepts to business clients.',
        interviewQuestions: [
            { round: 'Technical HR', question: 'How would you explain an API to a non-technical client?', advice: 'Use an analogy, such as a waiter in a restaurant taking an order from the customer to the kitchen and bringing the food back.' },
            { round: 'Partner Round', question: 'Tell me about a time you had to work with a difficult client or stakeholder.', advice: 'Demonstrate active listening, empathy, and a focus on aligning technical delivery with their business goals.' }
        ]
    }
];
