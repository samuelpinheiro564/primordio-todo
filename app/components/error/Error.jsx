

import React from 'react';
import styles from './error.module.css';

const Error = ({ error, type }) => {
    return (
       //verificar se o type é error, success ou warning
        <div className={`${styles[type]}`}>
            <p>{error}</p>


        </div>

    )
}
export default Error;
