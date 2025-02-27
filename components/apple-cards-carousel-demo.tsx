"use client"
import Image from "next/image"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />)

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Introduction to Mobile App
      </h2>
      <Carousel items={cards} />
    </div>
  )
}

const data = [
  {
    category: "Home Page",
    title: "",
    src: "/home.png",
    content: "",
  },
  {
    category: "Quiz Page",
    title: "",
    src: "/Quiz.jpg",
    content: "",
  },
  {
    category: "Mock Page  ",
    title: "",
    src: "/Mock-chip.png",
    content: "",
  },
  {
    category: "Mock Page 2",
    title: "",
    src: "/mock-chip-2.png",
    content: "",
  },
  {
    category: "Carrer Path",
    title: "",
    src: "/carrer-path-a.png",
    content: "",
  },
  {
    category: "Cloud",
    title: "",
    src: "/Cloud.png",
    content: "",
  },
]

