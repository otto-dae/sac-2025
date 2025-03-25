interface AttendanceSheetProps {
  width: number;
  height: number;
  children?: React.ReactNode; 
}

const AttendanceSheet: React.FC<AttendanceSheetProps> = ({ width, height, children }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 639 407" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1595_2231)">
        <rect y="34" width="639" height="334" rx="52" fill="white"/>
        <path d="M166 68H212V52L166 52V68Z" fill="#67D6FE"/>
        <path d="M147 52L231 52V-17L147 -17V52Z" fill="#67D6FE"/>
      </g>
      <path d="M128 0H82V16H128V0Z" fill="white"/>
      <path d="M147 16H63V85H147V16Z" fill="white"/>
      <path d="M466 407H512V391H466V407Z" fill="white"/>
      <path d="M447 391H531V322H447V391Z" fill="white"/>
      <path d="M540 407H586V391H540V407Z" fill="white"/>
      <path d="M521 391H605V322H521V391Z" fill="white"/>
      <defs>
        <clipPath id="clip0_1595_2231">
          <rect y="34" width="639" height="334" rx="52" fill="white"/>
        </clipPath>
      </defs>
      {children} {/* Aquí se renderizan los hijos */}
    </svg>
  );
}

export default AttendanceSheet;
