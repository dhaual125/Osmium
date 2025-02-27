import AnimatedTestimonialsDemo from '@/components/animated-testimonials-demo'
import AppleCardsCarouselDemo from '@/components/apple-cards-carousel-demo'
import CompareDemo from '@/components/compare-demo'

import GoogleGeminiEffectDemo from '@/components/google-gemini-effect-demo'
import TimelineDemo from '@/components/timeline-demo'

import {TracingBeamDemo} from '@/components/tracing-beam-demo'
import { MacbookScroll } from '@/components/ui/macbook-scroll'
import WorldMapDemo from '@/components/world-map-demo'
import React from 'react'

function page() {
  return (
    <div>
       <MacbookScroll/>

      <TimelineDemo/>

      <CompareDemo/>
      <AppleCardsCarouselDemo/>

      <WorldMapDemo/>

      <AnimatedTestimonialsDemo/>
      

      <GoogleGeminiEffectDemo/>

     
      
      


     
      
      
     
      
      
    </div>
  )
}

export default page
