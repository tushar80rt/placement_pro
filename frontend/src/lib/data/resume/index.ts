import type { ResumeTip } from '../types';

export const resumeTips: ResumeTip[] = [
    {
        id: 'res-1',
        title: 'Optimize for Applicant Tracking Systems (ATS)',
        category: 'Formatting',
        content: 'Most large companies use ATS software to scan resumes before a human ever sees them. To ensure your resume passes the ATS scan, use a clean, single-column format without complex tables, graphics, or unconventional fonts. Save your resume as a standard PDF. Ensure you include exact keywords from the job description.',
        examples: [
            { bad: 'Using a Canva template with heavy graphics, two columns, and a photo.', good: 'Using a clean, text-based LaTeX or Word template (e.g., Jake\'s Resume template).' }
        ]
    },
    {
        id: 'res-2',
        title: 'Use the XYZ Formula for Bullet Points',
        category: 'Content',
        content: 'Google recruiters recommend the XYZ formula: "Accomplished [X] as measured by [Y], by doing [Z]." Every bullet point should start with a strong action verb, describe the specific action you took, and end with a quantifiable result or metric.',
        examples: [
            { bad: 'Fixed bugs in the backend database to make it faster.', good: 'Reduced database query latency by 40% (Accomplished X/Y) by refactoring N+1 queries in Django ORM and implementing Redis caching (By doing Z).' }
        ]
    },
    {
        id: 'res-3',
        title: 'Start with Strong Action Verbs',
        category: 'Language',
        content: 'Avoid weak phrases like "Helped with," "Responsible for," or "Worked on." Instead, start every bullet point with a powerful action verb that conveys leadership, technical execution, or problem-solving.',
        examples: [
            { bad: 'Responsible for building the user login page.', good: 'Engineered a secure OAuth 2.0 authentication flow using React and Node.js.' },
            { bad: 'Worked with a team to make an app.', good: 'Spearheaded a 4-person agile team to develop a cross-platform Flutter application.' }
        ]
    },
    {
        id: 'res-4',
        title: 'Prioritize Projects over Coursework',
        category: 'Structure',
        content: 'For freshers, personal or open-source projects are the strongest indicator of your coding ability. Put your "Projects" section near the top (right after Education or Skills). Include links to the live project and the GitHub repository.',
        examples: [
            { bad: 'Listing "Data Structures 101" and "Intro to Java" as your main achievements.', good: 'Showcasing a full-stack e-commerce clone with a live Vercel link and a GitHub repo containing a detailed README.' }
        ]
    },
    {
        id: 'res-5',
        title: 'Keep it to One Page',
        category: 'Formatting',
        content: 'As a student or recent graduate, your resume should absolutely never exceed one page. Recruiters spend an average of 6-7 seconds scanning a resume. Be concise, remove outdated high school achievements, and only include the most impactful information.',
        examples: [
            { bad: 'A 2-page resume detailing every high school debate tournament and unrelated hobby.', good: 'A dense, 1-page resume focusing strictly on college projects, internships, and technical skills.' }
        ]
    }
];
