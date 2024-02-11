import { FaCog } from 'react-icons/fa';
import { BaseNavSidebar, NavSidebarItem } from '../utils/styles';
import {
  FaHammer,
  FaTag,
  FaUsers,
  FaUserGear,
  FaDoorOpen,
  FaServer,
} from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { GuildContext } from '../utils/contexts/GuildContext';
import { useContext } from 'react';

interface GuildSideBarProps {
  state: boolean;
}

export const MenuSidebar = ({ state }: GuildSideBarProps) => {
  const navigator = useNavigate();
  const redirect = () => navigator('/');

  return (
    <BaseNavSidebar state={state}>
      <NavSidebarItem>
        <FaServer className="icon" size={18} />
        <span>Guilds</span>
      </NavSidebarItem>
      <NavSidebarItem>
        <FaUserGear className="icon" size={18} />
        <span>User</span>
      </NavSidebarItem>

      <NavSidebarItem onClick={redirect}>
        <FaDoorOpen className="icon" size={18} />
        <span>Logout</span>
      </NavSidebarItem>
    </BaseNavSidebar>
  );
};

export const DashboardSidebar = ({ state }: GuildSideBarProps) => {
  const { updateGuild } = useContext(GuildContext);
  const navigator = useNavigate();
  const redirect = () => {
    updateGuild(undefined);
    navigator('/menu');
  };

  return (
    <BaseNavSidebar state={state}>
      <NavSidebarItem>
        <FaHammer className="icon" size={18} />
        <span>Moderation</span>
      </NavSidebarItem>
      <NavSidebarItem>
        <FaTag className="icon" size={18} />
        <span>Tags</span>
      </NavSidebarItem>
      <NavSidebarItem>
        <FaUsers className="icon" size={18} />
        <span>Permissions</span>
      </NavSidebarItem>
      <NavSidebarItem>
        <FaCog className="icon" size={18} />
        <span>Settings</span>
      </NavSidebarItem>

      <NavSidebarItem onClick={redirect}>
        <FaDoorOpen className="icon" size={18} />
        <span>Exit</span>
      </NavSidebarItem>
    </BaseNavSidebar>
  );
};
