import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Coment({ content, ondeleteComment }) {
   
  function handleDeleteComment() {
      ondeleteComment(content)
    }

    return (
        <div className={styles.comment}>
           <Avatar hasBorder={false} src="https://github.com/Kleydsonpessanha.png" />
           <div className={styles.commentBox}>
            <div className={styles.commentContent}>
              <header>
                <div className={styles.authorAndTime}>
                  <strong>Kleydson Pessanha</strong>
                <time title="11 de maio ás 08:13h" dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                </div>

                <button  onClick={handleDeleteComment} title='Deletar comentário'>
                <Trash size={24} />
                </button>
              </header>

              <p>{content}</p>
            </div>

            <footer>
               <button>
               <ThumbsUp/>
               Aplaudir <span>20</span>
               </button>
            </footer>
           </div>
       
        </div>
    )
}