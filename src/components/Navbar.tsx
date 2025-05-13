
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import LoginDialog from "./LoginDialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-synca-700">
            <span className="gradient-text">Synca</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-foreground hover:text-synca-600 transition-colors">
            Características
          </a>
          <a href="#benefits" className="text-foreground hover:text-synca-600 transition-colors">
            Beneficios
          </a>
          <a href="#testimonials" className="text-foreground hover:text-synca-600 transition-colors">
            Testimonios
          </a>
          <a href="#pricing" className="text-foreground hover:text-synca-600 transition-colors">
            Precios
          </a>
          <Button 
            variant="outline" 
            className="border-synca-500 text-synca-700 hover:bg-synca-50"
            onClick={() => setIsLoginOpen(true)}
          >
            <User size={18} className="mr-1" />
            Iniciar sesión
          </Button>
          <Button className="bg-synca-600 hover:bg-synca-700">
            Prueba gratuita
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-foreground hover:text-synca-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </a>
            <a 
              href="#benefits" 
              className="text-foreground hover:text-synca-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-synca-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="#pricing" 
              className="text-foreground hover:text-synca-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Precios
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button 
                variant="outline" 
                className="border-synca-500 text-synca-700 hover:bg-synca-50 w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsLoginOpen(true);
                }}
              >
                <User size={18} className="mr-1" />
                Iniciar sesión
              </Button>
              <Button className="bg-synca-600 hover:bg-synca-700 w-full">
                Prueba gratuita
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Login Dialog */}
      <LoginDialog isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
    </header>
  );
};

export default Navbar;
