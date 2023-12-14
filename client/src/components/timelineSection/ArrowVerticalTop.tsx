interface ArrowVerticalTopProps {
    color: string
}

const ArrowVerticalTop: React.FC<ArrowVerticalTopProps> = ({color}) => {
    return (
        <svg className="vertical-arrow-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 53" style={{fill: color}}>
        <path d="M30.6664 2.0267C32.2486 -0.358993 35.7514 -0.358996 37.3336 2.0267L66.6873 46.2893C68.4506 48.9481 66.5441 52.5 63.3537 52.5H4.64629C1.45589 52.5 -0.450568 48.9481 1.31271 46.2893L30.6664 2.0267Z"/>
      </svg>
    );
    }

    export default ArrowVerticalTop;