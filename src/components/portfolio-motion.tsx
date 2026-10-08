import { useEffect, useRef, type ReactNode } from "react";

export function PortfolioMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        root.style.setProperty("--scroll-progress", String(max > 0 ? window.scrollY / max : 0));
        root.classList.toggle("has-scrolled", window.scrollY > 60);
      });
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>(".project-image-link, .portrait-frame") : null;
      if (!target) return;
      const bounds = target.getBoundingClientRect();
      target.style.setProperty("--tilt-x", `${((event.clientY - bounds.top) / bounds.height - .5) * -5}deg`);
      target.style.setProperty("--tilt-y", `${((event.clientX - bounds.left) / bounds.width - .5) * 5}deg`);
    };
    const reset = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>(".project-image-link, .portrait-frame");
      if (target && (!(event.relatedTarget instanceof Node) || !target.contains(event.relatedTarget))) {
        target.style.setProperty("--tilt-x", "0deg");
        target.style.setProperty("--tilt-y", "0deg");
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    root.addEventListener("pointermove", move);
    root.addEventListener("pointerout", reset);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerout", reset);
    };
  }, []);
  return <div ref={ref} className="motion-root"><div className="reading-progress" aria-hidden="true" />{children}</div>;
}