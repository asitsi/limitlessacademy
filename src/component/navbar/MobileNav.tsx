import React from "react";
import { Navbar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarBrand } from "@nextui-org/react";
import Link from "next/link";
import { AcmeLogo } from "./AcmeLogo";

export default function MobileNav({ scrollToComponent, componentOneRef, componentTwoRef, componentThreeRef, componentFourRef, componentFiveRef, componentSexRef, componentSevenRef, componentEightRef, componentNineRef }: any) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [active, setActive] = React.useState('');

    return (
        <Navbar position="sticky" disableAnimation isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered className="lg:hidden bg-transparent backdrop-saturate-none data-[menu-open=true]:backdrop-filter-none backdrop-filter-none" >
            <NavbarBrand>
                <AcmeLogo />
            </NavbarBrand>

            <NavbarContent className="lg:hidden" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem>
                    <div onClick={() => { scrollToComponent(componentOneRef); setIsMenuOpen(!isMenuOpen) }}>
                        Home
                    </div>
                </NavbarMenuItem>

                <NavbarMenuItem>
                    <div onClick={() => {scrollToComponent(componentTwoRef); setIsMenuOpen(!isMenuOpen)} }>
                        ABOUT
                    </div>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <div onClick={() => {scrollToComponent(componentThreeRef); setIsMenuOpen(!isMenuOpen)}}>
                        SERVICES
                    </div>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <div onClick={() => {scrollToComponent(componentFourRef); setIsMenuOpen(!isMenuOpen)}}>
                        PORTFOLIO
                    </div>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <div onClick={() => {scrollToComponent(componentFiveRef); setIsMenuOpen(!isMenuOpen)}}>
                        TEAM
                    </div>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <div onClick={() => {scrollToComponent(componentSexRef); setIsMenuOpen(!isMenuOpen)}}>
                        PRICING
                    </div>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <div onClick={() => {scrollToComponent(componentNineRef); setIsMenuOpen(!isMenuOpen)}}>
                        CONTACT
                    </div>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}