import styled from 'styled-components';

export const MainContent = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
  font-weight: 600;
  text-align: center;
  max-width: 100%;
  //padding: 0.2rem;
`;

export const Seperator = styled.div`
  background-color: #bbbbbb;
  flex-grow: 1;
  height: 1px;
  margin: auto;
`;

export const ReferLink = styled.a`
  color: #fff;
  transition: color 200ms;

  &:hover {
    color: #acacac;
  }
`;

export const AuthButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c1e23;
  font-size: 0.875rem;
  gap: 10px;
  padding: 10px 0;
  border: 1px solid #bbbbbb88;
  border-radius: 10px;
  transition: background-color 250ms, color 250ms;
  cursor: pointer;

  &:hover {
    background-color: #bbbbbb;
    color: #1c1e23;
  }
`;

export const NotificationCircleContainer = styled.div``;

export const NotificationBody = styled.div`
  gap: 1rem;
  text-align: right;
  background-color: #2c3f4c;
  display: flex;
  align-items: center;
  padding-inline: 2rem;
  border-radius: 10px;
  border: 1px solid #10557955;
  min-width: 50%;
  margin-bottom: 1rem;
  margin-inline: 2rem;
  white-space: nowrap;
  flex-wrap: wrap;
  @media (orientation: portrait) {
    white-space: normal;
    justify-content: center;
    text-align: center;
    ${NotificationCircleContainer} {
      display: none;
    }
  }
`;

export const NotificationButton = styled.p`
  flex-grow: 1;
  font-weight: 700;
  text-align: inherit;
  cursor: pointer;
`;

export const GuildListMain = styled.div`
  background-color: #111113;
  border-bottom: 1px solid #212121;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-inline: 2rem;
  font-weight: 500;
  text-align: left;
  transition: background-color 250ms, background-color 250ms;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom: none;
  }

  &:hover {
    background-color: #0b0b0c;
  }
`;

export const TestThing = styled.div`
  position: relative;
  transition: left 300ms;
  width: 250px;
  height: 100vh;
  left: 0;

  @media (max-width: 800px) {
    width: 100%;
    border-right: none;
  }
`;

export const ReturnMenuButton = styled.div`
  border-top: 1px solid #6a6a6a;
  box-sizing: border-box;
  background-color: #151517;
  font-weight: 500;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  padding: 16px;
  cursor: pointer;
  width: 100%;
  border-right: 1px solid #6a6a6a;
  text-align: center;

  &:hover {
    color: #919090;
  }
`;

export const MainContentContainer = styled.div<{ state: boolean }>`
  box-sizing: border-box;
  padding-left: ${(props) => (props.state ? '17rem' : '0')};
  transition: 0.25s ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const BaseNavSidebar = styled.nav<{ state: boolean }>`
  display: flex;
  flex-direction: column;
  background: #131315;
  bottom: 0;
  height: calc(100% - 3.75rem);
  overflow-y: auto;
  left: ${(props) => (props.state ? '0' : '-17.5rem')};
  position: fixed;
  transition: 0.25s ease-in-out;
  width: 17rem;
  user-select: none;
  border-right: 1px solid #6a6a6a;

  > * {
    &:last-child {
      box-shadow: 0px 0px 5px 0px #00000088;
      bottom: 0;
      position: sticky;
      margin-top: auto;
      border-bottom: none;
      border-top: 1px solid #212121;
      color: #976363;
    }
  }
`;

export const NavSidebarItem = styled.div<{ hoverColor?: string }>`
  align-items: center;
  display: flex;
  text-decoration: none;
  font-weight: 500;
  color: #686868;
  box-sizing: border-box;
  background-color: #111113;
  width: 100%;
  border-bottom: 1px solid #212121;
  padding: 16px;
  padding-left: 1.5rem;
  transition: all 150ms ease-in-out;
  gap: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #0b0b0c;
    color: #adadad;

    > .icon {
      color: ${(props) => props.hoverColor ?? '#9960a3'};
    }
  }

  > .icon {
    transition: all 150ms ease-in-out;
  }
`;
