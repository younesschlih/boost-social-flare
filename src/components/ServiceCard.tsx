
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  popular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  benefits,
  popular = false
}) => {
  return (
    <div className={`bg-card rounded-2xl shadow-lg p-6 border ${popular ? 'border-primary' : 'border-border'} transition-all duration-300 hover:shadow-xl relative h-full flex flex-col`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium py-1 px-4 rounded-full">
          Popular
        </div>
      )}
      
      <div className="mb-4 p-3 rounded-full w-fit gradient-bg text-white">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70 mb-6">{description}</p>
      
      <div className="mb-6 flex-grow">
        <p className="font-medium mb-2">Benefits:</p>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Link to="/checkout" className="mt-auto w-full">
        <Button className={`w-full ${popular ? 'gradient-bg' : 'bg-secondary/10 hover:bg-secondary/20 text-foreground'}`}>
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
