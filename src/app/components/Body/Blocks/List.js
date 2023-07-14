'use client'
import Detail from "./Detail" 

export default function List({matches,couponUpdate,couponBet}) {
  return (
    <div className="row">
      {matches.map((match,index)=>{
        return (
            <>
            {((index)%3)==0 && index!=0 ? (<div className="col-md-3"></div>) : "" }
            <div className="col-md-3" key={index}>
             <Detail matchdata = {match} couponUpdate={couponUpdate} couponBet={couponBet}/>
             </div>
            </>
            )})}
       </div>
  )
}