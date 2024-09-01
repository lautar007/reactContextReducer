import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import "./App.css";
import { useState } from 'react';
import { getUser } from './services/userService';
import { Home } from './components/Home';
import { useUser } from './contexts/UserContext';

export default function ValidationTextFields() {

  interface Login{
    user: string,
    password: string
  };

  const {setUser} = useUser();

  const[loginData, setLoginData] = useState<Login>({
    user: "", password: ""
  });
  const [itsLogin, setItsLogin] = useState<boolean>(false);

  function handleLoginData(event: any){
    if(event.target.id === "username"){
      setLoginData({
        ...loginData,
        user: event.target.value
      })
    } else if(event.target.id === "password"){
      setLoginData({
        ...loginData,
        password: event.target.value
      })
    }
  }
  
  async function handleUserFetch(){
    if(!loginData.user || !loginData.password){
      return alert("You have to provide your username and password");
    }

    const user = await getUser(loginData.user, loginData.password)
    if(!user){
      return alert("incorrect user or password")
    }
    else{
      setUser(user);
      setItsLogin(true);
    }

  }

  function handleBack(){
    setItsLogin(false)
    setLoginData({
      user: "",
      password: ""
    })
  }


  return (
    <div>
      {!itsLogin ?
        <div>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="username"
                label="Username"
                onChange={handleLoginData}
              />
            </div>

            <div>
              <TextField
                id="password"
                label="Password"
                onChange={handleLoginData}
                type='password'
              />
            </div>

            <Button variant="contained" onClick={handleUserFetch}>Login</Button>
          </Box>
        </div>
        :
        <div>
            <Home />
          <Button className='backBtn' variant="contained" onClick={handleBack}>Go Back</Button>
        </div>
      }
    </div>
  );
}
