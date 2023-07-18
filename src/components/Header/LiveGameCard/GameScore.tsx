
interface BreadcrumbProps {
    team1: string;
    team1score: number;
    team2: string;
    team2score: number;
}

export default function GameScore({ team1, team1score, team2,team2score }: BreadcrumbProps) {
  return (
    <>
            <div className="teams-name-scores">
              <div className="team-1">
                <div className="team-1-name">{team1}</div>
                <div className="team-1-score">{team1score}</div>
              </div>
              <div className="team-2">
                <div className="team-2-name">{team2}</div>
                <div className="team-2-score">{team2score}</div>
              </div>
            </div>
    </>
  );
}
