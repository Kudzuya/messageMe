import { type SplashScreenProps } from './splash-screen.type.ts';
import splashScreen from '../../assets/images/splash-screen.png';

export const SplashScreenContext: SplashScreenProps = {
  content: {
    title: 'First sprint is done🔥',
    description: 'These pages are ready for interaction',
    image: splashScreen,
    alt: 'Hoooray',
  },
  links: [
    {
      text: 'Login',
      href: '/sign-in',
    },
    {
      text: 'Sign Up',
      href: '/sign-up',
    },
    {
      text: 'Chats',
      href: '/chats',
    },
    {
      text: 'Account',
      href: '/account',
    },
    {
      text: '404',
      href: '/not-found',
    },
    {
      text: '500',
      href: '/server-error',
    },
  ],
};
