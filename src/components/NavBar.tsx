import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/newsletter', label: 'Newsletter' },
    { to: '/events', label: 'Events' },
    { to: '/members', label: 'Members' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <Code className="h-8 w-8 text-tech-purple" />
          <span className="text-xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
          InnovAIt-ON
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                `text-sm font-medium hover:text-tech-purple transition-colors ${
                  isActive ? 'text-tech-purple' : 'text-foreground'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-tech-purple rounded-md"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `p-2 text-sm font-medium hover:bg-muted rounded-md transition-colors ${
                    isActive ? 'text-tech-purple bg-muted' : 'text-foreground'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
