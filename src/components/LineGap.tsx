interface LineGapProps {
  margin: string;
}

const LineGap: React.FC<LineGapProps> = ({ margin }) => {
  return <div style={{ margin: margin }}></div>;
};

export default LineGap;
