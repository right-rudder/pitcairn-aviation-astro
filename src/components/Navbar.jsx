import { useState } from "react";
import logo from "../assets/pitcairn-logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Pitcairn Aviation</span>
            <h1 className="text-white font-bold uppercase leading-none text-center drop-shadow-sm">
              <span className="text-3xl block leading-none">Pitcairn</span>
              <span className="text-main-color">Aviation LLC</span>
            </h1>
            {/* <img
              className="h-12 lg:h-20 w-auto"
              src={logo.src}
              alt="Pitcairn Logo"
            /> */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden font-bold uppercase lg:flex lg:gap-x-12">
          <a
            href="/services"
            className="text-base tracking-tight hover:text-main-color text-white duration-100"
          >
            Services
          </a>
          <a
            href="/hangars"
            className="text-base tracking-tight hover:text-main-color text-white duration-100"
          >
            Hangars
          </a>
          <a
            href="/plan-your-visit"
            className="text-base tracking-tight hover:text-main-color text-white duration-100"
          >
            Plan Your Visit
          </a>
          <a
            href="/about-us"
            className="text-base tracking-tight hover:text-main-color text-white duration-100"
          >
            About Us
          </a>
          <a
            href="/blog"
            className="text-base tracking-tight hover:text-main-color text-white duration-100"
          >
            Blog
          </a>
          <a
            href="/contact-us"
            className="text-base tracking-tight hover:text-main-color text-white duration-100"
          >
            Contact Us
          </a>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div
        className={`lg:hidden`}
        role="dialog"
        aria-modal="true"
        id="mobile-menu"
        aria-labelledby="mobile-menu"
      >
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div
          className={`${isOpen ? "translate-x-0" : "translate-x-full"} duration-300 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-main-color px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Pitcairn Aviation</span>
              <h1 className="text-white font-bold uppercase leading-none text-center">
                <span className="text-3xl block leading-none">Pitcairn</span>
                <span>Aviation LLC</span>
              </h1>
              {/* <img
                className="h-12 w-auto"
                src={logo.src}
                alt="Pitcairn Aviation Logo"
              /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 font-bold uppercase">
                <a
                  href="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-main-color"
                >
                  Services
                </a>
                <a
                  href="/hangar"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-main-color"
                >
                  Hangar
                </a>
                <a
                  href="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-main-color"
                >
                  About Us
                </a>
                <a
                  href="/plan-your-visit"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-main-color"
                >
                  Plan Your Visit
                </a>
                <a
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-main-color"
                >
                  Blog
                </a>
                <a
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-main-color"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
