import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import MobileNav from "./MobileNav";
import style from '@/styles/Footer.module.css';

interface ScrollButtonsProps {
  componentOneRef: React.RefObject<HTMLDivElement>;
  componentTwoRef: React.RefObject<HTMLDivElement>;
  componentThreeRef: React.RefObject<HTMLDivElement>;

  componentFourRef: React.RefObject<HTMLDivElement>;
  componentFiveRef: React.RefObject<HTMLDivElement>;
  componentSexRef: React.RefObject<HTMLDivElement>;

  componentSevenRef: React.RefObject<HTMLDivElement>;
  componentEightRef: React.RefObject<HTMLDivElement>;
  componentNineRef: React.RefObject<HTMLDivElement>;
}

const Nav: React.FC<ScrollButtonsProps> = ({ componentOneRef, componentTwoRef, componentThreeRef, componentFourRef, componentFiveRef, componentSexRef, componentSevenRef, componentEightRef, componentNineRef }) => {
  const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={style['nav-container']}>
        <Navbar>
          <NavbarBrand>
            <AcmeLogo />
          </NavbarBrand>
          <NavbarContent justify="end">
            <NavbarContent className="gap-4" justify="center">
              <NavbarItem>
                <div onClick={() => scrollToComponent(componentOneRef)}>
                  HOME
                </div>
              </NavbarItem>
              <NavbarItem isActive >
                <div onClick={() => scrollToComponent(componentTwoRef)}>
                  ABOUT
                </div>
              </NavbarItem>
              <NavbarItem >
                <div onClick={() => scrollToComponent(componentThreeRef)}>
                  SERVICES
                </div>
              </NavbarItem>
              <NavbarItem>
                <div onClick={() => scrollToComponent(componentFourRef)}>
                  PORTFOLIO
                </div>
              </NavbarItem>
              <NavbarItem>
                <div onClick={() => scrollToComponent(componentSexRef)}>
                  TEAM
                </div>
              </NavbarItem>
              <NavbarItem>
                <div onClick={() => scrollToComponent(componentSevenRef)}>
                  PRICING
                </div>
              </NavbarItem>
              <NavbarItem>
                <div onClick={() => scrollToComponent(componentEightRef)}>
                  CONTACT
                </div>
              </NavbarItem>
            </NavbarContent>
          </NavbarContent>
        </Navbar>
      </div>
      <div className={style['nav-container-mobile']}>

      <MobileNav scrollToComponent={scrollToComponent} componentOneRef={componentOneRef} componentTwoRef={componentTwoRef} componentThreeRef={componentThreeRef} componentFourRef={componentFourRef} componentFiveRef={componentFiveRef} componentSexRef={componentSexRef} componentSevenRef={componentSevenRef} componentEightRef={componentEightRef} componentNineRef={componentNineRef}/>
      </div>
    </>

  );
}

export default Nav;
