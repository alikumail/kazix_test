import React from 'react';
import Header from '@/components/Header';
import BodyContent from '@/components/BodyContent';
import Coupon from '@/components/Coupon';
import { CouponProvider } from '@/context/CouponContext';

export default function Home() {
  return (
    <CouponProvider>
      <div className="content-area">
        <div className="container-fluid">
          <Header />
          <BodyContent all={false} />
          <Coupon />
        </div>
      </div>
    </CouponProvider>
  );
}
