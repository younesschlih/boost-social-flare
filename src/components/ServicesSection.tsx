
import React from 'react';
import ServiceCard from './ServiceCard';
import { Users, ThumbsUp, MessageCircle, Eye } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Followers Boost",
      description: "Gain real followers to increase your social proof and reach.",
      icon: <Users size={24} />,
      benefits: [
        "Rapid follower growth",
        "Targeted audience",
        "High-quality accounts",
        "Natural growth pattern"
      ],
      popular: true
    },
    {
      title: "Likes Package",
      description: "Get more likes on your posts to boost engagement and visibility.",
      icon: <ThumbsUp size={24} />,
      benefits: [
        "Increased post visibility",
        "Higher engagement rates",
        "Algorithm-friendly boost",
        "Quick delivery"
      ]
    },
    {
      title: "Comments Boost",
      description: "Enhance social proof with relevant comments on your content.",
      icon: <MessageCircle size={24} />,
      benefits: [
        "Relevant, quality comments",
        "Customization options",
        "Gradual, natural delivery",
        "Engagement boost"
      ]
    },
    {
      title: "Views Enhancement",
      description: "Increase your video views and reach a wider audience.",
      icon: <Eye size={24} />,
      benefits: [
        "Higher view counts",
        "Improved discoverability",
        "Algorithm ranking boost",
        "Retention rate improvement"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Supercharge your social media presence with our range of professional growth services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              benefits={service.benefits}
              popular={service.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
