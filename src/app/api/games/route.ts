import type { Game } from './game';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const delay = searchParams.get('delay');
  if (delay) {
    await new Promise((resolve) => setTimeout(resolve, Number(delay)));
  }

  const gameUid = searchParams.get('gameUid');
  if (gameUid) {
    const game = data.find((game) => game.gameUid.toString() === gameUid);

    return new Response(JSON.stringify(game ?? null), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  const gameType = searchParams.get("gameType");
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 9;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const filteredGames = data.filter((game) => (gameType ? game.gameType === gameType : game.gameType === null));
  const games = filteredGames.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredGames.length / pageSize);

  const response = {
    games,
    totalPages,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

const data: Game[] = [
  {
    gameUid: 1,
    countryName: 'England',
    leagueName: 'Premier League',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'live',
    gameTime: '',
    team1: {
      teamUid: 1,
      name: 'Tottenham',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'Leicester City',
      score: 2,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 2,
    countryName: 'England',
    leagueName: 'Premier League',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'live',
    gameTime: '',
    team1: {
      teamUid: 1,
      name: 'Tottenham',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'Leicester City',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 3,
    countryName: 'Argentina',
    leagueName: 'Liga Professional',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 21:30',
    team1: {
      teamUid: 1,
      name: 'Barracas Central',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'CA Central Cordoba SE',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 4,
    countryName: 'Argentina',
    leagueName: 'Liga Professional',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 21:30',
    team1: {
      teamUid: 1,
      name: 'Barracas Central',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'CA Central Cordoba SE',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 5,
    countryName: 'England',
    leagueName: 'Premier League',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 2:30',
    team1: {
      teamUid: 1,
      name: 'Tottenham',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'Leicester City',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 6,
    countryName: 'Argentina',
    leagueName: 'Liga Professional',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 21:30',
    team1: {
      teamUid: 1,
      name: 'Barracas Central',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'CA Central Cordoba SE',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 7,
    countryName: 'Argentina',
    leagueName: 'Liga Professional',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 21:30',
    team1: {
      teamUid: 1,
      name: 'Barracas Central',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'CA Central Cordoba SE',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 8,
    countryName: 'England',
    leagueName: 'Premier League',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 2:30',
    team1: {
      teamUid: 1,
      name: 'Tottenham',
      score: 9,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'Leicester City',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 10,
    countryName: 'Argentina',
    leagueName: 'Liga Professional',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 1:30',
    team1: {
      teamUid: 1,
      name: 'Barracas Central',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'CA Central Cordoba SE',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 11,
    countryName: 'Argentina',
    leagueName: 'Liga Professional',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 2:30',
    team1: {
      teamUid: 1,
      name: 'Barracas Central',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'CA Central Cordoba SE',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 12,
    countryName: 'England',
    leagueName: 'Premier League',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 22:30',
    team1: {
      teamUid: 1,
      name: 'Tottenham',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'Leicester City',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },  {
    gameUid: 13,
    countryName: 'Argentina',
    leagueName: 'Liga Professional',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 1:30',
    team1: {
      teamUid: 1,
      name: 'Barracas Central',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'CA Central Cordoba SE',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 14,
    countryName: 'England',
    leagueName: 'Premier League',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 5:30',
    team1: {
      teamUid: 1,
      name: 'Tottenham',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'Leicester City',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 15,
    countryName: 'Argentina',
    leagueName: 'Liga Professional',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 6:30',
    team1: {
      teamUid: 1,
      name: 'Barracas Central',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'CA Central Cordoba SE',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 12,
    countryName: 'Argentina',
    leagueName: 'Liga Professional',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 21:30',
    team1: {
      teamUid: 1,
      name: 'Barracas Central',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'CA Central Cordoba SE',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 16,
    countryName: 'England',
    leagueName: 'Premier League',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 2:30',
    team1: {
      teamUid: 1,
      name: 'Tottenham',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'Leicester City',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 17,
    countryName: 'Argentina',
    leagueName: 'Liga Professional',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 21:30',
    team1: {
      teamUid: 1,
      name: 'Barracas Central',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'CA Central Cordoba SE',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 18,
    countryName: 'Argentina',
    leagueName: 'Liga Professional',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 21:30',
    team1: {
      teamUid: 1,
      name: 'Barracas Central',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'CA Central Cordoba SE',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 19,
    countryName: 'England',
    leagueName: 'Premier League',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 2:30',
    team1: {
      teamUid: 1,
      name: 'Tottenham',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'Leicester City',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 20,
    countryName: 'Argentina',
    leagueName: 'Liga Professional',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 21:30',
    team1: {
      teamUid: 1,
      name: 'Barracas Central',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'CA Central Cordoba SE',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 21,
    countryName: 'Argentina',
    leagueName: 'Liga Professional',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 21:30',
    team1: {
      teamUid: 1,
      name: 'Barracas Central',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'CA Central Cordoba SE',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
  {
    gameUid: 22,
    countryName: 'England',
    leagueName: 'Premier League',
    countryIcon: '/assets/images/SportIcons.svg',
    gameType: 'upcoming',
    gameTime: 'Today, 3:30',
    team1: {
      teamUid: 1,
      name: 'Tottenham',
      score: 4,
      odds: 1.05,
      teamIcon: '/assets/images/bc.png',
    },
    team2: {
      teamUid: 1,
      name: 'Leicester City',
      score: 2,
      odds: 2.40,
      teamIcon: '/assets/images/bc.png',
    },
    draw: 5.13,
  },
];
