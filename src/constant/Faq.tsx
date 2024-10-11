import React from 'react'
import CustomAccordion from '@/component/CustomAccordion';
import Heading from '@/component/heading/Heading'
import { FAQ } from './const';

const Faq = () => {
  return (
    <>
      <Heading text={"Frequently Asked Questions"} />
      <div className='container'>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <div>
            {FAQ.map((item, index) => (
              <div key={index}>
                <CustomAccordion title={item.title} content={item.content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq

