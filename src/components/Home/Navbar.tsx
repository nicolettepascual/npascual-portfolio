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
    (key) => navbarData.links[key as SECTIONS]
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
        "fixed w-full transition-all duration-300 top-0 z-50 ",
        (isScrolled || showMenuNavbar) && cx(style.scrolledNavbar, "shadow-lg"),
        !isScrolled && !showMenuNavbar && style.navbar
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="w-full flex items-center justify-between">
            <div
              className="flex-shrink-0"
              onClick={() => smoothScrollTo("top")}
            >
              <span
                className={cx(
                  "cursor-pointer font-semibold text-lg",
                  fontColor
                )}
              >
                {navbarData.name}
              </span>
            </div>
            <div className="hidden md:block ml-10 space-x-4">
              {linkList.map((item) => (
                <span
                  key={item.name}
                  className={cx(
                    "cursor-pointer hover:text-black transition duration-300",
                    fontColor
                  )}
                  onClick={() => smoothScrollTo(item.id)}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex mr-2 md:hidden">
            <button
              onClick={() => setShowMenuNavbar(!showMenuNavbar)}
              className="text-gray-500 transition duration-300 focus:outline-none hover:text-black"
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
            : "h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {linkList.map((item) => (
            <span
              key={item.name}
              className="cursor-pointer text-gray-500 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
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
