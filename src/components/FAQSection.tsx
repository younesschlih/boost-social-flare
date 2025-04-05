
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqs: FAQ[] = [
    {
      question: "Are the followers and engagement real?",
      answer: "Yes, we provide real followers and engagement from active accounts. We never use bots or fake accounts, which ensures lasting results and protects your account from potential penalties."
    },
    {
      question: "How quickly will I see results?",
      answer: "You'll start seeing results within 24-48 hours of placing your order. We deliver growth gradually to maintain a natural pattern that won't trigger platform algorithms."
    },
    {
      question: "Will I need to share my password?",
      answer: "Absolutely not! We only require your public username to deliver followers and engagement. Your account security is our priority, and we never ask for sensitive information."
    },
    {
      question: "Is there a risk of getting banned?",
      answer: "Our services are designed to be safe and compliant with platform policies. We use natural growth patterns and real accounts to minimize any risks to your profile."
    },
    {
      question: "What happens if I don't get the promised results?",
      answer: "We offer a 30-day satisfaction guarantee. If you don't receive the promised results within that timeframe, we'll either complete the delivery or provide a refund."
    },
    {
      question: "Do you offer refunds if I'm not satisfied?",
      answer: "Yes, we offer a money-back guarantee if we fail to deliver the promised results. Simply contact our support team within 30 days of your purchase."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Get answers to the most common questions about our services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-foreground/80">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
