interface MenuCardProps {
  questions: any;
  subtitle: string;
  startQuiz: (questions: any) => void;
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
