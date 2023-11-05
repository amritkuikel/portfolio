const txt3 = [
    "We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space.",
    "Unforgettable journeys start with a click.",
  ];
export default function Text2() {
  return (
    <div>
      <div className=" px-5 z-10 ">
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
