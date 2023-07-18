
export type Game = {
  gameUid: number;
  countryName: string;
  leagueName: string;
  countryIcon: string;
  team1: Team;
  team2: Team;
  gameType: string;
  gameTime: string;
  draw: number;
};

type Team = {
  teamUid: number;
  name: string;
  score: number;
  odds: number;
  teamIcon: string;
};
