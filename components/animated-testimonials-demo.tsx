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
        "Varun is the architect behind Osmium’s robust and scalable backend infrastructure. Specializing in server-side logic, database management, and API development, he ensures the platform’s performance, security, and reliability.",
      name: "Varun Kumar",
      designation: "Co-Founder/Backend Developer",
      src: "/varun.jpg", 
    },
    {
      quote:
        "Suman leads the design team with a focus on aesthetics, usability, and user-centric experiences. His expertise in UI/UX ensures that Osmium’s platform is not only visually appealing but also intuitive and accessible for learners of all backgrounds.",
      name: "Suman Yadav",
      designation: "Co-Founder/Head of Design",
      src: "/suman.JPEG",
    },
    {
      quote:
        "Swastik transforms designs into seamless, interactive, and high-performance user interfaces. His expertise in modern frontend frameworks ensures that Osmium delivers a smooth and engaging learning experience.",
      name: "Swastik Khatua",
      designation: "Co-Founder/Director/Frontend Developer",
      src: "/swastik_.jpg",
    },
    {
      quote: "As the driving force behind Osmium, Ayushmaan combines technical expertise with a strategic vision to build a cutting-edge AI-driven learning platform. His commitment to innovation and excellence ensures that Osmium evolves to meet the needs of learners worldwide.  ",
      name: "Ayushmaan Soni",
      designation: "Co-Founder/CEO/Software Developer",
      src: "/Ayushmaan_.jpg",
    },
    {
      quote:
        "Dhraval is dedicated to crafting pixel-perfect, responsive, and dynamic web interfaces. His deep understanding of UI/UX principles and frontend technologies helps bring Osmium’s vision to life in the most user-friendly way.  ",
      name: "Dhraval Narsinha",
      designation: "Co-Founder/Frontend Developer",
      src: "/dhaual.JPEG",
    },
  ];

  return (
    <div className="flex gap-10">
      <div className="w-1/3 p-6 rounded-2xl text-white">
        <h2 className="text-2xl font-bold mb-4">Meet the Team Behind Osmium</h2>
        <p className="mb-6">At Osmium, our team is driven by innovation, expertise, and a shared passion for transforming education through AI-powered technology. Each member brings unique skills to create a seamless, intelligent, and engaging learning experience. </p>
        {/* <p className="mb-6">The team who made this product possible.</p> */}
      </div>
      <div className="w-2/3">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
  
}
