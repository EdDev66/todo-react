import React from 'react';
import styles from './Button.module.css';
import Button from 'react-bootstrap/Button';

const button = props => (
    <div className={styles.Button}>
        <Button 
        variant='danger'
        className={styles.PlusBtn}
        onClick={props.click}>+</Button>
    <p className={styles.Text}>Add {props.text}</p>
    </div>
);

export default button;