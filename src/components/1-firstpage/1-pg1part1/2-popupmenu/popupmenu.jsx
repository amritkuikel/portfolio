import { AnimatePresence, motion } from "framer-motion";
export default function PopUpMenu({ isOpen }) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="sfd"
          initial={{
            y: "-100%",
            scale: 1.3,
            rotate: "15deg",

            opacity: 0,
          }}
          exit={{ rotate: "15deg", scale: 1.3, y: "-150%" }}
          animate={{ y: "0%", scale: 1, rotate: "0deg", opacity: 1 }}
          transition={{ duration: 1.3, ease: "backInOut" }}
          className="h-screen w-screen fixed bg-neutral-900 text-neutral-300 "
        >
          <div className="pl-10 pt-[20vh]">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "135%", rotate: "10deg" }}
                animate={{ y: "0%", rotate: "0deg" }}
                transition={{ ease: "backInOut", duration: 1, delay: 0.5 }}
                className="text-5xl mb-3 font-medium "
              >
                Work
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "135%", rotate: "10deg" }}
                animate={{ y: "0%", rotate: "0deg" }}
                transition={{ ease: "backInOut", duration: 1, delay:0.5 }}
                className="text-5xl mb-3 font-medium "
              >
                Studio
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "135%", rotate: "10deg" }}
                animate={{ y: "0%", rotate: "0deg" }}
                transition={{ ease: "backInOut", duration: 1, delay: 0.5 }}
                className="text-5xl mb-3 font-medium "
              >
                News
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "135%", rotate: "10deg" }}
                animate={{ y: "0%", rotate: "0deg" }}
                transition={{ ease: "backInOut", duration: 1, delay: 0.5 }}
                className="text-5xl font-medium "
              >
                Contact
              </motion.div>
            </div>
            <div className="flex items-center pt-7">
              <div className=" border-2 rounded-full h-2 w-2 -ml-3 mr-1 "></div>
              <div className="text-lg font-medium underline underline-offset-4 ">
                Now Hiring!
              </div>
            </div>

            <div className="mt-7 text-gray-500">Play Reel</div>
            <div className=" text-gray-500">Our Story</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
