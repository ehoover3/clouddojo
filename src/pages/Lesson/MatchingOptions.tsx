import React, { useState } from "react";
import "./MatchingOptions.css";

interface Pair {
  left: string;
  right: string;
}

interface MatchingOptionsProps {
  pairs: MatchingOptions;
  onSelect: (pairs: Pair[]) => void;
  disabled: boolean;
}

const MatchingOptions: React.FC<MatchingOptionsProps> = ({ pairs, onSelect, disabled }) => {
  const [selectedPairs, setSelectedPairs] = useState<Pair[]>([]);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  const handleTermClick = (term: string) => {
    if (!disabled) {
      setSelectedTerm(term);
    }
  };

  const handleDefinitionClick = (definition: string) => {
    if (!disabled && selectedTerm) {
      const newPair: Pair = { left: selectedTerm, right: definition };
      const newSelectedPairs = [...selectedPairs.filter((pair) => pair.left !== selectedTerm), newPair];
      setSelectedPairs(newSelectedPairs);
      setSelectedTerm(null);
      onSelect(newSelectedPairs);
    }
  };

  return (
    <div className='matching-options'>
      <div className='terms'>
        {pairs.leftOptions.map((term, index) => (
          <div key={index} className={`term ${selectedTerm === term ? "selected" : ""}`} onClick={() => handleTermClick(term)}>
            {term}
          </div>
        ))}
      </div>
      <div className='definitions'>
        {pairs.rightOptions.map((definition, index) => (
          <div key={index} className={`definition ${selectedPairs.some((p) => p.right === definition) ? "selected" : ""}`} onClick={() => handleDefinitionClick(definition)}>
            {definition}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingOptions;
