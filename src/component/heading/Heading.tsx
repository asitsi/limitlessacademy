import React from 'react'

const Heading: React.FC<any> = ({text}) => {
  return (
    <div style={Text}>{text}</div>
  )
}

const Text: React.CSSProperties = { textAlign: 'center', marginTop: '1.5rem', fontWeight: '700', fontSize: '2rem', fontFamily: 'sans-serif', color: 'rgba(0,28,59,255)' }

export default Heading