'use client'
import Heading from "./Heading"
import List from "./Blocks/List"
import page1 from "../../../data/topsoccer/matchdatapage1.json" 
import page2 from "../../../data/topsoccer/matchdatapage2.json" 
import page3 from "../../../data/topsoccer/matchdatapage3.json" 

import { useState } from "react"

 export default function Main() {
  const [matches,setMatches] = useState(page1);
  const [pageNumber,setpageNumber] = useState(1);
  const totalPages = 3;
  const pages = [page1, page2, page3];

  function paginationFunction(ref) {
    let page = pageNumber;
    if(ref=='next'){
      page +=1; 
      if(page>totalPages){
        page=1;
      }
    } else {
      page-=1;
      if( page<1){
        page = totalPages;
      }
    } 
    setpageNumber(page);
    let currentPage = pages[page - 1];
    setMatches(currentPage);
  }
  return (
<>
        <Heading paginationFunction = {paginationFunction}/>
            <List matches = {matches} />
</>


  )
}