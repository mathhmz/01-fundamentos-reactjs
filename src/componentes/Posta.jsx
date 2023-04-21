import styles from "./Post.module.css"
import {Comment} from "./Commenta.jsx"
import { Avatar } from "./Avatar.jsx"

export function Post(){
    return( 
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                    hasBorder
                    src="https://media.licdn.com/dms/image/D4D03AQGceaxAdF1Hug/profile-displayphoto-shrink_800_800/0/1679772995550?e=1687392000&v=beta&t=L7tbijLi5GLlcP7ad-baWsw_VCrEIuEPxchub-PbsK4"/>
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="19 de abril às 14:20h" dateTime="2023-04-19 14:19:00">Publicado há 1h</time>
            
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{"  "}<a href=""> jane.design/doctorcare</a></p>

                <p>
                <a href="">#novoprojeto</a>{" "}
                <a href=""> #nlw</a>{" "}
                <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixa seu feedback</strong>
                <textarea placeholder="Deixe um comentário"/>
                <footer>
                    <button type="submite">Comentar</button>
                </footer>
                

            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}