import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Prayers", path: "/prayers" },
  { name: "Gallery", path: "/gallery" },
  { name: "Renovation", path: "/reconstruction" },
  { name: "Donate", path: "/donate" },
  { name: "Events", path: "/events" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b !bg-[#1c364f]">

      <div className="container-church ">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-gold border-2">
              <img
                src="/images/72.jpg"   // public folder lo unte
                alt="St. Peter's Cathedral Logo"
                className="w-full h-full object-cover rounded-full border-2 border-white"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-lg md:text-xl font-semibold text-white leading-tight">
                St. Peter's Cathedral
              </h1>
              <p className="text-xs text-white/90">Gnanapuram</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1  ">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 font-sans py-2 text-base font-medium rounded-md transition-colors ${location.pathname === link.path
                  ? "text-white bg-white/20"
                  : "text-white hover:bg-white/10"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center  gap-3">
            <Button variant="gold" size="default" asChild>
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in">
            <nav className="flex flex-col py-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${location.pathname === link.path
                    ? "text-gold bg-gold/10"
                    : "text-foreground/80 hover:text-gold hover:bg-muted"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
                    Donate Now
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
