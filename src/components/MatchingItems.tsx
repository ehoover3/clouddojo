import React from "react";

interface MatchingItemsProps {
  answerOptions: any[];
  selectedLeft: string | null;
  selectedRight: string | null;
  matches: { left: string; right: string }[];
  onSelectLeft: (item: string) => void;
  onSelectRight: (item: string) => void;
  publicUrl: string;
}

interface MatchingItemsSideProps {
  items: any[];
  selected: string | null;
  matches: { left: string; right: string }[];
  onItemClick: (item: string) => void;
  publicUrl: string;
  direction: "left" | "right";
}

interface MatchingItem {
  item: any;
  isSelected: boolean;
  isMatched: boolean;
  onClick: () => void;
  publicUrl: string;
}

const MatchingItems: React.FC<MatchingItemsProps> = ({ answerOptions, selectedLeft, selectedRight, matches, onSelectLeft, onSelectRight, publicUrl }) => {
  return (
    <div className='matching-container' style={{ display: "flex" }}>
      <MatchingItemsSide items={answerOptions} selected={selectedLeft} matches={matches} onItemClick={onSelectLeft} publicUrl={publicUrl} direction='left' />
      <MatchingItemsSide items={answerOptions} selected={selectedRight} matches={matches} onItemClick={onSelectRight} publicUrl={publicUrl} direction='right' />
    </div>
  );
};

const MatchingItemsSide: React.FC<MatchingItemsSideProps> = ({ items, selected, matches, onItemClick, publicUrl, direction }) => {
  return (
    <div className={`${direction}-items`}>
      {items
        .filter((option) => option.direction === direction)
        .map((option, index) => {
          const isSelected = selected === option.answerText;
          const isMatched = matches.some((match) => (direction === "left" ? match.left : match.right) === option.answerText);
          return <MatchingItem key={index} item={option} isSelected={isSelected} isMatched={isMatched} onClick={() => onItemClick(option.answerText)} publicUrl={publicUrl} />;
        })}
    </div>
  );
};

const MatchingItem: React.FC<MatchingItem> = ({ item, isSelected, isMatched, onClick, publicUrl }) => {
  const backgroundColor = isMatched ? "grey" : isSelected ? "lightblue" : "transparent";
  return (
    <div className={`matching-item ${isSelected ? "selected" : ""} ${isMatched ? "matched" : ""}`} onClick={onClick} style={{ backgroundColor }}>
      {item.answerImg && <img src={`${publicUrl}/images/${item.answerImg}`} style={{ width: "10vw" }} alt='Option' />}
      {item.answerText}
    </div>
  );
};

export default MatchingItems;
