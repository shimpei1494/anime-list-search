import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { Tag } from "@chakra-ui/tag";
import { useState } from "react";


export function AnimeArticle(props) {
  const theAnime = props.oneAnime;
  const tid = props.syobocal_tid
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [castList, setCastList] = useState([]);

  const searchShobocal = async (tid) => {
    // devとproductionでドメインを場合分けする→しょぼいカレンダーのAPIをたたく
    const domain = process.env.NODE_ENV === "production" ? "https://anime-list-search-nine.vercel.app/api" : "http://localhost:3000/api";
    const response = await fetch(`${domain}/db.php?Command=TitleLookup&TID=${tid}`);
    const dataText = await response.text();

    // xmlで受け取ったテキストデータをjsonテキストに変換→コメントデータ部分のテキストを取り出す
    const convert = require('xml-js');
    const dataJsonText = convert.xml2json(dataText, {compact: true, spaces: 4});
    const dataJson = JSON.parse(dataJsonText)
   if (!dataJson) {
    setCastList(["キャスト情報が見つかりません"]);
   };
    const dataComment = dataJson.TitleLookupResponse.TitleItems.TitleItem.Comment._text;
    // キャスト情報の抜き出し（キャスト情報の後にテキストがある場合とない場合の２パターンがある）
    let dataCast = []
    if (dataComment.match(/\*キャスト[\s\S]*\*/)) {
      dataCast = dataComment.match(/\*キャスト[\s\S]*\*/);
    } else {
      dataCast = dataComment.match(/\*キャスト[\s\S]*/);
    } 
    if (!dataCast | dataCast === []){
      return setCastList(["キャスト情報が見つかりません"]);
    }
    // 不要な部分を取り除く
    const castText = dataCast[0].replace(/\*キャスト\r\n/,"").replace(/\r\n\*/,"")
    // 改行を区切りとして配列に変換する
    setCastList(castText.split(/\r\n/));
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
          <Heading size='xl' p={3}>{theAnime.title}</Heading>
          <ModalCloseButton />
          <ModalBody>
            <Image src={theAnime.images.facebook.og_image_url} alt="アニメの画像" width="100%" onError={(e) => e.target.style.display="none"}
            ></Image>
            <Heading size='md' my={3}>キャスト(:キャラ名:声優名)</Heading>
            <UnorderedList>
              {castList.map((oneCast) => {
                // キャスト情報があればキャストごとにリストを表示
                return (
                  <ListItem key={oneCast}>{oneCast}</ListItem>
                );
              })}
            </UnorderedList>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
    
  );
}