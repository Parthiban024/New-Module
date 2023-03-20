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

const EmpCreate = () => {

  const navigate = useNavigate();
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [emppid, emppidchange] = useState("");
  const [reviewerName, reviewerNamechange] = useState("");
  const [reviewerNameTwo, reviewerNameTwochange] = useState("");
  const [reviewPeriod, reviewPeriodchange] = useState("01/06/2021");
  const [reviewPeriodTwo, reviewPeriodtwochange] = useState("30/07/2022");
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
        <div className="container px-5 mt-5 bg">
          <div className="row">
  
            <div className="col  setTwo wholerow " >
              <div className="d-flex justify-content-center">
                <img src={Objectways} alt="Logo" className='logo_details mt-3 ' />
              </div>
              <h3 className="textOne d-flex justify-content-center app mt-4 emp_list_head b-heading">
                ANNUAL APPRAISAL FORM

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
                       placeholder="Employee Name"
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
                      placeholder="Employee ID"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="number"
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
                        placeholder="Reviewer Name"
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
                        sx={{ width: 200 }}
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="reviewPeriod"
                        value={reviewPeriod}
                        onMouseDown={e => valchange(true)}
                        onChange={e => reviewPeriodchange(e.target.value)}
                        required
                      />
                      <div>
                         <span className=""><strong>START DATE</strong></span>
                      </div>
                    </div>
                    <div class="ms-2">
                      <TextField
                        // label="Date"
                        sx={{ width: 200 }}
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="reviewPeriodTwo"
                        value={reviewPeriodTwo}
                        onMouseDown={e => valchange(true)}
                        onChange={e => reviewPeriodtwochange(e.target.value)}
                        required
                      />
                      <div>
                        <span className=""><strong>END DATE</strong></span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


              <div className="mt-4 mx-5  heading ">
                <h5 class="ms-2 p-1">II. CORE VALUES AND OBJECTIVES</h5>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-5">
                  <h5 class="my-3 c-blue"><b>PERFORMANCE CATEGORY</b></h5>
                  <h6><b>Quality of Work:</b></h6>
                  <p class="mt-2"><h6>Work is completed accurately (few
                    or no errors), efficiently and within
                    deadlines with minimal supervision</h6>
                  </p>
                </div>
                <div className="col-5">
                  <h5 className="text-center my-3 c-blue"><b>RATING</b></h5>
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
                  <h6><b>Attendance & Punctuality:</b></h6>
                  <p class="mt-2"><h6>Reports for work on time, provides
                    advance notice of need for absence</h6>
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
              {/* <div className="mt-4">
                   <h5>III. JOB-SPECIFIC PERFORMANCE CRITERIA</h5>
            </div> */}

              <div className="mt-4 mx-5 heading ">
                <h5 class="ms-2 p-1">III. JOB-SPECIFIC PERFORMANCE CRITERIA</h5>
              </div>


              <div className="row d-flex justify-content-center">

                <div className="col-5">
                  {/* <h5>Performance Category</h5> */}
                  <h5 class="my-3 c-blue"><b>PERFORMANCE CATEGORY</b></h5>
                  <h6><b>Knowledge of Position:</b></h6>
                  <p class="mt-2"><h6>Possesses required skills,
                    knowledge, and abilities to
                    competently perform the job</h6>
                  </p>
                </div>
                <div className="col-5">
                  {/* <h5 class="my-3 c-blue">Performance Category</h5> */}
                  <h5 className="text-center my-3 c-blue"><b>RATING</b></h5>
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
                  <h6><b>Training & Development:</b></h6>
                  <p class="mt-2"><h6>Continually seeks ways to
                    strengthen performance and
                    regularly monitors new
                    developments in field of work</h6>
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

              <div className="mt-4 mx-5 heading ">
                <h5 class="ms-2 p-1 ">IV. OVERALL RATING</h5>
              </div>


              <div className="row d-flex justify-content-center">
                <div className="col-11">
                  <div class=" row my-3 ms-5"><div class="col-3"><b>(A) EXCEEDS EXPECTATIONS</b></div><div class="col-9">(Employee consistently performs at a high level that exceeds expectations)</div></div>
                  <div class="row my-3 mt-2 ms-5"><div div class="col-3"><b>(B) MEETS EXPECTATIONS</b></div><div class="col-9">(Employee satisfies all essential job requirements;may exceed expectations periodically; demonstrates likelihood of eventually exceeding expectations)</div></div>
                  <div class="row my-3 ms-5"><div div class="col-3"><b>(C) NEEDS EXPECTATIONS</b> </div><div class="col-9">(Employee consistently performs below required standards/expectations for the position; training or other action is necessary to correct performance)</div></div>
                  <div class="row my-3 ms-5"><div div class="col-3"><b>(D) UNACCEPTABLE </b></div><div class="col-9">(Employee is unable or unwilling to perform required duties according to company standards;immediate improvement must be demonstrated)</div></div>
                </div>
              </div>


              <div className="row d-flex justify-content-center">
                <div className="col-5">
                </div>
                <div className="col-5">
                  <div className="form-group mt-3 d-flex justify-content-center">
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                     
                        <Select
                           sx={{ width: 400 }}
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
                          <MenuItem value="Exceeds expectations"><b>(A)</b>Exceeds expectations</MenuItem>
                          <MenuItem value="Meets expectations"><b>(B)</b>Meets expectations</MenuItem>
                          <MenuItem value="Needs improvement"><b>(C)</b>Needs improvement</MenuItem>
                          <MenuItem value="Unacceptable"><b>(D)</b>Unacceptable</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                </div>
              </div>

              <div class="mb-3  mx-5 ">
                <label for="exampleFormControlTextarea1" class="form-label"><h5>Comment on the employee's overall performance:</h5></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                  name="commOne"
                  value={commOne}
                  onMouseDown={e => valchange(true)}
                  onChange={e => commOnechange(e.target.value)}
                ></textarea>
              </div>

              <div className="mt-5 mx-5  heading">
                <h5 class="ms-2   p-1">V. REVIEWER COMMENTS (optional)</h5>
              </div>
              <div class="mx-5 mt-3">
                <textarea class="form-control  " id="exampleFormControlTextarea1" rows="3"
                  name="commTwo"
                  value={commTwo}
                  onMouseDown={e => valchange(true)}
                  onChange={e => commTwochange(e.target.value)}
                ></textarea></div>
              {/* </div> */}

              <div className="mt-5 mx-5 heading ">
                <h5 class="ms-2 p-1 " >VI. ACKNOWLEDGEMENT</h5>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-5">
                  <div className="form-group mt-3 d-flex">
                    <div>
                    <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                     
                        <Select
                           sx={{ width: 400 }}
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
                          <MenuItem value="Exceeds expectations"><b>(A)</b></MenuItem>
                          <MenuItem value="Meets expectations"><b>(B)</b></MenuItem>
                          <MenuItem value="Needs improvement"><b>(C)</b></MenuItem>
                          <MenuItem value="Unacceptable"><b>(D)</b></MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                </div>
                <div className="col-5">
                  <div className="col  mt-4">
                    <div>
                      <TextField
                        sx={{ width: 400 }}
                       placeholder="Reviewer Name"
                        id="outlined-size-small"
                        size="small"
                        className="email_login"
                        type="text"
                        name="reviewerNameTwo"
                        value={reviewerNameTwo}
                        onMouseDown={e => valchange(true)}
                        onChange={e => reviewerNameTwochange(e.target.value)}
                        required
                      />
                    
                   
                      <div className="d-flex">
                        {reviewerName.length === 0 && validation && <span className="text-danger">Reviewer Name is required</span>}
                      </div>
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




