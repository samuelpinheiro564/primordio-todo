"use client";
import SideBar from "../components/SideBar/SideBar";
import { useState } from "react";
import styles from './state.module.css';


function State(){

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
        console.log(counter);
    }

    const decrement = () => {
        setCounter(counter ? counter - 1 : 0);
        console.log(counter);
    }

    const reset = () => {
        setCounter(0);
        console.log(counter);
    }

    return (

        <>
        <SideBar/>
        <div className={styles.main}>
            
            <h1>State</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
        </>
    )
}

export default State;