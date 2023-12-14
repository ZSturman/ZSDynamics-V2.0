interface ArrowHorizontalTopProps {
  color: string
}

const ArrowHorizontal: React.FC<ArrowHorizontalTopProps> = ({color}) => {
  return (
    <svg
      className="experience-arrow-horizontal"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 847 25"
      
    >
      <path
        d="M20 10.5L-1.00947e-06 0.952994L1.00947e-06 24.047L20 14.5L20 10.5ZM846.547 12.4999L835 0.952921L823.453 12.4999L835 24.0469L846.547 12.4999ZM18 14.5L835 14.4999L835 10.4999L18 10.5L18 14.5Z"
        style={{fill: color}}
      />
    </svg>
  );
};

export default ArrowHorizontal;
