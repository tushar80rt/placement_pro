import type { MCQ } from '../types';

export const reasoningQuestions: MCQ[] = [
    {
        id: 'rea-1',
        topic: 'Blood Relation',
        difficulty: 'Medium',
        question: 'Pointing to a photograph of a boy Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
        options: ['Brother', 'Uncle', 'Cousin', 'Father'],
        answer: 3,
        explanation: 'The boy in the photograph is the only son of the son of Suresh\'s mother i.e., the son of Suresh. Hence, Suresh is the father of boy.'
    },
    {
        id: 'rea-2',
        topic: 'Syllogism',
        difficulty: 'Hard',
        question: 'Statements: All branches are flowers. All flowers are leaves. \nConclusions: \nI. All branches are leaves. \nII. All leaves are branches. \nIII. All flowers are branches. \nIV. Some leaves are branches.',
        options: ['None follows', 'Only I and IV follow', 'Only II and III follow', 'All follow'],
        answer: 1,
        explanation: 'Since all branches are flowers and all flowers are leaves, it means all branches are leaves (Conclusion I is true). Also, if all branches are leaves, then some leaves are definitely branches (Conclusion IV is true). Conclusions II and III do not necessarily follow.',
        shortcut: 'Draw a Venn diagram. Branches circle is inside Flowers circle, which is inside Leaves circle.'
    },
    {
        id: 'rea-3',
        topic: 'Direction Sense',
        difficulty: 'Medium',
        question: 'A man walks 5 km toward south and then turns to the right. After walking 3 km he turns to the left and walks 5 km. Now in which direction is he from the starting place?',
        options: ['West', 'South', 'North-East', 'South-West'],
        answer: 3,
        explanation: 'The man walks South (5km), turns right (West) and walks 3km, then turns left (South) and walks 5km. His final position is South and West of his starting position. Therefore, he is in the South-West direction.'
    },
    {
        id: 'rea-4',
        topic: 'Coding Decoding',
        difficulty: 'Medium',
        question: 'If in a certain language, MADRAS is coded as NBESBT, how is BOMBAY coded in that code?',
        options: ['CPNCBX', 'CPNCBZ', 'CPOCBZ', 'CQOCBZ'],
        answer: 1,
        explanation: 'Each letter in the word is moved one step forward to obtain the corresponding letter of the code. M->N, A->B, D->E, R->S, A->B, S->T. Following this, BOMBAY becomes CPNCBZ.'
    },
    {
        id: 'rea-5',
        topic: 'Seating Arrangement',
        difficulty: 'Hard',
        question: 'A, B, C, D and E are sitting on a bench. A is sitting next to B, C is sitting next to D, D is not sitting with E who is on the left end of the bench. C is on the second position from the right. A is to the right of B and E. A and C are sitting together. In which position A is sitting?',
        options: ['Between B and D', 'Between B and C', 'Between E and D', 'Between C and E'],
        answer: 1,
        explanation: '1. E is on the left end: E _ _ _ _ \n2. C is second from right: E _ _ C _ \n3. C is next to D: D could be at end or middle. Since D is not with E, the arrangement is E _ A C D or E B A C D. \n4. A is next to B and C: E B A C D. \nTherefore, A is sitting between B and C.'
    },
    {
        id: 'rea-6',
        topic: 'Series Completion',
        difficulty: 'Medium',
        question: 'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?',
        options: ['(1/3)', '(1/8)', '(2/8)', '(1/16)'],
        answer: 1,
        explanation: 'This is a simple alternating division sequence. Each number is one-half of the previous number. So, (1/4) divided by 2 is (1/8).'
    },
    {
        id: 'rea-7',
        topic: 'Analogy',
        difficulty: 'Easy',
        question: 'Odometer is to mileage as compass is to:',
        options: ['Speed', 'Hiking', 'Needle', 'Direction'],
        answer: 3,
        explanation: 'An odometer is an instrument used to measure mileage. A compass is an instrument used to determine direction.'
    },
    {
        id: 'rea-8',
        topic: 'Logical Deduction',
        difficulty: 'Hard',
        question: 'Fact 1: All dogs like to run. Fact 2: Some dogs like to swim. Fact 3: Some dogs look like their masters. If the first three statements are facts, which of the following statements must also be a fact?\nI. All dogs who like to swim look like their masters.\nII. Dogs who like to swim also like to run.\nIII. Dogs who like to run do not look like their masters.',
        options: ['I only', 'II only', 'II and III', 'None of the statements is a known fact'],
        answer: 1,
        explanation: 'Since all dogs like to run (Fact 1), any dog that likes to swim (Fact 2) must also be a dog that likes to run. Therefore, statement II is a fact. Statements I and III cannot be logically deduced from the given facts.'
    },
    {
        id: 'rea-9',
        topic: 'Data Sufficiency',
        difficulty: 'Hard',
        question: 'Question: What is the code for "sky" in the code language?\nStatements:\n1. In the code language, "sky is clear" is written as "de ra fa".\n2. In the same code language, "make it clear" is written as "de ga jo".',
        options: ['Statement 1 ALONE is sufficient', 'Statement 2 ALONE is sufficient', 'BOTH statements TOGETHER are sufficient', 'Statements 1 and 2 TOGETHER are NOT sufficient'],
        answer: 3,
        explanation: 'From statements 1 and 2, the common word is "clear" and the common code is "de". So, "clear" = "de". In statement 1, "sky is" = "ra fa". Since we don\'t have another statement containing "sky", we cannot definitively find its exact code (it could be "ra" or "fa").'
    },
    {
        id: 'rea-10',
        topic: 'Venn Diagrams',
        difficulty: 'Medium',
        question: 'Which of the following diagrams indicates the best relation between Travelers, Train, and Bus?',
        options: ['One large circle containing two smaller non-intersecting circles', 'Three mutually intersecting circles', 'One circle intersecting two other non-intersecting circles', 'Three non-intersecting circles'],
        answer: 2,
        explanation: 'Train and Bus are completely different modes of transport (two non-intersecting circles). However, Travelers can travel by Train or by Bus. Thus, the Travelers circle intersects with both the Train circle and the Bus circle.'
    },
    {
        id: 'rea-11',
        topic: 'Clock and Calendar',
        difficulty: 'Hard',
        question: 'What is the angle between the hour hand and the minute hand of a clock when the time is 3:40?',
        options: ['120 degrees', '125 degrees', '130 degrees', '135 degrees'],
        answer: 2,
        explanation: 'Angle = |(30 * H) - (11/2 * M)|. Here H = 3, M = 40. Angle = |30*3 - (11/2)*40| = |90 - 220| = |-130| = 130 degrees.'
    },
    {
        id: 'rea-12',
        topic: 'Inequalities',
        difficulty: 'Medium',
        question: 'Statements: P < Q = R ≥ S > T\nConclusions:\nI. P < R\nII. S < Q',
        options: ['Only conclusion I follows', 'Only conclusion II follows', 'Either I or II follows', 'Both I and II follow'],
        answer: 0,
        explanation: 'From P < Q = R, we clearly get P < R. Thus conclusion I follows. From Q = R ≥ S, we get Q ≥ S, which means S ≤ Q. Therefore, S < Q is NOT necessarily true (it could be equal). Therefore only conclusion I follows.'
    },
    {
        id: 'rea-13',
        topic: 'Puzzles',
        difficulty: 'Hard',
        question: 'Six persons A, B, C, D, E, and F are sitting in a circle facing the center. B is between F and C. A is between E and D. F is to the left of D. Who is sitting between A and F?',
        options: ['B', 'C', 'D', 'E'],
        answer: 2,
        explanation: '1. F is to the left of D -> F, D. 2. A is between E and D -> E, A, D. So, E, A, D, F. 3. B is between F and C -> D, F, B, C. Combining: E, A, D, F, B, C around the circle. Between A and F is D.'
    },
    {
        id: 'rea-14',
        topic: 'Statement and Conclusion',
        difficulty: 'Medium',
        question: 'Statement: Use of cosmetics is hazardous.\nConclusions:\nI. Cosmetics have side effects.\nII. Cosmetics are inexpensive.',
        options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
        answer: 0,
        explanation: 'The statement says cosmetics are hazardous, which implies they have negative impacts or side effects. So conclusion I follows. Nothing is mentioned about the price, so II does not follow.'
    },
    {
        id: 'rea-15',
        topic: 'Coding Decoding',
        difficulty: 'Medium',
        question: 'In a certain code language, "134" means "good and tasty", "478" means "see good pictures", and "729" means "pictures are faint". What is the code for "see"?',
        options: ['4', '7', '8', '1'],
        answer: 2,
        explanation: '134 = good and tasty. 478 = see good pictures. Common word is "good", common digit is "4". So good=4. 729 = pictures are faint. Common word with 478 is "pictures", common digit is "7". So pictures=7. Therefore, in 478, the remaining digit "8" must stand for "see".'
    },
    {
        id: 'rea-16',
        topic: 'Number Series',
        difficulty: 'Medium',
        question: 'Find the missing number in the series: 3, 7, 15, 31, 63, ?',
        options: ['92', '115', '127', '131'],
        answer: 2,
        explanation: 'The pattern is (previous number * 2) + 1. 3*2+1=7. 7*2+1=15. 15*2+1=31. 63*2+1 = 127.'
    },
    {
        id: 'rea-17',
        topic: 'Direction Sense',
        difficulty: 'Hard',
        question: 'A person starts from his house and travels 8 km towards West. Then he turns right and travels 6 km. What is the shortest distance from his house to his final position?',
        options: ['10 km', '12 km', '14 km', '2 km'],
        answer: 0,
        explanation: 'The path forms a right-angled triangle with base 8 km and height 6 km. Using Pythagoras theorem, shortest distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.'
    },
    {
        id: 'rea-18',
        topic: 'Blood Relation',
        difficulty: 'Medium',
        question: 'A is B’s sister. C is B’s mother. D is C’s father. E is D’s mother. Then, how is A related to D?',
        options: ['Grandmother', 'Grandfather', 'Daughter', 'Granddaughter'],
        answer: 3,
        explanation: 'A is the sister of B, and C is the mother of B. This means C is also the mother of A. Since D is the father of C, D is the maternal grandfather of A. Therefore, A is the granddaughter of D.'
    },
    {
        id: 'rea-19',
        topic: 'Syllogism',
        difficulty: 'Hard',
        question: 'Statements: No door is dog. All the dogs are cats.\nConclusions:\n1. No door is cat.\n2. No cat is door.\n3. Some cats are dogs.\n4. All the cats are dogs.',
        options: ['Only (3) follows', 'Only (1) and (3) follow', 'Only (2) and (4) follow', 'None of the above'],
        answer: 0,
        explanation: 'Dogs are completely inside Cats. Door is completely disjoint from Dogs. However, Door might intersect with Cats. So, Conclusions 1 and 2 are not definitely true. Since all dogs are cats, some cats are definitely dogs (Conclusion 3 is true). Conclusion 4 is false. Therefore, only (3) follows.'
    },
    {
        id: 'rea-20',
        topic: 'Analogy',
        difficulty: 'Medium',
        question: 'Melt : Liquid :: Freeze : ?',
        options: ['Ice', 'Solid', 'Condense', 'Push'],
        answer: 1,
        explanation: 'When something melts, it turns into a liquid. When something freezes, it turns into a solid. The relationship is Process : State.'
    }
];
