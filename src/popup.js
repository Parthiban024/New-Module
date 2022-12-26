import React from 'react'
import './App.css'
import { Route, Routes, Navigate, Link, useNavigate } from 'react-router-dom';
import Objectways from "./Images/Objectways.svg";
import Form_Inout from "./Images/form_input_image.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { isInteger, useFormik } from "formik";
import * as yup from "yup";
import validator from 'validator'
import $ from 'jquery'

const PopUp = () => {


  return (
    // <div className='container'>
    //   <div className='row d-flex'>
    //     <div className='col-3'></div>
    //     <div className='col-6 setTwo center text-center d-flex flex-column'>
    //       <div>
    //         <h3>Thanks for submitting!<br></br></h3>
    //         <h3 className=''>If you are admin login here!</h3>

    //       </div>
    //       <Link to='/login'>
    //         <input type='submit' className='btn btn-primary popup_btn' value='Login'></input>
    //       </Link>
    //     </div>

    //     <div className='col-3'></div>
    //   </div>
    // </div>

    <div className="popup_page">
    <div className="container-fluid mt-5 bg">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-3 setOne wholeRow">
          <div className="d-flex justify-content-center pt-3">
            <img className="obw_Logo" src={Objectways} alt="Objectways" />
          </div>
          <div className="d-flex justify-content-center">
            <img className="obw_Logo_two" src={Form_Inout} alt="Form_Inout" />
          </div>
        </div>

        <div className="col-5 setTwo text-center" >
         
        <div className='popup_text d-flex flex-column'>
        <h3 className=''>Thanks for submitting!<br></br></h3>
          <h3 className=''>Only the Admin will login here!</h3>
          <Link to='/login'>
         <input type='submit' className='btn btn-primary popup_btn' value='Login'></input>
         </Link>
         </div>
       </div>
       </div>
        </div>
        <div className="col-2"></div>
      </div>
 )
}

export default PopUp