import { UserContext } from "../contexts/UserContext";
import { useState, ReactNode } from "react";
import { User } from "../interfaces/UserInterfaces";

export const UserProvider: React.FC<{children: ReactNode}> = ({children}) =>{

    const [user, setUser] = useState<User | null>(null);

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}