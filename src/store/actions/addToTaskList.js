import * as actionTypes from './actions';

export const changeInputModal = (payload) => {
    return {
        type: actionTypes.CHANGE_INPUT_MODAL,
        inputVal: payload.val,
        key: payload.key
    };
}