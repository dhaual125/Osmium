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
      src: "/varun.jpeg", 
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Suman Yadav",
      designation: "HOD",
      src: "/suman.png",
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
      designation: "Sowftware Developer",
      src: "/dhraval.jpeg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
