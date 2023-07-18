import { cache } from 'react';

export const getBaseUrl = cache(() =>
  process.env.NETLIFY_URL
    ?  process.env.NETLIFY_URL
    : `http://localhost:${process.env.PORT ?? 3000}`,
);