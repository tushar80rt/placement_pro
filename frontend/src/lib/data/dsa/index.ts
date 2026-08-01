import type { DsaQuestion, Difficulty } from '../types';

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const categoryFor = (index: number) => ['Arrays & Hashing', 'Two Pointers', 'Stack', 'Binary Search', 'Sliding Window', 'Linked List', 'Trees', 'Tries', 'Heap / Priority Queue', 'Graphs', '1-D Dynamic Programming', '2-D Dynamic Programming', 'Greedy', 'Intervals', 'Math & Geometry', 'Bit Manipulation'][index % 16];

const additionalTitles: string[] = [
    'Contains Duplicate', 'Valid Anagram', 'Two Sum', 'Group Anagrams', 'Top K Frequent Elements', 'Product of Array Except Self', 'Valid Sudoku', 'Longest Consecutive Sequence',
    'Valid Palindrome', 'Two Sum II - Input Array Is Sorted', '3Sum', 'Container With Most Water', 'Trapping Rain Water',
    'Best Time to Buy and Sell Stock', 'Longest Substring Without Repeating Characters', 'Longest Repeating Character Replacement', 'Permutation in String', 'Minimum Window Substring',
    'Valid Parentheses', 'Min Stack', 'Evaluate Reverse Polish Notation', 'Generate Parentheses', 'Daily Temperatures', 'Car Fleet', 'Largest Rectangle in Histogram',
    'Binary Search', 'Search a 2D Matrix', 'Koko Eating Bananas', 'Find Minimum in Rotated Sorted Array', 'Search in Rotated Sorted Array',
    'Time Based Key-Value Store', 'Median of Two Sorted Arrays', 'Valid Palindrome II', 'Encode and Decode Strings', 'Reverse Linked List', 'Merge Two Sorted Lists', 'Reorder List',
    'Remove Nth Node From End of List', 'Copy List with Random Pointer', 'Add Two Numbers', 'Linked List Cycle', 'Find the Duplicate Number', 'LRU Cache', 'Reverse Nodes in K-Group',
    'Merge K Sorted Lists', 'Invert Binary Tree', 'Maximum Depth of Binary Tree', 'Diameter of Binary Tree', 'Balanced Binary Tree', 'Same Tree', 'Subtree of Another Tree',
    'Lowest Common Ancestor of a Binary Search Tree', 'Binary Tree Level Order Traversal', 'Binary Tree Right Side View', 'Count Good Nodes in Binary Tree', 'Validate Binary Search Tree',
    'Kth Smallest Element in a BST', 'Construct Binary Tree from Preorder and Inorder Traversal', 'Binary Tree Maximum Path Sum', 'Serialize and Deserialize Binary Tree',
    'Implement Trie Prefix Tree', 'Design Add and Search Words Data Structure', 'Word Search II', 'Kth Largest Element in a Stream', 'Last Stone Weight', 'K Closest Points to Origin',
    'Kth Largest Element in an Array', 'Task Scheduler', 'Design Twitter', 'Find Median from Data Stream', 'Number of Islands', 'Clone Graph', 'Max Area of Island',
    'Pacific Atlantic Water Flow', 'Surrounded Regions', 'Rotting Oranges', 'Walls and Gates', 'Course Schedule', 'Course Schedule II', 'Redundant Connection',
    'Number of Connected Components in an Undirected Graph', 'Graph Valid Tree', 'Word Ladder', 'Min Cost to Connect All Points', 'Network Delay Time', 'Swim in Rising Water',
    'Alien Dictionary', 'Cheapest Flights Within K Stops', 'Climbing Stairs', 'Min Cost Climbing Stairs', 'House Robber', 'House Robber II', 'Longest Palindromic Substring',
    'Palindromic Substrings', 'Decode Ways', 'Coin Change', 'Maximum Product Subarray', 'Word Break', 'Longest Increasing Subsequence', 'Partition Equal Subset Sum',
    'Combination Sum IV', 'Unique Paths', 'Longest Common Subsequence', 'Best Time to Buy and Sell Stock with Cooldown', 'Coin Change II', 'Target Sum', 'Interleaving String',
    'Edit Distance', 'Distinct Subsequences', 'Regular Expression Matching', 'Jump Game', 'Jump Game II', 'Gas Station', 'Hand of Straights', 'Merge Triplets to Form Target Triplet',
    'Partition Labels', 'Valid Parenthesis String', 'Insert Interval', 'Merge Intervals', 'Non-overlapping Intervals', 'Meeting Rooms', 'Meeting Rooms II', 'Minimum Interval to Include Each Query',
    'Rotate Image', 'Spiral Matrix', 'Set Matrix Zeroes', 'Happy Number', 'Plus One', 'Pow(x, n)', 'Multiply Strings', 'Detect Squares', 'Single Number', 'Reverse Bits',
    'Number of 1 Bits', 'Counting Bits', 'Missing Number', 'Sum of Two Integers', 'Reverse Integer', 'Minimum Window Substring II', 'N Queens', 'Sudoku Solver', 'Word Search',
    'Subsets', 'Permutations', 'Combination Sum', 'Letter Combinations of a Phone Number', 'Word Break II', 'Palindrome Partitioning', 'Course Schedule III', 'Find All Anagrams in a String'
];

export const dsaQuestions: DsaQuestion[] = additionalTitles.slice(0, 20).map((title, index) => {
    const slug = slugify(title);
    const difficulty = (index % 7 === 0 ? 'Hard' : index % 3 === 0 ? 'Easy' : 'Medium') as Difficulty;
    return {
        id: slug,
        title,
        difficulty,
        category: categoryFor(index),
        tags: [categoryFor(index), 'Interview'],
        companies: index % 2 ? ['Google', 'Amazon'] : ['Microsoft', 'Meta'],
        acceptance: `${42 + (index % 29)}%`,
        leetcodeUrl: `https://leetcode.com/problems/${slug}/`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)',
        description: `This is a classic ${difficulty.toLowerCase()} level problem often asked in technical interviews. Your goal is to solve ${title} with an optimal approach. Analyze your time and space complexity carefully.`,
        examples: [
            { input: 'Example Input', output: 'Expected Output', explanation: 'Walk through the example to verify your logic.' }
        ],
        constraints: ['Input size is within standard limits (e.g., 10^4 or 10^5).', 'Aim for the expected optimal complexity.'],
        hints: ['Try to identify the underlying pattern (e.g., Two Pointers, Sliding Window).', 'Consider if a hash map or stack could reduce the time complexity.'],
        pattern: categoryFor(index),
        explanation: `Identify the invariant, select the supporting data structure, and explain why every element is processed only as needed. In ${title}, the optimal solution leverages the ${categoryFor(index)} pattern to achieve an O(N) time complexity without excessive space overhead.`,
        relatedQuestions: []
    };
});
