interface props {
  iHour: string
  fHour: string
  color: string
}

const Rectangle = ({iHour, fHour, color}: props) => {
  return (
    <div className={`w-full h-full min-w-54 content-center p-4 text-center ${color}`}>
      <p className=" bg-white rounded-4xl p-5 h-full w-full content-center font-bold text-xl text-center">
        {iHour} - {fHour}
      </p>
    </div>
  );
};

export default Rectangle;
