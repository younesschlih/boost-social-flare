
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 -z-10"></div>
      
      {/* Floating Social Icons */}
      <div className="absolute top-1/4 left-[10%] p-3 bg-white/90 rounded-full shadow-lg animate-pulse-slow">
        <Instagram className="text-pink-500" size={24} />
      </div>
      <div className="absolute top-1/3 right-[15%] p-3 bg-white/90 rounded-full shadow-lg animate-pulse-slow" style={{animationDelay: "0.5s"}}>
        <Twitter className="text-blue-400" size={24} />
      </div>
      <div className="absolute bottom-1/4 left-[20%] p-3 bg-white/90 rounded-full shadow-lg animate-pulse-slow" style={{animationDelay: "1s"}}>
        <Facebook className="text-blue-600" size={24} />
      </div>
      <div className="absolute bottom-1/3 right-[10%] p-3 bg-white/90 rounded-full shadow-lg animate-pulse-slow" style={{animationDelay: "1.5s"}}>
        <Youtube className="text-red-600" size={24} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Boost Your Social Media <span className="gradient-text">Presence</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-foreground/80 max-w-2xl">
              Instantly grow your social media following with our premium services. Get real followers, likes, and engagement to increase your online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/checkout">
                <Button size="lg" className="gradient-bg text-lg">
                  Get Started
                </Button>
              </Link>
              <a href="#services">
                <Button size="lg" variant="outline" className="text-lg">
                  View Services
                </Button>
              </a>
            </div>
            
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background"></div>
                ))}
              </div>
              <div>
                <p className="font-semibold">Trusted by 10K+ customers</p>
                <div className="flex items-center text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-white p-6 rounded-3xl shadow-xl max-w-md mx-auto">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  <TrendingUp size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">@yourprofile</h3>
                  <p className="text-sm text-foreground/60">Instagram profile</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="h-4 bg-muted rounded-full w-full mb-2"></div>
                <div className="h-4 bg-muted rounded-full w-3/4"></div>
              </div>
              
              <div className="flex justify-between mb-6">
                <div className="text-center">
                  <p className="font-bold text-xl">10.2K</p>
                  <p className="text-sm text-foreground/60">Followers</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-xl">8.5K</p>
                  <p className="text-sm text-foreground/60">Likes</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-xl">95%</p>
                  <p className="text-sm text-foreground/60">Engagement</p>
                </div>
              </div>
              
              <div className="h-40 bg-muted rounded-xl mb-4"></div>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-muted"></div>
                  <div className="w-8 h-8 rounded-full bg-muted"></div>
                  <div className="w-8 h-8 rounded-full bg-muted"></div>
                </div>
                <div className="flex items-center space-x-1 text-accent">
                  <span className="font-medium">+820 new followers</span>
                  <TrendingUp size={16} />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
