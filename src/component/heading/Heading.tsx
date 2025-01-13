import React from 'react'
import styles from '@/styles/Heading.module.css'

const Heading: React.FC<any> = ({text}) => {
  return (
    <div className={`${styles.heading}`}>{text}</div>
  )
}

export default Heading