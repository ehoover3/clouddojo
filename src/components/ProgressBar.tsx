import React from "react";

interface ProgressBarProps {
  correctCount: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ correctCount: current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className='progress-bar-container'>
      <div className='progress-bar' style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
