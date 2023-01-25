import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Link, Text, VStack } from "@chakra-ui/layout";


export function AnimeArticle(props) {
  const theAnime = props.oneAnime;

  return (
    <Box bgColor="teal.300" p={2} my={8}>
      <Heading size='lg'>{theAnime.title}</Heading>
      <HStack py={5}>
        <VStack>
          <Text>wacth数：{theAnime.watchers_count}</Text>
          <Link href={theAnime.official_site_url} target='_blank'>公式URL</Link>
        </VStack>
        {/* Imageコンポーネントを使用したいが、これを使用するとCORSのエラー出て、特定ドメインをしたいが、いろんなurlから画像を持ってきていると思われるのでどうしたらいいかという状況 */}
        {/* <Image src={theAnime.images.recommended_url} alt="no image" width={64} height={64}/> */}
        <Image src={theAnime.images.facebook.og_image_url} alt="no image" width={"70%"} height={"70%"} onError={(e) => e.target.src = 'images/noimage-1024x898.png'}
        ></Image>
      </HStack>
    </Box>
  );
}