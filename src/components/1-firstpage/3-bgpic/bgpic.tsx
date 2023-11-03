import Image from "next/image";
import { motion } from "framer-motion";
import bgImg from "../../../../public/assests/images/exo-ape-hero-1.jpg";
export default function BgPic() {
  return (
    <div>
      <motion.div>
        <div className="bg-black h-[105vh] w-screen fixed bg-opacity-25 z-10"></div>
        <Image
          alt="background image"
          src={bgImg}
          className=" h-[105vh] w-screen fixed object-cover object-center"
        />
      </motion.div>
    </div>
  );
}
