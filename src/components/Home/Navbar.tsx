"use client";
import { useState, useEffect } from "react";
import cx from "classnames";
import style from "@/css/Home.module.css";
import { SECTIONS, navbarData } from "@/config/config";
import { Link } from "react-scroll";

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

  const NavbarLink = ({
    item,
    offset,
    customClass,
  }: {
    item: { id: string; name: string };
    offset: number;
    customClass: string;
  }) => {
    return (
      <Link
        key={item.name}
        activeClass="active"
        className={cx(customClass, fontColor)}
        smooth
        spy
        to={item.id}
        offset={offset}
      >
        {item.name}
      </Link>
    );
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
            <Link
              activeClass="active"
              className={cx(
                "flex-shrink-0 cursor-pointer font-handwriting text-2xl font-semibold",
                fontColor,
              )}
              smooth
              spy
              to="top"
            >
              {navbarData.name}
            </Link>
            <div className="ml-10 hidden space-x-4 md:block">
              {linkList.map((item, index) => (
                <NavbarLink
                  key={item.name}
                  item={item}
                  offset={(index + 1) % 2 === 0 ? -65 : -128}
                  customClass="cursor-pointer transition duration-300 hover:text-black"
                />
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
          {linkList.map((item, index) => (
            <NavbarLink
              key={item.name}
              item={item}
              offset={(index + 1) % 2 === 0 ? -65 : -128}
              customClass="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:text-black"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
