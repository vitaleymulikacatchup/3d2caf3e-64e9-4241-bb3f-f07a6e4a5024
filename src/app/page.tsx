"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Heart, Leaf, Users, Home, Star } from 'lucide-react';

export default function CoffeeHousePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="circleGradient"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Coffee House"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084387799-nkkr4vox.jpg"
          logoAlt="Coffee House Logo"
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "features" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Reserve Now", href: "contact" }}
          buttonClassName="px-6 py-2 rounded-full font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Welcome to Coffee House"
          description="Discover the perfect blend of artisan coffee, warm ambiance, and genuine hospitality. Your daily escape awaits."
          tag="Premium Coffee"
          tagIcon={Coffee}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084389143-wxcgm2c6.jpg"
          imageAlt="Coffee House interior"
          imagePosition="right"
          buttons={[
            { text: "View Menu", href: "features" },
            { text: "Make Reservation", href: "contact" }
          ]}
          className="py-12 md:py-20"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="Since 2015, Coffee House has been dedicated to serving the finest specialty coffees sourced from sustainable farms around the world. We believe great coffee brings people together."
          tag="Since 2015"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Sourced Responsibly",
              description: "We partner with ethical farms to bring you the finest quality beans.",
              icon: Leaf
            },
            {
              title: "Expert Baristas",
              description: "Our certified team crafts each cup with precision and passion.",
              icon: Users
            },
            {
              title: "Warm Community",
              description: "A welcoming space where everyone feels at home.",
              icon: Home
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084389993-k859wk1s.jpg"
          imageAlt="Our barista preparing coffee"
          imagePosition="right"
          textboxLayout="default"
          buttons={[{ text: "Learn More", href: "#" }]}
          className="py-16 md:py-24"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Our Specialty Menu"
          description="Handcrafted beverages made with premium ingredients and expertise"
          tag="Menu"
          tagIcon={Coffee}
          features={[
            {
              id: "01",
              title: "Signature Espresso",
              description: "Bold, rich, and perfectly balanced espresso shots pulled fresh daily from our premium blend.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084391157-r329t1gn.jpg",
              imageAlt: "Espresso shot"
            },
            {
              id: "02",
              title: "Creamy Lattes",
              description: "Velvety smooth lattes with intricate latte art made with locally sourced milk.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084392333-kx6jx34l.jpg",
              imageAlt: "Latte with art"
            },
            {
              id: "03",
              title: "Fresh Pastries",
              description: "Baked daily by our pastry team. From croissants to brownies, all made with love.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084393442-45v3bfmv.jpg",
              imageAlt: "Fresh pastries"
            },
            {
              id: "04",
              title: "Cozy Ambiance",
              description: "Perfect space for work, meetings, or simply enjoying a quiet moment with your favorite brew.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084394480-2hw3il69.jpg",
              imageAlt: "Cafe atmosphere"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          buttons={[{ text: "Full Menu", href: "#" }]}
          className="py-16 md:py-24"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Join our community of coffee lovers who visit us daily"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Regular Customer",
              testimonial: "Best coffee in the city. The baristas really know their craft, and the atmosphere is perfect for everything from work meetings to catching up with friends.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084395371-t9pi09wi.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Business Owner",
              testimonial: "I've been coming here every morning for two years. Consistency, quality, and genuine hospitality. That's what keeps me coming back.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084396277-4wzmos2o.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Designer",
              testimonial: "Coffee House is my creative sanctuary. Great coffee, free wifi, and the vibe is just right for deep work.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084397342-yjn72qn2.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "Marcus Thompson",
              role: "Teacher",
              testimonial: "A true community space. The baristas remember your order, and everyone feels welcome here. Highly recommended.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084398946-4d69i2v3.jpg",
              imageAlt: "Marcus Thompson"
            },
            {
              id: "5",
              name: "Lisa Anderson",
              role: "Freelancer",
              testimonial: "The pastries are incredible, and the coffee is always perfectly made. My favorite spot to spend my afternoons.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084404076-pm8hj3hq.jpg",
              imageAlt: "Lisa Anderson"
            },
            {
              id: "6",
              name: "David Kim",
              role: "Student",
              testimonial: "Affordable prices, excellent quality, and a team that actually cares about their customers. This is my study headquarters.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084405389-bfobyacr.jpg",
              imageAlt: "David Kim"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          className="py-16 md:py-24"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch"
          description="Have a question or want to make a reservation? We'd love to hear from you. Fill out the form below and we'll get back to you shortly."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{ name: "message", placeholder: "Tell us what you'd like to discuss...", rows: 5, required: true }}
          buttonText="Send Message"
          className="py-16 md:py-24"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764084387799-nkkr4vox.jpg"
          logoText="Coffee House"
          logoWidth={100}
          logoHeight={40}
          copyrightText="© 2025 Coffee House. All rights reserved."
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Monday - Friday: 7am - 8pm", href: "#" },
                { label: "Saturday - Sunday: 8am - 9pm", href: "#" }
              ]
            },
            {
              title: "Location",
              items: [
                { label: "123 Main Street", href: "#" },
                { label: "Phone: (555) 123-4567", href: "#" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}