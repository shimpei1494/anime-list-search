import { useState } from "react";
import { AnimeArticle } from "../AnimeArticle";
import {nowYear,Years} from "../ConstantArray"

export function AnimeLists() {

  // デフォルトでnowYearの今のシーズンが入るようにしたい
  const [lists, setLists] = useState([]);
  const anime = async (e) => {
    e.preventDefault();
    const year = document.search.year.value;
    const season = document.search.season.value;
    const response = await fetch(`https://api.annict.com/v1/works?filter_season=${year}-${season}&per_page=50&access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`);
    const res = await response.json();
    setLists(res.works)
  }



  return (
    <div>
      <form name="search" onSubmit={anime}>
        <select name="year">
          {Years.map((year) => <option key={year}>{year}</option>)}
        </select>
        <select name="season">
          <option value="spring">春シーズン</option>
          <option value="summer">夏シーズン</option>
          <option value="autumn">秋シーズン</option>
          <option value="winter">冬シーズン</option>
          {/* <option value="all">年間全て</option> */}
        </select>
        <input type="submit" value="検索する"></input>
      </form>
      <ul>
        {lists.map((oneAnime) => {
          return (
            <AnimeArticle oneAnime={oneAnime} key={oneAnime.id}/>
          );
        })}
      </ul>
    </div>
  );
}