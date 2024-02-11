import { fetchGuildIcon } from '../utils/helpers';
import { GuildListMain } from '../utils/styles';
import { PartialGuild } from '../utils/types';

interface GuildListItemProps {
  available: boolean;
  guild: PartialGuild;
  onClick?: () => void;
}

export const GuildListItem = (props: GuildListItemProps) => (
  <GuildListMain
    style={{
      color: props.available ? 'inherit' : '#7c7c7c',
    }}
    onClick={props.onClick}
  >
    <img
      src={fetchGuildIcon(props.guild)}
      alt={props.guild.name}
      style={{
        height: '36px',
        marginRight: '1rem',
        borderRadius: '25%',
        aspectRatio: '1',
      }}
    ></img>
    {props.guild.name}
  </GuildListMain>
);

export const GuildListDivision = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    style={{
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      paddingInline: '2rem',
    }}
  >
    {children}
  </div>
);
