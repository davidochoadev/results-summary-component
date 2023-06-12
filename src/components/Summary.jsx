import data from "../../data.json";

function Element({ category, score, icon }) {
  const color = {
    Memory: "bg-yellow-100 text-yellow-500",
    Verbal: "bg-green-200 text-green-600",
    Reaction: "bg-red-100 text-red-500",
    default: "bg-blue-100 text-blue-500",
  };
  const categoryColor = color[category] || color.default;

   return (
    <div className={`w-full flex flex-row gap-2 h-full font-medium p-4 rounded-xl ${categoryColor}`}>
      <img src={icon} alt="" />
      <p>{category}</p>
      <p className="flex-grow text-right text font-bold text-slate-700">{score}<span className="text-gray-500 font-medium"> / 100</span></p>
    </div>
   );
 }
 
 export default function Summary() {
  const results = data;
  console.log(results);
   return (
     <section class="flex flex-row gap-2 flex-wrap align-center justify-center">
       <h3 className="flex-grow w-full text-left font-bold py-2"> Summary </h3>
       <div className="w-full flex flex-col gap-4">
       {results.map((result) => <Element category={result.category} score={result.score} icon={result.icon} />)}
       </div>
     </section>
   );
 }
 