import ellipsis from 'src/assets/icons/ellipsis-vertical.svg';
import newChat from 'src/assets/icons/new-chat.svg';
import paperPlane from 'src/assets/icons/paper-plane.svg';
import paperclip from 'src/assets/icons/paperclip.svg';
import noChat from 'src/assets/images/no-chat.png';
import userAvatarOther from '../../assets/images/other-user-avatar.png';
import userAvatar from 'src/assets/images/user-avatar.png';
import { formatDate } from 'src/helpers/format-date';
import type { ChatsPageProps } from 'src/pages/chats';

export const ChatsContext: ChatsPageProps = {
  topPanel: {
    search: {
      name: 'search',
      size: 's',
      placeholder: 'Search',
      type: 'text',
    },
    user: {
      id: 1,
      image: userAvatar,
      name: 'Gevork Muradyan',
    },
  },
  messages: {
    1: {
      1: {
        date: formatDate(new Date('February 25, 2024 09:24:00')),
        text: 'Привет! Недавно наткнулся на захватывающую статью о том, как роботы начинают проникать в нашу повседневную жизнь и как это влияет на будущее технологий. Это действительно интересно и вызывает массу размышлений!',
        author: 3,
        isRead: true,
        type: 'text',
      },
      2: {
        date: formatDate(new Date('February 25, 2024 09:28:30')),
        text: 'Ого, неожиданно и приятно конечно:)',
        author: 1,
        isRead: true,
        type: 'text',
        isOwn: true,
      },
      3: {
        date: formatDate(new Date('February 25, 2024 10:24:00')),
        text: 'Ты так отвечаешь странно... Может ты сам робот???',
        author: 3,
        isRead: true,
        type: 'text',
      },
      4: {
        date: formatDate(new Date('February 25, 2024 10:29:00')),
        text: 'Возможно. Бип-буп 🤖🤖🤖',
        author: 1,
        isRead: true,
        type: 'text',
        isOwn: true,
      },
      
    },
  },
  selectedChat: 1,
  chatPreviews: {
    1: {
      id: 1,
      user: {
        id: 2,
        image: userAvatarOther,
        name: 'Ваня',
      },
      lastMessage:
        'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
      time: formatDate(new Date('August 22, 1992 19:24:00')),
      unread: 2,
      onClick: () => {
        console.log('Chat preview 1 clicked');
      },
    },
    2: {
      id: 2,
      user: {
        id: 3,
        image: userAvatarOther,
        name: 'Сергей',
      },
      lastMessage: 'Здаров, я тут недавно подумал о проекте что ты предлагал сделать. Звучит отлично , но нам надо найти бэкендера и спонсоров',
      time: formatDate(new Date('February 26, 2024 15:13:00')),
      onClick: function () {
        console.log('Chat preview 2 clicked');
      },
    },
    3: {
      id: 3,
      user: {
        id: 4,
        image: userAvatarOther,
        name: 'Дезайнер Кирилл',
      },
      lastMessage: 'Погнали в субботу соберёмся, тусанём нормально',
      time: formatDate(new Date('February 24, 2024 19:44:00')),
      onClick: function () {
        console.log('Chat preview 3 clicked');
      },
      4: {
        id: 4,
        user: {
          id: 5,
          image: userAvatarOther,
          name: 'Алексей К',
        },
        lastMessage: 'Привет, на работе возникли непредвиденные сложности, полный завал, отпишусь позже как появится ясность',
        time: formatDate(new Date('February 25, 2024 18:57:30')),
        onClick: function () {
          console.log('Chat preview 4 clicked');
        },
      },
    },
  },
  noChat: {
    title: 'Hola! Como esta? Let’s begin!',
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
  chatSettingsButton: {
    icon: ellipsis,
    type: 'button',
    width: 'content',
    onClick: () => {
      console.log('Chat settings button clicked');
    },
  },
  users: {
    1: {
      id: 1,
      image: userAvatar,
      name: 'Gevork Muradyan',
    },
    2: {
      id: 2,
      image: userAvatarOther,
      name: 'Ваня',
    },
    3: {
      id: 3,
      image: userAvatarOther,
      name: 'Сергей',
    },
    4: {
      id: 4,
      image: userAvatarOther,
      name: 'Дезайнер Кирилл',
    },
    5: {
      id: 5,
      image: userAvatarOther,
      name: 'Алексей К',
    },
  },
  chatInput: {
    name: 'message',
    placeholder: 'Type a message',
    type: 'text',
    required: true,
  },
  sendButton: {
    icon: paperPlane,
    label: 'Send',
    type: 'button',
    width: 'content',
    isIconOnly: true,
  },
  attachButton: {
    icon: paperclip,
    label: 'Attach file',
    type: 'button',
    width: 'content',
    isIconOnly: true,
    onClick: () => {
      console.log('Attach button clicked');
    },
  },
};
