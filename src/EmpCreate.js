import React, { useState, useRef } from "react";
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { display, style } from "@mui/system";
// import { win32 } from "path";

const EmpCreate = () => {

  const navigate = useNavigate();
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [emppid, emppidchange] = useState("");
  const [reviewerName, reviewerNamechange] = useState("");
  const [reviewerNameTwo, reviewerNameTwochange] = useState("");
  const [reviewPeriod, reviewPeriodchange] = useState("01/07/2021");
  const [reviewPeriodTwo, reviewPeriodtwochange] = useState("30/06/2022");
  const [selectOne, selectOnechange] = useState("");
  const [selectTwo, selectTwochange] = useState("");
  const [selectThree, selectThreechange] = useState("");
  const [selectFour, selectFourchange] = useState("");
  const [selectFive, selectFivechange] = useState("");
  const [selectSix, selectSixchange] = useState("");
  const [selectSeven, selectSevenchange] = useState("");
  const [selectEight, selectEightchange] = useState("");
  const [selectNine, selectNinechange] = useState("");
  const [selectTen, selectTenchange] = useState("");
  const [selectEleven, selectElevenchange] = useState("");
  const [commOne, commOnechange] = useState("");
  const [commTwo, commTwochange] = useState("");
  const [rateMain, rateMainchange] = useState("");
  // const [date, datechange] = useState("");
  // const [sign, signchange] = useState("");
  const [validation, valchange] = useState("");
  const [value, setValue] = useState('Select One');
  const formRef = useRef(null);
  const handleSubmit = (e) => {  

    e.preventDefault();
    // Hide the "Submit" button from the form
    // Hide the "Submit" button from the form
    const submitButton = document.getElementById("submit");
    submitButton.style.display = "none";
    
    // Get the form data
    const empdata = { name, emppid, reviewerName, reviewerNameTwo, rateMain, commOne, commTwo, reviewPeriod, reviewPeriodTwo, selectOne, selectTwo, selectThree, selectFour, selectFive, selectSix, selectSeven, selectEight, selectNine, selectTen };
    
    // Take a screenshot of the form
    html2canvas(formRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
    
      // Calculate the page height based on the aspect ratio of the screenshot image
      const pageHeight = pdf.internal.pageSize.getWidth() * canvas.height / canvas.width;
    
      // Add the screenshot image to the PDF document
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pageHeight);
    
      // Add empdata to the PDF document
      // pdf.text(JSON.stringify(empdata), 10, pageHeight + 10);
    
      // Download the PDF document
      pdf.save(`${empdata.name}.${empdata.emppid}.pdf`);
    
      // Show the "Submit" button again
      submitButton.style.display = "block";
      
    });

   }
  return (
    <form autoComplete="off" className="scroll-to" onSubmit={handleSubmit} id="scrollable-div" ref={formRef}>
      <div className="font_family">
        <div className="container px-5 bg">
          <div className="row">
  
            <div className="col  setTwo wholerow " >
              <div className="d-flex justify-content-center">
                <img src={Objectways} alt="Logo" className='logo_details mt-3 ' />
              </div>
              <h3 className="textOne d-flex justify-content-center app mt-4 emp_list_head b-heading">
              Acceleration Pool Nomination Form 

              </h3>

              <div className="form-group">
                <label className="id_display">ID</label>
                <input value={id} disabled="disabled" className="form-control id_display"></input>
              </div>

              <div className="mt-4 mx-5 heading ">
                <h5 class="ms-2 p-1 " >I. EMPLOYEE INFORMATION</h5>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-5">
                  <div className="col  mt-3">
                    <div>
                      <TextField
                        sx={{ width: 400 }}
                       placeholder="Nominee Name"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="name"
                        value={name}
                        onMouseDown={e => valchange(true)}
                        onChange={e => namechange(e.target.value)}
                        required
                      />
                  
                   
                      <div className="d-flex">
                        {name.length === 0 && validation && <span className="text-danger">Employee Name is required</span>}
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-5">
                  <div className="row ">
                    <div class="mt-3">
                      <TextField
                        sx={{ width: 400 }}
                      placeholder="Department"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="emppid"
                        value={emppid}
                        onMouseDown={e => valchange(true)}
                        onChange={e => emppidchange(e.target.value)}
                        required
                      />
                      <div>
                        {emppid.length === 0 && validation && <span className="text-danger">Employee ID is required</span>}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-5">
                  {/* <div className="form-group mt-4 d-flex justify-content-center"> */}
                  <div className="row ">
                    <div class="mt-4">
                      <TextField
                        sx={{ width: 400 }}
                        placeholder="Nominated By"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="reviewerName"
                        value={reviewerName}
                        onMouseDown={e => valchange(true)}
                        onChange={e => reviewerNamechange(e.target.value)}
                        required
                      />
                      <div>
                        {reviewerName.length === 0 && validation && <span className="text-danger">Reviewer Name is required</span>}
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-5">
                  <div className="form-group mt-4 d-flex justify-content-start">
                    <div>
                      <TextField
                        // label="Date"
                        sx={{ width: 400 }}
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="date"
                        name="reviewPeriod"
                        value={reviewPeriod}
                        onMouseDown={e => valchange(true)}
                        onChange={e => reviewPeriodchange(e.target.value)}
                        required
                      />
                      <div>
                         <span className=""><strong>DATE</strong></span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h5 class="my-3 c-blue"><b>Leadership Area </b></h5>
                  <h6><b>Support of Objectways Values  </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <h5 className="ms-5 c-blue"><b>Strength</b></h5>
                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <h5 className="ms-5 c-blue"><b>Proficient</b></h5>
                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <h5 className=" c-blue"><b>Developmental Need</b></h5>
                    </div>
                  </div>

                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Behaves Consistently with values    </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Displays respect for others    </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-3">
             
                  <h6 className="mt-4"><b>Is a good team player    </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                </div>
              </div>
              
              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Leadership Promise  </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>  
              
              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Is motivated to lead  </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Accepts Leadership responiblity   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Mobilizes resource/people to action   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Leads teams that have high morates   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Interpersonal Skills  </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                    
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                      
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Communicates clearly and effectively   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Makes effective presentations   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Demonstrates diplomacy  </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Is trusted and respected   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Demonstartion of Results  </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                      
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Shows positive team/unit results </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Displays objective indicators of success  </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Accomplishers major assignments   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Developmental Orientation  </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
              
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Has accurate self-insight   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Is Coachable; accepts feedback  </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Has history of learning from experience  </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Quickly learns new tasks  </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Self-initiates developments activities </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                  <h6 className="mt-4"><b>Identifies with management   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-roww">

                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>

                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 100 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >


                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
              


              


              <div className="row d-flex justify-content-center">
                <div className="col-5">
                  <h6><b>Reliability/Dependability:</b></h6>
                  <p class="mt-2"><h6>Consistently performs at a high
                    level; manages time and workload
                    effectively to meet responsibilities</h6>
                  </p>
                </div>
                <div className="col-5">
                  <div className="form-group mt-3 d-flex justify-content-center">
                    <div>
                    <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 250 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                </div>




              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-5">
                  <h6><b>Communication Skills:</b></h6>
                  <p class="mt-2"><h6>Written and oral communications
                    are clear, organized, and effective;
                    listens and comprehends well </h6>
                  </p>
                </div>
                <div className="col-5">
                  <div className="form-group mt-3 d-flex justify-content-center">
                    <div>
                    <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 250 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                </div>




              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-5">
                  <h6><b>Judgment & Decision-Making:</b></h6>
                  <p class="mt-2"><h6>Makes thoughtful, well-reasoned
                    decisions; exercises good judgment,
                    resourcefulness, and creativity in
                    problem-solving</h6>
                  </p>
                </div>
                <div className="col-5">
                  <div className="form-group mt-3 d-flex justify-content-center">
                    <div>
                    <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 250 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                </div>




              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-5">
                  <h6><b>Initiative & Flexibility:</b></h6>
                  <p class="mt-2"><h6>Demonstrates initiative, often
                    seeking out additional responsibility;
                    identifies problems and solutions;
                    thrives on new challenges and
                    adjusts to unexpected changes</h6>
                  </p>
                </div>
                <div className="col-5">
                  <div className="form-group mt-3 d-flex justify-content-center">
                    <div>
                    <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 250 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                </div>




              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-5">
                  <h6><b>Cooperation & Teamwork:</b></h6>
                  <p class="mt-2"><h6>Respectful of colleagues when working with others and makes valuable contributions to help the group achieve its goals</h6>
                  </p>
                </div>
                <div className="col-5">
                  <div className="form-group mt-3 d-flex justify-content-center">
                    <div>
                    <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 250 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations">Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement">Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable">Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                </div>




              </div>
         
              <div className="btn_bg">
                <div className=" pb-5 container d-flex justify-content-center">
                  <input
                    type="submit"
                    className="btn btn-primary submit"
                    value="Submit"
                    id="submit"
                  ></input>
                </div>
              </div>

            </div>
           
          </div>
        </div>
      </div>
      </form>
  );
};

export default EmpCreate;




