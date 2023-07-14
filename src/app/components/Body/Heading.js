'use client'
import Link from 'next/link'
 export default function Heading({paginationFunction,viewall}) {

  return (
    <div className={!viewall ? `row heading-row-main`: `row heading-row-main viewallpage`}>
        <div className="col-sm-12 col-md-6">
        <div className="heading-area">
           <h2>Top Soccer Games</h2>
        </div>
        </div>
        <div className="col-sm-12 col-md-6">
            <div className="button-area">
                <ul className="buttons-list">
                    <li>
                        <Link href="/" className="main-button viewallbtn"><i className="bi bi-chevron-left"></i> Back</Link>
                    </li>
                    <li>
                        <Link href="/viewall" className="main-button viewallremove">View All</Link>
                    </li>
                    <li>
                        <button className="main-button" onClick={()=>paginationFunction("prev")}><i className="bi bi-chevron-left"></i></button>
                    </li>
                    <li>
                        <button className="main-button" onClick={()=>paginationFunction("next")}><i className="bi bi-chevron-right"></i></button>
                    </li>

                </ul>
            </div>
        </div>
    </div>
  )
}