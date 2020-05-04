import React from 'react';
import styles from './TaskList.module.css';

const taskList = props => { 
    const listToAdd = props.projects;
    const displayProject = listToAdd.map(elem => {
        return (
            <div 
            key={elem.key}
            onClick={() => props.selectProject(elem.key)}>
                <p className={styles.SingleProject}>{elem.projectVal}</p>
            </div>
        );
    })
    return <div>{displayProject}</div>
    
};

export default taskList;