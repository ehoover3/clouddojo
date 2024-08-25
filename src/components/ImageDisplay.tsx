interface TextDisplayProps {
  img: string;
  alt: string;
  className?: string;
}

const ImageDisplay: React.FC<TextDisplayProps> = ({ img, alt, className }) => {
  return <img src={img} alt={alt} className={className} />;
};

export default ImageDisplay;
