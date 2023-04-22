import { Post } from "./components/Post";
import { useState } from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar";
import { Coment } from "./components/Comment";

import styles from "./App.module.css";
import "./global.css";

import peopleOne from './assets/people-one.svg'
import peopleTwo from './assets/people-two.svg'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
        <Post
            image="https://github.com/Kleydsonpessanha.png"
            author="Kleydson Pessanha"
            content="Dev Front-End"
            post="há 1h"
          />

          <Post
            image={peopleTwo}
            author="Adriana Falcão"
            post="há 1h"
         
         />

        </main>
      </div>
    </div>
  );
}
