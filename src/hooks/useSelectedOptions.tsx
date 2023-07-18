// hooks/useSelectedOptions.js
import { useState, useEffect, useContext } from 'react';
import { CouponContext, CouponContextType } from '@/context/CouponContext';

export const useSelectedOptions = (gameId:number) => {
  const [selected, setSelected] = useState<boolean[]>([false, false, false]);
  const { couponData }: CouponContextType = useContext(CouponContext);

  useEffect(() => {
    const selectedBtn = couponData.find((o) => o.gameId === gameId);
    if (selectedBtn) {
      setSelected([
        selectedBtn.option === '1',
        selectedBtn.option === 'draw',
        selectedBtn.option === '2',
      ]);
    } else {
      setSelected([false, false, false]);
    }
  }, [couponData, gameId]);

  return selected;
};
