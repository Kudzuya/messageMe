import { navigate } from 'src/core/navigate';
import type { AuthProps } from 'src/layouts/auth';

export const SignUpContext: AuthProps = {
  title: 'GuttenTag, Hola, Greetings! ',
  description: "Let's get to know each other, my dear friend!",
  inputs: [
    {
      name: 'email',
      size: 's',
      placeholder: 'Email',
      type: 'email',
      autocomplete: 'email',
      required: true,
    },
    {
      name: 'login',
      size: 's',
      placeholder: 'Login',
      type: 'text',
      autocomplete: 'username',
      required: true,
    },
    {
      name: 'first_name',
      size: 's',
      placeholder: 'First Name',
      type: 'text',
      autocomplete: 'given-name',
      required: true,
    },
    {
      name: 'second_name',
      size: 's',
      placeholder: 'Second Name',
      type: 'text',
      autocomplete: 'family-name',
      required: false,
    },
    {
      name: 'phone',
      size: 's',
      placeholder: 'Phone Number',
      type: 'tel',
      autocomplete: 'tel',
      required: true,
    },
    {
      name: 'password',
      size: 's',
      placeholder: 'Password',
      type: 'password',
      autocomplete: 'new-password',
      required: true,
    },
    {
      name: 'password',
      size: 's',
      placeholder: 'Confirm Password',
      type: 'password',
      autocomplete: 'new-password',
      required: true,
    },
  ],
  button: {
    size: 'l',
    style: 'action',
    type: 'submit',
    width: 'full',
    label: 'Sign up',
  },
  link: {
    text: 'Sign in',
    href: '/sign-in',
  },
  onSubmit: (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    setTimeout(() => {
      navigate('chats');
    }, 300);
  },
};
