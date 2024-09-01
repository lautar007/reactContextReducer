import { User } from "../interfaces/UserInterfaces";

export const getUser = async(username: string, password: string): Promise<User | null> =>{
    try {
        const response = await fetch('https://dummyjson.com/users');
        const parseResponse: any = await response.json();
        const {users} = parseResponse; 
        const user = users.find((us:any) =>{ return us.username === username && us.password === password});
        console.log(username, password)
        console.log(users)
        const userResult: User = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            gender: user.gender,
            image: user.image,
            age: user.age,
            birthDate: user.birthDate
        }
        return userResult;
    } catch (error) {
        console.log("No se pudo traer el usuario: " + error);
        return null
    }
}