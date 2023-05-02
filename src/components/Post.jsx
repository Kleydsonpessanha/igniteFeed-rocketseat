import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Coment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'
import peopleOne from '../assets/people-one.svg'
import { useState } from 'react'


// estado = variáveis que eu quero que o componente monitore 

export function Post({ author, publishedAt, content }) {

   const [comments, setComments] = useState([
     'Post muito bacana, hein?!'
  ])
    
  const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
      locale: ptBR
    })

    const publishedDaterRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true
    })
    
    
    function handleCreateNewComment() {
      event.preventDefault()
      setComments([...comments, newCommentText])
      setNewCommentText('')
    }
    
    
        function handleNewCommentChange() {
          setNewCommentText(event.target.value) 
        }


        function deleteComment(commentToDelete) {
            const commentsWithoutDeleteOne = comments.filter(comment => {
              return comment != commentToDelete
            })

          // imutabilidade => as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
          // o setComment está atualizando o estado dos comentários.
        setComments(commentsWithoutDeleteOne)
        }
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
              return <p ><a href="">{line.content}</a></p>
            }
          })}
       </div>

       <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newCommentText}
          placeholder='deixe um comentário'
          onChange={handleNewCommentChange}
        />

        <footer>   <button type='submit'>Publicar</button></footer>
       </form>


       <div className={styles.commentList}>
          {comments.map(comment => {
            return (
            <Coment
               key={comment}
               content={comment} 
               ondeleteComment={deleteComment}
            />
            )
          })}
       </div>
      </article>
    )
}