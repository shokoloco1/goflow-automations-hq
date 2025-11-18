import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/goflow-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Case Study", id: "case-study" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="GoFlow AI" className="h-10 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-primary transition-colors font-light"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="shadow-soft hover:shadow-glow transition-smooth"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border/50 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-3 text-foreground/80 hover:text-primary transition-colors font-light"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full shadow-soft hover:shadow-glow transition-smooth"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
