import { Box, Button, TextField, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { useState } from "react";
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const[inputs,setInputs]=useState({
    name:"", email:"" ,age:""
  })
 function handleChange(e){
   setInputs((prevState)=>({
     ...prevState,
     [e.target.name] : e.target.value
   }))
 }
 function handleSubmit(e){
   e.preventDefault()
   console.log(inputs)
 }
const reset = ()=>{
  setIsSignUp(!isSignUp)
  setInputs({name:'',email:'',age:''})
}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          justifyContent="center"
          alignItems="center"
          m="auto"
          p={1.5}
          borderRadius={2}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc"
            }
          }}
        >
          { isSignUp === false ? (
            <Typography variant="h5" p={2}>
              Login
            </Typography>
          ) : (
            <Typography variant="h5" p={2}>
              SIGN UP
            </Typography>
          )}
          <TextField name="name" value={inputs.name}label="name" margin="normal" onChange={handleChange}/>
          <TextField name="email" value={inputs.email} label="email" margin="normal" onChange={handleChange}/>
          {isSignUp===false && <TextField name="age" value={inputs.age} label="age" margin="normal" onChange={handleChange}/>}
          <Button variant="contained" color="warning" type="submit" 
          endIcon={isSignUp ? <SubscriptionsIcon />: <LoginIcon/>}
          >
          
          {isSignUp ? 'SIGNUP' : 'Login'}
          </Button>
          <Button onClick={reset}>
            {isSignUp ? 'Login'  : "SignUp"}</Button>
        </Box>
        <div>{inputs.name}</div>
      </form>
    </>
  );
};
export default Login;