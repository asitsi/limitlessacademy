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
        <p className='content_paragraph text-foreground'>Experience premium cricket gear and services at unbeatable prices with Limitless Cricket Academy. Our fair pricing ensures you get unmatched quality without compromise, elevating your cricket game beyond expectations. Discover the value of excellence today with our top-tier products and services designed for every cricket enthusiast.</p>
        <div className='flex justify-center flex-wrap gap-8 my-8'>
          {pricing.map((item, index) => (
            <div key={index} className={styles['container']}>
              <div className={styles["card_box"]}>
                {item.premium ? <span></span> : null}
                <div className='flex justify-around h-full flex-col items-center'>
                  <h6 className={styles['card_box-heading']}>{item.month}</h6>
                  <div className={styles['card_box-heading']}>
                    <h2>{item.price}</h2>
                    <Button variant="bordered" className='text-[#fc823b] border-2 border-[#fc823b] font-bold'>Get Now</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className={styles['container']}>
              <div className={styles["card_box"]}>
                <div className='flex justify-center items-center h-full flex-col'>
                  <h6 className='text-[1.6rem] font-bold'>NET BOOKING 1 NET</h6>
                  <div className='text-center p-4 font-medium'>
                    <h6>Hour1 / Weekday 900₹ Weekend 1000₹</h6>
                    <h6>Hour2 / Weekday 1800₹ Weekend 2000₹</h6>
                    <p>Note: Night Charge 100₹ Extra Per Hour.</p>
                    <Button variant="bordered" className='mt-2 text-[#fc823b] border-2 border-[#fc823b] font-bold'>Get Now</Button>
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