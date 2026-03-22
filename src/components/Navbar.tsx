import image_8f0cab099ddcc061e7b9da0e66df676094f89dd5 from 'figma:asset/8f0cab099ddcc061e7b9da0e66df676094f89dd5.png';
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
  onGetStartedClick: () => void;
}

export function Navbar({ onGetStartedClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Results", href: "#results" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "top-4 w-[95%] max-w-7xl rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-white/20"
          : "top-0 w-full rounded-none bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              src={image_8f0cab099ddcc061e7b9da0e66df676094f89dd5}
              alt="DigiBoomi Logo"
              className="h-6"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-[15px]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[rgb(0,0,0)] hover:text-[#FF4000] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-6 py-2 rounded-full hover:bg-[#CC3300] transition-colors text-[15px]"
              onClick={onGetStartedClick}
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className={`md:hidden bg-white border-t ${isScrolled ? "rounded-b-[2rem] rounded-t-none" : ""}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-2 text-gray-700 hover:text-[#FF4000] hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <button
              className="w-full text-left px-3 py-2 bg-[#FF4000] text-white rounded-md hover:bg-[#CC3300]"
              onClick={onGetStartedClick}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}