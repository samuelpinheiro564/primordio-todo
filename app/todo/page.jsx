
"use client";
import ListItem from "@/app/components/ListItem/ListItem";
import SideBar from "../components/SideBar/SideBar";
import styles from './todo.module.css';
import { useState } from "react";

import Error from "../components/error/Error";

function ToDo(){

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const [error, setError] = useState(false);
    const [success, setSucess] = useState(false);
    const [warning, setWarning] = useState(false);
  


    function SendMsg(){

        setError(true);
        setTimeout(() => {
            setError(false);
        }, 3000);

    }

    function sendSucessMsg(){
          
        setSucess(true);
        setTimeout(() => {
            setSucess(false);
        }, 3000);
        }
        
        function sendWarningMsg(){
          
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 3000);
            }

   const addTask = () => {
 
   
     if(task == 'Fabio'){
        console.log('Não pode ser adicionado o nome Fabio');
        sendWarningMsg();
    }
    else if(task == ''){
        SendMsg();
      

    }else{
        setTasks([...tasks, task]);
        setTask('');
        sendSucessMsg();
    }

}
  return (

    <>
      <SideBar/>
    <div className={styles.main}>
      
      <h1>ToDo</h1>
        <input type="text" placeholder="Type a Task" value={task} onChange={(e) => setTask(e.target.value)}/>
        <button onClick={addTask}>Adicionar</button>
    </div>
    {
        tasks.map((task, index) => {
            return(
               <ListItem key={index} className={styles.inferno}>{task}</ListItem>
            )
            
        })
    }

    {

        error && <Error type="error"error="Digite uma tarefa"/>
       

    }
    {
         success && <Error type="success" error="Tarefa adicionada com sucesso"/>
         
    }
    {
        warning && <Error type="warning" error="Não pode ser adicionado o nome Fabio"/>
    }
    

    </>
  );
}

export default ToDo;