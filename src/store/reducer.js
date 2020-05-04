const initialState = {
    tasks: [],
    projects: [],

    activeProject: {
        projectVal: '',
        key: ''
    },

    currentTask: {
        taskVal: '',
        key: '',
        priority: 'low',
        checked: false
    },

    modalClicked: false
}


const reducer = (state = initialState, action) => {
    if(action.type === 'CHANGE_INPUT'){
        return {
            ...state,
            activeProject: {
                ...state.activeProject,
                projectVal: action.payload.val,
                key: action.payload.key
            }
        }
    }

    if(action.type === 'ADD_PROJECT')
    return {
        ...state,
        projects: state.projects.concat(state.activeProject)
    }

    if(action.type === 'CLICK_PROJECT'){
        return {
            ...state,
            
        }
    }

    if(action.type === 'MODAL_STATE'){
        return {
            ...state,
            modalClicked: !state.modalClicked
        }
    }

    if(action.type === 'CHANGE_INPUT_MODAL'){
        return {
            ...state,
            currentTask: {
                ...state.currentTask,
                taskVal: action.payload.val,
                key: action.payload.key
            }
        }
    }

    if(action.type === 'CHANGE_PRIORITY'){
        return {
            ...state,
            currentTask: {
                ...state.currentTask,
                priority: action.rating
            }
        }
    }

    if(action.type === 'SUBMIT_TASK'){
        return {
            ...state,
            tasks: state.tasks.concat(state.currentTask)
        }
    }

    if(action.type === 'DELETE_TASK'){
        return {
            ...state,
            tasks: action.newState
        }
    }

    if(action.type === 'CHECK_TASK'){
        return {
            ...state,
            tasks: state.tasks.map(status => status.key === action.key ?
                {key: status.key, 
                taskVal: status.taskVal,
                priority: status.priority, 
                checked: !status.checked} : status )
        }
    }

    return state;
};

export default reducer;