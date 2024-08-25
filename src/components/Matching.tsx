import React, { useState, useEffect } from "react";
import TextDisplay from "./TextDisplay";
import Button from "./Button";
import MatchingItems from "./MatchingItems";
import { Question } from "../pages/Lesson";

interface AnswerOptionsProps {
  currentQuestion: Question;
  questionQueue: number[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setAnsweredCorrectlyCount: React.Dispatch<React.SetStateAction<number>>;
  onQuizComplete: () => void;
}

const Matching: React.FC<AnswerOptionsProps> = ({ currentQuestion, questionQueue, currentQuestionIndex, setCurrentQuestionIndex, setAnsweredCorrectlyCount, onQuizComplete }) => {
  const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matches, setMatches] = useState<{ left: string; right: string }[]>([]);

  const handleSelectLeft = (item: string) => {
    if (!matches.some((match) => match.left === item)) {
      setSelectedLeft(item);
    }
  };

  const handleSelectRight = (item: string) => {
    if (!matches.some((match) => match.right === item)) {
      setSelectedRight(item);
    }
  };

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      const correctPair = currentQuestion.answerPairs?.some((pair: any) => pair[0] === selectedLeft && pair[1] === selectedRight);
      if (correctPair) {
        setMatches((prevMatches) => [...prevMatches, { left: selectedLeft, right: selectedRight }]);
      }
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  }, [selectedLeft, selectedRight, currentQuestion.answerPairs]);

  useEffect(() => {
    if (matches.length === currentQuestion.answerPairs?.length) {
      setAnsweredCorrectlyCount((prev: number) => prev + 1);
    }
  }, [matches, currentQuestion.answerPairs, setAnsweredCorrectlyCount]);

  const handleContinue = () => {
    if (currentQuestionIndex < questionQueue.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      onQuizComplete();
    }
  };

  return (
    <div>
      <TextDisplay text={currentQuestion.text} />
      <MatchingItems answerOptions={currentQuestion.answerOptions} selectedLeft={selectedLeft} selectedRight={selectedRight} matches={matches} onSelectLeft={handleSelectLeft} onSelectRight={handleSelectRight} publicUrl={publicUrl} />
      <Button text='Continue' onClick={handleContinue} disabled={matches.length !== currentQuestion.answerPairs?.length} className={matches.length === currentQuestion.answerPairs?.length ? "btn-green" : "btn-gray"} />
    </div>
  );
};

export default Matching;
