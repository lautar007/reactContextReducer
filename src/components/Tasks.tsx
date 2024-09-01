import { useReducer, useState } from "react"
import { Task } from "../interfaces/TaskInterface"
import { Button } from "@mui/material";
import { TasksReducer } from "../reducers/tasksReducer";
import "../styles/tasks.css";

export const Tasks = ()=>{

    const initialState: Task[] = [];

    const [task, setTask] = useState<Task>({
        title: "",
        category: "",
        complete: false
    });

    const [tasks, dispatch] = useReducer(TasksReducer, initialState)

    function handleNewTask (event: any){
        if(event.target.id === "addInput"){
            setTask({
                ...task,
                title: event.target.value
            })
        } else {
            setTask({
                ...task,
                category: event.target.value
            })
        }
    }
    
    function handleTasks(event: any){
        if(event.target.role === "addBtn"){
            if(!task.title || !task.category){
                return alert("You must select Title and Category for the new task")
            } else {
                dispatch({type: "ADD_TASK", payload: {task, title: ""}})
            }
        }
        else if(event.target.role === "deleteBtn"){
            dispatch({type: "REMOVE_TASK", payload: {task, title: event.target.name}})
        }
        else console.log("Not action was dispatched")
    }

    console.log(tasks)

    return(
        <div className="tasksContent">
            <h2>Tasks List</h2>
            <div className="addCont">
                <h4>Add a new task:</h4>
                <div className="addForm">
                    <input id="addInput" type="text" placeholder="What do you have to do?" onChange={handleNewTask}/>
                    <select id="addSelect" onChange={handleNewTask}>
                        <option>Select Category</option>
                        <option>BackEnd</option>
                        <option>FrontEnd</option>
                        <option>UX-UI</option>
                        <option>DevOps</option>
                        <option>Proyect</option>
                    </select>
                </div>
                <Button id="addBtn" variant="contained" role="addBtn" onClick={handleTasks}>ADD</Button>
            </div>
            <div id="list">
                {tasks? tasks.map(task =>{
                    return(
                        <div className="taskCont">
                            <h4 className="task-title">{task.title}</h4>
                            <p className="task-category">Category: {task.category}</p>
                            {!task.complete? 
                            <p>Status: incomplete</p>
                            :
                            <p>Status: complete</p>
                            }
                            <button role="deleteBtn" name={task.title} onClick={handleTasks}>Delete</button>
                        </div>
                    )
                })
                : 
                <p>No tasks yet...</p>
            }
            </div>
        </div>
    )
}