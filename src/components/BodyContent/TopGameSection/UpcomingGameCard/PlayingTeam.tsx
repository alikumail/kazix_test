import Image from 'next/image';

interface PlayingTeamsProps {
  teamNumber: number;
  teamLogo: string;
  teamName: string;
}

export default function PlayingTeams({ teamNumber, teamLogo, teamName }: PlayingTeamsProps) {
  return (
    <div className={`sport-team-${teamNumber}`}>
      <div className={`sport-team-${teamNumber}-logo`}>
        <Image src={teamLogo} width={15} height={15} alt="Sport Icon" />
      </div>
      <div className={`sport-team-${teamNumber}-name`}>
        <p className="m-0">{teamName}</p>
      </div>
    </div>
  );
}
