import React from 'react';
import styles from './Header.module.css';
import { FaCalendarCheck } from 'react-icons/fa';

const header = props => (
    <div className={styles.Header}>
    <p><FaCalendarCheck 
    className={styles.Icon}/>
    <span 
    className={styles.Icon}>GetItDone</span></p>
    </div>
)

export default header;