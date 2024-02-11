import { useEffect, useState } from 'react';
import { getAuthStatus } from '../utils/api';
import { UserSession } from '../utils/types';

export function useFetchUser() {
  const [user, setUser] = useState<UserSession>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    getAuthStatus()
      .then(({ data }) => {
        if (data?.discordId) setUser(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading, error };
}
