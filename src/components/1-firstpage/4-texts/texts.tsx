export default function Texts() {
  const txt1: any[] = [
    "Global digital design studio partnering",
    "with brands and business that create",
    "exceptional experiences where people",
    "live, work and unwind.",
  ];
  const txt2: any[] = ["Digital", "Design", "Experience"];
  const txt3: any[] = [
    "We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space.",
    "Unforgettable journeys start with a click.",
  ];
  return (
    <div>
      <div className="absolute px-5 z-10  bottom-0">
        <div className="text-lg font-medium pb-5">
          {txt1.map((txt, index) => (
            <div key={index}>{txt}</div>
          ))}
        </div>
        <div className="text-6xl mb-5 font-medium ">
          {txt2.map((txt, index) => (
            <div key={index} className="pb-2">
              {txt}
            </div>
          ))}
        </div>
        <div className="pt-3 pb-5  text-2xl">&darr;</div>
      </div>
      <div className="absolute px-5 z-10 ">
        <div className="text-lg font-medium pb-5">
          {txt3.map((txt, index) => (
            <div key={index}>{txt}</div>
          ))}
        </div>
        <div className="flex items-center">
          <div className=" border-2 rounded-full h-2 w-2 -ml-3 mr-1 "></div>
          <div className="text-lg font-medium underline underline-offset-4">
            The Studio
          </div>
        </div>
      </div>
    </div>
  );
}
