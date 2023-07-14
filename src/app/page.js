'use client'
import Main from "./components/Header/Main"
import Body from "./components/Body/Body"
import Coupon from "./components/Coupon/Coupon"
import { useState } from "react"
export default function Home() {
  const [couponBet,setcouponBet] = useState([]);

  return (
<>
<div className="content-area">
<div className='container-fluid'>
<Main couponUpdate = {setcouponBet} couponBet={couponBet}/>
<Body viewall={false} couponUpdate = {setcouponBet} couponBet={couponBet}/>
<Body viewall={false} couponUpdate = {setcouponBet} couponBet={couponBet}/>
<Body viewall={false} couponUpdate = {setcouponBet} couponBet={couponBet}/>
{couponBet.length>0 ? <Coupon coupanData={couponBet}/> : ""}
</div>
</div>

</>
  )
}
