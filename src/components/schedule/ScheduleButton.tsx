interface props {
  text: string;
  styling: string;
  Bstyling: string;
  clicker: () => void;
}

const ScheduleButton = ({ text, clicker, styling, Bstyling }: props) => {
  return (
    <div className="relative text-xs w-30 md:w-52 md:text-2xl group transition-all flex justify-center "
    onClick={clicker}>
      <button
        className={`md:w-48 w-26 text-center font-bold p-3 m-2 border-2 absolute top-0 left-0 ${Bstyling} z-10 origin-top -rotate-x-90 group-hover:rotate-x-0 focus:rotate-x-0 transition-all`}
      >
        {text.toUpperCase()}
      </button>
      <div
        className={`w-30 md:w-50 text-center font-bold p-3 m-2 border-2 ${styling}`}
      >
        {text.toUpperCase()}
      </div>
    </div>
  );
};

export default ScheduleButton;
