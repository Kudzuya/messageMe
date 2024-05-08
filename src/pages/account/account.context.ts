import back from 'src/assets/icons/back.svg';
import userAvatar from 'src/assets/images/user-avatar.png';
import type { AccountPageProps } from 'src/pages/account';

const currentUser = {
  email: 'juj952@mail.ru',
  login: 'kudzuya',
  firstName: 'Gevork',
  secondName: 'Muradyan',
  chatName: 'Kudzuya',
  tel: '+7 926 369 43 79',
};
export const AccountContext: AccountPageProps = {
  avatar: {
    image: userAvatar,
    isCurrentUser: true,
  },
  user: {
    name: `${currentUser.firstName} ${currentUser.secondName}`,
    login: `@${currentUser.login}`,
  },
  inputs: [
    {
      name: 'email',
      style: 'clear',
      label: 'Email',
      placeholder: 'eddiem@domain.com',
      value: currentUser.email,
      type: 'email',
      autocomplete: 'email',
    },
    {
      name: 'login',
      style: 'clear',
      label: 'Login',
      placeholder: 'eddiem',
      value: currentUser.login,
      type: 'username',
      autocomplete: 'username',
    },
    {
      name: 'first_name',
      style: 'clear',
      label: 'First Name',
      placeholder: 'Eddie',
      value: currentUser.firstName,
      type: 'text',
      autocomplete: 'given-name',
    },
    {
      name: 'second_name',
      style: 'clear',
      label: 'Second Name',
      placeholder: 'M',
      value: currentUser.secondName,
      type: 'text',
      autocomplete: 'family-name',
    },
    {
      name: 'display_name',
      style: 'clear',
      label: 'Name in Chat',
      placeholder: 'Eddie M',
      value: currentUser.chatName,
      type: 'text',
      autocomplete: 'nickname',
    },
    {
      name: 'phone',
      style: 'clear',
      label: 'Tel',
      placeholder: '+7 999 999 99 99',
      value: currentUser.tel,
      type: 'tel',
      autocomplete: 'tel',
    },
  ],
  actions: [
    {
      text: 'Edit',
      href: '#',
    },
    {
      text: 'Change Password',
      href: '#',
    },
    {
      text: 'Sign Out',
      href: '#',
      isWarning: true,
    },
  ],
  backButton: {
    icon: back,
    size: 'xl',
    type: 'button',
    width: 'content',
    label: 'Back to Chats',
    link: {
      text: 'Go back to chats',
      href: 'sign-in',
    },
  },
  
  isEditing: false,
};
