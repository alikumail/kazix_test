import { useState, useEffect } from 'react';
import { Coupon, CouponContextType } from '@/context/CouponContext';
import { getGame } from '@/app/api/games/getGames';
import { Game } from '@/types/GameType';

interface CouponRowProps {
  coupanData: Coupon;
}

export default function CouponRow({ coupanData }: CouponRowProps) {
  const [couponToggal, setCouponToggal] = useState(false);
  const [betOdds, setBetOdds] = useState(0);
  const [betDetails, setBetDetails] = useState<Game | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedGame = await getGame({ gameUid: coupanData.gameId });
        setBetDetails(fetchedGame);
      } catch (error) {
        console.error('Error fetching game:', error);
      }
    };

    fetchData();
  }, [coupanData.gameId]);

  return (
    <div className="bet-block">
      <div className="bet-team">
        {betDetails && betDetails.team1.name} - {betDetails && betDetails.team2.name}
      </div>
      <div className="bet-stack">{coupanData.odds}</div>
    </div>
  );
}
