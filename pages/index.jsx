import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { AnimeLists } from '../components/AnimeLists'

export default function Home() {
  return (
    <>
      <Head>
        <title>アニメリスト検索アプリ</title>
        <meta name="description" content="アニメを検索することができます" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main >
        <h1>アニメリスト検索アプリ</h1>
        <div>
          {/* className contetWrapper */}
          <AnimeLists />
        </div>
      </main>
    </>
  )
}
