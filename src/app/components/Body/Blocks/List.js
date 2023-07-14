'use client'
import Detail from "./Detail" 

export default function List({matches}) {
  return (
    <div className="row">
      {matches.map((match,index)=>{
        return (
            <>
            {((index)%3)==0 && index!=0 ? (<div className="col-md-3"></div>) : "" }
            <div className="col-md-3">
             <Detail matchdata = {match}/>
             </div>
            </>
        )})}
       </div>
  )
}