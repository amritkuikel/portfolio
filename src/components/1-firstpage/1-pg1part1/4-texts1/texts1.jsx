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
      <div className=" px-5  ">
        <div className="text-lg font-medium pb-5">
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
        <div className="text-6xl mb-5 font-medium ">
          {txt2.map((txt, index) => (
            <div key={index} className="overflow-hidden">
              <motion.div
                className="pb-2"
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
        <motion.div className="pt-3 pb-5  text-2xl" style={{opacity:arrowOpacity}}>&darr;</motion.div>
      </div>
      
    </div>
  );
}
