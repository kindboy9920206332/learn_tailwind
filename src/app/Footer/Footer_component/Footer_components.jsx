import Image from "next/image";
export default function Footer_components() {
  return (
    <>
      <div className="  w-[400px] h-[500px] bg-slate-400 flex justify-center items-center rounded-[5px] shadow-2xl shadow-cyan-500/50  ">
        <p className="text-red-700 font-bold text-[40px]">
          mohammadreza haghverdy
        </p>
        <button className="ring-blue-500 ring-4 rounded-[5px] ">
          click me!
        </button>
        
        <button>login</button>
      </div>
    </>
  );
}
