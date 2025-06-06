import React from 'react'
import { Image } from "@nextui-org/react";
import Heading from '@/component/heading/Heading'
import styles from '@/styles/About.module.css'

const Aboutus = () => {
    return (
        <>
            <Heading text={"ABOUT US"} />
            <div className='container'>
                <p className='content_paragraph text-foreground'>Discover a new way to elevate your cricket game at Limitless Cricket Academy! Join us on an exciting journey that redefines how you play, compete, and celebrate. Whether you’re a beginner or seasoned player, our expert coaching ensures every match counts. At Limitless Cricket, we’re committed to fostering talent and passion for the game, helping you reach new heights. Experience a world where cricket isn’t just a sport, but a way of life. LimitLess Cricket Academy – Where Every Game Matters.</p>
                <div className={styles['about-content-conatiner']}>
                    <div>
                        <Image
                            isZoomed
                            alt="NextUI hero Image"
                            src="/assets/main_Logo.webp"
                            className='main_Image h-full w-full'
                        />
                    </div>
                    <div>
                        <h2 className={styles['about-content-conatiner-text']}>Unleashing Sports Excellence: <span>Passion, Dedication, and the Spirit of the Game</span></h2>
                        <p className='content_paragraph text-foreground'>At Limitless Cricket Academy, we bring the spirit of cricket to life. Founded on a deep passion for the game and a commitment to excellence, we’ve grown into a leading hub for aspiring athletes and enthusiasts. Our mission is to empower cricketers at every level, offering expert training and fostering a love for the sport. Join Limitless Cricket Academy, where passion and excellence meet to inspire the next generation of cricket champions.</p>
                        <ol>
                            <li className={`${styles['ContentList']} ml-[1.8rem] text-[rgba(36,43,46,0.8)]`}><span className={styles['ContentListSpan']}>Trusted Quality Cricket Gear:</span> Elevate your game with our expertly designed equipment, built for top performance and lasting durability. Experience the difference with gear you can rely on.</li>
                            <li className={`${styles['ContentList']} ml-[1.8rem] text-[rgba(36,43,46,0.8)]`}><span className={styles['ContentListSpan']}>Expert Team with a Passion for Cricket:</span> Our dedicated team shares your love for the game. Receive personalized advice and tailored recommendations to meet your specific needs, ensuring you play at your best.</li>
                            <li className={`${styles['ContentList']} ml-[1.8rem] text-[rgba(36,43,46,0.8)]`}><span className={styles['ContentListSpan']}>Cricket Community at Limitless Cricket Academy:</span> Be part of a vibrant community that shares your passion for cricket. Whether you’re a player, coach, or enthusiast, Limitless Cricket Academyis your ultimate home ground to celebrate the game.</li>
                        </ol>
                        <p className='content_paragraph text-foreground'>At Limitless Cricket Academy, our commitment goes beyond delivering premium cricket equipment and services. We believe in the power of sports to inspire, transform, and unite. We’ve built a community where players of all levels, from beginners to professionals, receive the support they need to elevate their game and reach new heights.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus