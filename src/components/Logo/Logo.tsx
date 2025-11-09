import { useEffect } from 'react';
import { Box } from '@mui/material';
import CustomLink from '../Mui/CustomLink';
import { useRouter } from 'next/router';
import gsap from 'gsap';

const Logo = ({ toggleDrawer, colorMode, color }: any) => {
  const router = useRouter();

  useEffect(() => {
    // import plugin only on client
    if (typeof window !== 'undefined') {
      import('gsap/ScrollToPlugin').then(({ ScrollToPlugin }) => {
        gsap.registerPlugin(ScrollToPlugin);
      });
    }
  }, []);

  const handleClick = () => {
    toggleDrawer?.(false);

    if (router.pathname !== '/') {
      router.push('/');
    }

    if (typeof window !== 'undefined') {
      gsap.to(window, { duration: 1, scrollTo: '#hero' });
    }
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        flex: 1,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        className={colorMode?.mode === 'dark' ? 'logoImg small' : 'small'}
        src="./Image/logo.png"
        alt="logo"
      />
      <CustomLink color={color} fontWeight="600" text="Sumant Bobade" href="/" />
    </Box>
  );
};

export default Logo;