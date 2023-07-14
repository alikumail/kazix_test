'use client'

import { useState } from "react"

export default function Coupon({coupanData}) {

const [coupontoggal,setCouponToggal] = useState(false);
const [betcost,setBetCost] = useState(0);

const couponOpen = () => {
    setCouponToggal(!coupontoggal);
}
  return (
   
        <div className='coupon-block'>
            <div className="coupon-btn-close" onClick={couponOpen}>
            {!coupontoggal ? (
                <>
                <i className="bi bi-chevron-left"></i>              
                </>

            ) : (
<i class="bi bi-x-lg"></i>
            )

            }
            

            </div>
            {coupontoggal ? (
            <div className="coupon-content-area">
            <div className="coupon-block-heading">
                <h3>Bet Coupon</h3>
            </div>  
            <div className="seleted-bets">
                {coupanData.map((rowDetail=>{
                    return (
                        <div className="bet-block">
                        <div className="bet-team">
                            {rowDetail.team1} - {rowDetail.team2}
                        </div>
                        <div className="bet-stack">
                        {rowDetail.teamodds}
                        </div>
                    </div>
                    )}))}
        
            </div>
            <div className="coupon-footer">
                <div className="total-stack">
                    <div className="stack-label">
                    Total Stake ($)
                    </div>
                    <div className="stack-input">
                    <input
                  type="number"
                  className="form-control"
                  name="betCost"
                  value={betcost}
                  onChange={(e) => setBetCost(e.target.value)}
                />
                    </div>
                </div>
                <div className="stack-odd-value">
                    <div className="odd-lable-area">
                        <div className="total-odd-label-area">
                        Total odds
                        </div>
                        <div className="total-odd-number-area">
                       <strong>
                        {coupanData.reduce((accumulator, currentValue) => accumulator + currentValue.teamodds, 0)}
                        </strong>
                        </div>

                    </div>
                    <div className="pp-lable-area">
                        <div className="total-pp-label-area">
                        Potential Payout (inc Stake): 
                        </div>
                        <div className="total-pp-number-area">
                        <strong>$ 
                        {
                      Number(((coupanData.reduce((accumulator, currentValue) => accumulator + currentValue.teamodds, 0)*betcost)+betcost)).toFixed(2)}

                        </strong>
                        </div>

                    </div>
                </div>
            </div>
            </div>
            ) : ""
}
        </div>


  )
}