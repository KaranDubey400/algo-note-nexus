import { useState } from "react";

// Full Grind 169 questions data, grouped by week (abbreviated for brevity, but in your actual code, paste all 169 questions as per your earlier message)
const GRIND_169_WEEKS = [
  {
    number: 1,
    problems: [
      { id: 1, title: "Two Sum", difficulty: "Easy", topic: "Array", time: 15, platformUrl: "https://leetcode.com/problems/two-sum/" },
      { id: 2, title: "Valid Parentheses", difficulty: "Easy", topic: "Stack", time: 20, platformUrl: "https://leetcode.com/problems/valid-parentheses/" },
      { id: 3, title: "Merge Two Sorted Lists", difficulty: "Easy", topic: "Linked List", time: 20, platformUrl: "https://leetcode.com/problems/merge-two-sorted-lists/" },
      { id: 4, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", topic: "Array", time: 20, platformUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
      { id: 5, title: "Valid Palindrome", difficulty: "Easy", topic: "String", time: 15, platformUrl: "https://leetcode.com/problems/valid-palindrome/" },
      { id: 6, title: "Invert Binary Tree", difficulty: "Easy", topic: "Binary Tree", time: 15, platformUrl: "https://leetcode.com/problems/invert-binary-tree/" },
      { id: 7, title: "Valid Anagram", difficulty: "Easy", topic: "String", time: 15, platformUrl: "https://leetcode.com/problems/valid-anagram/" },
      { id: 8, title: "Binary Search", difficulty: "Easy", topic: "Binary Search", time: 15, platformUrl: "https://leetcode.com/problems/binary-search/" },
      { id: 9, title: "Flood Fill", difficulty: "Easy", topic: "Graph", time: 20, platformUrl: "https://leetcode.com/problems/flood-fill/" },
      { id: 10, title: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Easy", topic: "Binary Search Tree", time: 20, platformUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
      { id: 11, title: "Balanced Binary Tree", difficulty: "Easy", topic: "Binary Tree", time: 15, platformUrl: "https://leetcode.com/problems/balanced-binary-tree/" },
      { id: 12, title: "Linked List Cycle", difficulty: "Easy", topic: "Linked List", time: 20, platformUrl: "https://leetcode.com/problems/linked-list-cycle/" },
      { id: 13, title: "Implement Queue using Stacks", difficulty: "Easy", topic: "Stack", time: 20, platformUrl: "https://leetcode.com/problems/implement-queue-using-stacks/" },
    ],
    completedProblems: [1],
  },
  // ... Add all weeks and all 169 questions here as per your earlier message ...
];

const DUMMY_TOPICS = [
  "Array", "Binary", "Binary Search", "Binary Search Tree", "Binary Tree", "Dynamic Programming", "Graph", "Hash Table", "Heap", "Linked List", "Math", "Matrix", "Queue", "Recursion", "Stack", "String", "Trie"
];
const DUMMY_DIFFICULTY = [
  { label: "Easy", color: "text-green-600", count: 41 },
  { label: "Medium", color: "text-yellow-600", count: 102 },
  { label: "Hard", color: "text-red-600", count: 26 },
];
const DUMMY_TOPICS_BREAKDOWN = [
  { topic: "Array", count: 24 },
  { topic: "Binary", count: 7 },
  { topic: "Binary Search", count: 8 },
  { topic: "Binary Search Tree", count: 5 },
  { topic: "Binary Tree", count: 18 },
  { topic: "Dynamic Programming", count: 12 },
  { topic: "Graph", count: 21 },
  { topic: "Hash Table", count: 3 },
  { topic: "Heap", count: 8 },
  { topic: "Linked List", count: 14 },
  { topic: "Math", count: 5 },
  { topic: "Matrix", count: 5 },
  { topic: "Queue", count: 1 },
  { topic: "Recursion", count: 6 },
  { topic: "Stack", count: 14 },
  { topic: "String", count: 14 },
  { topic: "Trie", count: 4 },
];

export default function StudyPlansNew() {
  // Preferences state
  const [weeks, setWeeks] = useState(20);
  const [hoursPerWeek, setHours] = useState(8);
  const [difficulty, setDifficulty] = useState(["Easy", "Medium", "Hard"]);
  const [topics, setTopics] = useState(DUMMY_TOPICS);

  // Progress calculation
  const totalQuestions = 169;
  const completed = 1;
  const progress = (completed / totalQuestions) * 100;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-white shadow-md p-6 flex flex-col gap-6">
        <div>
          <div className="font-bold text-xs mb-2 text-gray-700">SCHEDULE</div>
          <div className="mb-2">{weeks} weeks</div>
          <input type="range" min={4} max={26} value={weeks} onChange={e => setWeeks(Number(e.target.value))} className="w-full" />
          <div className="mb-2 mt-4">{hoursPerWeek} hours per week</div>
          <input type="range" min={5} max={40} value={hoursPerWeek} onChange={e => setHours(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <div className="font-bold text-xs mb-2 text-gray-700">DIFFICULTY</div>
          <div className="flex gap-2">
            {DUMMY_DIFFICULTY.map(d => (
              <label key={d.label} className="flex items-center gap-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={difficulty.includes(d.label)}
                  onChange={() => setDifficulty(
                    difficulty.includes(d.label)
                      ? difficulty.filter(x => x !== d.label)
                      : [...difficulty, d.label]
                  )}
                />
                <span className={d.color + " text-sm font-medium"}>{d.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <div className="font-bold text-xs mb-2 text-gray-700">TOPICS</div>
          <div className="text-sm text-gray-700">All topics selected (<span className="text-blue-600 cursor-pointer">Change</span>)</div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Questions Summary */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Time Needed */}
            <div>
              <div className="font-bold text-gray-700 mb-1">TIME NEEDED</div>
              <div className="text-gray-600 text-sm mb-2">How long doing these questions will take for an average person. It's a conservative estimate where it is assumed that roughly the same amount of time will be needed to check the answer for each question.</div>
              <div className="text-3xl font-bold text-gray-800 mb-1">150 hours</div>
              <div className="text-green-600 text-sm">Fits into your schedule.</div>
            </div>
            {/* Difficulty Breakdown */}
            <div>
              <div className="font-bold text-gray-700 mb-1">DIFFICULTY</div>
              <div className="text-sm text-gray-700 mb-2">Questions grouped by difficulty</div>
              <div className="flex gap-4">
                {DUMMY_DIFFICULTY.map(d => (
                  <div key={d.label} className={d.color + " font-bold text-lg"}>{d.label}: {d.count}</div>
                ))}
              </div>
            </div>
            {/* Topics Breakdown */}
            <div>
              <div className="font-bold text-gray-700 mb-1">TOPICS</div>
              <div className="text-sm text-gray-700 mb-2">Questions grouped by topics</div>
              <div className="flex flex-wrap gap-2">
                {DUMMY_TOPICS_BREAKDOWN.map(t => (
                  <span key={t.topic} className="bg-gray-100 rounded px-2 py-0.5 text-xs text-gray-800">{t.topic}: {t.count}</span>
                ))}
              </div>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="font-medium text-gray-700 mb-1">COMPLETED {completed} / {totalQuestions}</div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div className="bg-blue-500 h-3 rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
        {/* Controls */}
        <div className="flex flex-wrap gap-2 mb-4">
          <select className="border rounded px-2 py-1 text-sm">
            <option>Based on Preferences</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Order by Difficulty</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Group by Weeks</option>
          </select>
          <button className="ml-auto border rounded px-2 py-1 text-sm">Hide topics</button>
        </div>
        {/* Weeks List */}
        <div className="space-y-6">
          {GRIND_169_WEEKS.map(week => (
            <div key={week.number} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-lg">Week {week.number}</div>
                <div className="text-sm text-gray-600">{week.completedProblems.length} / {week.problems.length}</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-blue-500 h-2 rounded-full transition-all" style={{ width: `${(week.completedProblems.length / week.problems.length) * 100}%` }} />
              </div>
              <ul className="divide-y divide-gray-100">
                {week.problems.map(problem => (
                  <li key={problem.id} className="flex items-center gap-3 py-2">
                    <input type="checkbox" checked={week.completedProblems.includes(problem.id)} readOnly />
                    <span className="font-medium">{problem.title}</span>
                    <span className={`text-xs font-semibold rounded px-2 py-0.5 ${problem.difficulty === "Easy" ? "bg-green-100 text-green-800" : problem.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>{problem.difficulty}</span>
                    <span className="text-xs text-gray-500">{problem.time} mins</span>
                    <span className="text-xs bg-gray-100 rounded px-2 py-0.5 text-gray-700">{problem.topic}</span>
                    <a href={problem.platformUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-xs">Link</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 