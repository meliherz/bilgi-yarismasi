"use client"
import '@/../styles/global.css'
import styles from './styles.module.css'
import { Lora } from 'next/font/google'
import ButtonBases from '@/components/guides/imageButton'

const lora = Lora({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <ButtonBases />
    </div>
  )
}
