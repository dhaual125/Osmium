import Head from 'next/head'
import AnimatedModalDemo from '@/components/animated-modal-demo'
import AnimatedTestimonialsDemo from '@/components/animated-testimonials-demo'
import AppleCardsCarouselDemo from '@/components/apple-cards-carousel-demo'
import CompareDemo from '@/components/compare-demo'
import GoogleGeminiEffectDemo from '@/components/google-gemini-effect-demo'
import HeroParallaxDemo from '@/components/hero-parallax-demo'
import SignupFormDemo from '@/components/signup-form-demo'
import TimelineDemo from '@/components/timeline-demo'
import { MacbookScroll } from '@/components/ui/macbook-scroll'
import WorldMapDemo from '@/components/world-map-demo'
import React from 'react'

function Page() {
  return (
    <>
      {/* Set Title and Favicon */}
      <Head>
        <title>Osmium - AI Mentor</title>
        <meta name="description" content="AI mentor personalized for you." />
      </Head>

      <HeroParallaxDemo />
      <AnimatedModalDemo />
      <MacbookScroll />
      <TimelineDemo />
      <CompareDemo />
      <AppleCardsCarouselDemo />
      <WorldMapDemo />
      <AnimatedTestimonialsDemo />
      <GoogleGeminiEffectDemo />
    </>
  )
}

export default Page
