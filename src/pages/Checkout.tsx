import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Twitch, 
  BrainCircuit,
  Linkedin, 
  CircleDot,
  ArrowLeft,
  Lock,
  CreditCard,
  ShieldCheck
} from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const [selectedService, setSelectedService] = useState("followers");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("professional");
  
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !email || !selectedPlatform) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Order placed successfully! We're processing your request.", {
      description: "You'll receive a confirmation email shortly."
    });
  };
  
  const platforms = [
    { value: "instagram", label: "Instagram", icon: <Instagram size={20} /> },
    { value: "tiktok", label: "TikTok", icon: <BrainCircuit size={20} /> },
    { value: "twitter", label: "Twitter", icon: <Twitter size={20} /> },
    { value: "facebook", label: "Facebook", icon: <Facebook size={20} /> },
    { value: "youtube", label: "YouTube", icon: <Youtube size={20} /> },
    { value: "twitch", label: "Twitch", icon: <Twitch size={20} /> },
    { value: "linkedin", label: "LinkedIn", icon: <Linkedin size={20} /> },
    { value: "pinterest", label: "Pinterest", icon: <CircleDot size={20} /> }
  ];
  
  const services = [
    { value: "followers", label: "Followers Boost" },
    { value: "likes", label: "Likes Package" },
    { value: "comments", label: "Comments Boost" },
    { value: "views", label: "Views Enhancement" }
  ];
  
  const packages = [
    { value: "starter", label: "Starter", price: "$29", description: "500 followers" },
    { value: "professional", label: "Professional", price: "$79", description: "2,500 followers" },
    { value: "business", label: "Business", price: "$199", description: "10,000 followers" }
  ];
  
  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to home
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Complete Your Order</CardTitle>
                <CardDescription>
                  Provide the details for your social media boost
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCheckout}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Select Service</Label>
                      <Select 
                        value={selectedService} 
                        onValueChange={setSelectedService}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Select Platform</Label>
                      <Select
                        value={selectedPlatform}
                        onValueChange={setSelectedPlatform}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          {platforms.map((platform) => (
                            <SelectItem key={platform.value} value={platform.value}>
                              <div className="flex items-center">
                                <span className="mr-2">{platform.icon}</span>
                                <span>{platform.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="username">Your Username (without @)</Label>
                      <Input 
                        id="username" 
                        placeholder="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="email@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Select Package</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {packages.map((pkg) => (
                          <div 
                            key={pkg.value}
                            className={`
                              border rounded-lg p-4 cursor-pointer transition-all
                              ${selectedPackage === pkg.value 
                                ? 'border-primary bg-primary/5' 
                                : 'border-border hover:border-primary/50'
                              }
                            `}
                            onClick={() => setSelectedPackage(pkg.value)}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">{pkg.label}</span>
                              <span className="font-bold text-lg">{pkg.price}</span>
                            </div>
                            <p className="text-sm text-foreground/70">{pkg.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full gradient-bg" onClick={handleCheckout}>
                  <Lock size={16} className="mr-2" /> Complete Secure Order
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-foreground/70">Service:</span>
                  <span className="font-medium">
                    {services.find(s => s.value === selectedService)?.label || 'Select a service'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-foreground/70">Platform:</span>
                  <span className="font-medium">
                    {platforms.find(p => p.value === selectedPlatform)?.label || 'Select a platform'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-foreground/70">Package:</span>
                  <span className="font-medium">
                    {packages.find(p => p.value === selectedPackage)?.label || 'Select a package'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b text-lg">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold">
                    {packages.find(p => p.value === selectedPackage)?.price || '$0'}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex-col space-y-4">
                <div className="flex items-center text-sm text-foreground/70">
                  <CreditCard size={16} className="mr-2" />
                  <span>Secure payment processing</span>
                </div>
                <div className="flex items-center text-sm text-foreground/70">
                  <ShieldCheck size={16} className="mr-2" />
                  <span>30-day satisfaction guarantee</span>
                </div>
              </CardFooter>
            </Card>
            
            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start">
                <ShieldCheck size={20} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-green-800">Safe & Secure</h3>
                  <p className="text-sm text-green-700">
                    We never request passwords or sensitive information. 
                    All transactions are encrypted and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
