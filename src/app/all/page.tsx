import React from 'react';
import BodyContent from '@/components/BodyContent';
import Coupon from '@/components/Coupon';
import { CouponProvider } from '@/context/CouponContext';

export default function Home() {
  return (
    <CouponProvider>
      <div className="content-area">
        <div className='container-fluid'>
          <BodyContent all={true} />
          <Coupon />
        </div>
      </div>
    </CouponProvider>
  );
}
