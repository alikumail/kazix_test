'use client'
import { UUID } from 'crypto';
import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

export type Coupon = {
  option: string;
  gameId: number;
  odds: number;
};

export type CouponContextType = {
  couponData: Coupon[];
  couponUpdate: (coupon: Coupon[]) => void;
};

export const CouponContext = createContext<CouponContextType>({
  couponData: [],
  couponUpdate: () => {},
});

type CouponProviderProps = {
  children: ReactNode;
};

export const CouponProvider: React.FC<CouponProviderProps> = ({ children }) => {
  const [couponData, setCouponData] = useState<Coupon[]>([]);

  const couponUpdate = (coupon: Coupon[]) => {
    setCouponData(coupon);
  };

  return (
    <CouponContext.Provider
      value={{ couponData, couponUpdate }}
    >
      {children}
    </CouponContext.Provider>
  );
};
