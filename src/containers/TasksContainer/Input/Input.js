import React from 'react';
import styles from './Input.module.css';
import Form from 'react-bootstrap/Form'

const input = props => (
    <div>
    <Form
    autoComplete='off'
    onChange={props.changeInput}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control 
        className={styles.Input}
        type="text" 
        placeholder={props.holder} />
      </Form.Group>
    </Form>
    </div>
    
);


export default input;