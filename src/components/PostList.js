import React from 'react';

import Post from './Post';

import './PostList.css'

import user1 from '../assets/imgs/user1.svg';
// import user1 from '../assets/imgs/user1';

class PostList extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: user1
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };

  render() {
    return (
      <section className="post-list">
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </section>
    );
  }
}

export default PostList;