
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">SocialBoost</span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">Services</a>
          <a href="#platforms" className="text-foreground/80 hover:text-foreground transition-colors">Platforms</a>
          <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
          <Link to="/checkout">
            <Button className="gradient-bg">Get Started</Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b z-50">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#platforms" className="text-foreground/80 hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>Platforms</a>
              <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              <Link to="/checkout" onClick={() => setIsMenuOpen(false)}>
                <Button className="gradient-bg w-full">Get Started</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
