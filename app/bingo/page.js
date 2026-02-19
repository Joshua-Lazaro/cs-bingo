"use client";
import { useState } from "react";
import Donut from "../donut/page";
import wordBank from "../wordbank.json";
import Image from "next/image";

export default function Bingo() {
  //bingo - a state variable to hold the current bingo word
  //setBingo - a function to update the bingo state variable
  const [bingo, setBingo] = useState("Click the button to begin!");
  const [isGenerating, setIsGenerating] = useState(false);
  const [definition, setDefinition] = useState("");
  const [usedWords, setUsedWords] = useState([]);
  
  const allWords = Object.values(wordBank.wordBank?.[0] ?? {}).flat();


  function generateBingoWord() {
    setIsGenerating(true);
    // Clear the previous word immediately
    setBingo("");
    setDefinition("");

    const remainingWords = allWords.filter(
      word => !usedWords.some(used => used.word == word.word)
    );

    if (!remainingWords.length) {
      setBingo("All words have been used, Resetting...");
      setDefinition("Click button to generate word");
      setUsedWords([]);
      setIsGenerating(false);
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingWords.length);
    const selectedWord = remainingWords[randomIndex];

    // Set the word after donut animation (approximately 4.3 seconds)
    setTimeout(() => {
      setBingo(selectedWord.word);
      setDefinition(selectedWord.definition);
      setUsedWords([...usedWords, selectedWord]);
    }, 3300);

    setTimeout(() => {
      setIsGenerating(false);
    }, 3000); // Hide the donut after 5 seconds
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-linear-to-r from-[#eb2124] from-75% to-[#001c40] to-25% h-2 w-full absolute top-0 left-0"></div>
      <div className="w-full max-w-6xl flex flex-col justify-center items-center">
        {/* Header */}
        <div className="text-center">
          <Image src="/bscomsci.png" alt="BS-Comsci Logo"  width={450} height={100} className="mx-auto mt-4 mb-4" />
          <p className="text-gray-600 text-lg">CS Bingo - Generate random computer science terms</p>
          <p className="text-gray-500 text-sm mt-2">
            Words used: {usedWords.length} / {allWords.length}
          </p>
        </div>

        <div className="w-2xl h-100 bg-gray-50 rounded-lg shadow-lg border-lg border-gray-200 my-10 relative flex justify-center items-center min-h-80">
          {/* Donut loading animation */}
          <div className={`absolute transition-opacity duration-900 ease-in-out ${isGenerating ? 'opacity-100' : 'opacity-0'}`}>
            <Donut />
          </div>
          
          {/* The Bingo text fading in when loading stops */}
          <div className={`absolute text-center transition-opacity ${!isGenerating ? 'opacity-100 delay-700' : 'opacity-0 delay-0'}`}>
            <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#eb2124] to-[#001c40] mb-6 block">
              {bingo}
            </span>
            <div className="h-1 w-16 bg-gradient-to-r from-[#eb2124] to-[#001c40] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 font-medium max-w-sm">
              {definition}
            </p>
          </div>
        </div>
        <button className="mx-auto bg-red-500 rounded-lg shadow-md p-3">
          <p className="text-white text-2xl" onClick={generateBingoWord}>Next Word</p>
        </button>
      </div>
      <div className="bg-linear-to-r from-[#eb2124] from-75% to-[#001c40] to-25% h-2 w-full absolute bottom-0 left-0"></div>
    </div>
  );
} 