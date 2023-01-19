import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Manel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officiis, enim ipsa voluptate non voluptatum tempore dicta, fugit cumque sed vero maiores est saepe quo. Eius officiis corrupti maxime mollitia."
          />
        </main>
      </div>
    </div>

  )
}

export default App

