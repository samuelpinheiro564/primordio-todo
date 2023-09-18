import styles from './login.module.css'
import SideBar from '@/app/components/SideBar/SideBar'

function Home() {
  return (
   
  <>
  <div className={styles.container}>
    <SideBar />
    <div className={styles.main}>
      <h1 className={styles.title}>Login</h1>
      <p>Esse é o conteúdo da home</p>
    </div>
  </div>
  </>
  )
}

export default Home