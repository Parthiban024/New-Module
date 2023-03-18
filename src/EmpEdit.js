import React from 'react'
import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react'
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
import { useFormik } from "formik";
import * as yup from "yup";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const EmpEdit = () => {
  const{ empid }=useParams();
 
  // const [empdata,empdatachange]=useState({})
  useEffect(()=> {
    fetch("http://localhost:8000/employee/"+empid).then((res) => {
      return res.json();
    }).then((resp) => {
      idchange(resp.id);
      namechange(resp.name);
      emppidchange(resp.emppid);
      reviewerNamechange(resp.reviewerName);
      reviewPeriodchange(resp.reviewPeriod);
      reviewPeriodtwochange(resp.reviewPeriodTwo);
      selectOnechange(resp.selectOne);
      selectTwochange(resp.selectTwo);
      selectThreechange(resp.selectThree);
      selectFourchange(resp.selectFour);
      selectFivechange(resp.selectFive);
      selectSixchange(resp.selectSix);
      selectSevenchange(resp.selectSeven);
      selectEightchange(resp.selectEight);
      selectNinechange(resp.selectNine);
      selectTenchange(resp.selectTen);
      commOnechange(resp.commOne);
      commTwochange(resp.commTwo);
      commThreechange(resp.commThree);
      placechange(resp.place);
      datechange(resp.date);
      signchange(resp.sign);
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])

  const navigate=useNavigate();

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [emppid, emppidchange] = useState("");
  const [reviewerName, reviewerNamechange] = useState("");
  const [reviewPeriod, reviewPeriodchange] = useState("");
  const [reviewPeriodTwo, reviewPeriodtwochange] = useState("");
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
  const [commOne, commOnechange] = useState("");
  const [commTwo, commTwochange] = useState("");
  const [commThree, commThreechange] = useState("");
  const [place, placechange] = useState("");
  const [date, datechange] = useState("");
  const [sign, signchange] = useState("");
  const [validation, valchange] = useState("");


const handleSubmit =(e)=> {
e.preventDefault();
const empdata = { name, emppid, reviewerName,commOne, commTwo,commThree, reviewPeriod, reviewPeriodTwo, selectOne, selectTwo, selectThree, selectFour, selectFive, selectSix, selectSeven, selectEight, selectNine, selectTen, place, date, sign };

// console.log({id,name,email,phone})
fetch("http://localhost:8000/employee/"+empid,{
method:"PUT",
headers:{"content-type":"application/json"},
body:JSON.stringify(empdata)
}).then((res)=>{
  Swal.fire(
    'Data Saved!',
    'You clicked the button!',
    'success'
  )
navigate('/emplist');
}).catch((err)=>{
  console.log(err.message)
})

}
  return (
    <div className="font_family">
    <div className="container px-5 mt-5 bg">
      <div className="row">

        {/* <div className="col-3 setOne wholeRow">
        <div className="d-flex justify-content-center pt-3">
          <img className="obw_logo Animate_2" src={Objectways} alt="Objectways" />
        </div>
        <div className="d-flex justify-content-center">
          <img className="obw_logo_two Animate_2" src={Form_Inout} alt="Form_Inout" />
        </div>
      </div> */}

        <div className="col  setTwo wholerow" >
          <p className="textOne d-flex justify-content-center app mt-2 emp_list_head ">
            Annual Appraisal Form

          </p>

          <div className="form-group">
            <label className="id_display">ID</label>
            <input value={id} disabled="disabled" className="form-control id_display"></input>
          </div>
          <form autoComplete="off" className="scroll-to" onSubmit={handleSubmit} id="scrollable-div">
            <div className="mt-4 mx-5 p-1 heading ">
              <h5 class="ms-2 pt-2 " >I. EMPLOYEE INFORMATION</h5>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-5">
                {/* <div className="form-group mt-4 d-flex justify-content-center"> */}
                <div className="col  mt-3">
                  {/* <div className="col-5"> */}
                  {/* <h4 class="mt-2  ">Employee Name :</h4> */}
                  <div>
                    {/* <label class="lsize">Employee Name :</label> */}

                    <TextField
                      sx={{ width: 400 }}
                      label="Employee Name"
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
                {/* <div className="form-group mt-4 d-flex justify-content-center"> */}
                <div className="row ">
                  <div class="mt-3">
                    {/* <h4 class=" mt-2 ">Employee ID</h4> */}
                    <TextField
                      sx={{ width: 400 }}
                      label="Employee ID"
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
                  {/* <h4 class="  ">Reviewer Name</h4> */}

                  <div class="mt-4">
                    <TextField
                      sx={{ width: 400 }}
                      label="Reviewer Name"
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
                {/* <div className="form-group mt-4 d-flex justify-content-center"> */}
                <div className="row ">
                  {/* <h4 class="mt-2  ">Review Period</h4> */}

                  <div class="mt-4">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker']}>
      <DatePicker label="Basic date picker" 
        value={reviewPeriod}
        onMouseDown={e => valchange(true)}
        onChange={e => reviewPeriodchange(e.target.value)}
        required/>
    </DemoContainer>
  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker']}>
      <DatePicker label="Basic date picker" 
        value={reviewPeriodTwo}
        onMouseDown={e => valchange(true)}
        onChange={e => reviewPeriodtwochange(e.target.value)}
        required/>
    </DemoContainer>
  </LocalizationProvider>

                    <div>
                      {reviewPeriod.length === 0 && validation && <span className="text-danger">Review Period is required</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 mx-5 p-1  heading ">
              <h5 class="ms-2 pt-2">II. CORE VALUES AND OBJECTIVES</h5>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <h5 class="my-3 c-blue">Performance Category</h5>
                <h6><b>Quality of Work:</b></h6>
                <p class="mt-2"><h6>Work is completed accurately (few
                  or no errors), efficiently and within
                  deadlines with minimal supervision</h6>
                </p>
              </div>
              <div className="col-5">
                <h5 className="text-center my-3 c-blue">Rating</h5>
                <div className="form-group mt-3 d-flex justify-content-center">
                  <div>
                    <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                      <InputLabel id="demo-select-small">
                      Select
                      </InputLabel>
                      <Select
                        sx={{ width: 250 }}

                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Select"
                        className="email_login"
                        name="selectOne"
                        value={selectOne}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectOnechange(e.target.value)}
                        required
                      >
                        <MenuItem value="">
                        </MenuItem>
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
                      <InputLabel id="demo-select-small">
                      Select
                      </InputLabel>
                      <Select
                        sx={{ width: 250 }}
                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Select"
                        className="email_login"
                        name="selectTwo"
                        value={selectTwo}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectTwochange(e.target.value)}
                        required
                      >
                        <MenuItem value="">
                        </MenuItem>
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
                      <InputLabel id="demo-select-small">
                        Select
                      </InputLabel>
                      <Select
                        sx={{ width: 250 }}

                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Select"
                        className="email_login"
                        name="selectThree"
                        value={selectThree}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectThreechange(e.target.value)}
                        required
                      >
                        <MenuItem value="">
                        </MenuItem>
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
                      <InputLabel id="demo-select-small">
                        Select
                      </InputLabel>
                      <Select
                        sx={{ width: 250 }}

                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Select"
                        className="email_login"
                        name="selectFour"
                        value={selectFour}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectFourchange(e.target.value)}
                        required
                      >
                        <MenuItem value="">
                        </MenuItem>
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
                      <InputLabel id="demo-select-small">
                      Select
                      </InputLabel>
                      <Select
                        sx={{ width: 250 }}

                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Select"
                        className="email_login"
                        name="selectFive"
                        value={selectFive}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectFivechange(e.target.value)}
                        required
                      >
                        <MenuItem value="">
                        </MenuItem>
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
                      <InputLabel id="demo-select-small">
                       Select
                      </InputLabel>
                      <Select
                        sx={{ width: 250 }}

                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Select"
                        className="email_login"
                        name="selectSix"
                        value={selectSix}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectSixchange(e.target.value)}
                        required
                      >
                        <MenuItem value="">
                        </MenuItem>
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
                      <InputLabel id="demo-select-small">
                      Select
                      </InputLabel>
                      <Select
                        sx={{ width: 250 }}

                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Select"
                        className="email_login"
                        name="selectSeven"
                        value={selectSeven}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectSevenchange(e.target.value)}
                        required
                      >
                        <MenuItem value="">
                        </MenuItem>
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

            <div className="mt-4 mx-5 p-1  heading ">
              <h5 class="ms-2 pt-2">III. JOB-SPECIFIC PERFORMANCE CRITERIA</h5>
            </div>


            <div className="row d-flex justify-content-center">

              <div className="col-5">
                {/* <h5>Performance Category</h5> */}
                <h5 class="my-3 c-blue">Performance Category</h5>
                <h6><b>Knowledge of Position:</b></h6>
                <p class="mt-2"><h6>Possesses required skills,
                  knowledge, and abilities to
                  competently perform the job</h6>
                </p>
              </div>
              <div className="col-5">
                {/* <h5 class="my-3 c-blue">Performance Category</h5> */}
                <h5 className="text-center my-3 c-blue">Rating</h5>
                <div className="form-group mt-3 d-flex justify-content-center">

                  <div>
                    <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                      <InputLabel id="demo-select-small">
                      Select
                      </InputLabel>
                      <Select
                        sx={{ width: 250 }}

                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Select"
                        className="email_login"
                        name="selectEight"
                        value={selectEight}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectEightchange(e.target.value)}
                        required
                      >
                        <MenuItem value="">
                        </MenuItem>
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
                      <InputLabel id="demo-select-small">
                        Rating
                      </InputLabel>
                      <Select
                        sx={{ width: 250 }}

                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Select"
                        className="email_login"
                        name="selectNine"
                        value={selectNine}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectNinechange(e.target.value)}
                        required
                      >
                        <MenuItem value="">
                        </MenuItem>
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

            <div className="mt-4 mx-5 p-1  heading ">
              <h5 class="ms-2 pt-2">IV. OVERALL RATING</h5>
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
                      <InputLabel id="demo-select-small">
                        Your Rating
                      </InputLabel>
                      <Select
                        sx={{ width: 250 }}

                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Select"
                        className="email_login"
                        name="selectTen"
                        value={selectTen}
                        onMouseDown={e => valchange(true)}
                        onChange={e => selectTenchange(e.target.value)}
                        required
                      >
                        <MenuItem value="">
                        </MenuItem>
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

            <div className="mt-4 mx-5 p-1 heading">
              <h5>V. REVIEWER COMMENTS(optional)</h5>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
               name="commTwo"
               value={commTwo}
               onMouseDown={e => valchange(true)}
               onChange={e => commTwochange(e.target.value)}
               ></textarea>
            </div>

            <div className="mt-4 mx-5 p-1 heading ">
              <h5 >VI. ACKNOWLEDGEMENT</h5>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
              name="commThree"
              value={commThree}
              onMouseDown={e => valchange(true)}
              onChange={e => commThreechange(e.target.value)}
              ></textarea>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-3 me-1">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Place"
                      id="outlined-size-small"
                      size="small"
                      className="email_login margin"
                      type="text"
                      name="place"
                      value={place}
                      onMouseDown={e => valchange(true)}
                      onChange={e => placechange(e.target.value)}
                      required
                    />
                    <div>
                      {place.length === 0 && validation && <span className="text-danger">Required</span>}
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-3 me-1 ms-2">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Date"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="date"
                      name="date"
                      value={date}
                      onMouseDown={e => valchange(true)}
                      onChange={e => datechange(e.target.value)}
                      required
                    />
                    <div>
                      {date.length === 0 && validation && <span className="text-danger">Required</span>}
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-3 ms-2">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Sign"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="sign"
                      value={sign}
                      onMouseDown={e => valchange(true)}
                      onChange={e => signchange(e.target.value)}
                      required
                    />
                    <div>
                      {sign.length === 0 && validation && <span className="text-danger">Required</span>}
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
                    value="Save"
                  ></input>
                </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>

  )
}

export default EmpEdit