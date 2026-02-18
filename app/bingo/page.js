import { useState } from "react";
import Donut from "../donut/page";

export default function Bingo() {
  //bingo - a state variable to hold the current bingo word
  //setBingo - a function to update the bingo state variable
  const [bingo, setBingo] = useState("Click the button to generate a word!");
  const [isGenerating, setIsGenerating] = useState(false);

    const wordBank = [
      //Basics
      "Variable", "Loop", "If-Else", "Boolean", "Integer", 
      "String", "Constant", "Function", "Parameter",
      
      //Languages
      "Java", "C++", "Ruby", "Swift", "PHP", 
      "Go", "Rust", "C#", "JavaScript",
      
      //Data Structures
      "Linked List", "Stack", "Queue", "Tree", "FIFO", 
      "Hash Table", "Heap", "Vector", "Matrix",
      
      //Web Dev
      "HTML", "CSS", "div", "API", "DOM", 
      "Backend", "Frontend", "UI / UX", "JSON",
      
      //Database
      "CREATE", "SQL", "Database", "Primary Key", "Foreign Key", 
      "Normalization", "Index", "Query", "INSERT"
    ];

  function generateBingoWord() {
    setIsGenerating(true);
    const randomIndex = Math.floor(Math.random() * wordBank.length);
    const selectedWord = wordBank[randomIndex];
    setBingo(selectedWord);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000); // Hide the donut after 2 seconds
  }
  return (
        <div className="flex flex-col items-center min-h-screen w-full bg-zinc-100 justify-center gap-6">
            <div className="bg-gradient-to-r from-[#eb2124] from-75% to-[#001c40] to-25% h-2 w-full absolute top-0 left-0"></div>
            <div className=" flex flex-col items-center justify-center gap-2 pb-5">
              <h1 className="text-4xl text-[#171717] font-bold mb-8">Bingo Game</h1>
            </div>

            <div className="w-150 h-90 flex flex-col items-center gap-7 rounded-xl p-5 shadow-2xl bg-white">
              <div className=" flex-1 flex items-center justify-center">
                <h1 className="text-3xl text-[#171717] font-semibold"> 
                  {isGenerating ? (<Donut />) : bingo}
                </h1>
              </div>
            </div>
            <button type="button" onClick={generateBingoWord}
                  className="bg-[#eb2124] text-white px-4 py-2 rounded-lg hover:bg-[#c01c1f] transition-colors">
                  Generate Word
            </button>
            <div className="bg-gradient-to-r from-[#001c40] from-75% to-[#eb2124] to-25% h-2 w-full absolute bottom-0 left-0"></div>*
        </div>
  );
}