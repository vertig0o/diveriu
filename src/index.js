import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = ({ text, type }) => {
  if (type === 'Primary') {
    return <button className={styles.primary}>{text}</button>
  }
  if (type === 'dotted') {
    return <button className={styles.dotted}>{text}</button>
  }
  if (type === 'text') {
    return <button className={styles.text}>{text}</button>
  }
}
