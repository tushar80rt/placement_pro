import type { Resource } from '../types';

export const resourcesData: Resource[] = [
    {
        id: 'res-1',
        title: 'NeetCode 150',
        description: 'A curated list of 150 LeetCode questions categorized by pattern and data structure, with detailed video explanations for every single problem.',
        whyUseful: 'It is the gold standard for DSA preparation. Instead of doing random LeetCode problems, this teaches you the underlying patterns (Sliding Window, Two Pointers, etc.) needed to pass technical interviews.',
        difficulty: 'All Levels',
        category: 'DSA & Coding',
        url: 'https://neetcode.io/practice'
    },
    {
        id: 'res-2',
        title: 'Designing Data-Intensive Applications',
        description: 'A book by Martin Kleppmann that explores the principles of designing scalable, reliable, and maintainable backend systems.',
        whyUseful: 'This is the holy grail for System Design interviews. It covers databases, replication, partitioning, and distributed systems in incredible depth without tying you to a specific vendor.',
        difficulty: 'Advanced',
        category: 'System Design',
        url: 'https://dataintensive.net/'
    },
    {
        id: 'res-3',
        title: 'Indiabix Aptitude',
        description: 'A massive online repository of quantitative aptitude, logical reasoning, and verbal ability questions.',
        whyUseful: 'Almost every mass recruiter (TCS, Infosys, Wipro, Cognizant) directly lifts questions from this website for their online assessments.',
        difficulty: 'Beginner',
        category: 'Aptitude & Reasoning',
        url: 'https://www.indiabix.com/'
    },
    {
        id: 'res-4',
        title: 'System Design Interview – An Insider\'s Guide',
        description: 'A book by Alex Xu that provides a step-by-step framework for tackling system design questions, complete with real-world examples like designing YouTube or a URL shortener.',
        whyUseful: 'It provides a highly structured, repeatable framework that interviewers love. It bridges the gap between theory and actual 45-minute whiteboard interviews.',
        difficulty: 'Intermediate',
        category: 'System Design',
        url: 'https://bytebytego.com/'
    },
    {
        id: 'res-5',
        title: 'STAR Method Framework',
        description: 'A structured manner of responding to a behavioral-based interview question by discussing the specific Situation, Task, Action, and Result of the situation you are describing.',
        whyUseful: 'Amazon and other top tech companies explicitly require candidates to use this format during Leadership Principle interviews. It prevents rambling and ensures you hit all key evaluation points.',
        difficulty: 'All Levels',
        category: 'Behavioral & HR',
        url: 'https://www.themuse.com/advice/star-interview-method'
    }
];
