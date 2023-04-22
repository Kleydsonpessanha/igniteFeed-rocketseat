import { Coment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'
import peopleOne from '../assets/people-one.svg'


export function Post(props) {
    return (
      <article className={styles.post}>
       <header>
        <div className={styles.author}>
            <Avatar hasBorder={true} src={props.image} alt="" />

            <div className={styles.authorInfo}>
                <strong>{props.author}</strong>
                <span>{props.content}</span>
            </div>
        </div>

        <time title="11 de maio ás 08:13h" dateTime='2022-05-11 08:13:30'>Públicado há 1h</time>
       </header>

       <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>cabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 {' '}<a href=""> jane.design/doctorcare</a></p>
        <p>
            <a href="#">#novoprojeto</a>{' '}
            <a href="#">#nlw</a>{' '}
            <a href="#"> #rocketseat</a>{' '}
       </p>

       </div>

       <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='deixe um comentário'
        />

        <footer>   <button type='submit'>Publicar</button></footer>
       </form>


       <div className={styles.commentList}>
        <Coment/>
        <Coment/>
        <Coment/>
       </div>
      </article>
    )
}