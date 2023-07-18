'use client';
import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import TopGameSection from './TopGameSection';

import { getGames } from '@/app/api/games/getGames';
interface MainBodyProps {
all : boolean
}
export default function BodyContent({ all } : MainBodyProps) {
  const [page, setPage] = useState<number>(1);
  const gamesType: string = 'upcoming';
  const [games, setGames] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedGames = await getGames({ gametype: gamesType, page: page });

        setGames(fetchedGames.games);
        setTotalPages(fetchedGames.totalPages);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <>
      <TopBar page={page} setPage={setPage} totalPage={totalPages} all={all} />
      <TopGameSection games={games} />
    </>
  );
}
