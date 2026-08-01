export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type QuestionStatus = 'Solved' | 'Attempted' | 'Unsolved';

export type DsaQuestion = {
  id: number; slug: string; title: string; difficulty: Difficulty; category: string;
  tags: string[]; companies: string[]; acceptance: string; leetcodeUrl: string;
  status: QuestionStatus; bookmarked: boolean; notes?: string; timeComplexity: string;
  spaceComplexity: string; description: string; examples: { input: string; output: string; explanation: string }[];
  constraints: string[]; hints: string[];
};

export type PracticeQuestion = { id: number; question: string; difficulty: Difficulty; options: string[]; answer: number; explanation: string };
export type LearningCategory = { slug: string; title: string; icon: string; theory: string; concepts: string[]; formulas: string[]; examples: string[]; questions: PracticeQuestion[] };
export type Company = { id: string; name: string; initials: string; sector: string; hiring: boolean; difficulty: 'High' | 'Very high' | 'Moderate'; ctc: string; pattern: string; color: string };
