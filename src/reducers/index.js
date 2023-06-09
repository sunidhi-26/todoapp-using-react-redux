import * as actionType from "../helpers/constants.js";

const initialState = [
    {id: 1, todo: 'Buy iphone', completed: false},
    {id: 2, todo: 'Learn new skills', completed: false},
    {id: 3, todo: 'Complete udemy course', completed: true}
]

export const reducers = (state = initialState, action) => {
    switch(action.type) {
        case actionType.ADD_TODO:
            return [...state, action.payload];
        case actionType.DELETE_ALL:
            return [];
        case actionType.REMOVE_TODO:
            const filteredTodos = state.filter((todo) => todo.id !== action.payload)
            return filteredTodos;
        case actionType.UPDATE_TODO:
            let data = action.payload;
            const updatedArray=[];
            state.map((item)=>{
                if(item.id===data.id){
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                return updatedArray.push(item);
            })
            return updatedArray;
        case actionType.UPDATE_CHECKBOX:
            let todoArray=[];
            state.map((item)=>{
                if(item.id===action.payload){
                    item.completed = !item.completed;
                }
                return todoArray.push(item);
            })
            return todoArray;
        default: return state
    }
}