"use client";
import { useState, useRef, useEffect } from "react";
import style from "./FadeInSection.module.css";

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setVisible] = useState(false);

  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });

    const currentRef = divRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      className={`${style.fadeInSection} ${isVisible ? style.isVisible : ""}`}
      ref={divRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
