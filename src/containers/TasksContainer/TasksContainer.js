import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from './Input/Input';
import Button from '../../components/UI/Button/Button';
import TaskList from './TaskList/TaskList';
import * as actionTypes from '../../store/actions/actions';


class TasksContainer extends Component {

    render() {
        return (
            <div>
            <Input 
            changeInput={this.props.onChangeInput}
            holder='Enter project name'/>

            <TaskList 
            projects={this.props.projects}
            selectProject={this.props.onClickProject}/>

            <Button text='Project' click={this.props.onButtonClick}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onButtonClick: () => dispatch({type: actionTypes.ADD_PROJECT}),
        onChangeInput: (event) => dispatch({type: actionTypes.CHANGE_INPUT, payload: {val: event.target.value, key: Date.now()}}),
        onClickProject: (key) => dispatch({type: actionTypes.CLICK_PROJECT, id: key})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);