export interface AptitudeQuestion {
  id: string;
  chapterId: string;
  qNumber: number;
  question: string;
  companies: string[];
  options?: string[];
  correctAnswer?: string;
  formula?: string;
  solution?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface AptitudeChapter {
  id: string;
  chapterNumber: number;
  title: string;
  icon: string;
  badge: string;
  description: string;
  formulas: { title: string; formula: string; tip: string }[];
  questions: AptitudeQuestion[];
}

import { chaptersPart1 } from './aptitude/part1';
import { chaptersPart2 } from './aptitude/part2';
import { chaptersPart3 } from './aptitude/part3';

export const aptitudeChapters: AptitudeChapter[] = [
  ...chaptersPart1,
  ...chaptersPart2,
  ...chaptersPart3
];
