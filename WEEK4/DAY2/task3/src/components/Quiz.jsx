import { useState } from 'react';

const questions = [
  { q: "What is the capital of Nepal?", options: ["Pokhara", "Kathmandu", "Sarlahi"], answer: "Kathmandu" },
  { q: "2 + 2 equals?", options: ["3", "4", "5"], answer: "4" },
  { q: "Which is a frontend library?", options: ["Node.js", "Express", "React"], answer: "React" },
];

const Quiz = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const handleSelect = (index, option) => {
    const updated = [...answers];
    updated[index] = option;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    let total = 0;
    answers.forEach((a, i) => {
      if (a === questions[i].answer) total++;
    });
    setScore(total);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Simple Quiz</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{q.q}</p>
          {q.options.map((opt, j) => (
            <label key={j} className="block">
              <input
                type="radio"
                name={`q${i}`}
                value={opt}
                checked={answers[i] === opt}
                onChange={() => handleSelect(i, opt)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Submit
      </button>
      {score !== null && <p className="mt-4 text-xl">Your score: {score} / {questions.length}</p>}
    </div>
  );
};

export default Quiz;
