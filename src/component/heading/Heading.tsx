import React from 'react'
import styles from '@/styles/Heading.module.css'

const Heading: React.FC<any> = ({text}) => {
  return (
    <h1 className={`${styles.heading}`}>{text}</h1>
  )
}

export default Heading