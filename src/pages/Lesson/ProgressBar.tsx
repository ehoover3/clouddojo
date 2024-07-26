// src/components/ProgressBar.tsx
import React from "react";
import "./ProgressBar.css";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className='progress-bar-container'>
      <div className='progress-bar' style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
