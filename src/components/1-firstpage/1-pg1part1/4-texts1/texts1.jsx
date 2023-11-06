import { motion } from "framer-motion";
export default function Text1({ txtView,arrowOpacity }) {
  const txt1 = [
    "Global digital design studio partnering",
    "with brands and business that create",
    "exceptional experiences where people",
    "live, work and unwind.",
  ];
  const txt2 = ["Digital", "Design", "Experience"];
 
  return (
    <div >
      <div className=" px-5  md:px-8 ">
        {/* global design */}
        <div className="text-lg font-medium pb-5 sm:pb-8 sm:text-xl md:tracking-wider  ">
          {txt1.map((txt, index) => (
            <div key={index} className="overflow-hidden">
              <motion.div
                variants={{
                  initial: { y: "130%", rotate: "5deg" },
                  viewT: { y: "0%", rotate: "0deg" },
                  viewF: { y: "-130%", rotate: "0deg", opacity: 0 },
                }}
                initial={"initial"}
                animate={txtView ? "viewT" : "viewF"}
                transition={{
                  duration: index / 5 + 0.4,
                  ease: "backInOut",
                  delay: 0.1,
                }}
              >
                {txt}
              </motion.div>
            </div>
          ))}
        </div>
        {/* digital design */}
        <div className="text-6xl mb-5 font-medium sm:mb-8 sm:text-7xl    ">
          {txt2.map((txt, index) => (
            <div key={index} className="overflow-hidden">
              <motion.div
                className="pb-2 md:pb-5"
                variants={{
                  initial: { y: "135%", rotate: "10deg" },
                  viewT: { y: "0%", rotate: "0deg" },
                  viewF: { y: "-135%", rotate: "-10deg" },
                }}
                initial={"initial"}
                animate={txtView ? "viewT" : "viewF"}
                transition={{
                  duration: index / 5 + 0.4,
                  ease: "backInOut",
                  delay: 0.4,
                }}
              >
                {txt}
              </motion.div>
            </div>
          ))}
        </div>
        {/* arrow */}
        <motion.div className=" pb-5  text-2xl sm:pb-8 sm:text-3xl lg:text-4xl" style={{opacity:arrowOpacity}}>&darr;</motion.div>
      </div>
      
    </div>
  );
}
