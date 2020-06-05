export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  icon: 'rocket',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>tomorrow!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'https://i.postimg.cc/mDZydPWX/obraz.png',
  },
  {
    id: 'list-2',
    title: 'Things to do <sup>soon!</sup>',
    description: 'More things I am curious about',
    image: 'https://i.postimg.cc/mZKTCq9q/obraz-3.jpg',
  },
  {
    id: 'list-3',
    title: 'Things to do <sup>later!</sup>',
    description: 'Things that can wait for now',
    image: 'https://i.postimg.cc/bvr0Xsvs/obraz-2.jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Music',
    icon: 'guitar',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-6',
    listId: 'list-2',
    title: 'Music',
    icon: 'guitar',
  },
  {
    id: 'column-7',
    listId: 'list-3',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-8',
    listId: 'list-3',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-9',
    listId: 'list-3',
    title: 'Music',
    icon: 'guitar',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'Misty in Roots',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Rythm and Sound',
  },
  {
    id: 'card-7',
    columnId: 'column-4',
    title: 'Born a Crime',
  },
  {
    id: 'card-8',
    columnId: 'column-4',
    title: 'Half of a Yellow Sun',
  },
  {
    id: 'card-9',
    columnId: 'column-5',
    title: 'Malcolm X',
  },
  {
    id: 'card-10',
    columnId: 'column-5',
    title: 'Gate Keepers',
  },
  {
    id: 'card-11',
    columnId: 'column-6',
    title: 'Fela Kuti',
  },
  {
    id: 'card-12',
    columnId: 'column-6',
    title: 'Two words',
  },
  {
    id: 'card-13',
    columnId: 'column-7',
    title: 'Fraction of a Whole',
  },
  {
    id: 'card-14',
    columnId: 'column-7',
    title: 'Dead Aid',
  },
  {
    id: 'card-15',
    columnId: 'column-8',
    title: 'Good Father',
  },
  {
    id: 'card-16',
    columnId: 'column-8',
    title: 'The Movie',
  },
  {
    id: 'card-17',
    columnId: 'column-9',
    title: 'Rolling Stones',
  },
  {
    id: 'card-18',
    columnId: 'column-9',
    title: 'The Doors',
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export const info = {
  title: 'More information',
  image: 'https://i.postimg.cc/X76x6hj6/ian-dooley-Du-BNA1-QMp-PA-unsplash.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export const faq = {
  title: 'Facts and Questions',
  image: 'https://i.postimg.cc/JtVyzVVb/franck-v-u1-EKBsm4g4-A-unsplash.jpg',
  description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export default initialStoreData;
