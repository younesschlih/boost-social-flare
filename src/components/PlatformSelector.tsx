
import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Twitch, Tiktok, Linkedin, Pinterest } from 'lucide-react';

interface Platform {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const PlatformSelector = () => {
  const platforms: Platform[] = [
    { name: "Instagram", icon: <Instagram size={32} />, color: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { name: "TikTok", icon: <Tiktok size={32} />, color: "bg-black" },
    { name: "Twitter", icon: <Twitter size={32} />, color: "bg-blue-400" },
    { name: "Facebook", icon: <Facebook size={32} />, color: "bg-blue-600" },
    { name: "YouTube", icon: <Youtube size={32} />, color: "bg-red-600" },
    { name: "Twitch", icon: <Twitch size={32} />, color: "bg-purple-600" },
    { name: "LinkedIn", icon: <Linkedin size={32} />, color: "bg-blue-700" },
    { name: "Pinterest", icon: <Pinterest size={32} />, color: "bg-red-500" }
  ];

  return (
    <section id="platforms" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Supported Platforms</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            We offer growth solutions for all major social media platforms
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center text-white mb-3 shadow-lg transition-transform hover:scale-110`}>
                {platform.icon}
              </div>
              <span className="font-medium">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSelector;
