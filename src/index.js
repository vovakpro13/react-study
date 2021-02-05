import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import reportWebVitals from './reportWebVitals';

import ava from './media/ava.jpg';
import ava1 from './media/ava1.jpg';
import avatar from './media/ava1.jpg';

import plant from './media/menu.jpg';
import pl from './media/pl.jpg';
import romashka from './media/romashka.jpg';

const userInfo = {
  id: 123,
  name: 'Олександр Римар',
  avatar: avatar,
  status: 'ландшафтний архітектор',
  infoblocks: [
      {svg: 'birth', text: '03.21'},
      {svg: 'suitcase', text: '6 роки'},
      {svg: 'pot', text: 4},
      {svg: 'fern', text: 2},
  ],
  hobbies: [
      'Садівництво', 
      'Волейбол', 
      'Аграрні науки',
      'Ковбаса'
  ]
};

const posts = [
  {
      id: 1, 
      avatar: avatar,
      author: userInfo.name, 
      date: '03.11.19', 
      theme: 'My theme', 
      text: 'blablablablablablablablablablabla',
      likes: 1,
      comments: [
      ]
  },
  {
      id: 2, 
      avatar: avatar,
      author: userInfo.name, 
      date: '03.19', 
      theme: 'Mye', 
      text: 'blalabla',
      likes: 1,
      comments: [
          {id:1, avatar: avatar, username: 'Степан', date: '31.11.21', comment: 'CCCCCOOOOOOOLLL!'},
          {id:2, avatar: avatar, username: 'КОЛЯ', date: '31.02.19', comment: 'CCCLLL!'},
          {id:3, avatar: avatar, username: 'Оля', date: '02.12.19', comment: 'Беееееееееееееее'}
      ]
  }
];

const dialogs = [
      {
          id: 1, img: ava1, dialog: 'Петро',
          messages:[
              {id: 123, avatar: ava, author: 'Петро', message: 'Hello !!', time: '20:30'},
              {id: 1243, avatar: ava1, author: 'Я', message: 'Hello пппуп!!', time: '20:31'},
              {id: 13223, avatar: ava, author: 'Петро', message: 'Hваавello !!', time: '20:32'},
              {id: 1253, avatar: ava1, author: 'Я', message: 'Helloпрррр !!', time: '20:33'},
              {id: 12793, avatar: ava1, author: 'Я', message: 'Hello11111111111 !!', time: '20:33'},
          ]
      },
      {
        id: 24, img: ava, dialog: 'Галина',
        messages:[ 
            {id: 1237, avatar: pl,  author: 'Галина', message: '1', time: '20:30'},
            {id: 124783, avatar: ava1, author: 'Я', message: '2!', time: '20:31'},
            {id: 13272, avatar: pl,  author: 'Галина', message: '34hghj !!', time: '26776:32'},
            {id: 126453,  avatar: ava1, author: 'Я', message: 'Helloпрnfhm,hjvhbj,ррр !!', time: '98'},
            {id: 12579, avatar: ava1, author: 'Я', message: 'Hellogfnhjjnnnnnnnnnnnnn111 !!', time: '20:7878'},
        ]
    },
    {
      id: 3, img: pl, dialog: 'Костя',
      messages:[ 
          {id: 1237, avatar: pl,  author: 'Костя', message: '1', time: '20:30'},
          {id: 124783, avatar: ava, author: 'Я', message: '2!', time: '20:31'},
          {id: 13272, avatar: pl,  author: 'Костя', message: '34hghj !!', time: '26776:32'},
          {id: 126453,  avatar: ava, author: 'Я', message: 'Helloпрnfhm,hjvhbj,ррр !!', time: '98'},
          {id: 12579, avatar: ava1, author: 'Я', message: 'Hellogfnhjjnnnnnnnnnnnnn111 !!', time: '20:7878'},
      ]
  }
];

const plants = [
  {
    id: 1,
    name: 'Ромашка',
    img: romashka,
    options: [
      {option: 'Вік', value: [1, ' день']},
      {option: 'Походження', value: 'Україна'},
      {option: 'Опис', value: 'поиск по ключевым словам "lorem ipsum" сразу показыва'}
    ],
    moreData: [

    ]
  },
  {
    id: 2,
    name: 'Лопухи',
    img: plant,
    options: [
      {option: 'Вік', value: [2, ' роки']},
      {option: 'Походження', value: 'Казахстан'},
      {option: 'Опис', value: 'поиск по ключевым словам "lorem ipsum" сразу показыва'}
    ],
    moreData: [
      
    ]
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App user={userInfo} posts={posts} dialogs={dialogs} plants={plants}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
