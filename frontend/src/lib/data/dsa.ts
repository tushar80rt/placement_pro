import type { Difficulty, DsaQuestion, QuestionStatus } from './types';

type RawDsaQuestion = {
  id?: number;
  title: string;
  difficulty?: Difficulty;
  status?: QuestionStatus;
  category?: string;
  leetcodeUrl?: string;
};

const coreQuestions: RawDsaQuestion[] = [
	{ id: 1, title: 'Contains Duplicate', difficulty: 'Easy', status: 'Unsolved', category: 'Arrays & Hashing', leetcodeUrl: 'https://leetcode.com/problems/contains-duplicate/' },
	{ id: 2, title: 'Valid Anagram', difficulty: 'Easy', status: 'Unsolved', category: 'Arrays & Hashing', leetcodeUrl: 'https://leetcode.com/problems/valid-anagram/' },
	{ id: 3, title: 'Two Sum', difficulty: 'Easy', status: 'Solved', category: 'Arrays & Hashing', leetcodeUrl: 'https://leetcode.com/problems/two-sum/' },
	{ id: 4, title: 'Group Anagrams', difficulty: 'Medium', status: 'Unsolved', category: 'Arrays & Hashing', leetcodeUrl: 'https://leetcode.com/problems/group-anagrams/' },
	{ id: 5, title: 'Top K Frequent Elements', difficulty: 'Medium', status: 'Unsolved', category: 'Arrays & Hashing', leetcodeUrl: 'https://leetcode.com/problems/top-k-frequent-elements/' },
	{ id: 6, title: 'Product of Array Except Self', difficulty: 'Medium', status: 'Unsolved', category: 'Arrays & Hashing', leetcodeUrl: 'https://leetcode.com/problems/product-of-array-except-self/' },
	{ id: 7, title: 'Valid Sudoku', difficulty: 'Medium', status: 'Unsolved', category: 'Arrays & Hashing', leetcodeUrl: 'https://leetcode.com/problems/valid-sudoku/' },
	{ id: 8, title: 'Longest Consecutive Sequence', difficulty: 'Medium', status: 'Unsolved', category: 'Arrays & Hashing', leetcodeUrl: 'https://leetcode.com/problems/longest-consecutive-sequence/' },
	{ id: 9, title: 'Valid Palindrome', difficulty: 'Easy', status: 'Unsolved', category: 'Two Pointers', leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/' },
	{ id: 10, title: 'Two Sum II - Input Array Is Sorted', difficulty: 'Medium', status: 'Unsolved', category: 'Two Pointers', leetcodeUrl: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
	{ id: 11, title: '3Sum', difficulty: 'Medium', status: 'Unsolved', category: 'Two Pointers', leetcodeUrl: 'https://leetcode.com/problems/3sum/' },
	{ id: 12, title: 'Container With Most Water', difficulty: 'Medium', status: 'Unsolved', category: 'Two Pointers', leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/' },
	{ id: 13, title: 'Trapping Rain Water', difficulty: 'Hard', status: 'Unsolved', category: 'Two Pointers', leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/' },
	{ id: 14, title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', status: 'Unsolved', category: 'Sliding Window', leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
	{ id: 15, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', status: 'Unsolved', category: 'Sliding Window', leetcodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
	{ id: 16, title: 'Longest Repeating Character Replacement', difficulty: 'Medium', status: 'Unsolved', category: 'Sliding Window', leetcodeUrl: 'https://leetcode.com/problems/longest-repeating-character-replacement/' },
	{ id: 17, title: 'Permutation in String', difficulty: 'Medium', status: 'Unsolved', category: 'Sliding Window', leetcodeUrl: 'https://leetcode.com/problems/permutation-in-string/' },
	{ id: 18, title: 'Minimum Window Substring', difficulty: 'Hard', status: 'Unsolved', category: 'Sliding Window', leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/' },
	{ id: 19, title: 'Valid Parentheses', difficulty: 'Easy', status: 'Unsolved', category: 'Stack', leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/' },
	{ id: 20, title: 'Min Stack', difficulty: 'Medium', status: 'Unsolved', category: 'Stack', leetcodeUrl: 'https://leetcode.com/problems/min-stack/' },
	{ id: 21, title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', status: 'Unsolved', category: 'Stack', leetcodeUrl: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
	{ id: 22, title: 'Generate Parentheses', difficulty: 'Medium', status: 'Unsolved', category: 'Stack', leetcodeUrl: 'https://leetcode.com/problems/generate-parentheses/' },
	{ id: 23, title: 'Daily Temperatures', difficulty: 'Medium', status: 'Unsolved', category: 'Stack', leetcodeUrl: 'https://leetcode.com/problems/daily-temperatures/' },
	{ id: 24, title: 'Car Fleet', difficulty: 'Medium', status: 'Unsolved', category: 'Stack', leetcodeUrl: 'https://leetcode.com/problems/car-fleet/' },
	{ id: 25, title: 'Largest Rectangle in Histogram', difficulty: 'Hard', status: 'Unsolved', category: 'Stack', leetcodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
	{ id: 26, title: 'Binary Search', difficulty: 'Easy', status: 'Unsolved', category: 'Binary Search', leetcodeUrl: 'https://leetcode.com/problems/binary-search/' },
	{ id: 27, title: 'Search a 2D Matrix', difficulty: 'Medium', status: 'Unsolved', category: 'Binary Search', leetcodeUrl: 'https://leetcode.com/problems/search-a-2d-matrix/' },
	{ id: 28, title: 'Koko Eating Bananas', difficulty: 'Medium', status: 'Unsolved', category: 'Binary Search', leetcodeUrl: 'https://leetcode.com/problems/koko-eating-bananas/' },
	{ id: 29, title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', status: 'Unsolved', category: 'Binary Search', leetcodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
	{ id: 30, title: 'Search in Rotated Sorted Array', difficulty: 'Medium', status: 'Unsolved', category: 'Binary Search', leetcodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
];

const additionalTitles: string[] = [
  'Time Based Key-Value Store','Median of Two Sorted Arrays','Valid Palindrome II','Encode and Decode Strings','Reverse Linked List','Merge Two Sorted Lists','Reorder List','Remove Nth Node From End of List','Copy List with Random Pointer','Add Two Numbers','Linked List Cycle','Find the Duplicate Number','LRU Cache','Reverse Nodes in K-Group','Merge K Sorted Lists','Invert Binary Tree','Maximum Depth of Binary Tree','Diameter of Binary Tree','Balanced Binary Tree','Same Tree','Subtree of Another Tree','Lowest Common Ancestor of a Binary Search Tree','Binary Tree Level Order Traversal','Binary Tree Right Side View','Count Good Nodes in Binary Tree','Validate Binary Search Tree','Kth Smallest Element in a BST','Construct Binary Tree from Preorder and Inorder Traversal','Binary Tree Maximum Path Sum','Serialize and Deserialize Binary Tree','Implement Trie Prefix Tree','Design Add and Search Words Data Structure','Word Search II','Kth Largest Element in a Stream','Last Stone Weight','K Closest Points to Origin','Kth Largest Element in an Array','Task Scheduler','Design Twitter','Find Median from Data Stream','Number of Islands','Clone Graph','Max Area of Island','Pacific Atlantic Water Flow','Surrounded Regions','Rotting Oranges','Walls and Gates','Course Schedule','Course Schedule II','Redundant Connection','Number of Connected Components in an Undirected Graph','Graph Valid Tree','Word Ladder','Min Cost to Connect All Points','Network Delay Time','Swim in Rising Water','Alien Dictionary','Cheapest Flights Within K Stops','Climbing Stairs','Min Cost Climbing Stairs','House Robber','House Robber II','Longest Palindromic Substring','Palindromic Substrings','Decode Ways','Coin Change','Maximum Product Subarray','Word Break','Longest Increasing Subsequence','Partition Equal Subset Sum','Combination Sum IV','Unique Paths','Longest Common Subsequence','Best Time to Buy and Sell Stock with Cooldown','Coin Change II','Target Sum','Interleaving String','Edit Distance','Distinct Subsequences','Regular Expression Matching','Jump Game','Jump Game II','Gas Station','Hand of Straights','Merge Triplets to Form Target Triplet','Partition Labels','Valid Parenthesis String','Insert Interval','Merge Intervals','Non-overlapping Intervals','Meeting Rooms','Meeting Rooms II','Minimum Interval to Include Each Query','Rotate Image','Spiral Matrix','Set Matrix Zeroes','Happy Number','Plus One','Pow(x, n)','Multiply Strings','Detect Squares','Single Number','Reverse Bits','Number of 1 Bits','Counting Bits','Missing Number','Sum of Two Integers','Reverse Integer','Minimum Window Substring II','N Queens','Sudoku Solver','Word Search','Subsets','Permutations','Combination Sum','Letter Combinations of a Phone Number','Word Break II','Palindrome Partitioning','Course Schedule III','Find All Anagrams in a String'
];

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const categoryFor = (index: number) => ['Linked List', 'Trees', 'Tries', 'Heap / Priority Queue', 'Graphs', '1-D Dynamic Programming', '2-D Dynamic Programming', 'Greedy', 'Intervals', 'Math & Geometry', 'Bit Manipulation', 'Backtracking'][index % 12];

const rawQuestions: RawDsaQuestion[] = [
  ...coreQuestions,
  ...additionalTitles.map((title) => ({ title }))
];

export const neetcode150: DsaQuestion[] = rawQuestions.slice(0, 150).map((item, index) => {
  const title = item.title;
  const slug = slugify(title);
  const difficulty = (item.difficulty ?? (index % 7 === 0 ? 'Hard' : index % 3 === 0 ? 'Easy' : 'Medium')) as Difficulty;
  return {
    id: index + 1, title, slug, difficulty, status: item.status ?? 'Unsolved', category: item.category ?? categoryFor(index),
    leetcodeUrl: item.leetcodeUrl ?? `https://leetcode.com/problems/${slug}/`, tags: [item.category ?? categoryFor(index), 'Interview'],
    companies: index % 2 ? ['Google', 'Amazon'] : ['Microsoft', 'Meta'], acceptance: `${42 + (index % 29)}%`, bookmarked: index % 11 === 0,
    notes: index % 13 === 0 ? 'Revisit the optimal approach before your next mock interview.' : undefined,
    timeComplexity: 'O(n)', spaceComplexity: 'O(n)',
    description: `Solve ${title} with a clear, interview-ready approach. Discuss trade-offs before implementing the optimal solution.`,
    examples: [{ input: 'Input: [example]', output: 'Output: expected result', explanation: 'Walk through the input while maintaining the required invariant.' }],
    constraints: ['Input values fit within the stated problem limits.', 'Aim for the expected optimal complexity.'],
    hints: ['Start by identifying the repeated operation.', 'State the invariant your data structure maintains.']
  };
});
