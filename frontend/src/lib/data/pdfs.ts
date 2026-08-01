export type PdfResource = {
    id: string;
    title: string;
    description: string;
    category: string;
    url: string;
    size: string;
    pages: number;
};

export const pdfResources: PdfResource[] = [
    {
        id: 'pdf-1',
        title: 'Tech Interview Handbook Guide',
        description: 'A comprehensive guide to cracking software engineering interviews, including resume tips, algorithm cheat sheets, and behavioral questions.',
        category: 'Comprehensive',
        url: 'https://www.techinterviewhandbook.org/',
        size: '2.4 MB',
        pages: 85
    },
    {
        id: 'pdf-2',
        title: 'System Design Interview Cheatsheet',
        description: 'A quick-reference guide for system design interviews covering load balancers, caching strategies, databases, and microservices.',
        category: 'System Design',
        url: 'https://github.com/donnemartin/system-design-primer',
        size: '1.1 MB',
        pages: 15
    },
    {
        id: 'pdf-3',
        title: 'Behavioral Interview STAR Framework',
        description: 'A structured worksheet and guide for preparing your best stories using the Situation, Task, Action, Result framework.',
        category: 'Behavioral',
        url: 'https://www.themuse.com/advice/star-interview-method',
        size: '0.8 MB',
        pages: 5
    },
    {
        id: 'pdf-4',
        title: 'Data Structures & Algorithms Basics',
        description: 'A concise PDF covering Big-O notation, arrays, linked lists, trees, graphs, and dynamic programming fundamentals.',
        category: 'DSA',
        url: 'https://www.bigocheatsheet.com/',
        size: '1.5 MB',
        pages: 20
    }
];
