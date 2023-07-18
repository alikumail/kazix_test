'use client'
import { useEffect, useState } from "react";
import LiveGameCard from "./LiveGameCard";
import Loader from "../Common/Loader";
import { getGames } from "@/app/api/games/getGames";

export default function Header() {
  const gamesType: string = "live";
  const [games, setGames] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedGames = await getGames({ gametype: gamesType });
        setGames(fetchedGames.games);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {loading ? (<Loader />) : (
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
    )}
    </>
    );
}
