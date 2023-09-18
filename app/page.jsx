
import styles from './page.module.css'
import SideBar from './components/SideBar/SideBar'

function Home() {
  return (
   
  <>
  <div className={styles.container}>
    <SideBar />
    <div className={styles.main}>
      <h1>Home</h1>
      <p>Esse é o conteúdo da home</p>
    </div>
  </div>
  </>
  )
}

export default Home