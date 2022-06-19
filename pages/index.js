import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Generator } from '../components/Generator'

export default function Home() {
  return (
    <div className={"bg-gradient-to-r from-purple-500 to-pink-500 flex flex-row grid place-items-center h-screen "}>
      <Generator />
    </div>
  )
}
