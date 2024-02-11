import axios, { AxiosRequestConfig } from 'axios';
import { MutualGuildsResponse, UserSession } from './types';

const ReqConf: AxiosRequestConfig = { withCredentials: true };

export const getAuthStatus = async () =>
  await axios.get<UserSession>(
    'http://localhost:6001/api/auth/status',
    ReqConf,
  );

export const getMutualGuilds = async () =>
  await axios.get<MutualGuildsResponse>(
    'http://localhost:6001/api/discord/guilds',
    ReqConf,
  );
