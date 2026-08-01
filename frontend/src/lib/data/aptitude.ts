export const aptitudeQuestions = [
	{
		id: 1,
		category: 'Quantitative Aptitude',
		topic: 'Time and Work',
		question: 'A can do a piece of work in 10 days and B can do the same work in 15 days. How long will they take to finish it if they work together?',
		options: ['5 days', '6 days', '8 days', '9 days'],
		correctAnswer: 1, // index of '6 days'
		explanation: 'Work done by A in 1 day = 1/10. Work done by B in 1 day = 1/15. Together in 1 day = 1/10 + 1/15 = 5/30 = 1/6. Total time = 6 days.'
	},
	{
		id: 2,
		category: 'Quantitative Aptitude',
		topic: 'Percentages',
		question: 'If the price of a book is first decreased by 25% and then increased by 20%, then the net change in the price will be:',
		options: ['10% decrease', '5% decrease', 'No change', '10% increase'],
		correctAnswer: 0, // '10% decrease'
		explanation: 'Let original price = 100. After 25% decrease, price = 75. After 20% increase on 75, new price = 75 * 1.20 = 90. Net change = 100 - 90 = 10% decrease.'
	},
	{
		id: 3,
		category: 'Logical Reasoning',
		topic: 'Blood Relations',
		question: 'Pointing to a photograph of a boy Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
		options: ['Brother', 'Uncle', 'Cousin', 'Father'],
		correctAnswer: 3, // Father
		explanation: 'The only son of Suresh\'s mother is Suresh himself. So the boy in the photograph is the son of Suresh. Hence, Suresh is the father of the boy.'
	},
	{
		id: 4,
		category: 'Logical Reasoning',
		topic: 'Number Series',
		question: 'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?',
		options: ['(1/3)', '(1/8)', '(2/8)', '(1/16)'],
		correctAnswer: 1, // (1/8)
		explanation: 'This is a simple division series; each number is one-half of the previous number. So 1/4 divided by 2 is 1/8.'
	},
	{
		id: 5,
		category: 'Technical MCQ',
		topic: 'Database Management',
		question: 'Which of the following is not a valid SQL type?',
		options: ['FLOAT', 'NUMERIC', 'DECIMAL', 'CHARACTER'],
		correctAnswer: 3,
		explanation: 'CHARACTER is not a typical standard SQL type, although CHAR and VARCHAR are. Some databases might support it as an alias, but CHAR/VARCHAR are the valid standard types.'
	}
];

// Note: Sample data of 5 questions representing the 200 question bank.
// Add more objects here following this structure!
