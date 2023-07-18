export const getBaseUrl = () => {
  if (window && window.location) {
    const { protocol, hostname, port } = window.location;
    const currentPort = port ? `:${port}` : '';
    return `${protocol}//${hostname}${currentPort}`;
  } else {
    return process.env.NETLIFY_URL
      ?  process.env.NETLIFY_URL
      : `http://localhost:${process.env.PORT ?? 3000}`;
  }
};
