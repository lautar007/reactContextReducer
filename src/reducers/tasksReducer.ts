import { Task } from "../interfaces/TaskInterface";

type Action = {
    type: string,
    payload: {
        task: Task,
        title: string
    }
}

export const TasksReducer = (state:Task[], action:Action): Task[] =>{
    const task = action.payload;
    console.log(task)
    switch (action.type) {

        case "ADD_TASK":  
            console.log(task)
            return [...state, action.payload.task];

        case 'REMOVE_TASK':
        return state.filter(task => task.title !== action.payload.title);
    
        default:
            return state;
    }
}