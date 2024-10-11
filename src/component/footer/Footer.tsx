import React from 'react'
import Heading from '../heading/Heading'
import { Image } from '@nextui-org/react'
import styles from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <div className={styles['footer-container']}>
                <div className='container'>
                    <div className={styles['footer-container-row']}>
                        <div className={styles['footer-container-row-logo']}>
                            <Image src='/assets/logo.png' alt='Logo_image' style={{ height: '300px' }} />
                        </div>
                        <div>
                            <Heading text={"INFORMATION"} />
                            <ul className={styles['footer-container-row-information']}>
                                <li>ABOUT</li>
                                <li>SERVICES</li>
                                <li>PORTFOLIO</li>
                                <li>TEAM</li>
                                <li>PRICING</li>
                            </ul>
                        </div>
                        <div>
                            <Heading text={"SOCIAL MEDIA"} />
                            <ul className={styles['footer-container-row-social-media']}>
                                <li><Image src='/assets/insta.svg' alt='Logo_image' style={{ height: '40px' }} /></li>
                                <li><Image src='/assets/facebook.svg' alt='Logo_image' style={{ height: '40px' }} /></li>
                                <li><Image src='/assets/youtube.svg' alt='Logo_image' style={{ height: '40px' }} /></li>
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
        <div>COPYRIGHT © {currentYear} LIMIT LESS CRICKET ACADEMY ALL RIGHTS RESERVED.</div>
    </div>
}