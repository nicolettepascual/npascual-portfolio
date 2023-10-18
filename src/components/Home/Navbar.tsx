"use client";
import { useState, useEffect } from "react";
import cx from "classnames";
import style from "@/css/Home.module.css";
import { SECTIONS, navbarData } from "@/config/config";

const Navbar = () => {
  const [showMenuNavbar, setShowMenuNavbar] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const fontColor =
    isScrolled || showMenuNavbar ? "text-gray-500" : "text-white";

  const linkList = Object.keys(navbarData.links).map(
    (key) => navbarData.links[key as SECTIONS],
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={cx(
        "fixed top-0 z-50 w-full transition-all duration-300 ",
        (isScrolled || showMenuNavbar) && cx(style.scrolledNavbar, "shadow-lg"),
        !isScrolled && !showMenuNavbar && style.navbar,
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <div
              className="flex-shrink-0"
              onClick={() => smoothScrollTo("top")}
            >
              <span
                className={cx(
                  "cursor-pointer font-handwriting text-2xl font-semibold",
                  fontColor,
                )}
              >
                {navbarData.name}
              </span>
            </div>
            <div className="ml-10 hidden space-x-4 md:block">
              {linkList.map((item) => (
                <span
                  key={item.name}
                  className={cx(
                    "cursor-pointer transition duration-300 hover:text-black",
                    fontColor,
                  )}
                  onClick={() => smoothScrollTo(item.id)}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
          <div className="mr-2 flex md:hidden">
            <button
              onClick={() => setShowMenuNavbar(!showMenuNavbar)}
              className="text-gray-500 transition duration-300 hover:text-black focus:outline-none"
            >
              {showMenuNavbar ? (
                <i className={cx("fa-solid fa-xmark", fontColor)} />
              ) : (
                <i className={cx("fa-solid fa-bars", fontColor)} />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={cx(
          "transition-all duration-500 ease-out md:hidden",
          showMenuNavbar
            ? "h-auto opacity-100"
            : "h-0 overflow-hidden opacity-0",
        )}
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {linkList.map((item) => (
            <span
              key={item.name}
              className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:text-black"
              onClick={() => smoothScrollTo(item.id)}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
