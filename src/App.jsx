//JSX = javascript + xml
import { Header } from "./componentes/header"
import { Post } from "./componentes/Posta"
import "./global.css"

import styles from "./App.module.css"
import { Sidebar } from "./componentes/sidebar"

export function App() {
 
  return (

    <div>

      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post 
        author="Diego Fernandes" 
        content="loren"
        />
      
        <Post 
        author="Mayk Brito" 
        content="loren"
        />
        </main>
      </div>
      
    </div>
   
  )
}



