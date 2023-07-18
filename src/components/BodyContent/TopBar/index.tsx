import Link from "next/link";
import Heading from "./Heading";

interface TopBarProps {
  page: number;
  setPage: (page: number) => void;
  totalPage: number;
  all: boolean;
}

export default function TopBar({ page, setPage, totalPage, all } : TopBarProps) {
  
  return (
    <div className={!all ? `row heading-row-main`: `row heading-row-main viewallpage`}>
    <div className="col-sm-12 col-md-6">
    <div className="heading-area">
      <Heading heading="Top Soccer Games"/>
    </div>
    </div>
    <div className="col-sm-12 col-md-6">
    <div className="button-area">
                <ul className="buttons-list">
                    <li>
                        <Link href="/" className="main-button viewallbtn"><i className="bi bi-chevron-left"></i> Back</Link>
                    </li>
                    <li>
                        <Link href="/all" className="main-button viewallremove">View All</Link>
                    </li>
                    <li>
                        <button className="main-button" 
                        onClick={()=>{page===1?setPage(totalPage):setPage(page-1)}}
                        ><i className="bi bi-chevron-left"></i></button>
                    </li>
                    <li>
                        <button className="main-button" 
                         onClick={()=>{page===totalPage?setPage(1):setPage(page+1)}}
                        ><i className="bi bi-chevron-right"></i></button>
                    </li>

                </ul>
            </div>
    </div>
</div>
  );
}
