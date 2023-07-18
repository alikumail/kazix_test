import React from 'react';
import UpcomingGameCard from './UpcomingGameCard';

interface TopGameSectionProps {
  games: any[];
}

const TopGameSection: React.FC<TopGameSectionProps> = ({ games }) => {
  return (
    <div className="row">
      {games.map((game, index) => (
        <React.Fragment key={index}>
          {index % 3 === 0 && index !== 0 && <div className="col-md-3"></div>}
          <div className="col-md-3">
            <UpcomingGameCard gameData={game} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TopGameSection;
