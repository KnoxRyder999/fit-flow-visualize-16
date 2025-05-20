
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
import { ChevronDown, Play, Image } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImageCarousel } from "@/components/ImageCarousel";

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
              FORTNITE
            </span>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="gap-1 md:gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("home")}
                  className={cn(navigationMenuTriggerStyle(), "cursor-pointer text-white hover:text-fitness-yellow bg-black/70 hover:bg-black")}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("features")}
                  className={cn(navigationMenuTriggerStyle(), "cursor-pointer text-white hover:text-fitness-yellow bg-black/70 hover:bg-black")}
                >
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("gallery")}
                  className={cn(navigationMenuTriggerStyle(), "cursor-pointer text-white hover:text-fitness-yellow bg-black/70 hover:bg-black")}
                >
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("media")}
                  className={cn(navigationMenuTriggerStyle(), "cursor-pointer text-white hover:text-fitness-yellow bg-black/70 hover:bg-black")}
                >
                  Media
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("buy")}
                  className={cn(navigationMenuTriggerStyle(), "cursor-pointer text-white hover:text-fitness-yellow bg-black/70 hover:bg-black")}
                >
                  Buy Now
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection("testimonials")}
                  className={cn(navigationMenuTriggerStyle(), "cursor-pointer text-white hover:text-fitness-yellow bg-black/70 hover:bg-black")}
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 animate-pulse-light drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Dominate Fortnite with a Legendary Account
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-200 bg-[rgba(0,0,0,0.5)] py-3 px-6 rounded-[30px]">
            Own a Fully Loaded Fortnite Account - 160+ Skins for Just $5
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#buy"
              className="px-5 py-3 rounded-[8px] bg-gradient-to-r from-fitness-yellow to-fitness-red hover:opacity-90 transform transition-all hover:scale-105 hover:shadow-glow text-black font-bold"
            >
              🛒 Get the Full Bundle for $5
            </a>
            <a
              href="#features"
              className="px-5 py-3 rounded-[8px] hover:opacity-90 transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(34,245,55,0.5)] bg-[#000] text-[#5f9] opacity-70 font-bold"
            >
              📩 Show Bundle
            </a>
            <a
              className="border-white text-[#880] hover:bg-white hover:text-black transition-all hover:scale-105"
            >
            </a>
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
          <h2 className="text-4xl font-bold text-center mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fitness-yellow to-fitness-red">
              What's Inside? Your Ultimate Collection
            </span>
          </h2>
          <div className="flex w-full justify-center">
            <p className="text-[16px] max-w-3xl mb-8 text-gray-200 bg-[rgba(0,0,0,0.5)] p-3 text-center border-rounded">
              Unlock legacy cosmetics, exclusive emotes, and battle-hardened history. Full control with OGE changeable access. Trusted. Secure. Instant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bundles.map((bundle, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,165,0,0.5)] hover:bg-gray-700 relative"
              >
                <a href="#buy">
                  <span className="border-[1px] text-white px-3 py-1 rounded-[8px] right-[20px] top-[20px] hover:text-[#afa] cursor-pointer overflow-hidden absolute">
                    BUY NOW
                  </span>
                </a>
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

          {/* <ImageCarousel images={galleryImages} /> */}

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
              <CarouselPrevious className="relative static transform-none translate-y-0 bg-fitness-yellow text-black hover:bg-fitness-red hover:text-white" />
              <CarouselNext className="relative static transform-none translate-y-0 bg-fitness-yellow text-black hover:bg-fitness-red hover:text-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Media Section - New */}
      <section id="media" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fitness-yellow to-fitness-red">
              Game Media
            </span>
          </h2>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-fitness-yellow flex items-center gap-2">
              <Image className="h-6 w-6" /> Image Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mediaImages.map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg group">
                  <img
                    src={img}
                    alt={`GTA V screenshot ${idx + 1}`}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
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

          <div className="  mx-auto text-center bg-gray-800 p-8 rounded-lg">
            <p className="text-xl mb-6">💬 Message us now to reserve this account:</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a target="_blank" href="https://@aim9347#1234" className="p-4 bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-600">
                <h3 className="font-bold mb-2">📱 Discord</h3>
                <h6 className="font-bold mb-2">aim Dev</h6>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aimdev1234@gmail.com&su=Fortnite%20Account%20Sale&body=Hello%2C%20I%27m%20interested%20in%20buying%20your%20account." target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-600">
                <h3 className="font-bold mb-2">📱 Gmail</h3>
                <h6 className="font-bold mb-2">aim Dev</h6>
              </a>
              <a target="_blank" href="https://discord.gg/aim9347" className="p-4 bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-600">
                <h3 className="font-bold mb-2">🚀 Telegram</h3>
                <h6 className="font-bold mb-2">aim Dev</h6>
              </a>
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
          <a
            href="#buy"
            className="px-6 py-3 bg-black text-white hover:bg-gray-800 transform transition-all duration-300 hover:scale-105 text-lg px-8"
          >
            💬 Contact Now to Purchase
          </a>
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
  {
    title: "OG Collection Vol.1",
    description: "The original set of rare items",
    items: "29 Skins",
    price: "0.85",
    image: "https://source.unsplash.com/random/800x600/?game,night,city"
  },
  {
    title: "Rare Series",
    description: "Limited edition collectibles",
    items: "46 Skins",
    price: "1.50",
    image: "https://source.unsplash.com/random/800x600/?car,racing,night"
  },
  {
    title: "Epic Battle Set",
    description: "Perfect for intense gameplay",
    items: "40 Skins",
    price: "1.25",
    image: "https://source.unsplash.com/random/800x600/?action,game"
  },
  {
    title: "Mini Flex Pack",
    description: "Show off your exclusive items",
    items: "2 Skins",
    price: "0.25",
    image: "https://source.unsplash.com/random/800x600/?luxury,car"
  },
  {
    title: "Stylish Loadout",
    description: "Customized for style and performance",
    items: "34 Skins",
    price: "0.90",
    image: "https://source.unsplash.com/random/800x600/?urban,street"
  },
  {
    title: "Classic Vibes",
    description: "Nostalgic items from early releases",
    items: "13 Skins",
    price: "0.70",
    image: "https://source.unsplash.com/random/800x600/?retro,vintage,car"
  },
];

const features = [
  { icon: "🔒", title: "Secure Transfer", description: "Direct account transfer. OGE changeable." },
  { icon: "⚡", title: "Instant Delivery", description: "Delivered within minutes via secure chat." },
  { icon: "🌍", title: "Cross-Platform", description: "Works on PC, Xbox, PlayStation." },
  { icon: "💬", title: "1-on-1 Support", description: "Personal guidance until account is in your hands." },
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

const gameVideos = [
  {
    title: "GTA V Official Trailer",
    thumbnail: "https://source.unsplash.com/random/800x450/?city,night",
    videoUrl: "#video1"
  },
  {
    title: "Los Santos Tour",
    thumbnail: "https://source.unsplash.com/random/800x450/?beach,sunset",
    videoUrl: "#video2"
  }
];

const testimonials = [
  { text: "Got my account within 10 minutes and it was loaded! All legit.", author: "@ZoneWarZach" },
  { text: "Best seller out there. Account came with surprise bonus skins too 👀.", author: "@SkullyBoyFN" },
  { text: "Incredible value! All the rare skins I wanted are here.", author: "@GamerPro99" },
  { text: "Smooth transaction and exactly as advertised. 10/10 recommend.", author: "@StreamerElite" },
];

export default Index;
