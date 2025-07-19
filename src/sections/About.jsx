import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `OBSESSED WITH CLEAN ARCHITECTURE — I TURN IDEAS INTO SCALABLE, PRODUCTION-READY SOLUTIONS`;
  const aboutText = `I DON’T JUST BUILD APPS — I ENGINEER EXPERIENCES. FROM PIXEL-PERFECT REACT INTERFACES TO BACKENDS THAT WON’T BREAK UNDER A DDOS, EVERY LINE I WRITE SERVES SPEED, STABILITY, AND STYLE.

SLOW APPS? UGLY UI? NOT ON MY WATCH.
IF IT’S NOT FAST, INTUITIVE, AND SCALABLE — IT DOESN’T SHIP.

WHEN I’M NOT REWRITING THE INTERNET:

BREAKING THINGS IN PUBLIC AND OPEN-SOURCING THE FIX
LIFTING CODE AND WEIGHTS — BECAUSE PERFORMANCE MATTERS IN BOTH
CLIMBING ROCKS IRL WHEN BUG-HUNTING GETS TOO EASY
CAPTURING MOMENTS THROUGH TRAVEL & PHOTOGRAPHY — BECAUSE AESTHETICS MATTER ON AND OFF SCREEN`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"NOT JUST CODE — IT’S ARCHITECTURE WITH ATTITUDE."}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="/images/profile dp.jpeg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
