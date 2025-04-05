
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  platformCount: number;
}

const PricingSection = () => {
  const plans: PricingPlan[] = [
    {
      title: "Starter",
      price: "$29",
      description: "Perfect for individuals just starting out",
      features: [
        "500 Followers",
        "1,000 Likes",
        "100 Comments",
        "24/7 Support",
        "Gradual Delivery"
      ],
      platformCount: 1
    },
    {
      title: "Professional",
      price: "$79",
      description: "Ideal for content creators and influencers",
      features: [
        "2,500 Followers",
        "5,000 Likes",
        "500 Comments",
        "24/7 Priority Support",
        "Gradual Delivery",
        "Monthly Analytics"
      ],
      popular: true,
      platformCount: 2
    },
    {
      title: "Business",
      price: "$199",
      description: "For businesses and established brands",
      features: [
        "10,000 Followers",
        "20,000 Likes",
        "2,000 Comments",
        "24/7 VIP Support",
        "Gradual Delivery",
        "Monthly Analytics",
        "Custom Targeting"
      ],
      platformCount: 5
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your social media growth needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                bg-card rounded-2xl shadow-lg p-8 border relative flex flex-col
                ${plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-8 bg-primary text-primary-foreground text-sm font-medium py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-foreground/60"> / one-time</span>
              </div>
              <p className="text-foreground/70 mb-6">{plan.description}</p>
              
              <p className="font-medium mb-2 text-foreground/90">
                For {plan.platformCount} {plan.platformCount === 1 ? 'platform' : 'platforms'}
              </p>
              
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center py-2">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/checkout" className="mt-auto">
                <Button 
                  className={`w-full ${plan.popular ? 'gradient-bg' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
