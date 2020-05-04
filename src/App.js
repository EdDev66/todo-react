import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import TasksContainer from './containers/TasksContainer/TasksContainer';
import CurrentTask from './containers/CurrentTask/CurrentTask';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions/actions';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from './components/UI/Modal/Modal';
import Backdrop from './components/UI/Backdrop/Backdrop';

class App extends Component {

  render(){
  return (
    <div className="App">
      <Backdrop 
      show={this.props.modalVal} 
      clicked={this.props.onCloseModal}/>
      <Modal 
      show={this.props.modalVal} 
      click={this.props.onTaskSubmit}
      modifyInput={this.props.onModifyInput}/>
      <Header />

     <Row>
      <Col sm={4} style={{display: 'none'}}><TasksContainer /></Col>
      <Col><CurrentTask /></Col>
     </Row>
    
    </div>
  );
  }
}

const mapStateToProps = state => {
    return {
      modalVal: state.modalClicked,
    }  
  };

  const mapDispatchToProps = dispatch => {
    return {
      onCloseModal: () => dispatch({type: actionTypes.MODAL_STATE}),
      onModifyInput: (ev) => dispatch({type: actionTypes.CHANGE_INPUT_MODAL, payload: {val: ev.target.value, key: Date.now()}}),
      onTaskSubmit: () => dispatch({type: actionTypes.SUBMIT_TASK})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
