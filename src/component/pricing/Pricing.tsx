import React from 'react'
import Heading from '../heading/Heading'
import styles from '@/styles/Pricing.module.css'
import { pricing } from '@/constant/const'
import { Button } from "@nextui-org/react";

const Pricing = () => {
  return (
    <>
      <Heading text={"PRICING"} />
      <div className='container'>
        <p className='content_paragraph'>Experience premium cricket gear and services at unbeatable prices with Limit Less Academy. Our fair pricing ensures you get unmatched quality without compromise, elevating your cricket game beyond expectations. Discover the value of excellence today with our top-tier products and services designed for every cricket enthusiast.</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', margin: "2rem 0" }}>
          {pricing.map((item, index) => (
            <div key={index} className={styles['container']}>
              <div className={styles["card_box"]}>
                {item.premium ? <span></span> : null}
                <div style={{ display: 'flex', justifyContent: 'space-around', height: '100%', flexDirection: 'column', alignItems: 'center' }}>
                  <h6 className={styles['card_box-heading']}>{item.month}</h6>
                  <div className={styles['card_box-heading']}>
                    <h1>{item.price}</h1>
                    <Button variant="bordered" style={{color: '#fc823b', border: '2px solid #fc823b', fontWeight: '700' }}>Get Now</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className={styles['container']}>
              <div className={styles["card_box"]}>
                <div style={{ display: 'flex', justifyContent: 'center', height: '100%', flexDirection: 'column', alignItems: 'center' }}>
                  <h6 style={{ fontSize: '1.6rem', fontWeight: '700' }}>NET BOOKING 1 NET</h6>
                  <div style={{ textAlign: 'center', padding: '1rem', fontWeight: '500'}}>
                    <h6>Hour1 / Weekday 900₹ Weekend 1000₹</h6>
                    <h6>Hour2 / Weekday 1800₹ Weekend 2000₹</h6>
                    <p>Note: Night Charge 100₹ Extra Per Hour.</p>
                    <Button variant="bordered" style={{ marginTop: '10px', color: '#fc823b', border: '2px solid #fc823b', fontWeight: '700'}}>Get Now</Button>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Pricing