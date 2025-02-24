import { AnimatedTestimonials } from "@/components/ui/animated-testimonial";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export default function AnimatedTestimonialsDemo() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Varun Kumar",
      designation: "Backend Developer",
      src: "/varunji.jpg", 
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Suman Yadav",
      designation: "HOD",
      src: "/suman.JPEG",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Swastik Khatua",
      designation: "Director",
      src: "/swastik.jpg",
    },
    {
      quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Ayushmaan Soni",
      designation: "CEO",
      src: "/ayushmaan.jpeg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Dhraval Narsinha",
      designation: "Frontend Developer",
      src: "/dhaual.JPEG",
    },
  ];

  return (
    <div className="flex gap-10">
      <div className="w-1/3 p-6 rounded-2xl text-white">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <p className="mb-6">We are a dynamic group of individuals who are passionate about what we do.</p>
        <p className="mb-6">The team who made this product possible.</p>
      </div>
      <div className="w-2/3">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
  
}
