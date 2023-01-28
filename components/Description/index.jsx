import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Link, ListItem, Text, UnorderedList } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";

export function Description() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Text>アニメを<Link href='https://annict.com/' target="_blank">annict</Link>の<Link onClick={onOpen}>人気順で表示</Link>します</Text>

      {/* モーダル部分 */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textDecoration="underline">アニメリストの表示基準</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={10}>
          <Text>watch数 ＝ annictで「見てる/見たい/見た」に登録している人の数</Text>
          <Text>人気順をwatch数で判断し、降順で表示します</Text>
          <br/>
          <Text>デフォルトでは現在の年、シーズンが選択されています</Text>
          <UnorderedList>
            <ListItem>冬シーズン＝1~3月</ListItem>
            <ListItem>春シーズン＝4~6月</ListItem>
            <ListItem>夏シーズン＝7~9月</ListItem>
            <ListItem>秋シーズン＝10~12月</ListItem>
          </UnorderedList>
        </ModalBody>
      </ModalContent>
    </Modal>
  </Box>
  );
}