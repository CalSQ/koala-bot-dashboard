import { useNavigate } from 'react-router-dom';
import {
  GuildListDivision,
  GuildListItem,
} from '../components/GuildListComponents';
import { Notification } from '../components/Notification';
import { useFetchGuilds } from '../hooks/useFetchGuilds';
import { useContext } from 'react';
import { GuildContext } from '../utils/contexts/GuildContext';
import { PartialGuild } from '../utils/types';

export const MenuPage = () => {
  const { updateGuild } = useContext(GuildContext);
  const navigate = useNavigate();
  const { guilds, loading } = useFetchGuilds();
  const handleAvailableGuildClick = (guild: PartialGuild) => {
    updateGuild(guild);
    navigate('/dashboard');
  };
  const handleUnavailableGuildClick = (guild: PartialGuild) => {
    window.location.href = `https://discord.com/api/oauth2/authorize?client_id=1149189404770979840&permissions=8&scope=bot+applications.commands&guild_id=${guild.id}&response_type=code&redirect_uri=http://localhost:6001/api/auth/redirect/`;
  };

  return (
    <main
      style={{
        display: 'flex-inline',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        fontWeight: '500',
        fontSize: '0.875rem',
        width: 'fit-content',
        textAlign: 'center',
        margin: '2rem auto',
        overflowY: 'auto',
      }}
    >
      <Notification />
      <h2
        style={{
          fontSize: '1rem',
        }}
      >
        Available Guilds
      </h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GuildListDivision>
          {guilds &&
            guilds.available.map((guild) => (
              <GuildListItem
                key={guild.id}
                available={true}
                guild={guild}
                onClick={() => handleAvailableGuildClick(guild)}
              />
            ))}
        </GuildListDivision>
      )}
      <h2
        style={{
          fontSize: '1rem',
        }}
      >
        Unavailable Guilds
      </h2>
      {loading ? (
        <div>Loading...</div> // Use custom loader
      ) : (
        <GuildListDivision>
          {guilds &&
            guilds.unavailable.map((guild) => (
              <GuildListItem
                key={guild.id}
                available={false}
                guild={guild}
                onClick={() => handleUnavailableGuildClick(guild)}
              />
            ))}
        </GuildListDivision>
      )}
    </main>
  );
};
