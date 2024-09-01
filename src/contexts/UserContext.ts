import { createContext, useContext} from "react";
import { User } from "../interfaces/UserInterfaces";

type UserContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  };  

export const UserContext = createContext<UserContextType | null>(null);

//Custom Hook:
export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUser must be used inside UserProvider');
    }
    return context;
  };
