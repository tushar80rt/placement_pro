import type { MCQ } from '../types';

export const aptitudeQuestions: MCQ[] = [
    {
        id: 'apt-1',
        topic: 'Percentage',
        difficulty: 'Medium',
        question: 'If the price of a commodity is increased by 20% and then decreased by 20%, what is the net effect on the price?',
        options: ['No change', '4% increase', '4% decrease', '8% decrease'],
        answer: 2,
        explanation: 'Let initial price = 100. After 20% increase = 120. After 20% decrease on 120 = 120 - 24 = 96. Net effect = 100 - 96 = 4% decrease.',
        shortcut: 'Successive percentage change formula: a + b + (ab/100). Here, 20 - 20 + (20 * -20)/100 = -4%.'
    },
    {
        id: 'apt-1-2',
        topic: 'Percentage',
        difficulty: 'Easy',
        question: 'Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is:',
        options: ['2:5', '3:5', '4:5', '6:7'],
        answer: 2,
        explanation: 'Let the third number be 100. Then, the first number is 120 and the second number is 150. Ratio = 120:150 = 12:15 = 4:5.'
    },
    {
        id: 'apt-1-3',
        topic: 'Percentage',
        difficulty: 'Hard',
        question: 'In an election between two candidates, one got 55% of the total valid votes, 20% of the votes were invalid. If the total number of votes was 7500, the number of valid votes that the other candidate got, was:',
        options: ['2700', '2900', '3000', '3100'],
        answer: 0,
        explanation: 'Total number of votes = 7500. Invalid votes = 20% of 7500 = 1500. Valid votes = 7500 - 1500 = 6000. 1st candidate got 55% of valid votes. 2nd candidate got 45% of valid votes. Number of valid votes 2nd candidate got = 45% of 6000 = (45/100) * 6000 = 2700.'
    },
    {
        id: 'apt-1-4',
        topic: 'Percentage',
        difficulty: 'Medium',
        question: 'The population of a town increased from 1,75,000 to 2,62,500 in a decade. The average percent increase of population per year is:',
        options: ['4.37%', '5%', '6%', '8.75%'],
        answer: 1,
        explanation: 'Increase in 10 years = (262500 - 175000) = 87500. Increase % = (87500 / 175000) * 100 = 50%. This is the increase in 10 years. Therefore, average increase per year = 50% / 10 = 5%.'
    },
    {
        id: 'apt-2',
        topic: 'Time & Work',
        difficulty: 'Hard',
        question: 'A can do a piece of work in 10 days and B can do it in 15 days. They work together for 3 days, and then B leaves. In how many days will A finish the remaining work?',
        options: ['3 days', '4 days', '5 days', '6 days'],
        answer: 2,
        explanation: 'Work done by A in 1 day = 1/10. Work done by B in 1 day = 1/15. Together in 1 day = (1/10 + 1/15) = 1/6. In 3 days, they complete (1/6)*3 = 1/2 of the work. Remaining work = 1 - 1/2 = 1/2. Time taken by A to complete remaining work = (1/2) / (1/10) = 5 days.',
        shortcut: 'Total units of work = LCM(10, 15) = 30 units. A does 3 units/day, B does 2 units/day. Together they do 5 units/day. In 3 days = 15 units. Remaining = 15 units. A will take 15 / 3 = 5 days.'
    },
    {
        id: 'apt-2-2',
        topic: 'Time & Work',
        difficulty: 'Medium',
        question: 'A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is:',
        options: ['1/4', '1/10', '7/15', '8/15'],
        answer: 3,
        explanation: 'A\'s 1 day work = 1/15. B\'s 1 day work = 1/20. (A+B)\'s 1 day work = 1/15 + 1/20 = 7/60. Work done in 4 days = 4 * 7/60 = 7/15. Remaining work = 1 - 7/15 = 8/15.'
    },
    {
        id: 'apt-2-3',
        topic: 'Time & Work',
        difficulty: 'Hard',
        question: 'A is thrice as good as workman as B and therefore is able to finish a job in 60 days less than B. Working together, they can do it in:',
        options: ['20 days', '22.5 days', '25 days', '30 days'],
        answer: 1,
        explanation: 'Ratio of times taken by A and B = 1:3. The time difference is (3 - 1) 2 parts. 2 parts = 60 days. So 1 part = 30 days. This means A takes 30 days and B takes 90 days. Total work = LCM(30, 90) = 90. Efficiency of A = 3, B = 1. Total efficiency = 4. Time taken together = 90 / 4 = 22.5 days.'
    },
    {
        id: 'apt-3',
        topic: 'Boats & Streams',
        difficulty: 'Medium',
        question: 'A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream.',
        options: ['2 hours', '3 hours', '4 hours', '5 hours'],
        answer: 2,
        explanation: 'Speed downstream = (Speed of boat in still water) + (Speed of stream) = 13 + 4 = 17 km/hr. Time = Distance / Speed = 68 / 17 = 4 hours.',
    },
    {
        id: 'apt-4',
        topic: 'Profit & Loss',
        difficulty: 'Hard',
        question: 'A shopkeeper sells two articles at Rs. 1000 each, making a profit of 20% on the first article and a loss of 20% on the second article. Find the net profit or loss percent.',
        options: ['1% profit', '2% loss', '4% profit', '4% loss'],
        answer: 3,
        explanation: 'When two identical items are sold at the same price, one at a profit of x% and other at a loss of x%, there is always a net loss given by (x/10)^2 %. Here, (20/10)^2 = 4% loss.',
        shortcut: 'Always a loss of (x/10)^2 % in such cases.'
    },
    {
        id: 'apt-5',
        topic: 'Probability',
        difficulty: 'Medium',
        question: 'Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?',
        options: ['1/4', '3/4', '1/2', '5/8'],
        answer: 1,
        explanation: 'Total outcomes = 36. The product of two numbers is odd ONLY when both numbers are odd. The probability of both numbers being odd is (3/6) * (3/6) = 1/4. Therefore, the probability that the product is even = 1 - (Probability of product being odd) = 1 - 1/4 = 3/4.',
        shortcut: 'P(Even Product) = 1 - P(Both Odd).'
    },
    {
        id: 'apt-6',
        topic: 'Averages',
        difficulty: 'Medium',
        question: 'The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What might be the weight of the new person?',
        options: ['76 kg', '76.5 kg', '85 kg', '80 kg'],
        answer: 2,
        explanation: 'Total increase in weight = 8 * 2.5 = 20 kg. This means the new person weighs 20 kg more than the person who left. Therefore, weight of new person = 65 + 20 = 85 kg.',
        shortcut: 'New Weight = Old Weight + (Total Members * Increase)'
    },
    {
        id: 'apt-7',
        topic: 'Speed Time Distance',
        difficulty: 'Hard',
        question: 'Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:',
        options: ['1:3', '3:2', '3:4', 'None of these'],
        answer: 1,
        explanation: 'Let speeds be x and y. Length of train 1 = 27x, Length of train 2 = 17y. When crossing each other: (27x + 17y) / (x + y) = 23. Solving gives 27x + 17y = 23x + 23y => 4x = 6y => x/y = 3/2.',
        shortcut: 'Use alligation on time: (23-17) : (27-23) = 6 : 4 = 3:2.'
    },
    {
        id: 'apt-8',
        topic: 'Pipes and Cisterns',
        difficulty: 'Medium',
        question: 'Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?',
        options: ['12 min', '15 min', '25 min', '50 min'],
        answer: 0,
        explanation: 'Part filled by A in 1 min = 1/20. Part filled by B in 1 min = 1/30. Part filled by (A + B) in 1 min = (1/20 + 1/30) = 5/60 = 1/12. Therefore, both pipes together can fill the tank in 12 minutes.',
        shortcut: 'Formula for 2 pipes: (xy)/(x+y) = (20*30)/(20+30) = 600/50 = 12 mins.'
    },
    {
        id: 'apt-9',
        topic: 'Simple Interest',
        difficulty: 'Easy',
        question: 'A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:',
        options: ['Rs. 650', 'Rs. 690', 'Rs. 698', 'Rs. 700'],
        answer: 2,
        explanation: 'SI for 1 year = 854 - 815 = Rs. 39. SI for 3 years = 39 * 3 = Rs. 117. Therefore, Principal = Amount after 3 years - SI for 3 years = 815 - 117 = Rs. 698.'
    },
    {
        id: 'apt-10',
        topic: 'Compound Interest',
        difficulty: 'Medium',
        question: 'The difference between simple interest and compound interest on Rs. 1200 for one year at 10% per annum reckoned half-yearly is:',
        options: ['Rs. 2.50', 'Rs. 3', 'Rs. 3.75', 'Rs. 4'],
        answer: 1,
        explanation: 'SI for 1 year = (1200 * 10 * 1) / 100 = 120. CI when compounded half-yearly: Rate = 5%, Time = 2 half-years. Amount = 1200 * (1 + 5/100)^2 = 1200 * (21/20) * (21/20) = 1323. CI = 1323 - 1200 = 123. Difference = 123 - 120 = Rs. 3.'
    },
    {
        id: 'apt-11',
        topic: 'Number System',
        difficulty: 'Hard',
        question: 'Find the unit digit in the product (2467)^153 * (341)^72.',
        options: ['1', '3', '7', '9'],
        answer: 2,
        explanation: 'Unit digit of (341)^72 is 1 (since 1 raised to anything is 1). For (2467)^153, unit digit depends on 7^153. Cyclicity of 7 is 4. 153 mod 4 = 1. So, unit digit is 7^1 = 7. Total unit digit = 7 * 1 = 7.'
    },
    {
        id: 'apt-12',
        topic: 'Ratio and Proportion',
        difficulty: 'Medium',
        question: 'A bag contains 50 P, 25 P and 10 P coins in the ratio 5: 9: 4, amounting to Rs. 206. Find the number of coins of each type respectively.',
        options: ['360, 160, 200', '160, 360, 200', '200, 360, 160', '200, 160, 300'],
        answer: 2,
        explanation: 'Let the number of coins be 5x, 9x, and 4x. Their values in Rupees will be 5x/2, 9x/4, and 4x/10. Sum = 5x/2 + 9x/4 + 2x/5 = (50x + 45x + 8x)/20 = 103x/20. We are given 103x/20 = 206 => x = 40. Number of 50 P coins = 5 * 40 = 200. 25 P = 9 * 40 = 360. 10 P = 4 * 40 = 160.'
    },
    {
        id: 'apt-13',
        topic: 'Mixture and Alligation',
        difficulty: 'Hard',
        question: 'In what ratio must a grocer mix two varieties of pulses costing Rs. 15 and Rs. 20 per kg respectively so as to get a mixture worth Rs. 16.50 kg?',
        options: ['3:7', '5:7', '7:3', '7:5'],
        answer: 2,
        explanation: 'By the rule of alligation: Cost of 1 kg dearer (20) - Mean price (16.50) = 3.50. Mean price (16.50) - Cost of 1 kg cheaper (15) = 1.50. Ratio = 3.50 : 1.50 = 35 : 15 = 7 : 3.'
    },
    {
        id: 'apt-14',
        topic: 'Permutation and Combination',
        difficulty: 'Medium',
        question: 'In how many different ways can the letters of the word \'LEADING\' be arranged in such a way that the vowels always come together?',
        options: ['360', '480', '720', '5040'],
        answer: 2,
        explanation: 'Vowels are E, A, I. Consonants are L, D, N, G. Treat (E,A,I) as one unit. Total units = 4 consonants + 1 vowel unit = 5 units. These can be arranged in 5! ways = 120. The 3 vowels can be arranged among themselves in 3! ways = 6. Total ways = 120 * 6 = 720.'
    },
    {
        id: 'apt-15',
        topic: 'Probability',
        difficulty: 'Hard',
        question: 'A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?',
        options: ['10/21', '11/21', '2/7', '5/7'],
        answer: 0,
        explanation: 'Total balls = 7. Total ways to draw 2 balls = 7C2 = 21. Number of non-blue balls = 2 red + 3 green = 5. Ways to draw 2 non-blue balls = 5C2 = 10. Probability = 10/21.'
    },
    {
        id: 'apt-16',
        topic: 'Partnership',
        difficulty: 'Medium',
        question: 'A, B and C enter into a partnership investing Rs. 35000, Rs. 45000 and Rs. 55000 respectively. Out of a total profit of Rs. 40500, what is C’s share?',
        options: ['Rs. 10500', 'Rs. 13500', 'Rs. 16500', 'Rs. 17500'],
        answer: 2,
        explanation: 'The ratio of their investments is 35000 : 45000 : 55000 = 7 : 9 : 11. Total parts = 7 + 9 + 11 = 27. C’s share = (11/27) * 40500 = 11 * 1500 = Rs. 16500.'
    },
    {
        id: 'apt-17',
        topic: 'Mensuration',
        difficulty: 'Hard',
        question: 'If the radius of a circle is decreased by 50%, find the percentage decrease in its area.',
        options: ['25%', '50%', '75%', '80%'],
        answer: 2,
        explanation: 'Let original radius = r. Original Area = πr². New radius = r/2. New Area = π(r/2)² = (πr²)/4. Decrease in area = πr² - (πr²)/4 = (3/4)πr². Percentage decrease = ((3/4)πr² / πr²) * 100 = 75%.',
        shortcut: 'Successive percentage formula: -50 - 50 + ((-50)(-50))/100 = -100 + 25 = -75%.'
    },
    {
        id: 'apt-18',
        topic: 'Time & Distance',
        difficulty: 'Medium',
        question: 'A man walking at the rate of 5 km/hr crosses a bridge in 15 minutes. The length of the bridge (in metres) is:',
        options: ['600', '750', '1000', '1250'],
        answer: 3,
        explanation: 'Speed = 5 km/hr = 5 * (5/18) m/sec = 25/18 m/sec. Time = 15 minutes = 15 * 60 = 900 seconds. Distance = Speed * Time = (25/18) * 900 = 1250 metres.'
    },
    {
        id: 'apt-19',
        topic: 'Trains',
        difficulty: 'Hard',
        question: 'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:',
        options: ['45 km/hr', '50 km/hr', '54 km/hr', '55 km/hr'],
        answer: 1,
        explanation: 'Let the speed of the train be x km/hr. Relative speed = (x - 5) km/hr. Converting to m/s = (x - 5) * 5/18. Distance = 125 m. Time = 10 sec. So, (x - 5) * 5/18 = 125/10. (x - 5) = (12.5 * 18)/5 = 45. x = 50 km/hr.'
    },
    {
        id: 'apt-20',
        topic: 'Ages',
        difficulty: 'Medium',
        question: 'The sum of the present ages of a father and his son is 60 years. Six years ago, father\'s age was five times the age of the son. After 6 years, son\'s age will be:',
        options: ['12 years', '14 years', '18 years', '20 years'],
        answer: 3,
        explanation: 'Let present ages be F and S. F + S = 60. Six years ago: (F - 6) = 5(S - 6). Substitute F = 60 - S. (60 - S - 6) = 5S - 30 => 54 - S = 5S - 30 => 6S = 84 => S = 14. Son\'s present age is 14. After 6 years, son will be 14 + 6 = 20 years old.'
    }
];
