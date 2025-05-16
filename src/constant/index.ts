import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
  "24:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CANDIDATE_QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}`,
      python: `def two_sum(nums, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 104",
      "-109 ≤ nums[i] ≤ 109",
      "-109 ≤ target ≤ 109",
      "Only one valid answer exists.",
    ],
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    description: "Given a string containing brackets, determine if the brackets are closed in the correct order.",
    examples: [
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" }
    ],
    starterCode: {
      javascript: `function isValid(s) { /* ... */ }`,
      python: `def is_valid(s): pass`,
      java: `class Solution { public boolean isValid(String s) { /* ... */ } }`
    },
    constraints: ["1 ≤ s.length ≤ 1e4", "s contains only '()[]{}'."]
  },
  {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    description: "Find the contiguous subarray with the largest sum.",
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
      { input: "nums = [5,4,-1,7,8]", output: "23" }
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) { /* ... */ }`,
      python: `def max_sub_array(nums): pass`,
      java: `class Solution { public int maxSubArray(int[] nums) { /* ... */ } }`
    },
    constraints: ["1 ≤ nums.length ≤ 1e5", "-1e4 ≤ nums[i] ≤ 1e4"]
  }, {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    description: "Count distinct ways to climb to the top using 1 or 2 steps.",
    examples: [
      { input: "n = 3", output: "3" },
      { input: "n = 2", output: "2" }
    ],
    starterCode: {
      javascript: `function climbStairs(n) { /* ... */ }`,
      python: `def climb_stairs(n): pass`,
      java: `class Solution { public int climbStairs(int n) { /* ... */ } }`
    },
    constraints: ["1 ≤ n ≤ 45"]
  }, {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    description: "Maximize profit by buying low and selling high.",
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5" },
      { input: "prices = [7,6,4,3,1]", output: "0" }
    ],
    starterCode: {
      javascript: `function maxProfit(prices) { /* ... */ }`,
      python: `def max_profit(prices): pass`,
      java: `class Solution { public int maxProfit(int[] prices) { /* ... */ } }`
    },
    constraints: ["1 ≤ prices.length ≤ 1e5", "0 ≤ prices[i] ≤ 1e4"]
  }, {
    id: "valid-anagram",
    title: "Valid Anagram",
    description: "Check if two strings are anagrams of each other.",
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "car"', output: "false" }
    ],
    starterCode: {
      javascript: `function isAnagram(s, t) { /* ... */ }`,
      python: `def is_anagram(s, t): pass`,
      java: `class Solution { public boolean isAnagram(String s, String t) { /* ... */ } }`
    },
    constraints: ["1 ≤ s.length, t.length ≤ 5e4", "s and t are lowercase."]
  }, {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    description: "Check if the array contains any duplicates.",
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" }
    ],
    starterCode: {
      javascript: `function containsDuplicate(nums) { /* ... */ }`,
      python: `def contains_duplicate(nums): pass`,
      java: `class Solution { public boolean containsDuplicate(int[] nums) { /* ... */ } }`
    },
    constraints: ["1 ≤ nums.length ≤ 1e5", "-1e9 ≤ nums[i] ≤ 1e9"]
  }, {
    id: "move-zeroes",
    title: "Move Zeroes",
    description: "Move all zeros to the end while maintaining order.",
    examples: [
      { input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" },
      { input: "nums = [0]", output: "[0]" }
    ],
    starterCode: {
      javascript: `function moveZeroes(nums) { /* ... */ }`,
      python: `def move_zeroes(nums): pass`,
      java: `class Solution { public void moveZeroes(int[] nums) { /* ... */ } }`
    },
    constraints: ["1 ≤ nums.length ≤ 1e4", "-2^31 ≤ nums[i] ≤ 2^31-1"]
  }, {
    id: "majority-element",
    title: "Majority Element",
    description: "Find the element that appears more than ⌊n/2⌋ times.",
    examples: [
      { input: "nums = [3,2,3]", output: "3" },
      { input: "nums = [2,2,1,1,1,2,2]", output: "2" }
    ],
    starterCode: {
      javascript: `function majorityElement(nums) { /* ... */ }`,
      python: `def majority_element(nums): pass`,
      java: `class Solution { public int majorityElement(int[] nums) { /* ... */ } }`
    },
    constraints: ["Majority element always exists.", "1 ≤ nums.length ≤ 5e4"]
  }, {
    id: "merge-sorted-array",
    title: "Merge Sorted Array",
    description: "Merge two sorted arrays into the first array.",
    examples: [
      { input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]" }
    ],
    starterCode: {
      javascript: `function merge(nums1, m, nums2, n) { /* ... */ }`,
      python: `def merge(nums1, m, nums2, n): pass`,
      java: `class Solution { public void merge(int[] nums1, int m, int[] nums2, int n) { /* ... */ } }`
    },
    constraints: ["nums1.length == m + n", "nums2.length == n"]
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}`,
      python: `def reverse_string(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    description:
      "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\n\nAn integer is a palindrome when it reads the same forward and backward.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation:
          "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Write your solution here
  
}`,
      python: `def is_palindrome(x):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your solution here
        
    }
}`,
    },
  },
];

export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];