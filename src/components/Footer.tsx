
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Mail, 
  MessageCircle, 
  ShieldCheck
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold gradient-text">SocialBoost</span>
            </Link>
            <p className="text-foreground/70 mb-4">
              Premium social media growth services to help you expand your online presence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-foreground">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-foreground">Followers Growth</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground">Likes Packages</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground">Comments Boost</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground">Views Increase</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground">Custom Packages</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-foreground">About Us</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground">Careers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground">Press</a></li>
              <li><a href="#faq" className="text-foreground/70 hover:text-foreground">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-foreground/70 hover:text-foreground">
                  <Mail size={18} className="mr-2" />
                  <span>support@socialboost.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-foreground/70 hover:text-foreground">
                  <MessageCircle size={18} className="mr-2" />
                  <span>Live Chat Support</span>
                </a>
              </li>
              <li>
                <div className="flex items-center text-foreground/70">
                  <ShieldCheck size={18} className="mr-2" />
                  <span>24/7 Customer Support</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SocialBoost. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/60 hover:text-foreground text-sm">Terms of Service</a>
              <a href="#" className="text-foreground/60 hover:text-foreground text-sm">Privacy Policy</a>
              <a href="#" className="text-foreground/60 hover:text-foreground text-sm">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
