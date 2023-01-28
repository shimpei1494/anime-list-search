import Head from 'next/head'
import { AnimeLists } from '../components/AnimeLists'
import { Center, Container} from '@chakra-ui/layout'
import { Header } from '../components/Header'
import { Description } from '../components/Description'

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
        <Header />
        <Center mt={5}>
          <Description />
        </Center>
        <Container mt={5}>
          <AnimeLists />
        </Container>
      </main>
    </>
  )
}
