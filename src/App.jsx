import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

// author { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: ""

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/emanoelhenrick.png",
      name: "Emanoel Henrick",
      role: "Fullstack Dev"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-15 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/JLTSF.png",
      name: "Locio Filho",
      role: "Backend Dev"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-13 21:00:00')
  },
]

function App() {

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

  )
}

export default App

