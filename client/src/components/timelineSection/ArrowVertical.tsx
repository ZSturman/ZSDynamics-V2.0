import ArrowVerticalTop from "./ArrowVerticalTop";

interface ArrowVerticalProps {
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  color: string;
}

const ArrowVertical: React.FC<ArrowVerticalProps> = ({
  startMonth,
  startYear,
  endMonth,
  endYear,
  color,
}) => {
  return (
    <>
      <div className="triangle">
        <ArrowVerticalTop color={color} />
      </div>
      <div className="experience-date">
        <div>
          {startMonth}
        </div>
        <div>
          {startYear}-
        </div>
      </div>

      <div className="experience-date">
        <div>
          {endMonth ? endMonth : "Present"}
          {endYear ? endYear : ""}
        </div>
      </div>
      <div
        className="vertical-arrow-base"
        style={{ backgroundColor: color }}
      ></div>
    </>
  );
};

export default ArrowVertical;
