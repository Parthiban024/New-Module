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
  const [date, datechange] = useState("");
  const [sign, signchange] = useState("");
  const [validation, valchange] = useState("");
  const [twl, twlChange] = useState("");
  const [thirteen, thirteenChange] = useState("");
  const [fourteen, fourteenChange] = useState("");
  const [twll, twllChange] = useState("");
  const [fivteen, fivteenChange] = useState("");
  const [sixteen, sixChange] = useState("");
  const [seventeen, sevenChange] = useState("");
  const [eightteen, eightChange] = useState("");
  const [nineteen, nineChange] = useState("");
  const [twenty, twentyChange] = useState("");
  const [twyone, twyoneChange] = useState("");
  const [twytwo, twytwoChange] = useState("");
  const [twythree, twythreeChange] = useState("");
  const [twyfour , twyfourChange] = useState("");
  const [twyfive, twyfiveChange] = useState("");
  const [twysix, twysixChange] = useState("");
  const [twyseven, twysevenChange] = useState("");
  const [twyeight, twyeightChange] = useState("");
  const [twynine, twynineChange] = useState("");
  const [value, setValue] = useState('Select One');
  const formRef = useRef(null);
  const handleSubmit = (e) => {  

    e.preventDefault();
    // Hide the "Submit" button from the form
    const submitButton = document.getElementById("submit");
    submitButton.style.display = "none";
    
    // Get the form data
    const empdata = { name, emppid, reviewerName, reviewerNameTwo, rateMain, commOne, commTwo, reviewPeriod, reviewPeriodTwo, selectOne, selectTwo, selectThree, selectFour, selectFive, selectSix, selectSeven, selectEight, selectNine, selectTen };
    
    // Take a screenshot of the form
    html2canvas(formRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [window.screen.width, window.screen.height]
      });
    
      // Calculate the page height based on the screen height
      const pageHeight = pdf.internal.pageSize.getHeight();
    
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
                <h5 class="ms-2 p-1 text-center" ><b>EMPLOYEE INFORMATION</b></h5>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-5">
                <div className="mt-1">
                         <span className=""><strong>Nominee Name</strong></span>
                      </div>
                  <div className="col  mt-1">
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
                <div className="mt-1">
                         <span className=""><strong>Department</strong></span>
                      </div>
                  <div className="row ">
                    <div class="mt-1">
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
                  <div className="mt-1">
                         <span className=""><strong>Nominated By</strong></span>
                      </div>
                  <div className="row ">
                    <div class="mt-1">
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
                <div className="mt-1">
                         <span className=""><strong>DATE</strong></span>
                      </div>
                  <div className="form-group d-flex justify-content-start">
               
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
                        <div className="d-flex">
                        {name.length === 0 && validation && <span className= "text-danger">Date is required</span>}
                      </div>
                    </div>
                  </div>
 
                </div>
              </div>


              <div className="row d-flex justify-content-center">
              <h5 className="text-center p-2 newHead mt-5"><b>SUPPORT OF OBJECTWAYS VALUES </b></h5>
              
              <div className="row d-flex justify-content-center">
           
                <div className="col-3">
                  <h5 class="mt-1 c-blue"><b>Leadership Area </b></h5>
                 
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
                <div className="col-3">
                  <h6 className="mt-4"><b>Behaves Consistently with values    </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="selectOne"
                        value={selectOne}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectOnechange(e.target.value)}
                        required
                      />
                  
                   
              
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="selectTwo"
                        value={selectTwo}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectTwochange(e.target.value)}
                        required
                      />
                  
                   
                 
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectThree"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectThreechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
                    
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Displays respect for others      </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="selectFour"
                        value={selectFour}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectFourchange(e.target.value)}
                        required
                      />
                  
                   
            
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="selectFive"
                        value={selectFive}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectFivechange(e.target.value)}
                        required
                      />
                  
                   
             
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
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
                          onChange={e => selectSixchange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
                    
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Is a good team player </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="selectSeven"
                        value={selectSeven}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectSevenchange(e.target.value)}
                        required
                      />
                  
                
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="selectEight"
                        value={selectEight}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectEightchange(e.target.value)}
                        required
                      />
                  
                   
              
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="selectNine"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => selectNinechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
                     
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>
              
              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Identifies with management </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="selectTen"
                        value={selectTen}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectTenchange(e.target.value)}
                        required
                      />
                  
                   
        
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="selectEleven"
                        value={selectEleven}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectElevenchange(e.target.value)}
                        required
                      />
                  
                   
               
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="commOne"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => commOnechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
                    
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

                
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
              <h5 className="text-center newHead p-2"><b>LEADERSHIP PROMISE </b></h5>
                         
              <div className="row d-flex justify-content-center">
           
                <div className="col-3">
                  <h5 class="mt-1 c-blue"><b>Leadership Area </b></h5>
                 
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
                <div className="col-3">
                  <h6 className="mt-4"><b>Is motivated to lead     </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="commTwo"
                        value={commTwo}
                        onMouseDown={e => valchange(true)}
                        onChange={e => commTwochange(e.target.value)}
                        required
                      />
                  
                   
                    
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="rateMain"
                        value={rateMain}
                        onMouseDown={e => valchange(true)}
                        onChange={e => rateMainchange(e.target.value)}
                        required
                      />
                  
                   
                 
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                          name="date"
                          // value={value}
                          onMouseDown={e => valchange(true)}
                          onChange={e => datechange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
                  
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Accepts leadership responsibility      </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="sign"
                        value={sign}
                        onMouseDown={e => valchange(true)}
                        onChange={e =>signchange(e.target.value)}
                        required
                      />
                  
              
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
               
                        required
                      />
                  
                   
             
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
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
                          onChange={e => twlChange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
                   
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Mobilizes resources/people to action      </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="thirteen"
                        value={thirteen}
                        onMouseDown={e => valchange(true)}
                        onChange={e => thirteenChange(e.target.value)}
                        required
                      />
                  
                   
                
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="fourteen"
                        value={fourteen}
                        onMouseDown={e => valchange(true)}
                        onChange={e => fourteenChange(e.target.value)}
                        required
                      />
                  
                   
               
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
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
                          onChange={e => twllChange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
      
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Leads teams that have high morale      </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="fivteen"
                        value={fivteen}
                        onMouseDown={e => valchange(true)}
                        onChange={e => fivteenChange(e.target.value)}
                        required
                      />
                  
           
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="sixteen"
                        value={sixteen}
                        onMouseDown={e => valchange(true)}
                        onChange={e => sixChange(e.target.value)}
                        required
                      />
                  
                   
         
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
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
                          onChange={e => sevenChange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
               
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

              
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
              <h5 className="text-center newHead p-2"><b>INTERPERSONAL SKILLS  </b></h5>
                         
              <div className="row d-flex justify-content-center">
           
                <div className="col-3">
                  <h5 class="mt-1 c-blue"><b>Leadership Area </b></h5>
                 
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
                <div className="col-3">
                  <h6 className="mt-4"><b>Communicates clearly and effectively     </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="eightteen"
                        value={eightteen}
                        onMouseDown={e => valchange(true)}
                        onChange={e => eightChange(e.target.value)}
                        required
                      />
                  
              
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="name"
                        value={nineteen}
                        onMouseDown={e => valchange(true)}
                        onChange={e => nineChange(e.target.value)}
                        required
                      />
                  
                   
            
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
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
                          onChange={e => twentyChange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
           
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Makes effective presentations      </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="twyone"
                        value={twyone}
                        onMouseDown={e => valchange(true)}
                        onChange={e => twyoneChange(e.target.value)}
                        required
                      />
                  
                   
            
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="twytwo"
                        value={twytwo}
                        onMouseDown={e => valchange(true)}
                        onChange={e => twytwoChange(e.target.value)}
                        required
                      />
                  
                   
              
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
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
                          onChange={e => twythreeChange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
        
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Demonstrates diplomacy   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="twyfour"
                        value={twyfour}
                        onMouseDown={e => valchange(true)}
                        onChange={e => twyfourChange(e.target.value)}
                        required
                      />
                  
                   
           
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="twyfive"
                        value={twyfive}
                        onMouseDown={e => valchange(true)}
                        onChange={e => twyfiveChange(e.target.value)}
                        required
                      />
                  
                   
        
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
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
                          onChange={e => twysixChange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
                
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Is trusted and respected    </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="twyseven"
                        value={twyseven}
                        onMouseDown={e => valchange(true)}
                        onChange={e => twysevenChange(e.target.value)}
                        required
                      />
                  
                   
              
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="twyeight"
                        value={twyeight}
                        onMouseDown={e => valchange(true)}
                        onChange={e =>twyeightChange(e.target.value)}
                        required
                      />
                  
                   
                 
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
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
                          onChange={e => twynineChange(e.target.value)}
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
                 
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-3">

              
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
              <h5 className="text-center newHead p-2"><b>DEMONSTRATION OF RESULTS  </b></h5>
                         
              <div className="row d-flex justify-content-center">
           
                <div className="col-3">
                  <h5 class="mt-1 c-blue"><b>Leadership Area </b></h5>
                 
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
                <div className="col-3">
                  
                  <h6 className="mt-4"><b>Shows positive team/unit results     </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                     
                        required
                      />
                  
                   
             
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                     
                        required
                      />
                  
           
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
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
                        
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
              
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Displays objective indicators of success      </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                   
                        required
                      />
                  
                   
              
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                   
                        required
                      />
                  
                   
                 
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                       
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
            
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Accomplishes major assignments      </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                   
                        required
                      />
                  
                   
            
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                   
                        required
                      />
                  
                   
           
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                      
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>

                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">

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
              <h5 className="text-center newHead p-2"><b>DEVELOPMENTAL ORIENTATION  </b></h5>
                         
              <div className="row d-flex justify-content-center">
           
                <div className="col-3">
                  <h5 class="mt-1 c-blue"><b>Leadership Area </b></h5>
                 
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
                <div className="col-3">
                  <h6 className="mt-4"><b>Has accurate self-insight      </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                    
                   
                        required
                      />
                  
                   

                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                     
                    
                        required
                      />
                  
                   
 
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                    
                          // value={value}
                    
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
        
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Is coachable; accepts feedback      </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                  
                   
                        required
                      />
                  
                   
       
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                       
                      
                        required
                      />
                  
                   

                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                   
                          // value={value}
                        
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
          
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Has history of learning from experience   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                      
                 
                        required
                      />
                  
                   
 
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                    
                  
                        required
                      />
                  
                   
              
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
                       
                          // value={value}
                      
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
               
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Quickly learns new tasks    </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
              
             
                        required
                      />
                  
           
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                
                 
                        required
                      />
                  
                   
            
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
              
                          // value={value}
                       
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
                        </Select>
                 
                      </FormControl>
                   
                    </div>
                  </div>

                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-3">
                  <h6 className="mt-4"><b>Self-initiates development activities   </b></h6>
                  {/* <p class="mt-2"><h6>Support of Objectways Values  </h6>
                  </p> */}
                </div>
                <div className="col-7 d-flex flex-row gap-5">
                 
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Strength"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
              
             
                        required
                      />
                  
           
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <div>
                    <div className="col  mt-1">
                    <div>
                      <TextField
                        sx={{ width: 185 }}
                       placeholder="Proficient"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                
                 
                        required
                      />
                  
                   
            
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="form-group mt-1 selectDefault d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                        {/* <InputLabel id="demo-select-small">
                          Select
                        </InputLabel> */}
                        <Select
                          sx={{ width: 180 }}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          defaultValue="Select"
                          className="email_login"
              
                          // value={value}
                       
                          required
                        >
                          
                          
                          <MenuItem value="Select">Select One</MenuItem>
                          <MenuItem value="Exceeds expectations">Yes</MenuItem>
                          <MenuItem value="Meets expectations">No</MenuItem>
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




