export default function PopUpMenu() {
  return (
    <div>
      <div className="h-screen w-screen fixed bg-neutral-900 text-neutral-300 z-20">
        <div className="pl-10 pt-[20vh]">
          <div className="text-5xl mb-3 font-medium ">Work</div>
          <div className="text-5xl mb-3 font-medium ">Studio</div>
          <div className="text-5xl mb-3 font-medium ">News</div>
          <div className="text-5xl font-medium ">Contact</div>
          <div className="flex items-center pt-7">
            <div className=" border-2 rounded-full h-2 w-2 -ml-3 mr-1 "></div>
            <div className="text-lg font-medium underline underline-offset-4 ">
              Now Hiring!
            </div>
          </div>

          <div className="mt-7 text-gray-500">Play Reel</div>
          <div className=" text-gray-500">Our Story</div>
        </div>
      </div>
    </div>
  );
}
