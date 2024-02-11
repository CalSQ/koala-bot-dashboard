import { useEffect, useState } from 'react';
import { MutualGuildsResponse } from '../utils/types';
import { getMutualGuilds } from '../utils/api';

export function useFetchGuilds() {
  const [guilds, setGuilds] = useState<MutualGuildsResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    getMutualGuilds()
      .then(({ data }) => setGuilds(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { guilds, loading, error };
}
