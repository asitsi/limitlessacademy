import React from 'react'
import Heading from '../heading/Heading'
import { Image, Link } from '@nextui-org/react'
import styles from '@/styles/Footer.module.css'
import { ScrollButtonsProps } from '@/libs/type'

const Footer: React.FC<ScrollButtonsProps> = ({ componentOneRef, componentTwoRef, componentThreeRef, componentFourRef, componentFiveRef, componentSexRef, componentSevenRef, componentEightRef, componentNineRef }) => {
    const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className={styles['footer-container']}>
                <div className='container'>
                    <div className={styles['footer-container-row']}>
                        <div className={styles['footer-container-row-logo']}>
                            <Image src='/assets/main_Logo.png' alt='Logo_image' height={340} className='h-[100px] w-[100px]'/>
                        </div>
                        <div>
                            <Heading text={"INFORMATION"} />
                            <ul className={styles['footer-container-row-information']}>
                                <li>
                                    <div onClick={() => scrollToComponent(componentTwoRef)}>ABOUT</div>
                                </li>
                                <li>
                                    <div onClick={() => scrollToComponent(componentThreeRef)}>SERVICES</div>
                                </li>
                                <li>
                                    <div onClick={() => scrollToComponent(componentFourRef)}>PORTFOLIO</div>
                                </li>
                                <li>
                                    <div onClick={() => scrollToComponent(componentSexRef)}>TEAM</div>
                                </li>
                                <li>
                                    <div onClick={() => scrollToComponent(componentSevenRef)}>PRICING</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Heading text={"SOCIAL MEDIA"} />
                            <ul className={styles['footer-container-row-social-media']}>
                                <li>
                                    <Link href="https://www.instagram.com/limitlesscricketacademy2024?utm_source=qr&igsh=MWc0ZW5wcWhicThleg==" target='_blank'>
                                        <Image src='/assets/insta.svg' alt='Logo_image' height={40} />
                                    </Link>
                                </li>
                                <li><Image src='/assets/facebook.svg' alt='Logo_image' height={40}/></li>
                                <li>
                                    <Link href="https://youtube.com/@limitlesscricketacademy?si=S0scoNF6UAlgdvii" target='_blank'>
                                        <Image src='/assets/youtube.svg' alt='Logo_image' height={40} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <FooterBottom />
                </div>
            </div>
        </>
    )
}

export default Footer;

const FooterBottom = () => {
    const currentYear = new Date().getFullYear();

    return <div className={styles['footer-strip']}>
        <div>E-WASTE MANAGEMENT | DISCLAIMER</div>
        <div>COPYRIGHT © {currentYear} LIMITLESS CRICKET ACADEMY ALL RIGHTS RESERVED.</div>
    </div>
}