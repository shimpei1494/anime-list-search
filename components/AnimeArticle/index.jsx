import Image from "next/image";
import style from "./AnimeArticle.module.css"

export function AnimeArticle(props) {
const theAnime = props.oneAnime;

  return (
    <li>
      <div className={style.article}>
        <p>{theAnime.title}</p>
        <p>{theAnime.title_kana}</p>
        <p>{theAnime.watchers_count}</p>
        {/* <Image src={theAnime.images.recommended_url} width={64} height={64}/> */}
        <img src={theAnime.images.recommended_url} width="30%" height="30%"
        ></img>
      </div>
    </li>
  );
}