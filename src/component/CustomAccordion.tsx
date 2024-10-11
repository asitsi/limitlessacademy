'use client'
import React, { useState } from 'react'
import { Card } from '@nextui-org/react';

interface AccordionProps {
  title: string;
  content: string;
}
 
 const CustomAccordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div style={{ margin: '10px 0', width: '100%' }}>
        <Card style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', width: '100%' }}>
          <div
            onClick={toggleAccordion}
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              backgroundColor: '#f5f5f5',
              borderBottom: '1px solid #ddd',
            }}
          >
            <h4 style={{ margin: 0 }}>{title}</h4>
            <span>{isOpen ? '-' : '+'}</span>
          </div>
          {isOpen && (
            <div
              style={{
                padding: '10px',
                backgroundColor: '#fff',
              }}
            >
              <p style={{ margin: 0 }}>{content}</p>
            </div>
          )}
        </Card>
      </div>
    );
  };

  export default CustomAccordion