"use client";
import Navbar from "./1-navbar/navbar";
import BgPic from "./3-bgpic/bgpic";
import Texts from "./4-texts/texts";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function FirstPage() {
  const exoRef = useRef(null);
  const exoDisplayRef = useInView(exoRef);
  return (
    <div className="relative">
      <BgPic />
      <Navbar exoDisplayRef = {exoDisplayRef}/>
      <div className="h-screen w-screen relative">
        <div className="w-screen h-1 " ref={exoRef}></div>
      </div>
      <Texts />
    </div>
  );
}
