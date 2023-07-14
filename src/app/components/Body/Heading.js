'use client'
 
 export default function Heading({paginationFunction}) {

  return (
    <div className="row heading-row-main">
        <div className="col-md-6">
        <div className="heading-area">
           <h2>Top Soccer Games</h2>
        </div>
        </div>
        <div className="col-md-6">
            <div className="button-area">
                <ul className="buttons-list">
                    <li>
                        <button className="main-button">View All</button>
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