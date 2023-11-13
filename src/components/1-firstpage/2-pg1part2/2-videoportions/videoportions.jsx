import ReactPlayer from "react-player";

export default function VideoPortions() {
  return (
    <div className="bg-gray-400">
      <div className="text-black">fasdf</div>
      <ReactPlayer
        url='/assests/videos/exo.mp4'
        controls={false}
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
      />
      {/* <video autoPlay loop  muted src="/assests/videos/exo.mp4" className="h-44 "/> */}
    </div>
  );
}
