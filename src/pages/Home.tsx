import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
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
        SEEDesign
      </h1>
      <p className="para">
        Design team showcases the essence of our design philosophy through the
        various products we make. Our team plants different design elements in
        each product, growing stronger by constantly absorbing nutrients from
        innovation, exploration and dialogue. By devoting ourselves to this
        pursuit of design perfection, we firmly believe our ethos can resonate
        in the hearts of our users. Built upon a solid design foundation and
        optimized user experience, we believe our innovative designs will
        gradually spread out to hardware users across the world.
      </p>
    </>
  );
}
