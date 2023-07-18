import { useState, useContext, useEffect } from 'react';
import { CouponContext, CouponContextType } from '@/context/CouponContext';
import BettingOption from '@/components/Common/BettingOption';
import Breadcrumb from './BreadCrumb';
import GameTime from './GameTime';
import PlayingTeams from './PlayingTeam';
import { Game } from '@/types/GameType';

export default function UpcomingGameCard({ gameData }: { gameData: Game }) {
  const [selected, setSelected] = useState<boolean[]>([false, false, false]);
  const { couponData }: CouponContextType = useContext(CouponContext);

  useEffect(() => {
    const selectedBtn = couponData.find((o) => o.gameId === gameData.gameUid);
    if (selectedBtn) {
      setSelected([
        selectedBtn.option === '1',
        selectedBtn.option === 'draw',
        selectedBtn.option === '2',
      ]);
    }
  }, [couponData, gameData]);

  return (
    <div className="game-main-block">
      <div className="row">
        <div className="col-10">
          <Breadcrumb
            logo={gameData.countryIcon}
            placeName={gameData.countryName}
            leagueName={gameData.leagueName}
          />
        </div>
        <div className="col-2">
          <div className="chart-area">
            <i className="bi bi-bar-chart-fill"></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <GameTime gameTime={gameData.gameTime} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="sport-teams-area">
            <PlayingTeams
              teamNumber={gameData.team1.teamUid}
              teamLogo={gameData.team1.teamIcon}
              teamName={gameData.team1.name}
            />
            <PlayingTeams
              teamNumber={gameData.team2.teamUid}
              teamLogo={gameData.team2.teamIcon}
              teamName={gameData.team2.name}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="number-area">
          <p className="m-0">{'1x2'}</p>
        </div>
      </div>
      <div className="row">
        <div className="detail-footer-btns">
          <ul className="deatil-btnlist">
            <li className="lengthy-btn">
              <BettingOption
                optionName={'1'}
                gameId={gameData.gameUid}
                odds={gameData.team1.odds}
                selected={selected[0]}
                theme="body"
              />
            </li>
            <li className="lengthy-btn">
              <BettingOption
                optionName={'draw'}
                gameId={gameData.gameUid}
                odds={gameData.draw}
                selected={selected[1]}
                theme="body"
              />
            </li>
            <li className="lengthy-btn">
              <BettingOption
                optionName={'2'}
                gameId={gameData.gameUid}
                odds={gameData.team2.odds}
                selected={selected[2]}
                theme="body"
              />
            </li>
            <li>
              <button className="btn-3 detail-btn">
                <div className="detail-btn-dropdown">
                  <i className="bi bi-chevron-down"></i>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
