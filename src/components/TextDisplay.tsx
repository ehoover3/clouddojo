interface TextDisplayProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ text, fontSize = "16x", fontWeight = "normal" }) => {
  return <div style={{ fontSize: fontSize, fontWeight: fontWeight }}>{text}</div>;
};

export default TextDisplay;
