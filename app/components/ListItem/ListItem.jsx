import styles from './ListItem.module.css';


const ListItem = ({ children }) => {
    return (

       <div className={styles.aaa}>
          <p>{children}</p>  
       </div>
    )
    };

export default ListItem;