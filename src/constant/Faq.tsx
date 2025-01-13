import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";
import Heading from '@/component/heading/Heading'
import { FAQ } from './const';

const Faq = () => {
  return (
    <>
      <Heading text={"Frequently Asked Questions"} />
      <div className='container'>
        <div className='my-4'>
          <div className='faq-container'>
            <Accordion>
              {FAQ.map((item, index) => (
                <AccordionItem key={index} aria-label={item.title} title={item.title} >
                  <p className='p-2'>{item.content}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Faq

