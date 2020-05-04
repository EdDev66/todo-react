import React from 'react';
import styles from './Modal.module.css';
import Input from '../../../containers/TasksContainer/Input/Input';
import Priority from '../Priority/Priority';
import { Button } from 'react-bootstrap';

const modal = props => (
    <div 
    className={styles.Modal}
    style={{
        display: props.show ? 'block' : 'none',
    }}>
        <Input 
        holder='Task name' 
        changeInput={props.modifyInput} />

        <Priority />

        <Button
        variant='danger'
        onClick={props.click}>Submit</Button>
    </div>
);

export default modal;