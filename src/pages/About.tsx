import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function About() {
  useGSAP(function () {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <>
      <h1 id="text" style={{ opacity: 0, transform: "translateY(10px)" }}>
        About us
      </h1>
      <p className="para">
        We offers a comprehensive product lineup that aims to “Upgrade Your
        Life.” With expertise encompassing consumer, business, gaming, and cloud
        systems, We established its reputation as a leader in the industry with
        award-winning graphics cards.
      </p>
    </>
  );
}
