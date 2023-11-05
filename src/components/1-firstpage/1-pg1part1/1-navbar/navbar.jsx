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
      

      <div
        className="flex items-center justify-between pt-5 pb-2 "
        style={{
          backgroundColor: isOpen ? "rgb(23,23,23)" : "",
          color: isOpen ? "rgb(212,212,212)" : "white",
        }}
      >
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
            <div className="pl-5 font-bold text-3xl">exo</div>
            <div className="px-1  font-light text-3xl  italic ">ape</div>
          </motion.div>
        </div>

        <div>
          <div className="flex pr-5 items-center" onClick={clickHandler}>
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
      </div>
      <PopUpMenu isOpen={isOpen} />
    </div>
  );
}
