import type { Company, LearningCategory, PracticeQuestion } from './types';

const makeQuestions = (topic: string, count: number): PracticeQuestion[] => Array.from({ length: count }, (_, i) => ({
  id: i + 1, question: `${topic}: practice problem ${i + 1}`, difficulty: i % 7 === 0 ? 'Hard' : i % 3 === 0 ? 'Medium' : 'Easy',
  options: ['12', '18', '24', 'Cannot be determined'], answer: i % 4, explanation: `Use the core ${topic.toLowerCase()} principle, simplify the given information, then verify the result.`
}));

const makeCategories = (items: string[], perCategory: number, prefix: string): LearningCategory[] => items.map((title, i) => ({
  slug: `${prefix}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  title, icon: ['◌', '◇', '◈', '△'][i % 4],
  theory: `${title} is a high-leverage topic for placement tests. Build fluency with the underlying model before working against the clock.`,
  concepts: ['Core definitions', 'Fast elimination', 'Pattern recognition', 'Timed strategy'],
  formulas: [`${title} quick rule: identify known values first`, 'Answer = required value / relevant unit'],
  examples: [`A worked ${title.toLowerCase()} example with a clean, repeatable approach.`], questions: makeQuestions(title, perCategory)
}));

export const aptitudeCategories = makeCategories(['Number System', 'Percentage', 'Profit and Loss', 'Simple Interest', 'Compound Interest', 'Ratio', 'Average', 'Time and Work', 'Pipes and Cistern', 'Boats and Streams', 'Probability', 'Permutation', 'Combination', 'Calendar', 'Clock', 'Age', 'Partnership', 'Mixture', 'Allegation', 'Speed Time Distance', 'HCF', 'LCM', 'Data Interpretation', 'Series', 'Simplification'], 8, 'aptitude');
export const reasoningCategories = makeCategories(['Blood Relation', 'Coding Decoding', 'Seating Arrangement', 'Direction Sense', 'Puzzle', 'Syllogism', 'Statement and Assumption', 'Statement and Conclusion', 'Ranking', 'Mirror Image', 'Water Image', 'Paper Folding', 'Alphabet Series', 'Number Series'], 11, 'reasoning');
export const mcqTopics = makeCategories(['Operating System', 'DBMS', 'Computer Networks', 'OOP', 'SQL', 'Python', 'Java', 'C++', 'JavaScript', 'Linux', 'Git', 'Docker', 'Kubernetes', 'Cloud', 'AI', 'Machine Learning', 'Deep Learning', 'NLP', 'LLM', 'RAG', 'Prompt Engineering', 'System Design'], 12, 'mcq');

const companyNames = ['Google','Amazon','Microsoft','Meta','Apple','Netflix','Uber','Adobe','NVIDIA','Salesforce','Oracle','LinkedIn','Atlassian','Stripe','Airbnb','Databricks','Snowflake','Coinbase','Bloomberg','Intel','AMD','Cisco','Qualcomm','Goldman Sachs','JP Morgan','Morgan Stanley','American Express','Visa','Mastercard','Samsung','Flipkart','PhonePe','Razorpay','Meesho','Swiggy','Zomato','CRED','Groww','Myntra','Ola','Zoho','Freshworks','TCS','Infosys','Wipro','Accenture','Capgemini','Cognizant','IBM','Deloitte'];
const tones = ['from-blue-500 to-cyan-400','from-orange-500 to-amber-400','from-violet-600 to-fuchsia-500','from-sky-500 to-blue-700','from-slate-700 to-slate-400'];
export const placementCompanies: Company[] = companyNames.map((name, i) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'), name, initials: name.split(' ').map(x => x[0]).join('').slice(0, 2), sector: i < 23 ? 'Technology' : i < 30 ? 'Financial services' : 'Enterprise & consumer', hiring: i % 5 !== 0, difficulty: i % 4 === 0 ? 'Very high' : i % 3 === 0 ? 'Moderate' : 'High', ctc: i < 23 ? '₹28–65 LPA' : '₹8–28 LPA', pattern: 'OA · DSA · system & behavioral', color: tones[i % tones.length] }));
