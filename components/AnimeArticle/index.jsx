import Image from "next/image";
import style from "./AnimeArticle.module.css"

export function AnimeArticle(props) {
  const theAnime = props.oneAnime;

  return (
    <li>
      <div className={style.article}>
        <h2>{theAnime.title}</h2>
        <p>wacth数：{theAnime.watchers_count}</p>
        <p><a href={theAnime.official_site_url}>公式URL</a></p>
        {/* Imageコンポーネントを使用したいが、これを使用するとCORSのエラー出て、特定ドメインをしたいが、いろんなurlから画像を持ってきていると思われるのでどうしたらいいかという状況 */}
        {/* <Image src={theAnime.images.recommended_url} alt="no image" width={64} height={64}/> */}
        <img src={theAnime.images.recommended_url} alt="no image" width="30%" height="30%" onError={(e) => e.target.src = 'images/noimage-1024x898.png'}
        ></img>
      </div>
    </li>
  );
}