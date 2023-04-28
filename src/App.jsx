import { Post } from "./components/Post";
import { useState } from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar";
import { Coment } from "./components/Comment";

import styles from "./App.module.css";
import "./global.css";

import peopleOne from "./assets/people-one.svg";
import peopleTwo from "./assets/people-two.svg";

// author: { avatar_url: "",name: "", role: ""}
//  published: Date
//  content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Kleydsonpessanha.png",
      name: "Kleydson Pessanha",
      role: "Front end Developer",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "kleydsonpessanha.vercel.app" },
    ],
    publishedAt: new Date("2023-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de concluir mais uma aula, aqui na rocketseat', },
      { type: 'paragraph', content: 'O linke vai está logo abaixo' },
      { type: 'link', content: "rocketseat.com" },
    ],
    publishedAt: new Date("2023-05-22 20:20:00"),
  },
  
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
        {posts.map(post => {
          return ( 
          <Post
             author={post.author}
             content={post.content}
             publishedAt={post.publishedAt}
          />
          )
          })}
        </main>
      </div>
    </div>
  );
}
