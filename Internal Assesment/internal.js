/*
========================================
🧠 15-Minute Core JavaScript Practice
========================================

TASK: Mini "Student Score Analyzer"

Rules:
- Use plain JavaScript only
- No libraries
- Use console.log for testing
- Focus on fundamentals, not shortcuts

----------------------------------------
INPUT DATA
----------------------------------------

const scores = ["85", 92, "67", 40, 100, "30", 76, "90"];

(Note: scores are intentionally mixed types)

----------------------------------------
YOUR TASKS (FOLLOW IN ORDER)
----------------------------------------

1️⃣ Create a function named:
   analyzeScores(scoresArray)

----------------------------------------

2️⃣ Inside the function:

- Loop through the scoresArray
- Convert each value to a number
- Ignore values that become NaN after conversion

(Hint: use Number() and isNaN())


----------------------------------------

3️⃣ Categorize each valid score:

Use if / else conditions:

- score >= 90  → "Excellent"
- score >= 60  → "Pass"
- score < 60   → "Fail"

⚠️ You MUST use:
- if / else
- ternary operator (at least once)

----------------------------------------

4️⃣ Maintain counters:

- excellentCount
- passCount
- failCount

----------------------------------------

5️⃣ Calculate:

- Total number of valid students
- Average score
- Round average to 2 decimal places

----------------------------------------

6️⃣ Return an object from the function:

{
  totalStudents: number,
  excellent: number,
  pass: number,
  fail: number,
  averageScore: number
}

----------------------------------------
EXPECTED USAGE
----------------------------------------

const result = analyzeScores(scores);
console.log(result);*/

// analyze.js

function analyzeScores(scoresArray) {
    let excellentCount = 0;
    let passCount = 0;
    let failCount = 0;
    let totalScore = 0;
    let validStudents = 0;

    for (let i = 0; i < scoresArray.length; i++) {
        let score = Number(scoresArray[i]);

        if (isNaN(score)) {
            continue; // skip invalid entries
        }

        validStudents++;
        totalScore += score;

        if (score >= 90) {
            excellentCount++;
        } else if (score >= 60) {
            passCount++;
        } else {
            failCount++;
        }
    }

    let average =
        validStudents > 0 ? (totalScore / validStudents).toFixed(2) : 0;

    return {
        totalStudents: validStudents,
        excellent: excellentCount,
        pass: passCount,
        fail: failCount,
        average: average
    };
}

// -------- Example usage --------
const scores = [95, 82, 45, "70", "abc", 100, 60];

const result = analyzeScores(scores);

console.log("Analysis Result:");
console.log(result);

// -------- Pretty output --------
console.log("\nSummary:");
console.log("Total Students:", result.totalStudents);
console.log("Excellent (>=90):", result.excellent);
console.log("Pass (60-89):", result.pass);
console.log("Fail (<60):", result.fail);
console.log("Average Score:", result.average);
