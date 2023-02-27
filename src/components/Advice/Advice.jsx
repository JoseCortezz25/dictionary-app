import Image from 'next/image'
import React from 'react'
import styles from './Advice.module.css'

const Advice = ({ image, title, message }) => {
  return (
    <div className={styles.Initial}>
      <div className={styles.Initial__head}>
        <div className={styles.Initial__Icon}>
          <Image src={image} alt="" />
        </div>
        <h3>{title}</h3>
      </div>
      <p>{message}</p>
    </div>
  )
}

export { Advice }