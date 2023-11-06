const txt3 = [
  "We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space.",
  "Unforgettable journeys start with a click.",
];
export default function Text2() {
  return (
    <div >
      <div className=" px-5 md:px-8 z-10 md:tracking-wider  ">
        <div className="text-lg font-medium pb-5 sm:pb-8 sm:text-xl pr-52">
          {txt3.map((txt, index) => (
            <div key={index}>{txt}</div>
          ))}
        </div>
        <div className="flex justify-between md:pt-8">
          <div className="flex items-center">
            <div className=" border-2 rounded-full h-2 w-2 -ml-3 mr-1 "></div>
            <div className="text-lg font-medium underline underline-offset-4  sm:text-xl">
              The Studio
            </div>
          </div>
          <div className="hidden sm:block pr-8 font-light text-lg md:text-xl md:font-medium ">
            <div className="flex pt-2">
              <div className="flex-col pr-8">
                <div>Work</div>
                <div>Studio</div>
                <div>News</div>
                <div>Contact</div>
              </div>
              <div>
                <div>asdhfhsjd@gmail.com</div>
                <div>+2352346543</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
