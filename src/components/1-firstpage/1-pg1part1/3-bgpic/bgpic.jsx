import Image from "next/image";
import { motion } from "framer-motion";
import bgImg from "../../../../../public/assests/images/exo-ape-hero-1.jpg";
export default function BgPic({overlayOpacity}) {
  return (
    <div className="h-[105vh] w-screen" style={{ opacity:overlayOpacity }}>
      <motion.div
        initial={{
          y: "5vh",
          scale: 1.2,
          rotate: "15deg",
          x: "10%",
          opacity: 0,
        }}
        animate={{ y: "0%", scale: 1, rotate: "0deg", x: "0%", opacity: 1 }}
        transition={{ duration: 1, ease: "backInOut" }}
      >
        <Image
          alt="background image"
          src={bgImg}
          className=" h-[105vh] w-screen object-cover  object-center"
        ></Image>
      </motion.div>

      <motion.div
        className=" h-[105vh] w-screen absolute  top-0"
        style={{ backgroundColor: "black", opacity: overlayOpacity }}
      ></motion.div>
    </div>
  );
}
