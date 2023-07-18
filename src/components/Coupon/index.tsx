'use client';
import { useState, useContext, useEffect } from "react";
import { CouponContext, CouponContextType } from "@/context/CouponContext";
import CouponRow from "./CouponRow";

export default function Coupon() {
  const { couponData }: CouponContextType = useContext(CouponContext);

  const [coupontoggle, setCouponToggle] = useState(false);
  const [betCost, setBetCost] = useState<string>("0");
  const [totalOdds, setTotalOdds] = useState<number>(0);

  const couponOpen = () => {
    setCouponToggle(!coupontoggle);
  };

  useEffect(() => {
    let oddsTotal = couponData.reduce(
      (accumulator, currentValue) => accumulator + currentValue.odds,
      0
    );
    setTotalOdds(oddsTotal);
  }, [couponData]);

  return (
    <>
    {couponData&&couponData.length>0 ? (  
         <div className="coupon-block">
      <div className="coupon-btn-close" onClick={couponOpen}>
        {!coupontoggle ? (
          <>
            <i className="bi bi-chevron-left"></i>
          </>
        ) : (
          <i className="bi bi-x-lg"></i>
        )}
      </div>
      {coupontoggle ? (
        <div className="coupon-content-area">
          <div className="coupon-block-heading">
            <h3>Bet Coupon</h3>
          </div>
          <div className="seleted-bets">
            {couponData.map((rowDetail) => (
              <CouponRow key={rowDetail.gameId} coupanData={rowDetail} />
            ))}
          </div>
          <div className="coupon-footer">
            <div className="total-stack">
              <div className="stack-label">Total Stake ($)</div>
              <div className="stack-input">
                <input
                  type="number"
                  className="form-control"
                  name="betCost"
                  value={betCost}
                  onChange={(e) => setBetCost(e.target.value)}
                />
              </div>
            </div>
            <div className="stack-odd-value">
              <div className="odd-lable-area">
                <div className="total-odd-label-area">Total odds</div>
                <div className="total-odd-number-area">
                  <strong>{totalOdds}</strong>
                </div>
              </div>
              <div className="pp-lable-area">
                <div className="total-pp-label-area">
                  Potential Payout (inc Stake):
                </div>
                <div className="total-pp-number-area">
                  <strong>$ {Number(totalOdds * Number(betCost)).toFixed(2)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  ) : "" }
  </>)
}
