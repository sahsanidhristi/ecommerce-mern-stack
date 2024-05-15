
import { Grid, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../../Redux/Auth/Action";
import { Fragment, useEffect, useState } from "react";
import register_img from "../../../images/registerimg.jpg";
import "./Registers.css";
export default function RegisterUserForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [openSnackBar,setOpenSnackBar]=useState(false);
// state management for validation of user
  const [emailError, setEmailError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const { auth } = useSelector((store) => store);
  const handleClose=()=>setOpenSnackBar(false);

  const jwt=localStorage.getItem("jwt");

useEffect(()=>{
  if(jwt){
    dispatch(getUser(jwt))
  }

},[jwt])


  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true)
  }, [auth.user]);
  

// customize validation for user
 
  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);

   
    if (value === '') {
      setFirstNameError('First Name is required');}
    else if (value.length < 3) {
      setFirstNameError('First name must be at least 3 characters long');
    } else if (!/^[a-zA-Z]+$/.test(value)) {
      setFirstNameError('First name cannot contain numbers or special characters');
    } else {
      setFirstNameError('');
    }
  };

  // validation for  last name:
  const validateLastName = (event) => {
    const value = event.target.value;
    setLastName(value);

    if (value === '') {
      setLastNameError('Last Name is required');
    } else if (!/^[a-zA-Z]+$/.test(value)) {
      setLastNameError('Last Name cannot contain numbers');
    } else if (value.length > 30) {
      setLastNameError('Last Name cannot exceed 30 characters');
    } else {
      setLastNameError('');
    }
  };

  


  // dispatch(register(userData));
  // console.log("user data", userData);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const userData={
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      
    }

    const re = /\S+@\S+\.\S+/;
  if ( ! re.test(data.get("email"))){
    setEmailError('Invalid email address');
    return 0;
  }
  setEmailError('');
    console.log("user data",userData);
    dispatch(register(userData))
  
  };

  return (
    <div className="registercontainer">
    
     <div className="registercolumn">
{/* 
      <div className="image">
        <img src={register_img}></img>
      </div> */}
      <div className="registerform">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              error={!!firstNameError} // Convert string to boolean
              helperText={firstNameError}
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
              value={lastName}
              onChange={validateLastName }
                  error={!!lastNameError}
                  helperText={lastNameError}
                  className={lastNameError ? 'invalid-field' : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email" 
              error={!!emailError} 
              helperText={emailError}
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="register-btn"
              type="submit"
              variant="contained"
              size="large"
              sx={{padding:".8rem 0"}}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

<div className="flex justify-center flex-col items-center">
     <div className="py-3 flex items-center ">
        <p className="m-0 p-0">if you have already account ?</p>
        <Button onClick={()=> navigate("/login")} className="link-url" size="small">
          Login
        </Button>
      </div>
</div>

<Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {auth.error?auth.error:auth.user?"Register Success":""}
        </Alert>
      </Snackbar>
      </div>
      </div>
    </div>
  );
}
