export type UserSession = {
  discordId: string;
  avatar: string;
};

export type PartialGuild = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
};

export type MutualGuildsResponse = {
  available: PartialGuild[];
  unavailable: PartialGuild[];
};
