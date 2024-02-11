import { FaCircleInfo } from 'react-icons/fa6';
import {
  NotificationCircleContainer,
  NotificationBody,
  NotificationButton,
} from '../utils/styles';

export const Notification = () => (
  <NotificationBody>
    <NotificationCircleContainer>
      <FaCircleInfo
        size={15}
        style={{
          aspectRatio: '1',
        }}
      ></FaCircleInfo>
    </NotificationCircleContainer>
    <p>
      You do not have a Roblox account connected, would you like to connect?
    </p>
    <NotificationButton
      onClick={() => {
        window.location.href = '/dashboard/guild';
      }}
    >
      Connect
    </NotificationButton>
  </NotificationBody>
);
