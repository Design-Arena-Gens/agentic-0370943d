"use client";

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const vocabulary = [
  { guarani: 'Mba\'éichapa?', english: 'How are you?' },
  { guarani: 'Iporã', english: 'Good' },
  { guarani: 'Ha nde?', english: 'And you?' },
  { guarani: 'Jajoecha peve', english: 'See you later' },
];

export default function VocabularyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vocabulary.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + vocabulary.length) % vocabulary.length);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Vocabulary Flashcards</h1>
      <div className="flex flex-col items-center">
        <div
          className="w-80 h-48 border-2 border-primary rounded-lg flex items-center justify-center text-2xl font-semibold cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {isFlipped ? vocabulary[currentIndex].english : vocabulary[currentIndex].guarani}
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <button onClick={handlePrev} className="p-2 rounded-full bg-primary text-white">
            <ArrowLeft size={24} />
          </button>
          <span>{currentIndex + 1} / {vocabulary.length}</span>
          <button onClick={handleNext} className="p-2 rounded-full bg-primary text-white">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
