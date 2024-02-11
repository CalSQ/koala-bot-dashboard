import { useContext } from 'react';
import { GuildContext } from '../utils/contexts/GuildContext';
import { fetchGuildIcon, fetchUserIcon } from '../utils/helpers';
import { Navigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useFetchUser } from '../hooks/userFetchUser';

interface TopbarProps {
  header?: string;
  headerImg?: string;
  updateSideMenu?: () => void;
}

interface GuildTopbarProps {
  updateSideMenu?: () => void;
}

export const Topbar = ({ header, headerImg, updateSideMenu }: TopbarProps) => {
  // Hooks
  const { user } = useFetchUser();

  return (
    <header
      style={{
        zIndex: '100',
        background: '#151517',
        position: 'sticky',
        top: '0',
        boxSizing: 'border-box',
        height: '3.75rem',
        width: '100%',
        borderBottom: '1px solid #6A6A6A',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingInline: '2rem',
        fontWeight: '600',
        fontSize: '1rem',
        boxShadow: '0px 0px 3px 0px #000000',
        gap: '1rem',
      }}
    >
      <FaBars size={20} onClick={updateSideMenu} />
      <h1
        style={{
          fontSize: '1.2rem',
          marginTop: '15px',
        }}
      >
        {header ?? 'Guild Menu'}
      </h1>
      <div
        style={{
          flexGrow: '1',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'right',
          alignItems: 'center',
          gap: '0.5rem',
          fontWeight: '700',
          fontSize: '0.875rem',
        }}
      >
        <img
          src={headerImg ?? fetchUserIcon(user)}
          style={{
            height: '2rem',
            borderRadius: '25%',
          }}
        ></img>
      </div>
    </header>
  );
};

export const GuildTopbar = ({ updateSideMenu }: GuildTopbarProps) => {
  const { guild } = useContext(GuildContext);
  return guild ? (
    <Topbar
      header={guild.name}
      headerImg={fetchGuildIcon(guild)}
      updateSideMenu={updateSideMenu}
    />
  ) : (
    <Navigate replace to="/menu" />
  );
};
