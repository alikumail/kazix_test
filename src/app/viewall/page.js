'use client'
import Body from "../components/Body/Body"
import Coupon from "../components/Coupon/Coupon"
import { useState } from "react"

export default function Home() {
  const [couponBet,setcouponBet] = useState([]);

  return (
<>
<div className="content-area">

<div className='container-fluid'>
<Body viewall={true} couponUpdate = {setcouponBet} couponBet={couponBet}/>
{couponBet.length>0 ? <Coupon coupanData={couponBet}/> : ""}
</div>
</div>

</>
  )
}
