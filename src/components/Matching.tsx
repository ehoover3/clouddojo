import React, { useState, useEffect } from "react";
import TextDisplay from "./TextDisplay";
import Button from "./Button";
import MatchingItems from "./MatchingItems";
import LineGap from "./LineGap";

interface AnswerOptionsProps {
  quiz: any;
  questionsToAsk: number[];
  currentQuestionIndex: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setCorrectCount: React.Dispatch<React.SetStateAction<number>>;
  completeQuiz: () => void;
}

const Matching: React.FC<AnswerOptionsProps> = ({ quiz, questionsToAsk, currentQuestionIndex, setCurrentQuestion, setCorrectCount, completeQuiz }) => {
  const question = quiz[questionsToAsk[currentQuestionIndex]];
  const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matches, setMatches] = useState<{ left: string; right: string }[]>([]);

  const handleSelectLeft = (item: string) => {
    if (!matches.some((match) => match.left === item)) setSelectedLeft(item);
  };

  const handleSelectRight = (item: string) => {
    if (!matches.some((match) => match.right === item)) setSelectedRight(item);
  };

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      const correctPair = question.answerPairs?.some((pair: any) => pair[0] === selectedLeft && pair[1] === selectedRight);
      if (correctPair) setMatches((prevMatches) => [...prevMatches, { left: selectedLeft, right: selectedRight }]);
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  }, [selectedLeft, selectedRight, question.answerPairs]);

  useEffect(() => {
    if (matches.length === question.answerPairs?.length) setCorrectCount((prev: number) => prev + 1);
  }, [matches, question.answerPairs, setCorrectCount]);

  const handleContinue = () => {
    const isLastQuestion = currentQuestionIndex >= questionsToAsk.length - 1;
    if (!isLastQuestion) {
      setCurrentQuestion((prev) => prev + 1);
    } else completeQuiz();
  };

  return (
    <div>
      <TextDisplay text={question.text} fontSize='25px' fontWeight='700' />
      <LineGap margin={"16px"} />
      <MatchingItems answerOptions={question.answerOptions} selectedLeft={selectedLeft} selectedRight={selectedRight} matches={matches} onSelectLeft={handleSelectLeft} onSelectRight={handleSelectRight} publicUrl={publicUrl} />
      <Button text='Continue' onClick={handleContinue} disabled={matches.length !== question.answerPairs?.length} className={matches.length === question.answerPairs?.length ? "btn-green" : "btn-gray"} width='90vw' position='fixed' bottom='16px' />
    </div>
  );
};

export default Matching;
