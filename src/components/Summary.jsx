import data from "../assets/data.json";

function Element({ category, score, icon }) {
  const color = {
    Memory: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 duration-300",
    Verbal: "bg-green-200 text-green-600 hover:bg-green-300 duration-300",
    Reaction: "bg-red-100 text-red-500 hover:bg-red-200 duration-300",
    default: "bg-blue-100 text-blue-500 hover:bg-blue-200 duration-300",
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
   return (
     <section className="flex flex-row gap-2 flex-wrap align-center justify-center py-4 px-6 h-full md:w-1/2 md:px-8 md:py-6">
       <h3 className="flex-grow w-full text-left font-bold py-1 text-md text-slate-900"> Summary </h3>
       <div className="w-full flex flex-col gap-4 py-2">
       {results.map((result) => <Element category={result.category} score={result.score} icon={result.icon} />)}
       </div>
       <button className="w-full duration-300 bg-slate-800 text-white font-medium py-4 px-4 rounded-3xl hover:bg-slate-600">
        Continue
       </button>
     </section>
   );
 }
 