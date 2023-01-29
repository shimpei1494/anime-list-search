import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { Tag } from "@chakra-ui/tag";


export function AnimeArticle(props) {
  const theAnime = props.oneAnime;
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          <Button onClick={onOpen} border="1px">詳細</Button>
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