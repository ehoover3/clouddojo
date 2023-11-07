import React from "react";

interface MenuCardProps {
  questions: any; // Replace 'any' with the actual type of 'questions'
  subtitle: string; // Change 'string' to the appropriate type for 'subtitle'
  startQuiz: (questions: any) => void; // Update 'any' with the actual type of 'questions'
}

function MenuCard(props: MenuCardProps) {
  return (
    <div className='menu-container'>
      <div className='menu-section'>
        <button className='menu-button' onClick={() => props.startQuiz(props.questions)}>
          <span>{props.subtitle}</span>
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
