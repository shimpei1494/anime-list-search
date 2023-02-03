import Head from 'next/head'
import { AnimeLists } from '../components/AnimeLists'
import { Center, Container} from '@chakra-ui/layout'
import { Header } from '../components/Header'
import { Description } from '../components/Description'
import { Button } from '@chakra-ui/button'
import { animateScroll as scroll } from 'react-scroll'
import { FaRegArrowAltCircleUp } from "react-icons/fa"

const scrollToTop = () => {
  scroll.scrollToTop(); 
};

export default function Home() {
  return (
    <>
      <Head>
        <title>アニメリスト検索アプリ</title>
        <meta name="description" content="アニメを検索することができます" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/anime_fabicon.jpeg" />
      </Head>
      <main >
        <Header />
        <Center mt={5}>
          <Description />
        </Center>
        <Container mt={5}>
          <AnimeLists />
        </Container>
        {/* ページトップに戻るボタン */}
        <Button position="fixed" bottom={10} right={10} zIndex={1} onClick={scrollToTop} size={100}>
          <FaRegArrowAltCircleUp size={50} />
        </Button>
      </main>
    </>
  )
}
