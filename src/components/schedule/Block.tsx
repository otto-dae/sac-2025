interface props {
  hour: string
}

const Block = ({hour}: props) => {
  return (
    <div className="w-28 relative h-full col-start-1 row-span-1">
      <div className=" w-full h-3 flex flex-row justify-center gap-6 absolute top-[-12px] pr-2 pl-2">
        <div className={` h-full w-12 bg-black`}></div>
        <div className={` h-full w-12 bg-black`}></div>
      </div>

      <div
        className={`w-full h-full min-w-25 content-center p-3 text-center font-bold text-xl bg-black text-white`}
      >
        {hour}
      </div>
    </div>
  );
};

export default Block;
