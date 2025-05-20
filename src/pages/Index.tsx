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
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronDown, Play, Image, MessageSquare, Mail, Send } from "lucide-react";
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
        navbar.style.backgroundColor = "rgba(30, 30, 47, 0.85)";
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
    <div className="bg-backgroundDark text-textPrimary min-h-screen overflow-x-hidden">
      {/* Fixed Transparent Navbar */}
      <div
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-textPrimary tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent2 to-accent">
              FORTNITE
            </span>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="gap-1 md:gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("home")}
                  className={cn(navigationMenuTriggerStyle(), "cursor-pointer text-textPrimary hover:text-accent2 bg-backgroundDark/70 hover:bg-backgroundDark")}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("features")}
                  className={cn(navigationMenuTriggerStyle(), "cursor-pointer text-textPrimary hover:text-accent2 bg-backgroundDark/70 hover:bg-backgroundDark")}
                >
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("accounts")}
                  className={cn(navigationMenuTriggerStyle(), "cursor-pointer text-textPrimary hover:text-accent2 bg-backgroundDark/70 hover:bg-backgroundDark")}
                >
                  Accounts
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("gallery")}
                  className={cn(navigationMenuTriggerStyle(), "cursor-pointer text-textPrimary hover:text-accent2 bg-backgroundDark/70 hover:bg-backgroundDark")}
                >
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("contact")}
                  className={cn(navigationMenuTriggerStyle(), "cursor-pointer text-textPrimary hover:text-accent2 bg-backgroundDark/70 hover:bg-backgroundDark")}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Hero Section */}
      <div id="home" ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-10"></div>
        <video
          className="absolute z-10 inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="night-city-in-gta-5.1920x1080.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight w-[80%]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent2 via-accent to-primary animate-pulse-light drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Affordable Fortnite Accounts. Fast, Safe, Ready.
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-textPrimary bg-backgroundDark/50 py-3 px-6 rounded-[30px]">
            Own a Fully Loaded Fortnite Account - 160+ Skins for Just $5
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection("accounts")}
              className="btn-primary"
            >
              View Accounts
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="btn-secondary"
            >
              Contact Seller
            </Button>
          </div>
          <div
            onClick={() => scrollToSection("features")}
            className="absolute bottom-8 cursor-pointer animate-bounce"
          >
            <ChevronDown className="h-10 w-10 text-textPrimary" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-backgroundDark to-backgroundDark/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent2 to-accent">
              Why Choose Our Accounts?
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-backgroundDark/70 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,70,85,0.5)] hover:bg-backgroundDark/90"
              >
                <div className="text-4xl mr-4">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent2">{feature.title}</h3>
                  <p className="text-textSecondary">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Listings Section */}
      <section id="accounts" className="py-20 bg-backgroundDark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent2 to-accent">
              Featured Accounts
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountListings.map((account, index) => (
              <div key={index} className="fortnite-card">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={`/gallery_image (${index + 1}).jpg`} 
                    alt={account.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="fortnite-badge">{account.badge}</Badge>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{account.title}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-accent2 text-xl font-semibold">{account.price}</span>
                  <Button 
                    onClick={() => scrollToSection("contact")}
                    className="btn-primary"
                  >
                    {account.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-backgroundDark/80 rounded-lg text-center">
            <p className="text-2xl text-accent2 font-bold mb-2">💰 Total Value: $5.45+ → Yours for just $5!</p>
            <p className="text-textSecondary">🔐 <strong>Bonus:</strong> Full access with <strong>OGE (Original Email)</strong> changeable. No third-party logins. No middlemen.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-backgroundDark/80 to-backgroundDark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent2 to-accent">
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
            <div className="flex justify-around gap-2 mt-4">
              <CarouselPrevious className="relative static transform-none translate-y-0 bg-accent2 text-backgroundDark hover:bg-accent hover:text-textPrimary" />
              <CarouselNext className="relative static transform-none translate-y-0 bg-accent2 text-backgroundDark hover:bg-accent hover:text-textPrimary" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="py-20 bg-backgroundDark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent2 to-accent">
              Game Media
            </span>
          </h2>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent2 flex items-center gap-2">
              <Image className="h-6 w-6" /> Image Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mediaImages.map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg group">
                  <img
                    src={img}
                    alt={`Fortnite screenshot ${idx + 1}`}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-backgroundDark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent2 to-accent">
              Ready to Purchase?
            </span>
          </h2>

          <div className="max-w-3xl mx-auto text-center bg-backgroundDark/70 p-8 rounded-lg">
            <p className="text-xl mb-6">Your purchase is backed by our Safe Buyer Guarantee. We've got you covered.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a href="https://discord.gg/your-link" target="_blank" className="p-4 bg-backgroundDark/50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-backgroundDark flex flex-col items-center gap-2">
                <MessageSquare size={32} className="text-accent2" />
                <h3 className="font-bold mb-2">Discord</h3>
                <h6 className="text-textSecondary">aim9347</h6>
              </a>
              <a href="mailto:aimdev1234@gmail.com" target="_blank" className="p-4 bg-backgroundDark/50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-backgroundDark flex flex-col items-center gap-2">
                <Mail size={32} className="text-accent2" />
                <h3 className="font-bold mb-2">Email</h3>
                <h6 className="text-textSecondary">aimdev1234@gmail.com</h6>
              </a>
              <a href="https://t.me/aimdev9347" target="_blank" className="p-4 bg-backgroundDark/50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-backgroundDark flex flex-col items-center gap-2">
                <Send size={32} className="text-accent2" />
                <h3 className="font-bold mb-2">Telegram</h3>
                <h6 className="text-textSecondary">aimdev9347</h6>
              </a>
            </div>
            <p className="text-textSecondary">Fast response. Trusted by 100+ gamers. Screenshots available on request.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent via-accent2 to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-backgroundDark">
            🎮 Claim All 160+ Skins + Full Ownership for Just $5!
          </h2>
          <p className="text-xl mb-8 text-backgroundDark font-semibold">
            🔐 100% Transfer Guarantee • OGE Included • Immediate Delivery
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-backgroundDark text-textPrimary hover:bg-backgroundDark/80 transform transition-all duration-300 hover:scale-105 text-lg px-8"
          >
            💬 Contact Now to Purchase
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-backgroundDark border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-textSecondary mb-4">© 2025 Fortnite Accounts. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://discord.gg/your-link" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-6 w-6 text-accent hover:text-accent2 transition-colors" />
            </a>
            <a href="mailto:aimdev1234@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="h-6 w-6 text-accent hover:text-accent2 transition-colors" />
            </a>
            <a href="https://t.me/aimdev9347" target="_blank" rel="noopener noreferrer">
              <Send className="h-6 w-6 text-accent hover:text-accent2 transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Mock data
const features = [
  { icon: "⚡", title: "Fast Delivery", description: "Get your Fortnite accounts within minutes of purchase." },
  { icon: "💸", title: "Low Prices", description: "Affordable accounts for all types of players." },
  { icon: "🔒", title: "Secure Transactions", description: "Safe buying process with verified payments." },
];

const accountListings = [
  {
    title: "13 Skin Starter Account",
    price: "$0.70",
    badge: "OGE Changeable",
    thumbnail: "/gallery_image (1).jpg",
    cta: "Buy Now"
  },
  {
    title: "46 Skin Premium Account",
    price: "$1.50",
    badge: "OGE Changeable",
    thumbnail: "/gallery_image (2).jpg",
    cta: "Buy Now"
  },
  {
    title: "40 Skin Middle-Tier Account",
    price: "$1.25",
    badge: "OGE Changeable",
    thumbnail: "/gallery_image (3).jpg",
    cta: "Buy Now"
  }
];

const galleryImages = [
  '/gallery_image (1).jpg',
  '/gallery_image (2).jpg',
  '/gallery_image (3).jpg',
  '/gallery_image (4).jpg',
  '/gallery_image (5).jpg',
  '/gallery_image (6).jpg',
  '/gallery_image (7).jpg',
];

const mediaImages = [
  '/gallery_image (8).jpg',
  '/gallery_image (9).jpg',
  '/gallery_image (10).jpg',
  '/gallery_image (11).jpg',
  '/gallery_image (12).jpg',
  '/gallery_image (13).jpg',
];

export default Index;
