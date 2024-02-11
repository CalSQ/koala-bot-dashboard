import { GuildListItem } from '../components/GuildListComponents';

export const DashboardPage = () => {
  return (
    <>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
          paddingInline: '100px',
          width: '100%',
        }}
      >
        <h2>Available</h2>
        <GuildListItem
          key={'4898939010913'}
          available={true}
          guild={{
            id: '4898939010913',
            name: 'Guild 1',
            icon: 'https://via.placeholder.com/150',
            owner: false,
            permissions: '',
            features: [],
          }}
        />
      </main>
    </>
  );
};
