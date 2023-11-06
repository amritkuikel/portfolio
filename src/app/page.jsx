"use client";
import FirstPage from "@/components/1-firstpage/firstpage";
import Test from "@/components/test/test";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <div className=" text-white w-screen overflow-x-hidden">
      <FirstPage />
      <Test />
    </div>
  );
}
