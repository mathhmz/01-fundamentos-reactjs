import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar.jsx"

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://plus.unsplash.com/premium_photo-1678652647115-72877c252f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"/>
            <div className={styles.profile}>
                <Avatar
                hasBorder
                src="https://media.licdn.com/dms/image/D4D03AQGceaxAdF1Hug/profile-displayphoto-shrink_800_800/0/1679772995550?e=1687392000&v=beta&t=L7tbijLi5GLlcP7ad-baWsw_VCrEIuEPxchub-PbsK4"/>
                <strong>Matheus Menezes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}