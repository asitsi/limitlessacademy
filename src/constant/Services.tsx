import React from 'react'
import { Image } from "@nextui-org/react";
import Heading from '@/component/heading/Heading'
import { list } from './const';
// styles
import styles from '@/styles/Service.module.css';

const Services = () => {
  return (
    <>
      <Heading text={"SERVICES"} />
      <div className='container'>
        <p className='content_paragraph text-foreground'>Explore Limitless Cricket Academy’s extensive range of services to enhance your cricketing experience. From high-quality equipment sales to tailored coaching and event management, we offer a complete suite of solutions to meet all your cricket needs. Discover how Limitless Cricket Academy can help you unlock your game’s full potential.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {list.map((item, index) => (
            <div className={styles['content-parent']} key={index}>
              <div className={styles['content-card']}>
                <div className={styles['content-box']}>
                  <span className={styles['content-card-title']}>{item.title}</span>
                  <ol className={styles['content-card-content']}>
                    {item.list.map((text, index) => (
                      <li key={index}>{text}</li>
                    ))}
                  </ol>
                </div>
                <div className="date-box">
                  <Image src={item.img} alt='icon' width={30} height={30} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Services