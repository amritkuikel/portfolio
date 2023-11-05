"use client";
import Navbar from "./1-navbar/navbar";
import BgPic from "./3-bgpic/bgpic";
import Texts from "./4-texts/texts";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function FirstPage() {
  const exoRef = useRef(null);
  const exoView = useInView(exoRef);
  const txtRef = useRef(null);
  const txtView = useInView(txtRef);

  return (
    <div>
      <Navbar exoView={exoView} />
      <BgPic />
      <div className="absolute h-screen w-screen  top-0">
        <div className="h-20" ref={txtRef}>
          <div className="h-1 " ref={exoRef}></div>
        </div>
      </div>
      <Texts txtView={txtView}/>
    </div>
  );
}
