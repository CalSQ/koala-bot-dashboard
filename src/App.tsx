// Libraries
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import { HomePage } from './pages/HomePage';
import { VerifyPage } from './pages/VerifyPage';
import { MenuPage } from './pages/MenuPage';

// Contexts
import { GuildContext } from './utils/contexts/GuildContext';
import { GuildTopbar, Topbar } from './components/Topbar';
import { useFetchUser } from './hooks/userFetchUser';
import { PartialGuild } from './utils/types';
import { DashboardPage } from './pages/DashboardPage';
import { DashboardSidebar, MenuSidebar } from './components/Sidebar';
import { MainContentContainer } from './utils/styles';
import { UserPage } from './pages/UserPage';

function App() {
  // States
  const [guild, setGuild] = useState<PartialGuild>();
  const [sideMenu, setSideMenu] = useState<boolean>(false);

  // Hooks
  const { user, error } = useFetchUser();

  // Utility
  const updateGuild = (guild?: PartialGuild) => setGuild(guild);
  const updateSideMenu = () => setSideMenu(!sideMenu);

  return (
    <GuildContext.Provider value={{ guild, updateGuild }}>
      {user && !error ? (
        <>
          <Routes>
            <Route
              path="/menu/*"
              element={
                <>
                  <Topbar updateSideMenu={updateSideMenu} />
                  <MenuSidebar state={sideMenu} />
                </>
              }
            />
            <Route
              path="/dashboard/*"
              element={
                <>
                  <GuildTopbar updateSideMenu={updateSideMenu} />
                  <DashboardSidebar state={sideMenu} />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/verify" element={<VerifyPage />} />
            <Route
              path="/menu"
              element={<Navigate replace to="/menu/guilds" />}
            />
            <Route
              path="/dashboard"
              element={
                <MainContentContainer state={sideMenu}>
                  <DashboardPage />
                </MainContentContainer>
              }
            />
            <Route
              path="/menu/guilds"
              element={
                <MainContentContainer state={sideMenu}>
                  <MenuPage />
                </MainContentContainer>
              }
            />
            <Route
              path="/menu/user"
              element={
                <MainContentContainer state={sideMenu}>
                  <UserPage />
                </MainContentContainer>
              }
            />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<p>Not authorised.</p>} />
        </Routes>
      )}
    </GuildContext.Provider>
  );
}

export default App;
