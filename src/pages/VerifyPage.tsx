import { MainContent, Seperator, ReferLink } from '../utils/styles/index';

export const VerifyPage = () => {
  return (
    <MainContent>
      <div style={{ margin: '0 2rem' }}>
        <div>
          <img
            src="/assets/koala-icon.ico"
            alt="Koala Bot Logo"
            style={{
              maxWidth: '20%',
              height: 'auto',
            }}
          />
        </div>
        <div>
          <p
            style={{
              margin: '1rem 100px',
            }}
          >
            Welcome to the Koala Bot dashboard!
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.875rem',
            height: '1rem',
            gap: '20px',
            marginBottom: '16px',
          }}
        >
          <Seperator />
          <p
            style={{
              margin: '0',
              lineHeight: '0.9rem',
            }}
          >
            Verify
          </p>
          <Seperator />
        </div>
        <div>Captcha here</div>
        <div
          style={{
            textAlign: 'left',
            padding: '10px 0',
            fontWeight: 'normal',
            fontSize: '0.875rem',
          }}
        >
          <span
            style={{
              color: '#8C8C8C',
            }}
          >
            Need support?{' '}
          </span>
          <ReferLink href="https://discord.gg/SVBDxZp3dt">
            Join the discord!
          </ReferLink>
        </div>
      </div>
    </MainContent>
  );
};
