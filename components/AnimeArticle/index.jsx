import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { Tag } from "@chakra-ui/tag";
// import xml2json from "xml-js";


export function AnimeArticle(props) {
  const theAnime = props.oneAnime;
  const { isOpen, onOpen, onClose } = useDisclosure()

  const searchShobocal = async (tid) => {
    // ↓後でdevとproductionでドメインを場合分けできるようにする
    const domain = process.env.NODE_ENV === "production" ? "https://anime-list-search-nine.vercel.app/api" : "http://localhost:3000/api";
    const response = await fetch(`${domain}/db.php?Command=TitleLookup&TID=6556`);
    const dataText = await response.text();
    // const comment = data.match(/キャスト/)

    const convert = require('xml-js');
    const dataJsonText = convert.xml2json(dataText, {compact: true, spaces: 4});
    const dataJson = JSON.parse(dataJsonText)
    const dataComment = dataJson.TitleLookupResponse.TitleItems.TitleItem.Comment._text;
    // 「*キャスト」で始まり、「*」で終わる部分を取り出す
    const dataCast = dataComment.match(/\*キャスト[\s\S]*\*/);
    // 不要な部分を取り除く
    const castList = dataCast[0].replace(/\*キャスト\r\n/,"").replace(/\r\n\*/,"");
    // キャラ：声優の形で表現できるよう先頭の：と行の末尾の\r\nでmatchするもので配列を作る
    // const castDisplay = castList.match(/(:.*\r\n)/);→先頭しか取得してくれない
    console.log(castList);
  };

  return (
    <Box bgColor="teal.300" p={2} my={8}>
      {theAnime.no_episodes ? <Tag mb={2} variant='solid' colorScheme='teal'>映画</Tag> : ""}
      <Heading size='lg'>{theAnime.title}</Heading>
      <HStack py={5}>
        <VStack>
          <UnorderedList>
            <ListItem>wacth数：{theAnime.watchers_count}</ListItem>
            <ListItem><Link href={theAnime.official_site_url} target='_blank'>公式ページ</Link></ListItem>
            <ListItem><Link href={theAnime.wikipedia_url} target='_blank'>Wikipedia</Link></ListItem>
          </UnorderedList>
          <Button onClick={() => {searchShobocal(theAnime.syobocal_tid); onOpen();}} border="1px">詳細</Button>
        </VStack>
        <Image src={theAnime.images.facebook.og_image_url} alt="アニメの画像" width={"70%"} height={"70%"} onError={(e) => e.target.src = 'images/no_image_yoko.jpg'}
        ></Image>
      </HStack>
      {/* モーダル部分 */}
      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{theAnime.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={theAnime.images.facebook.og_image_url} alt="アニメの画像" width="100%" onError={(e) => e.target.style.display="none"}
            ></Image>
            <Heading>あらすじ</Heading>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <Heading>キャスト</Heading>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
    
  );
}