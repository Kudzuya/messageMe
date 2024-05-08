import type { ChatsPageProps } from './chats.types.ts';
import newChat from '../../assets/icons/new-chat.svg';
import noChat from '../../assets/images/no-chat.png';
import userAvatarOther from '../../assets/images/other-user-avatar.png';
import userAvatar from '../../assets/images/user-avatar.png';
import { formatDate } from '../../helpers/format-date.ts';

export const ChatsContext: ChatsPageProps = {
  topPanel: {
    search: {
      name: 'search',
      size: 's',
      placeholder: 'Search',
      type: 'text',
    },
    user: {
      image: userAvatar,
      name: 'Gevork Muradyan',
    },
  },
  chatPreviews: [
    {
      user: {
        image: userAvatarOther,
        name: 'Ваня',
      },
      lastMessage:
        'Привет! Недавно наткнулся на захватывающую статью о том, как роботы начинают проникать в нашу повседневную жизнь и как это влияет на будущее технологий. Это действительно интересно и вызывает массу размышлений!',
      time: formatDate(new Date('February 25, 2024 09:24:00')),
      unread: 3,
    },
    {
      user: {
        image: userAvatarOther,
        name: 'Дезайнер Кирилл',
      },
      lastMessage: 'Погнали в субботу соберёмся, тусанём нормально',
      time: formatDate(new Date('February 24, 2024 19:44:00')),
      unread: 1,
    },
    {
      user: {
        image: userAvatarOther,
        name: 'Сергей',
      },
      lastMessage: 'Здаров, я тут недавно подумал о проекте что ты предлагал сделать. Звучит отлично , но нам надо найти бэкендера и спонсоров',
      time: formatDate(new Date('February 26, 2024 15:13:00')),
      unread: 1,
    },
    {
      user: {
        image: userAvatarOther,
        name: 'Алексей К',
      },
      lastMessage: 'Привет, на работе возникли непредвиденные сложности, полный завал, отпишусь позже как появится ясность',
      time: formatDate(new Date('February 25, 2024 18:57:30')),
      unread: 2,
    },
  ],
  noChat: {
    title: 'Hola, let’s begin!',
    description: 'Here are chats, choose one to begin a conversation',
    image: noChat,
    alt: 'Select a chat',
  },
  newChatButton: {
    icon: newChat,
    size: 'xl',
    type: 'button',
    width: 'content',
    label: 'Select a chat',
  },
};
