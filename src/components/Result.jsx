import { useState, useEffect } from "react";

export default function Result({ result }) {
  const [results, setResults] = useState(result);
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < results.length; i++) {
      sum += results[i].score;
    }
    const average = sum / results.length;
    setAverageScore(Math.floor(average));
  }, [results]);

  return (
    <div className="w-full bg-gradient-to-b from-[#6743ff] via-[#442ee1] to-[#442ee1] p-4 rounded-b-3xl md:rounded-3xl md:w-1/2">
      <h2 className="text-lg font-medium text-indigo-200 text-center p-5">Your Result</h2>
      <div className="mx-auto text-5xl font-bold text-white bg-[#442ee1] rounded-full w-40 h-40 flex justify-center flex-col items-center md:text-6xl">
        <p>{averageScore}</p>
        <p className="text-lg text-indigo-300 font-medium md:text-sm">of 100</p>
      </div>
      <div className="text-center p-4">
         <h3 className="text-3xl font-bold text-white p-2 md:text-2xl">Great</h3>
         <p className="text-indigo-300 font-medium p-2 md:px-5">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  );
}
