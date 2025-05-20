
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  
  // Handle navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (!navbar) return;
      
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
      } else {
        navbar.style.backgroundColor = "transparent";
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Fixed Transparent Navbar */}
      <div 
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fitness-yellow to-fitness-red">
              GTA V
            </span>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList className="gap-1 md:gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => scrollToSection("home")} 
                  className={navigationMenuTriggerStyle() + " cursor-pointer text-white hover:text-fitness-yellow"}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => scrollToSection("features")} 
                  className={navigationMenuTriggerStyle() + " cursor-pointer text-white hover:text-fitness-yellow"}
                >
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => scrollToSection("gallery")} 
                  className={navigationMenuTriggerStyle() + " cursor-pointer text-white hover:text-fitness-yellow"}
                >
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => scrollToSection("buy")} 
                  className={navigationMenuTriggerStyle() + " cursor-pointer text-white hover:text-fitness-yellow"}
                >
                  Buy Now
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => scrollToSection("testimonials")} 
                  className={navigationMenuTriggerStyle() + " cursor-pointer text-white hover:text-fitness-yellow"}
                >
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      
      {/* Hero Section */}
      <div id="home" ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black bg-opacity-40"></div>
        
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://stock.adobe.com/video/drone-shot-flying-through-toronto-at-night-looking-towards-the-cn-tower/578319283" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 animate-pulse-light drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              GRAND THEFT AUTO V
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-200">
            Dominate Los Santos with the Ultimate Gaming Experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-fitness-yellow to-fitness-red hover:opacity-90 transform transition-all hover:scale-105 hover:shadow-glow text-black font-bold"
            >
              🛒 Get the Full Bundle for $5
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black transition-all hover:scale-105"
            >
              📩 Message for Preview
            </Button>
          </div>
          
          <div 
            onClick={() => scrollToSection("features")} 
            className="absolute bottom-8 cursor-pointer animate-bounce"
          >
            <ChevronDown className="h-10 w-10 text-white" />
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fitness-yellow to-fitness-red">
              What's Inside? Your Ultimate Collection
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bundles.map((bundle, index) => (
              <Card 
                key={index} 
                className="bg-gray-800 border-gray-700 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,165,0,0.5)] hover:bg-gray-700"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-fitness-yellow">{bundle.title}</h3>
                  <p className="text-gray-300 mb-4">{bundle.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-white">{bundle.items}</span>
                    <span className="text-2xl font-bold text-fitness-green">${bundle.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-gray-800 rounded-lg text-center">
            <p className="text-2xl text-fitness-green font-bold mb-2">💰 Total Value: $5.45+ → Yours for just $5!</p>
            <p className="text-gray-300">🔐 <strong>Bonus:</strong> Full access with <strong>OGE (Original Email)</strong> changeable. No third-party logins. No middlemen.</p>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fitness-yellow to-fitness-red">
              Key Features at a Glance
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start p-6 bg-gray-800 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,165,0,0.5)] hover:bg-gray-700"
              >
                <div className="text-4xl mr-4">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-fitness-yellow">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fitness-yellow to-fitness-red">
              Sneak Peek Gallery
            </span>
          </h2>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-[500px] object-cover transform transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative static transform-none translate-y-0 bg-fitness-yellow text-black hover:bg-fitness-red hover:text-white" />
              <CarouselNext className="relative static transform-none translate-y-0 bg-fitness-yellow text-black hover:bg-fitness-red hover:text-white" />
            </div>
          </Carousel>
        </div>
      </section>
      
      {/* Buy Section */}
      <section id="buy" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fitness-yellow to-fitness-red">
              Ready to Own It?
            </span>
          </h2>
          
          <div className="max-w-2xl mx-auto text-center bg-gray-800 p-8 rounded-lg">
            <p className="text-xl mb-6">💬 Message us now to reserve this account:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-600">
                <h3 className="font-bold mb-2">📱 Discord</h3>
                <p className="text-gray-300">aim9347</p>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-600">
                <h3 className="font-bold mb-2">✉️ Email</h3>
                <p className="text-gray-300">aimdev1234@gmail.com</p>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-600">
                <h3 className="font-bold mb-2">🚀 Telegram</h3>
                <p className="text-gray-300">t.me/aimdev9347</p>
              </div>
            </div>
            
            <p className="text-gray-300">Fast response. Trusted by 100+ gamers. Screenshots available on request.</p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fitness-yellow to-fitness-red">
              Real Player Testimonials
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,165,0,0.5)]"
              >
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-fitness-yellow">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-fitness-red via-fitness-yellow to-fitness-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            🎮 Claim All 160+ Skins + Full Ownership for Just $5!
          </h2>
          <p className="text-xl mb-8 text-black font-semibold">
            🔐 100% Transfer Guarantee • OGE Included • Immediate Delivery
          </p>
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 transform transition-all duration-300 hover:scale-105 text-lg px-8"
          >
            💬 Contact Now to Purchase
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2025 GTA V Gaming. This is a demo site. Not affiliated with Rockstar Games.</p>
          <p className="mt-2 text-sm">All game images, logos and names are property of their respective owners.</p>
        </div>
      </footer>
    </div>
  );
};

// Mock data
const bundles = [
  { title: "OG Collection Vol.1", description: "The original set of rare items", items: "29 Skins", price: "0.85" },
  { title: "Rare Series", description: "Limited edition collectibles", items: "46 Skins", price: "1.50" },
  { title: "Epic Battle Set", description: "Perfect for intense gameplay", items: "40 Skins", price: "1.25" },
  { title: "Mini Flex Pack", description: "Show off your exclusive items", items: "2 Skins", price: "0.25" },
  { title: "Stylish Loadout", description: "Customized for style and performance", items: "34 Skins", price: "0.90" },
  { title: "Classic Vibes", description: "Nostalgic items from early releases", items: "13 Skins", price: "0.70" },
];

const features = [
  { icon: "🔒", title: "Secure Transfer", description: "Direct account transfer. OGE changeable." },
  { icon: "⚡", title: "Instant Delivery", description: "Delivered within minutes via secure chat." },
  { icon: "🌍", title: "Cross-Platform", description: "Works on PC, Xbox, PlayStation." },
  { icon: "💬", title: "1-on-1 Support", description: "Personal guidance until account is in your hands." },
];

const galleryImages = [
  "https://source.unsplash.com/random/900x600/?gaming,gta",
  "https://source.unsplash.com/random/900x600/?videogame",
  "https://source.unsplash.com/random/900x600/?losangeles",
  "https://source.unsplash.com/random/900x600/?city,night",
];

const testimonials = [
  { text: "Got my account within 10 minutes and it was loaded! All legit.", author: "@ZoneWarZach" },
  { text: "Best seller out there. Account came with surprise bonus skins too 👀.", author: "@SkullyBoyFN" },
  { text: "Incredible value! All the rare skins I wanted are here.", author: "@GamerPro99" },
  { text: "Smooth transaction and exactly as advertised. 10/10 recommend.", author: "@StreamerElite" },
];

export default Index;
