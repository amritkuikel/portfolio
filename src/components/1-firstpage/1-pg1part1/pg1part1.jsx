"use client";
import Navbar from "./1-navbar/navbar";
import BgPic from "./3-bgpic/bgpic";
import Text1 from "./4-texts1/texts1";
import Text2 from "./5-texts2/texts2";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function Pg1Part1() {
  const exoRef = useRef(null);
  const exoView = useInView(exoRef);
  const txtRef = useRef(null);
  const txtView = useInView(txtRef);
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"],
  });
  const springScroll = useSpring(scrollYProgress);
  const textScrollSpeed = useTransform(springScroll, [0, 1], ["0vh", "-50vh"]);
  const picScaling = useTransform(springScroll,[0,1],['1','1.3'])

  return (
    <div className="w-screen overflow-hidden">
      <div className="absolute h-screen w-screen top-0">
        <div className="h-36 " ref={parallaxRef}>
          <div className="h-10 " ref={txtRef}>
            <div className="h-1 " ref={exoRef}></div>
          </div>
        </div>
      </div>
      <motion.div className="relative -z-10" style={{scale:picScaling}}>
        <BgPic />
      </motion.div>     
      <motion.div>
        <motion.div className=" absolute bottom-0"style={{y:textScrollSpeed}}>
          <Text1 txtView={txtView} />
        </motion.div>
        <motion.div className="absolute" style={{y:textScrollSpeed}}>
          <Text2 />
        </motion.div>
      </motion.div>

      <div className="fixed w-screen top-0">
        <Navbar exoView={exoView} />
      </div>
    </div>
  );
}