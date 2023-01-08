import { useState } from "react";
import { AnimeArticle } from "../AnimeArticle";
import {nowYear,Years} from "../ConstantArray"

export function AnimeLists() {

  // デフォルトでnowYearの今のシーズンが入るようにしたい
  const [lists, setLists] = useState([]);
  const anime = async (e) => {
    e.preventDefault();
    const year = document.search.year.value
    const response = await fetch(`https://api.annict.com/v1/works?filter_season=${year}-spring&access_token=_csr_bHA2DnX69xOI49-uiRLpTE7eSdEh8St249bnJo`);
    const res = await response.json();
    setLists(res.works)
  }



  return (
    <div>
      <form name="search" onSubmit={anime}>
        <select name="year">
          {Years.map((year) => <option key={year}>{year}</option>)}
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