import { getBaseUrl } from '@/lib/getBaseUrl';
import { notFound } from 'next/navigation';
import type { Game } from './game';

export async function getGames({ gametype, page, pageSize }: { gametype?: string; page?: number; pageSize?: number } = {}) {
  const url = new URL(`${getBaseUrl()}/api/games`);
  if (gametype) {
    url.searchParams.append('gameType', gametype);
  }
  if (page) {
    url.searchParams.append('page', String(page));
  }
  if (pageSize) {
    url.searchParams.append('pageSize', String(pageSize));
  }

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  const response = (await res.json()) as { games: Game[]; totalPages: number };

  if (response.games.length === 0) {
    notFound();
  }

  return response;
}

export async function getGame({ gameUid }: { gameUid: number }) {
  const res = await fetch(`${getBaseUrl()}/api/games${gameUid ? `?gameUid=${gameUid}` : ''}`);

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  const game = (await res.json()) as Game;

  if (!game) {
    notFound();
  }

  return game;
}
