import { Box, Heading, Link, Text } from "@chakra-ui/layout";


export function AnimeArticle(props) {
  const theAnime = props.oneAnime;

  return (
    <Box bgColor="teal.400" p="2" m="2">
      <Heading size='lg'>{theAnime.title}</Heading>
      <Text>wacth数：{theAnime.watchers_count}</Text>
      <Link href={theAnime.official_site_url} target='_blank'>公式URL</Link>
      {/* Imageコンポーネントを使用したいが、これを使用するとCORSのエラー出て、特定ドメインをしたいが、いろんなurlから画像を持ってきていると思われるのでどうしたらいいかという状況 */}
      {/* <Image src={theAnime.images.recommended_url} alt="no image" width={64} height={64}/> */}
      <img src={theAnime.images.facebook.og_image_url} alt="no image" width="30%" height="30%" onError={(e) => e.target.src = 'images/noimage-1024x898.png'}
      ></img>
    </Box>
  );
}