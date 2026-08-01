import type { HRQuestion } from '../types';

export const hrQuestions: HRQuestion[] = [
    {
        id: 'hr-1',
        question: 'Tell me about yourself.',
        purpose: 'To break the ice and get a high-level overview of your professional background, skills, and current career trajectory.',
        evaluates: ['Communication skills', 'Ability to summarize concisely', 'Professional confidence', 'Relevance of background to the role'],
        howToAnswer: 'Use the Present-Past-Future formula. Start with what you are doing now, touch on past experiences/projects that built your skills, and finish with what you are looking forward to doing next (which should align with the role).',
        commonMistakes: ['Rambling for too long (over 2 minutes)', 'Reciting your resume line-by-line', 'Sharing overly personal information'],
        exampleAnswer: 'I am currently a final-year CS student with a strong interest in backend engineering. Over the past year, I built a microservices-based e-commerce platform using Node.js and Docker, which handles 10,000 concurrent requests. Before that, I interned at XYZ Tech where I optimized database queries, reducing load times by 30%. I’m now looking to bring my backend optimization skills to a full-time role at [Company Name].',
        tips: ['Keep it strictly under 2 minutes.', 'Highlight quantifiable achievements.', 'Tailor the "Future" part specifically to the company you are interviewing with.']
    },
    {
        id: 'hr-2',
        question: 'Why should we hire you?',
        purpose: 'To see if you understand the core requirements of the job and can confidently pitch your value proposition.',
        evaluates: ['Self-awareness', 'Understanding of the role', 'Confidence', 'Value alignment'],
        howToAnswer: 'Identify 2-3 key requirements from the job description and match them directly with your strongest skills or past projects. Provide evidence for each.',
        commonMistakes: ['Giving generic answers like "I am a hard worker"', 'Sounding arrogant', 'Listing skills without proof'],
        exampleAnswer: 'You should hire me because my technical stack perfectly aligns with your requirements. You are looking for someone strong in React and TypeScript, and I just spent the last 6 months building a production-ready dashboard using exactly those technologies. Additionally, my experience leading a 4-person college team taught me how to collaborate effectively under tight deadlines.',
        tips: ['Use the phrase "Based on the job description..."', 'Focus on what you can do for them, not what they can do for you.']
    },
    {
        id: 'hr-3',
        question: 'Tell me about a time you faced a significant challenge and how you overcame it.',
        purpose: 'To assess your problem-solving skills, resilience, and behavior under pressure.',
        evaluates: ['Resilience', 'Analytical thinking', 'Emotional intelligence', 'Action-oriented mindset'],
        howToAnswer: 'Use the STAR method (Situation, Task, Action, Result). Spend 20% of your time on the Situation/Task, 60% on the Action (what YOU specifically did), and 20% on the positive Result.',
        commonMistakes: ['Blaming others for the problem', 'Focusing too much on the problem and not the solution', 'Using "we" instead of "I" when describing the action'],
        exampleAnswer: '(Situation) During my final year project, our database kept crashing under simulated load two days before the deadline. (Task) I needed to find the bottleneck and fix it immediately without rewriting the entire backend. (Action) I analyzed the query logs and found that a specific API endpoint was making N+1 queries. I refactored the ORM queries to use eager loading and added Redis caching. (Result) The load time dropped from 5 seconds to 200ms, and the database stabilized. We received an A grade on the project.',
        tips: ['Choose a real, technical challenge if possible.', 'Always end on a positive, quantifiable result.', 'Show ownership of the solution.']
    },
    {
        id: 'hr-4',
        question: 'What is your biggest weakness?',
        purpose: 'To test your self-awareness, honesty, and commitment to personal growth.',
        evaluates: ['Self-awareness', 'Honesty', 'Proactivity'],
        howToAnswer: 'Choose a real, but non-fatal weakness (something that doesn\'t disqualify you from the job). Immediately follow it up with the specific, actionable steps you are taking to improve it.',
        commonMistakes: ['Saying "I am a perfectionist" (cliché)', 'Saying "I work too hard" (fake weakness)', 'Revealing a fatal flaw (e.g., "I hate coding")'],
        exampleAnswer: 'Historically, I have struggled with public speaking, especially presenting technical concepts to large groups. I used to get very nervous. However, to overcome this, I recently joined my college\'s debate club and started volunteering to give weekly status updates in my project group. While I still get a bit nervous, my confidence has significantly improved.',
        tips: ['The "Action" you took to improve is the most important part of the answer.', 'Avoid personality traits; focus on professional skills that can be learned.']
    },
    {
        id: 'hr-5',
        question: 'Where do you see yourself in 5 years?',
        purpose: 'To gauge your ambition, career alignment, and whether you plan to stay with the company long-term.',
        evaluates: ['Ambition', 'Loyalty', 'Career planning', 'Alignment with company goals'],
        howToAnswer: 'Focus on growth in your skills and responsibilities. Express a desire to become an expert in your field and eventually take on leadership or mentorship roles within the company.',
        commonMistakes: ['Saying "In your job"', 'Saying you want to start your own company (shows you will leave)', 'Having no idea'],
        exampleAnswer: 'In five years, I see myself as a Senior Software Engineer. I want to have developed a deep expertise in distributed systems and cloud architecture. I also hope to be in a position where I can mentor junior developers and lead technical initiatives, hopefully continuing to grow right here at [Company Name].',
        tips: ['Focus on the value you will bring to the company in 5 years.', 'Keep it realistic and relevant to the track you are interviewing for.']
    },
    {
        id: 'hr-6',
        question: 'Describe a time you made a mistake or failed at something.',
        purpose: 'To evaluate your accountability, how you handle failure, and your ability to learn from mistakes.',
        evaluates: ['Accountability', 'Growth mindset', 'Resilience'],
        howToAnswer: 'Use the STAR method, but focus heavily on the "Result/Learning" phase. Admit the mistake clearly without making excuses, explain how you fixed it, and detail the preventative measures you put in place.',
        commonMistakes: ['Saying you have never failed', 'Blaming a coworker', 'Picking a failure you didn\'t fix'],
        exampleAnswer: '(Situation/Task) In my previous internship, I was tasked with deploying a minor CSS update to the production server. (Action) I bypassed the standard testing protocol because it was just a "small change". Unfortunately, a missing semicolon broke the layout for mobile users. (Result) As soon as I realized, I immediately rolled back the deployment, notified my manager, and fixed the bug. More importantly, I wrote a pre-commit hook script that automatically runs a linter before any push, ensuring no one (including me) could make that mistake again.',
        tips: ['The preventative measure you took is the most crucial part of this answer.']
    },
    {
        id: 'hr-7',
        question: 'How do you handle conflict with a coworker or team member?',
        purpose: 'To see if you possess emotional intelligence and can resolve disputes professionally without management intervention.',
        evaluates: ['Emotional intelligence', 'Communication', 'Empathy', 'Professionalism'],
        howToAnswer: 'Describe a specific disagreement (preferably technical, not personal). Explain how you initiated a private conversation, listened to their perspective, and found a compromise or data-driven solution.',
        commonMistakes: ['Saying you avoid conflict entirely', 'Tattling to the manager immediately', 'Winning the argument aggressively'],
        exampleAnswer: 'During a recent group project, a teammate and I disagreed on whether to use MongoDB or PostgreSQL. (Action) Instead of arguing in the group chat, I asked him to hop on a quick call. I listened to his points about MongoDB\'s flexibility, and then shared my concerns about our relational data structure. We decided to create a quick pros/cons matrix based on our specific project needs. (Result) We ultimately agreed PostgreSQL was objectively better for our schema, and because we resolved it collaboratively, our working relationship actually grew stronger.',
        tips: ['Show that you prioritize the project\'s success over being "right".']
    },
    {
        id: 'hr-8',
        question: 'What is your greatest professional achievement?',
        purpose: 'To understand what you consider valuable and to see the scale of impact you are capable of.',
        evaluates: ['Impact', 'Values', 'Drive'],
        howToAnswer: 'Use the STAR method to describe a project where you went above and beyond. Quantify the results (e.g., saved time, increased revenue, improved performance).',
        commonMistakes: ['Rambling without getting to the result', 'Choosing an achievement unrelated to the job', 'Exaggerating'],
        exampleAnswer: 'My greatest achievement was during my summer internship where I was asked to look into the slow loading times of our internal dashboard. I took the initiative to audit the entire frontend. I found that we were loading massive uncompressed images and making redundant API calls. I implemented lazy loading and implemented a caching layer. The dashboard load time decreased from 8 seconds to 1.5 seconds, which saved the 50-person sales team hours of waiting time every week. The CTO even gave me a shoutout in the all-hands meeting.',
        tips: ['Use numbers! Percentages, time saved, and user counts make your achievement tangible.']
    },
    {
        id: 'hr-9',
        question: 'Why do you want to leave your current role? (Or: Why did you choose this career path?)',
        purpose: 'To ensure you are running *towards* an opportunity, not running *away* from a bad situation.',
        evaluates: ['Professionalism', 'Career motivation', 'Positivity'],
        howToAnswer: 'Keep it positive. Focus on what you want to gain (new challenges, different tech stack, more responsibility) rather than complaining about your past/current situation.',
        commonMistakes: ['Badmouthing your previous boss or company', 'Saying you want more money (even if true, frame it around career growth)', 'Sounding desperate'],
        exampleAnswer: 'I have learned a tremendous amount at my current company, particularly regarding agile development. However, I am now looking for an opportunity to work on consumer-facing products at a much larger scale. Your company’s recent launch of [Product Name] really excited me, and I want to bring my backend skills to a team that is building products for millions of users.',
        tips: ['Never speak negatively about past employers.']
    },
    {
        id: 'hr-10',
        question: 'Do you have any questions for us?',
        purpose: 'To see if you are genuinely interested in the role and have done your research.',
        evaluates: ['Curiosity', 'Preparation', 'Engagement'],
        howToAnswer: 'Always ask 2-3 thoughtful questions. Ask about the day-to-day work, the team culture, or a specific technical challenge the company is facing.',
        commonMistakes: ['Saying "No, I have no questions"', 'Asking about salary/vacation time in the first round', 'Asking a question easily answered on their homepage'],
        exampleAnswer: 'Yes, I do! Could you tell me more about the engineering team’s onboarding process for new grads? Also, I read about your recent migration to AWS—what has been the biggest technical challenge your specific team has faced during that transition?',
        tips: ['Asking good questions shows you are interviewing them just as much as they are interviewing you.']
    },
    {
        id: 'hr-11',
        question: 'How do you handle tight deadlines and immense pressure?',
        purpose: 'To evaluate your time management, stress management, and prioritization skills.',
        evaluates: ['Prioritization', 'Stress management', 'Communication'],
        howToAnswer: 'Discuss a specific method you use (like breaking tasks into smaller chunks or the Eisenhower Matrix). Provide a brief example where you successfully delivered under pressure by communicating early and prioritizing ruthlessly.',
        commonMistakes: ['Saying you just work 24/7 (burnout risk)', 'Saying you never feel pressure'],
        exampleAnswer: 'I handle pressure by immediately breaking the project into smaller, manageable tasks and ruthlessly prioritizing the core requirements (the MVP). In my last project, our deadline was unexpectedly moved up by a week. I immediately called a quick team meeting, cut two non-essential features, and focused entirely on stabilizing the core API. We met the deadline without burning out.',
        tips: ['Focus on process and communication over just working harder.']
    },
    {
        id: 'hr-12',
        question: 'What is your preferred management style?',
        purpose: 'To check if you are a culture fit for the team\'s current manager and operational style.',
        evaluates: ['Self-awareness', 'Culture fit', 'Independence'],
        howToAnswer: 'Strike a balance. Show that you are self-directed and autonomous, but also appreciate a manager who provides clear goals, regular feedback, and removes roadblocks.',
        commonMistakes: ['Saying you want to be completely left alone', 'Saying you need constant supervision'],
        exampleAnswer: 'I thrive under a manager who provides clear goals and the autonomy to figure out the "how." I appreciate regular 1-on-1s for feedback and course correction, but I don’t need to be micromanaged on a daily basis. A servant-leader who helps remove roadblocks is my ideal.',
        tips: ['Show that you are independent but coachable.']
    },
    {
        id: 'hr-13',
        question: 'Tell me about a time you had to learn a new technology quickly.',
        purpose: 'To assess your adaptability, learning speed, and self-directed learning methods.',
        evaluates: ['Adaptability', 'Learning agility', 'Resourcefulness'],
        howToAnswer: 'Use STAR. Mention the specific strategy you used (reading docs, building a quick prototype, watching tutorials) and the successful outcome.',
        commonMistakes: ['Saying it was easy and you just knew it', 'Focusing only on the tech, not your learning process'],
        exampleAnswer: 'During a hackathon, our team decided to build a mobile app, but I only knew React web, not React Native. I spent the first 2 hours reading the official docs and building a "Hello World" with navigation. By comparing it to my existing React knowledge, I quickly grasped the differences. We had a functioning prototype within 24 hours and won 2nd place.',
        tips: ['Explain your actual methodology for learning.']
    },
    {
        id: 'hr-14',
        question: 'What are you most proud of in your career/studies so far?',
        purpose: 'To see what motivates you and what you consider a high standard of work.',
        evaluates: ['Values', 'Pride in work', 'Motivation'],
        howToAnswer: 'Choose an achievement that required significant effort, collaboration, or overcoming a major hurdle. Quantify the impact.',
        commonMistakes: ['Listing a basic requirement (e.g., graduating)', 'Bragging without substance'],
        exampleAnswer: 'I am most proud of leading a team of 4 to win the national Smart India Hackathon. It wasn’t just the technical challenge of building the AI model, but the fact that our team almost fell apart due to conflicting ideas. I mediated the conflict, realigned everyone on a single vision, and we coded for 36 hours straight. Seeing our product work on stage was incredibly fulfilling.',
        tips: ['Pick something that had a real impact.']
    },
    {
        id: 'hr-15',
        question: 'How do you stay updated with the latest technologies?',
        purpose: 'To see if you have a genuine passion for tech and are a lifelong learner.',
        evaluates: ['Passion', 'Proactivity', 'Curiosity'],
        howToAnswer: 'List 2-3 specific sources (e.g., Hacker News, specific newsletters, GitHub trending, tech podcasts, conferences). Mention a recent thing you learned.',
        commonMistakes: ['Saying you just learn whatever is assigned at work', 'Listing generic things without proof'],
        exampleAnswer: 'I check Hacker News daily and subscribe to newsletters like ByteByteGo and the React newsletter. I also like to build small weekend projects when a new paradigm drops. For example, when Next.js introduced App Router, I spent a weekend migrating my personal portfolio to understand Server Components practically.',
        tips: ['Give concrete examples of things you recently learned.']
    },
    {
        id: 'hr-16',
        question: 'Tell me about a time you disagreed with a decision made by a manager or senior.',
        purpose: 'To test your communication skills, respect for authority, and willingness to speak up for what is right.',
        evaluates: ['Communication', 'Courage', 'Professionalism'],
        howToAnswer: 'Show that you respectfully voiced your concern using data/logic, but ultimately committed to the final decision if management overruled you (Disagree and Commit).',
        commonMistakes: ['Saying you never disagree', 'Saying you went behind their back to do it your way anyway'],
        exampleAnswer: 'My lead wanted to stick with a monolithic architecture for a new feature to save time. I disagreed, knowing it would cause scaling issues in 6 months. I gathered data on projected user growth and presented a quick proposal for a microservice approach. He reviewed the data but decided the immediate deadline was more critical. I respected the decision and committed 100% to building the monolith as flawlessly as possible.',
        tips: ['Emphasize the "disagree and commit" philosophy.']
    },
    {
        id: 'hr-17',
        question: 'What kind of work environment do you do your best work in?',
        purpose: 'To ensure you won’t be miserable (and thus quit early) in their specific company culture.',
        evaluates: ['Culture fit', 'Self-awareness'],
        howToAnswer: 'Align your answer with the company’s known culture (e.g., fast-paced startup vs. structured enterprise), but remain authentic.',
        commonMistakes: ['Describing an environment that is the exact opposite of the company you are interviewing with'],
        exampleAnswer: 'I thrive in collaborative, fast-paced environments where team members aren’t afraid to brainstorm and challenge each other’s ideas respectfully. I do my best work when there is a culture of continuous learning and a shared drive to ship high-quality products.',
        tips: ['Research the company culture beforehand to align your answer.']
    },
    {
        id: 'hr-18',
        question: 'Describe a time you had to explain a complex technical concept to a non-technical person.',
        purpose: 'To assess your communication skills, empathy, and ability to simplify without being condescending.',
        evaluates: ['Communication', 'Empathy', 'Clarity'],
        howToAnswer: 'Describe the situation, the analogy or simple language you used, and the positive outcome (they understood and made a good decision).',
        commonMistakes: ['Saying it’s impossible to explain tech to non-tech people', 'Using jargon in your explanation'],
        exampleAnswer: 'Our marketing team couldn’t understand why adding a seemingly simple feature would take two weeks. Instead of explaining database migrations, I used an analogy: I told them the current system was like a tightly packed suitcase. Adding one more shirt (the feature) meant we had to unpack the whole suitcase, reorganize it, and pack it again carefully so the zipper wouldn’t break. They immediately understood the effort involved.',
        tips: ['Use an analogy to explain complex tech concepts.']
    },
    {
        id: 'hr-19',
        question: 'What is your expected salary?',
        purpose: 'To see if your expectations align with their budget.',
        evaluates: ['Negotiation skills', 'Market awareness'],
        howToAnswer: 'Ideally, defer the question until you have an offer. If pressed, provide a well-researched range based on the market rate for the role and location, emphasizing that you are open to negotiation based on total compensation.',
        commonMistakes: ['Giving a specific, single number that is too low or too high', 'Saying "Whatever you want to pay me"'],
        exampleAnswer: 'Right now, my primary focus is finding a position where I can grow and add significant value. However, based on my research for a software engineer role with my experience level in this city, I’m looking at a range of $X to $Y. I am certainly flexible and open to discussing the entire compensation package.',
        tips: ['Always provide a range, not a single number.']
    },
    {
        id: 'hr-20',
        question: 'Tell me about a time you went above and beyond your standard duties.',
        purpose: 'To see if you take initiative and care about the team’s success, not just your own paycheck.',
        evaluates: ['Initiative', 'Work ethic', 'Team player mindset'],
        howToAnswer: 'Share a story where you saw a problem outside your direct responsibilities and fixed it, helping the broader team.',
        commonMistakes: ['Describing something that is actually just doing your basic job', 'Exaggerating'],
        exampleAnswer: 'During my internship, my main task was writing unit tests. However, I noticed that the onboarding documentation for new devs was completely outdated, causing everyone to waste their first 3 days setting up their local environment. I took it upon myself to completely rewrite the README and created a Docker compose file that automated the setup. It cut onboarding time from 3 days to 2 hours for all future hires.',
        tips: ['Show that you care about the team’s success, not just your own metrics.']
    }
];
