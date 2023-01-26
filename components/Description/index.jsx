import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Link, Text } from "@chakra-ui/layout";
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
          <p>watch数 ＝ annictで「見てる/見たい/見た」に登録している人の数。</p>
          <p>人気順をwatch数で判断し、降順で表示しています。</p>
          <p>1ページ20作品表示されています。</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  </Box>
  );
}