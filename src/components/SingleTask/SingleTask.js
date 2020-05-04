import React from 'react';
import styles from './SingleTask.module.css';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';


const singleTask = props => {
    const tasks = props.tasks;
    const displayTask = tasks.map(el => {
    
      let taskColor = el.priority === 'low' ? styles.Low :  el.priority === 'medium' ? styles.Medium : styles.High;
      let checkBox = el.checked === false ? <MdCheckBoxOutlineBlank /> : <MdCheckBox />;
        return <div key={el.key}>
            <p className={`${styles.Task} ${taskColor}`}>
                <span 
                className={styles.CheckMark}
                onClick={() => props.checkItem(el.key)}>{checkBox}</span>
                <span className={el.checked === true ? styles.Complete : null}>{el.taskVal}</span>
                <span
                className={styles.Del}
                onClick={() => props.delete(el.key)}>&#x1f5d1;</span>
            </p>
        </div>
    })
    return <div>{displayTask}</div>
};

export default singleTask;