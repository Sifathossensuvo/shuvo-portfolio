import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || reduced) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let raf;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px,0)`;
      }
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      // Increase for faster follow (0.28~0.45 best)
      ringX += (mouseX - ringX) * 0.28;
      ringY += (mouseY - ringY) * 0.28;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px,0)`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    // Hover Animation
    const enter = (e) => {
      if (
        e.target.closest(
          "a, button, input, textarea, select, [role='button']"
        )
      ) {
        ringRef.current?.classList.add("scale-[1.8]", "opacity-80");
      }
    };

    const leave = (e) => {
      if (
        e.target.closest(
          "a, button, input, textarea, select, [role='button']"
        )
      ) {
        ringRef.current?.classList.remove("scale-[1.8]", "opacity-80");
      }
    };

    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);

    // Click Animation
    const down = () => {
      ringRef.current?.classList.add("scale-75");
      dotRef.current?.classList.add("scale-150");
    };

    const up = () => {
      ringRef.current?.classList.remove("scale-75");
      dotRef.current?.classList.remove("scale-150");
    };

    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);

      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);

      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Center Dot */}
      <div
        ref={dotRef}
        className="
          fixed top-0 left-0
          w-2 h-2
          rounded-full
          bg-accent
          pointer-events-none
          z-[100000]
          -translate-x-1/2
          -translate-y-1/2
          transition-transform duration-75
          will-change-transform
        "
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="
          fixed top-0 left-0
          w-9 h-9
          rounded-full
          border border-accent/50
          pointer-events-none
          z-[99999]
          -translate-x-1/2
          -translate-y-1/2
          transition-[opacity,transform]
          duration-200
          will-change-transform
        "
      />
    </>
  );
}