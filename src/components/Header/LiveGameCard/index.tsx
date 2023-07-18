
import Breadcrumb from "../../Common/BreadCrumb";
import GameScore from "./GameScore";
import { useSelectedOptions } from '../../../hooks/useSelectedOptions'; 
import BettingOption from "../../Common/BettingOption";
import { Game } from "@/types/GameType";


interface LiveGameCardProps {
  gameData: Game
}

export default function LiveGameCard({gameData}: LiveGameCardProps) {

  const selected = useSelectedOptions(gameData.gameUid);

  return (
    <div className="header-banner">
      <div className="header-banner-content">
        <div className="row">
          <div className="col-12">
            <Breadcrumb 
              logo={gameData.countryIcon} 
              placeName={gameData.countryName} 
              leagueName={gameData.leagueName} 
              theme={"header"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <GameScore 
              team1={gameData.team1.name} 
              team1score={gameData.team1.score} 
              team2={gameData.team2.name} 
              team2score={gameData.team2.score}  
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <BettingOption 
              optionName={"1"} 
              gameId={gameData.gameUid}  
              odds={gameData.team1.odds} 
              selected={selected[0]} 
              theme="header"
            />
          </div>
          <div className="col-4">
            <BettingOption 
              optionName={"draw"} 
              gameId={gameData.gameUid}  
              odds={gameData.draw} 
              selected={selected[1]} 
              theme="header"
            />
          </div>
          <div className="col-4">
            <BettingOption 
              optionName={"2"} 
              gameId={gameData.gameUid}  
              odds={gameData.team2.odds} 
              selected={selected[2]} 
              theme="header"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
