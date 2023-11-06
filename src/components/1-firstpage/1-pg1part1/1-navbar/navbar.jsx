"use client";
import { useState } from "react";
import PopUpMenu from "../2-popupmenu/popupmenu";
import { motion } from "framer-motion";

export default function Navbar({ exoView }) {
  const [isOpen, setIsOpen] = useState(false);
  function clickHandler() {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {/* navbar */}
      <div
        className="flex items-center justify-between pt-5 sm:pt-8 "
        style={{
          backgroundColor: isOpen ? "rgb(23,23,23)" : "",
          color: isOpen ? "rgb(212,212,212)" : "white",
        }}
      >
        {/* exo ape */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            variants={{
              initial: { y: "130%", rotate: "5deg" },
              viewT: { y: "0%", rotate: "0deg" },
              viewF: { y: "-130%", rotate: "0deg" },
            }}
            initial={"initial"}
            animate={exoView ? "viewT" : "viewF"}
            transition={{ duration: 0.125, ease: "backInOut" }}
          >
            <div className="pl-5 font-bold text-3xl sm:text-5xl lg:text-6xl md:pl-8">exo</div>
            <div className="px-1  font-light text-3xl  italic sm:text-5xl lg:text-6xl">ape</div>
          </motion.div>
        </div>
        {/* Menu mobile */}
        <div className="sm:hidden">
          <div className="flex pr-5 sm:pr-8 items-center" onClick={clickHandler}>
            <div className=" pr-3 text-sm font-medium">
              {isOpen ? "Close" : "Menu"}
            </div>
            <div
              className="flex-col self-center"
              style={{ display: isOpen ? "none" : "flex" }}
            >
              <div className=" w-5 h-0.5 bg-white"></div>
              <div className=" w-5 h-0.5 bg-white my-1"></div>
              <div className=" w-5 h-0.5 bg-white"></div>
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="font-bold text-lg"
            >
              &#10005;
            </div>
          </div>
        </div>
        {/* menu */}
        <div className="hidden sm:block">
          {" "}
          <div className="flex text-sm font-semibold sm:text-xl lg:text-2xl">
            <div className="pr-3">Work</div>
            <div className="pr-3">Studio</div>
            <div className="pr-3">News</div>
            <div className="pr-8">Contact</div>
          </div>
        </div>
      </div>
      {/* popup menu mobile */}
      <PopUpMenu isOpen={isOpen} />
    </div>
  );
}
