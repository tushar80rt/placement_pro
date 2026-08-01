export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type QuestionStatus = 'Solved' | 'Attempted' | 'Unsolved';

export type DsaQuestion = {
  id: string;
  title: string;
  difficulty: Difficulty;
  category: string;
  tags: string[];
  companies: string[];
  acceptance: string;
  leetcodeUrl: string;
  timeComplexity: string;
  spaceComplexity: string;
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
  hints: string[];
  pattern?: string;
  explanation?: string;
  relatedQuestions?: string[];
};

export type MCQ = {
  id: string;
  question: string;
  difficulty: Difficulty;
  topic: string;
  options: string[];
  answer: number;
  explanation: string;
  shortcut?: string;
};

export type HRQuestion = {
  id: string;
  question: string;
  purpose: string;
  evaluates: string[];
  howToAnswer: string;
  commonMistakes: string[];
  exampleAnswer: string;
  tips: string[];
};

export type ResumeTip = {
  id: string;
  title: string;
  category: string;
  content: string;
  examples: { bad: string; good: string }[];
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  whyUseful: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  category: string;
  url: string;
};

export type Company = {
  id: string;
  name: string;
  initials: string;
  sector: string;
  hiring: boolean;
  difficulty: 'High' | 'Very high' | 'Moderate';
  ctc: string;
  pattern: string;
  color: string;
  logo: string;
  generalStrategy: string;
  interviewQuestions: { round: string; question: string; advice: string }[];
};

// Kept for legacy component compatibility, though questions will be replaced
export type PracticeQuestion = { id: string | number; question: string; difficulty: Difficulty; options: string[]; answer: number; explanation: string; topic?: string };
export type LearningCategory = { slug: string; title: string; icon: string; theory: string; concepts: string[]; formulas: string[]; examples: string[]; questions: PracticeQuestion[] };
