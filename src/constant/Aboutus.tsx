import React from 'react'
import { Image } from "@nextui-org/react";
import Heading from '@/component/heading/Heading'
import styles from '@/styles/About.module.css'

const Aboutus = () => {
    return (
        <>
            <Heading text={"ABOUT US"} />
            <div className='container'>
                <p className='content_paragraph text-foreground'>Discover a new way to elevate your cricket game at Limit Less Cricket Academy! Join us on an exciting journey that redefines how you play, compete, and celebrate. Whether you’re a beginner or seasoned player, our expert coaching ensures every match counts. At Limit Less Cricket, we’re committed to fostering talent and passion for the game, helping you reach new heights. Experience a world where cricket isn’t just a sport, but a way of life. Limit Less Cricket Academy – Where Every Game Matters.</p>
                <div className={styles['about-content-conatiner']}>
                    <div>
                        <Image
                            isZoomed
                            alt="NextUI hero Image"
                            src="/assets/main_Logo.png"
                            className='main_Image'
                            style={MainImage}
                        />
                    </div>
                    <div>
                        <h1 style={ContentHeading}>Unleashing Sports Excellence: <span>Passion, Dedication, and the Spirit of the Game</span></h1>
                        <p className='content_paragraph'>At Limit Less Cricket Academy, we bring the spirit of cricket to life. Founded on a deep passion for the game and a commitment to excellence, we’ve grown into a leading hub for aspiring athletes and enthusiasts. Our mission is to empower cricketers at every level, offering expert training and fostering a love for the sport. Join Limit Less Cricket Academy, where passion and excellence meet to inspire the next generation of cricket champions.</p>
                        <ol>
                            <li className={styles['ContentList']} style={ContentList}><span className={styles['ContentListSpan']}>Trusted Quality Cricket Gear:</span> Elevate your game with our expertly designed equipment, built for top performance and lasting durability. Experience the difference with gear you can rely on.</li>
                            <li className={styles['ContentList']} style={ContentList}><span className={styles['ContentListSpan']}>Expert Team with a Passion for Cricket:</span> Our dedicated team shares your love for the game. Receive personalized advice and tailored recommendations to meet your specific needs, ensuring you play at your best.</li>
                            <li className={styles['ContentList']} style={ContentList}><span className={styles['ContentListSpan']}>Cricket Community at Limit Less Academy:</span> Be part of a vibrant community that shares your passion for cricket. Whether you’re a player, coach, or enthusiast, Limit less academyis your ultimate home ground to celebrate the game.</li>
                        </ol>
                        <p className='content_paragraph'>At Limit Less Academy, our commitment goes beyond delivering premium cricket equipment and services. We believe in the power of sports to inspire, transform, and unite. We’ve built a community where players of all levels, from beginners to professionals, receive the support they need to elevate their game and reach new heights.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const MainImage: React.CSSProperties = {
    height: '100%',
    width: '100%'
}

const ContentHeading: React.CSSProperties = { fontWeight: '800', fontSize: '1.5rem', fontFamily: 'sans-serif', textTransform: 'uppercase', lineHeight: '2rem', color: 'rgba(0,28,59,255)' }
const ContentList: React.CSSProperties = { marginLeft: '1.8rem', color: 'rgba(36,43,46,0.8)'}

export default Aboutus