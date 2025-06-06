import React from 'react'
import Heading from '@/component/heading/Heading'
import styles from '@/styles/Team.module.css'
import { Image } from '@nextui-org/react'

const Team = () => {

  return (
    <>
      <Heading text={"TEAM"} />
      <div className='container'>
        <p className='content_paragraph text-foreground'>Join the winning team at Limitless Cricket Academy, where we believe in playing together and achieving victory as one. Whether you’re a player or enthusiast, our community is built on teamwork, passion, and success. Be part of Limitless Cricket Academy and elevate your game today!</p>
        <div className='flex justify-center flex-wrap gap-4'>
          {TeamData.map((item, index) => {
            return <div key={index}>
              <div className={styles["team-card"]} >
                {item.name === "SHAAN SHAIKH" ? <span></span> : null}
                <div className={styles["team-card__img"]}>
                  <Image src={item.certificateImg} alt='certificate_image' height={200} width={400} isZoomed className={styles["team-card__img-image"]}/>
                </div>
                <div className={styles["team-card__avatar"]}>
                  <Image src={item.image} alt='certificate_image' height={100} width={100} className='rounded-full'/>
                </div>
                <h2 className={styles["team-card__title"]}>{item.name}</h2>
                <div className={`${styles["team-card__subtitle"]} text-foreground`}>Cricket Experience: <b className='text-foreground-default[900]'>{item.exp}<sup>+</sup></b> years</div>
                <div className={`${styles["team-card__subtitle"]} text-foreground`}>COACHING Experience: <b>{item.coachExp}<sup>+</sup></b> years </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Team;

const TeamData = [
  {
    name: 'SHAAN SHAIKH',
    certificate: true,
    exp: 12,
    coachExp: 7,
    certificateImg: '/assets/certificate.webp',
    image: '/assets/shaan.webp'
  },
  {
    name: 'AKASH AHIR',
    certificate: true,
    exp: 10,
    coachExp: 5,
    certificateImg: '/assets/certificate.webp',
    image: '/assets/akashCanvatransparent.webp'
  }
]