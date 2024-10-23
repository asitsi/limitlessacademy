import React from 'react'
import Heading from '@/component/heading/Heading'
import styles from '@/styles/Team.module.css'
import { Image } from '@nextui-org/react'

const Team = () => {

  return (
    <>
      <Heading text={"TEAM"} />
      <div className='container'>
        <p className='content_paragraph text-foreground'>Join the winning team at LimitLess academy, where we believe in playing together and achieving victory as one. Whether you’re a player or enthusiast, our community is built on teamwork, passion, and success. Be part of LimitLess academy and elevate your game today!</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          {TeamData.map((item, index) => {
            return <div key={index}>
              <div className={styles["team-card"]} >
                {item.name === "SHAAN SHAIKH" ? <span></span> : null}
                <div className={styles["team-card__img"]}>
                  <Image src={item.certificateImg} alt='certificate_image' height={200} width={400} isZoomed className={styles["team-card__img-image"]}/>
                </div>
                <div className={styles["team-card__avatar"]}>
                  <Image src={item.image} alt='certificate_image' height={100} width={100} style={{borderRadius: '50%'}}/>
                </div>
                <div className={styles["team-card__title"]}>{item.name}</div>
                <div className={styles["team-card__subtitle"]}>Cricket Experience: <b>{item.exp}<sup>+</sup></b> years</div>
                <div className={styles["team-card__subtitle"]}>COACHING Experience: <b>{item.coachExp}<sup>+</sup></b> years </div>
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
    certificateImg: '/assets/certificate.png',
    image: '/assets/shaan.png'
  },
  {
    name: 'AKASH AHIR',
    certificate: true,
    exp: 10,
    coachExp: 5,
    certificateImg: '/assets/certificate.png',
    image: '/assets/akashCanvatransparent.png'
  }
]