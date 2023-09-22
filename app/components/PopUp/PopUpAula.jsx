import styles from "./popup.module.css"

const PopUpMensagem = (typeColor) => {
/*let color = '';
if(typeColor === 'success'){
    color = styles.success;
}else if(typeColor === 'error'){
    color = styles.error;
}*/

let color = (typeColor === 'success') ? styles.success : styles.error;
let conteiner = styles.maindiv + ' ' + color;

return(
    <div className={`${styles.maindiv} ${styles.typeColor}`}>

<h1>
    PopUp - Componente
</h1>
    </div>
)

}
export default PopUpMensagem