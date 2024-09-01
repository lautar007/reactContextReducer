import { useUser } from "../contexts/UserContext";
import { Button } from '@mui/material';
import { Tasks } from "./Tasks";
import { useState } from "react";
import "../styles/home.css";

export function Home(){

    const [showTasks, setShowTasks] = useState<boolean>(false);

    const {user} = useUser();
    console.log(user)
    console.log(user && user.firstName)


    return (
        <>
            <h1 className="wellcomeTitle">Welcome {user && user.firstName}!</h1>
            <div className="menuCont">
                <Button variant="contained" onClick={()=>{setShowTasks(!showTasks)}}>Tasks</Button>
                <Button variant="contained">Profile</Button>
            </div>
            {showTasks? <Tasks/> : null}
        </>
    )
}