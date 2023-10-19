"use client";
import { useState, useRef, useEffect } from "react";
import cx from "classnames";
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
      className={cx(
        "flex min-h-full flex-grow",
        style.fadeInSection,
        isVisible && style.isVisible,
      )}
      ref={divRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
