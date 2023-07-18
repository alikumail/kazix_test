'use client'
import { useEffect, useState } from "react";
import LiveGameCard from "./LiveGameCard";
import { getGames } from "@/app/api/games/getGames";

export default function Header() {
  const gamesType: string = "live";
  const [games, setGames] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedGames = await getGames({ gametype: gamesType });
        setGames(fetchedGames.games);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row">
      {games && games.length > 0 ? (
        games.map((game: any) => (
          <div key={game.id} className="col-12 col-md-6 col-lg-6">
            <LiveGameCard gameData={game} />
          </div>
        ))
      ) : (
        <p>No games available</p>
      )}
    </div>
  );
}
