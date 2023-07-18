'use client'
import React,{useState,useContext} from 'react';
import { CouponContext, CouponContextType } from '../../context/CouponContext';

interface BettingOptionProps { 
  optionName: string;
  gameId: number;
  odds: number;
  selected: boolean;
  theme : string;
}


export default function BettingOption({ optionName,gameId, odds , selected, theme}: BettingOptionProps) {

  
  const {
    couponData,
    couponUpdate,
  }: CouponContextType = useContext(CouponContext);


  const handleSelection = async (gameId:number, selectedOption:string,odds:number) => {
    const alreadyAdded = couponData.find((o) => o.gameId === gameId && o.option === selectedOption);

    let currentCoupon = couponData.filter((o) => o.gameId !== gameId);
    if(!alreadyAdded)
    {
      currentCoupon = [
        ...currentCoupon,
        {
          option: selectedOption,
          gameId:gameId,
          odds:odds 
        },
      ];
    }

    couponUpdate(currentCoupon);
      }
  return (
    <>
            <button
             onClick={() => handleSelection(gameId, optionName,odds)}
            className={`${theme==="header" ? ("banner-footer-style banner-footer-center") : ("btn-1 detail-btn")}  ${selected ? 'selectedOdd' : ''}`}
            >
              <div className="banner-footer-left-text">{optionName}</div>
              <div className="banner-footer-left-value">{odds}</div>
            </button>
    </>
  );
}
