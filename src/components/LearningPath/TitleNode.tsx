import { AWS_CLOUD_CONCEPTS_WIDTH, X } from "../../data/constants";

interface TitleNodeProps {
  y: number;
  topText: string;
  bottomText: string;
}

function TitleNode({ y, topText, bottomText }: TitleNodeProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "24px",
        position: "absolute",
        left: `calc(50%  + ${X[0]} -  (${AWS_CLOUD_CONCEPTS_WIDTH}/2))`,
        top: `${y}px`,
      }}>
      <span>{topText}</span>
      <span>{bottomText}</span>
    </div>
  );
}

export default TitleNode;
