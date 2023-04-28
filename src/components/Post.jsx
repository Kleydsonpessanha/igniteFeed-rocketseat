import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Coment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'
import peopleOne from '../assets/people-one.svg'


export function Post({ author, publishedAt, content }) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
      locale: ptBR
    })

    const publishedDaterRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true
    })

    return (
      <article className={styles.post}>
       <header>
        <div className={styles.author}>
            <Avatar hasBorder={true} src={author.avatarUrl} />

            <div className={styles.authorInfo}>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
            </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
         {publishedDaterRelativeToNow}
          </time>
       </header>

       <div className={styles.content}>
          {content.map(line => {
            if (line.type === 'paragraph') {
              return <p>{line.content}</p>;
            } else if (line.type === 'link') {
              return <p><a href="">{line.content}</a></p>
            }
          })}
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