"use client"
import React, { useRef } from 'react';
import Nav from '@/component/navbar/Nav';
import MainHeader from '@/component/mainHeader/MainHeader';
import Aboutus from '@/constant/Aboutus';
import Portfolio from '@/constant/Portfolio';
import Services from '@/constant/Services';
import Testimonial from '@/constant/Testimonial';
import Team from '@/constant/Team';
import Pricing from '@/component/pricing/Pricing';
import Faq from '@/constant/Faq';
import Footer from '@/component/footer/Footer';
import Contactus from '@/component/contact/Contactus';

export default function Home() {
  // Create refs for each component
  const componentOneRef = useRef<HTMLDivElement>(null);
  const componentTwoRef = useRef<HTMLDivElement>(null);
  const componentThreeRef = useRef<HTMLDivElement>(null);

  const componentFourRef = useRef<HTMLDivElement>(null);
  const componentFiveRef = useRef<HTMLDivElement>(null);
  const componentSexRef = useRef<HTMLDivElement>(null);

  const componentSevenRef = useRef<HTMLDivElement>(null);
  const componentEightRef = useRef<HTMLDivElement>(null);
  const componentNineRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ backgroundColor: '#EFF1F3' }}>
      <Nav componentOneRef={componentOneRef} componentTwoRef={componentTwoRef} componentThreeRef={componentThreeRef} componentFourRef={componentFourRef} componentFiveRef={componentFiveRef} componentSexRef={componentSexRef} componentSevenRef={componentSevenRef} componentEightRef={componentEightRef} componentNineRef={componentNineRef} />
      <div ref={componentOneRef}>
        <MainHeader />
      </div>
      <div ref={componentTwoRef}>
        <Aboutus />
      </div>
      <div ref={componentThreeRef}>
        <Services />
      </div>
      <div ref={componentFourRef}>
        <Portfolio />
      </div>
      <div ref={componentFiveRef}>
        <Testimonial />
      </div>
      <div ref={componentSexRef}>
        <Team />
      </div>
      <div ref={componentSevenRef}>
        <Pricing />
      </div>
      <div ref={componentEightRef}>
        <Faq />
      </div>
      <div ref={componentNineRef} >
        <Contactus />
      </div>
      <Footer />
    </div>
  );
}
