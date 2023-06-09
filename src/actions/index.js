import * as actionType from "./../helpers/constants";

export const addTodo = (payload) => (dispatch) => {
    dispatch({
        type: actionType.ADD_TODO,
        payload
    })
}

export const deleteAll = () => (dispatch) => {
    dispatch({
        type: actionType.DELETE_ALL
    })
}

export const removeTodo = (payload) => (dispatch) => {
    dispatch({
        type: actionType.REMOVE_TODO,
        payload
    })
}

export const handleEditSubmit = (payload) => (dispatch) => {
    dispatch({
        type: actionType.UPDATE_TODO,
        payload
    })
}

export const handleCheckbox = (payload) => (dispatch) => {
    dispatch({
        type: actionType.UPDATE_CHECKBOX,
        payload
    })
}                     