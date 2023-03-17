import React from 'react'
import Rectangle_1 from './Images/Objectways.svg'
import Login_image_2 from './Images/Rectangle _6.svg'
import { Route, Routes, Navigate, Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import './App.css'

const LoginPage = (event) => {
  const navigate = useNavigate();
  const dis = (event) => {
    event.preventDefault()
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var email = document.getElementById("name").value;
    var pw = document.getElementById("pw").value;
    if (email === "adminOne" && pw === "admin$1999") {
      navigate("/emplist");
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Sorry!!!',
        text: 'Login failure!',

      })
    }
  }
  return (
    <div className='container login_bg'>
      {/* <div className="login_head">
        <h2 className='text-center pt-3'>Admin's Only to Login!!!</h2>
      </div> */}
      <div className='row'>
        <div className='col-6 page_center'>
          <div className='mt-5 d-flex justify-content-center flex-column'>
            
            <img className='Obw_logo_login ' src={Rectangle_1} alt="BigCo Inc. logo" />
       
            <img className='Login_image_2' src={Login_image_2} alt="BigCo Inc. logo" />
          </div>
        </div>
        <div className='col-6'>
          <div className='container input_login'>
            <div className='d-flex justify-content-center'>
              <i className="fas fa-light fa-user color"></i>
              
            </div>
            <h5 className='text-center mt-2'>LOGIN HERE</h5>
            <div>
              <form autoComplete='off' onSubmit={dis}>
                <div className='login_form'>
                  <div className='form-group mt-4 d-flex justify-content-center'>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    />
                    <div className='log_email'>
                      <TextField
                        label="AdminOne"
                        id="name"
                        size="small"
                        className='email_login'
                        type="text"
                        name='name'
                        required
                      />

                    </div>
                  </div>
                  <div className='form-group mt-4 d-flex justify-content-center'>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    />
                    <div>
                      <TextField
                        label="Password"
                        id="pw"
                        size="small"
                        className='email_login'
                        type='password'
                        name='password'

                        required
                      />
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-center'>

                </div>
                <div className='d-flex justify-content-center'>

                  <button type='submit' className='btn btn-primary mt-4 log_btn mb-3' >
                    Sign In
                  </button>

                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage