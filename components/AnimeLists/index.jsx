import { Button } from "@chakra-ui/button";
import { Box, Center, HStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { useState } from "react";
import { AnimeArticle } from "../AnimeArticle";
import {Years, nowSeasonNum, seasonArray} from "../ConstantArray"

export function AnimeLists() {
  const [lists, setLists] = useState([]);
  const [year, setYear] = useState(Years.nowYear);
  // 初期値にはシーズンのvalueが入る("winter"等)
  const [season, setSeason] = useState(seasonArray[nowSeasonNum][0]);

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleSeason = (e) => {
    setSeason(e.target.value);
  };

  const handleSearch = async () => {
    const response = await fetch(`https://api.annict.com/v1/works?filter_season=${year}-${season}&per_page=50&sort_watchers_count=desc&access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`);
    const res = await response.json();
    setLists(res.works)
  };

  return (
    <Box>
      <Center>
        <form name="search">
          <HStack>
            <Select w={150} value={year} onChange={e => handleYear(e)}>
              {Years.yearOption.map((theYear) => <option key={theYear}>{theYear}</option>)}
            </Select>
            <Select w={150} value={season} onChange={e => handleSeason(e)}>
              {seasonArray.map((theSeason) => <option key={theSeason[0]} value={theSeason[0]}>{theSeason[1]}</option>)}
            </Select>
            <Button w={100} border="1px" borderColor="gray.200" onClick={handleSearch}>検索する</Button>
          </HStack>
        </form>
      </Center>

      <Box>
        {lists.map((oneAnime) => {
          return (
            <AnimeArticle oneAnime={oneAnime} key={oneAnime.id}/>
          );
        })}
      </Box>
    </Box>
  );
}