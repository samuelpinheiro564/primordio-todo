import styles from './about.module.css'
import SideBar from '../components/SideBar/SideBar'

function Senai() {
  return (
   
  <>
  <div className={styles.container}>
    <SideBar />
    <div className={styles.main}>
      <h1 className={styles.title}>Sobre Nós</h1>
      <p>Esse é o conteúdo da home</p>
    </div>
  </div>
  </>
  )
}

export default Senai