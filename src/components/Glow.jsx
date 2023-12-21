import { useState, useEffect } from "react";

const Glow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInViewport, setIsMouseInViewport] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setIsMouseInViewport(true);
    };

    const handleMouseEnter = () => {
      setIsMouseInViewport(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInViewport(false);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const glowStyle = {
    position: "fixed",
    top: mousePosition.y,
    left: mousePosition.x,
    width: "400px",
    height: "400px",
    backgroundColor: "rgba(64, 64, 64, 0.3)",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    display: isMouseInViewport ? "block" : "none",
  };
  return <div className="blur-3xl pointer-events-none -z-30" style={glowStyle}></div>;
};

export default Glow;
