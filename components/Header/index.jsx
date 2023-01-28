import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Heading, Spacer } from "@chakra-ui/layout";

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Center h={100} bg="teal.300">
      <Heading>アニメリスト検索アプリ</Heading>
      <IconButton
        aria-label="DarkMode Switch"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Center>
  );
}