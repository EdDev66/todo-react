import React, { Component } from 'react';
import ProjectTitle from './ProjectTitle/ProjectTitle';
import Button from '../../components/UI/Button/Button';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
import SingleTask from '../../components/SingleTask/SingleTask';

class CurrentTask extends Component {

   deleteItem = (key) => {
        const filteredTasks = this.props.taskList.filter(elems => {
            return elems.key !== key;
        })
        this.props.onDeleteTask(filteredTasks)
    }

    render() {
        return (
            <div>
                <ProjectTitle title='Enter your tasks!'/>
                <SingleTask 
                tasks={this.props.taskList}
                delete={this.deleteItem}
                checkItem={this.props.onCheckTask}/>
                <Button text='Task' click={this.props.onTaskAdd}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        taskList: state.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTaskAdd: () => dispatch({type: actionTypes.MODAL_STATE}),
        onDeleteTask: (el) => dispatch({type: actionTypes.DELETE_TASK, newState: el}),
        onCheckTask: (id) => dispatch({type: actionTypes.CHECK_TASK, key: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTask);