"use client";
import { useState, useEffect } from "react";
import cx from "classnames";

const Navbar = () => {
  const [showMenuNavbar, setShowMenuNavbar] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const menu = [
    { name: "About", url: "/" },
    { name: "Projects", url: "/" },
    { name: "Skills", url: "/" },
    { name: "Experience", url: "/" },
    { name: "Contact", url: "/" },
  ];

  const fontColor =
    isScrolled || showMenuNavbar ? "text-gray-500" : "text-white";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav
      className={cx(
        "fixed w-full transition-all duration-300 top-0 z-50 ",
        (isScrolled || showMenuNavbar) && "bg-white shadow-lg",
        !isScrolled && !showMenuNavbar && "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="w-full flex items-center justify-between">
            <div className="flex-shrink-0">
              <span className={cx("font-semibold text-lg", fontColor)}>NP</span>
            </div>
            <div className="hidden md:block ml-10 space-x-4">
              {menu.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className={cx(
                    "hover:text-black transition duration-300",
                    fontColor
                  )}
                >
                  {item.name}
                </a>
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
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.url}
              className="text-gray-500 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
