

export const TodoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        case 'toggle': 
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }else {
                    return todo;
                }
               
            });
        

        case 'clearall':
            return [];

        case 'clearcompleted':
            return state.filter(todo => !todo.completed);


        default:
            return state;
    }
    
}