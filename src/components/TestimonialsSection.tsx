
import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  platform: string;
  growth: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Since using SocialBoost, my Instagram following has grown exponentially. The engagement on my posts has never been better!",
      name: "Sarah Johnson",
      title: "Lifestyle Influencer",
      platform: "Instagram",
      growth: "+15K followers"
    },
    {
      quote: "I was struggling to grow my YouTube channel until I discovered SocialBoost. Now my videos are getting the views they deserve.",
      name: "Mark Williams",
      title: "Content Creator",
      platform: "YouTube",
      growth: "+25K subscribers"
    },
    {
      quote: "As a small business, social proof is everything. SocialBoost helped us build credibility and attract more customers.",
      name: "Jessica Chen",
      title: "E-commerce Owner",
      platform: "TikTok",
      growth: "+40K followers"
    }
  ];

  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            See how we've helped creators and businesses grow their online presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white/80 text-sm">{testimonial.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/80">{testimonial.platform}</p>
                  <p className="font-bold text-green-300">{testimonial.growth}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
