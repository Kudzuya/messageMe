import type { AuthProps } from '../../layouts';

export const SignInContext: AuthProps = {
  title: 'Hola! Welcome back',
  description: 'Sign up and get in touch',
  inputs: [
    {
      name: 'login',
      size: 's',
      placeholder: 'Login or Email',
      type: 'email',
      autocomplete: 'username',
    },
    {
      name: 'password',
      size: 's',
      placeholder: 'Password',
      type: 'password',
      autocomplete: 'current-password',
    },
  ],
  button: {
    size: 'l',
    style: 'action',
    type: 'submit',
    width: 'full',
    label: 'Sign in',
  },
  link: {
    text: 'Sign up',
    href: '/sign-up',
  },
};
