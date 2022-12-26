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


const EmpEdit = () => {
  const{ empid }=useParams();
 
  // const [empdata,empdatachange]=useState({})
  useEffect(()=> {
    fetch("http://localhost:8000/employee/"+empid).then((res) => {
      return res.json();
    }).then((resp) => {
      idchange(resp.id);
      namechange(resp.name);
      lastnamechange(resp.lastname);
      emailchange(resp.email);
      birthdaychange(resp.birthday);
      genderchange(resp.gender);
      bloodgroupchange(resp.bloodgroup);
      pannochange(resp.panno);
      aadharnochange(resp.aadharno);
      personalcontactnochange(resp.personalcontactno);
      emergencycontactnochange(resp.emergencycontactno);
      presentaddresschange(resp.presentaddress);
      permanentaddresschange(resp.permanentaddress);
      passedoutyearchange(resp.passedoutyear);
      graduatechange(resp.graduate);
      degreechange(resp.degree);
      agechange(resp.age);
      companynamechange(resp.companyname);
      noofyearsexperiencechange(resp.noofyearsexperience);
      designationchange(resp.designation);
      currentctcchange(resp.currentctc);
      pfnochange(resp.pfno);
      esinochange(resp.pfno);
      emppidchange(resp.emppid);
      nameofemployeechange(resp.nameofemployee);
      placechange(resp.place);
      datechange(resp.date);
      signchange(resp.sign);
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])

  const navigate=useNavigate();

  const[id,idchange ]=useState("");
  const [name, namechange] =useState("");
  const [lastname, lastnamechange] =useState("");
  const[email,emailchange] =useState("");
  const[birthday,birthdaychange] =useState("");
  const[gender,genderchange] =useState("");
  const[bloodgroup,bloodgroupchange] =useState("");
  const[panno,pannochange] =useState("");
  const [aadharno, aadharnochange] =useState("");
  const [personalcontactno, personalcontactnochange] =useState("");
  const [emergencycontactno, emergencycontactnochange] =useState("");
  const [presentaddress, presentaddresschange] =useState("");
  const [permanentaddress, permanentaddresschange] =useState("");
  const [passedoutyear, passedoutyearchange] =useState("");
  const [graduate, graduatechange] = useState("");
  const [degree, degreechange] =useState("");
  const [age, agechange] =useState("");
  const [companyname, companynamechange] =useState("");
  const [noofyearsexperience, noofyearsexperiencechange] =useState("");
  const [designation, designationchange] =useState("");
  const [currentctc, currentctcchange] =useState("");
  const [pfno, pfnochange] =useState("");
  const [esino, esinochange] =useState("");
  const [emppid, emppidchange] =useState("");
  const [nameofemployee, nameofemployeechange] =useState("");
  const [place, placechange] =useState("");
  const [date, datechange] =useState("");
  const [sign, signchange] =useState("");
  const [validation, valchange] =useState("");
const handleSubmit =(e)=> {
e.preventDefault();
const empdata={name,lastname,email,birthday,gender,bloodgroup,panno,aadharno,personalcontactno,emergencycontactno,presentaddress,permanentaddress,graduate,passedoutyear,degree,age,companyname,noofyearsexperience,designation,currentctc,pfno,esino,emppid,nameofemployee,place,date,sign};

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
    <div className="container-fluid mt-5 bg">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-3 setOne wholeRow">
          <div className="d-flex justify-content-center pt-3">
            <img className="obw_logo Animate_2" src={Objectways} alt="Objectways" />
          </div>
          <div className="d-flex justify-content-center">
            <img className="obw_logo_two Animate_2" src={Form_Inout} alt="Form_Inout" />
          </div>
        </div>

        <div className="col-5 setTwo wholerow" >
          <p className="textOne d-flex justify-content-center app mt-2 emp_list_head Animate_one">
            APPLICATION FORM
          </p>
          <div className="form-group">
            <label className="id_display">ID</label>
            <input value={id} disabled="disabled" className="form-control id_display"></input>
          </div>
          <form autoComplete="off" className="scroll-to" onSubmit={handleSubmit}  id="scrollable-div">
            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="First Name"
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
                      {name.length === 0 && validation && <span className="text-danger">Name is required</span>}
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Last Name"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="lastname"
                      value={lastname}
                      onMouseDown={e => valchange(true)}
                      onChange={e => lastnamechange(e.target.value)}
                      required
                    />
                    <div>
                      {lastname.length === 0 && validation && <span className="text-danger">LastName is required</span>}
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Email"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="email"
                      name="email"
                      value={email}
                      onMouseDown={e => valchange(true)}
                      onChange={e => emailchange(e.target.value)}
                      required
                    />
                    <div>
                      {email.length === 0 && validation && <span className="text-danger">Email is required</span>}
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Birthday"
                      id="outlined-size-small"
                      inputFormat="MM/DD/YYYY"
                      size="small"
                      className="email_login"
                      type="text"
                      name="birthday"
                      value={birthday}
                      onMouseDown={e => valchange(true)}
                      onChange={e => birthdaychange(e.target.value)}
                      required
                    />
                    <div>
                      {birthday.length === 0 && validation && <span className="text-danger">Birthday is required</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
                {/* <div className='form-group'>
<div className='d-flex justify-content-center'>
 <label className='mt-4 gender'>Gender : &nbsp;</label>
 <div className="planSwitch email_login mt-4">
    
<input 
type="radio" 
name="Gender" 
id="monthly" 

/> 
<label htmlFor="monthly">&nbsp;&nbsp;&nbsp;Male</label>
<input 
type="radio" 
name="Gender" 
id="quarterly" 

/>
<label htmlFor="quarterly">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Female</label>
<div className="indicator"></div>
</div>

</div>
 </div> */}


            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <div className="form-group mt-3 d-flex justify-content-center">
                  <div>
                  <FormControl sx={{ m: 1.2, minWidth: 210 }} size="small">
                    <InputLabel id="demo-select-small">Gender</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      label="Gender"
                      className="email_login"
                      name="gender"
                      value={gender}
                      onMouseDown={e => valchange(true)}
                      onChange={e => genderchange(e.target.value)}
                      required
                    >
                    <div>
                      {gender.length === 0 && validation && <span className="text-danger">Gender is required</span>}
                    </div>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="male">male</MenuItem>
                      <MenuItem value="female">female</MenuItem>
                    </Select>
                  </FormControl>
                  </div>
                </div>

              </div>
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                  <TextField
                      label="Blood Group"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="bloodgroup"
                      value={bloodgroup}
                      onMouseDown={e => valchange(true)}
                      onChange={e => bloodgroupchange(e.target.value)}
                      required
                    />
                    <div>
                      {bloodgroup.length === 0 && validation && <span className="text-danger">Blood Group is required</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="PAN NO"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="panno"
                      value={panno}
                      onMouseDown={e => valchange(true)}
                      onChange={e => pannochange(e.target.value)}
                      required
                    />
                    <div>
                      {panno.length === 0 && validation && <span className="text-danger">PAN NO is required</span>}
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="AADHAR NO"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="aadharno"
                      value={aadharno}
                      onMouseDown={e => valchange(true)}
                      onChange={e => aadharnochange(e.target.value)}
                      required
                    />
                    <div>
                      {aadharno.length === 0 && validation && <span className="text-danger">AADHAR NO is required</span>}
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Personal contact NO"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="personalcontactno"
                      value={personalcontactno}
                      onMouseDown={e => valchange(Number)}
                      onChange={e => personalcontactnochange(e.target.value)}
                      required
                    />
                    <div>
                      {personalcontactno.length <=9  && validation && <span className="text-danger">Enter a 10 digit No</span>}
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Emergency contact NO"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="emergencycontactno"
                      value={emergencycontactno}
                      onMouseDown={e => valchange(Number)}
                      onChange={e => emergencycontactnochange(e.target.value)}
                      required
                    />
                    <div>
                      {emergencycontactno.length <=9  && validation && <span className="text-danger">Enter a 10 digit No</span>}
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div className="textarea">
                    <TextField
                      label="Present Address"
                      id="outlined-multiline-static"
                      size="small"
                      multiline
                      rows={5}
                      className="email_login textarea"
                      type="text"
                      name="presentaddress"
                      value={presentaddress}
                      onMouseDown={e => valchange(true)}
                      onChange={e => presentaddresschange(e.target.value)}
                      required
                    />
                    <div>
                      {presentaddress.length === 0 && validation && <span className="text-danger">Required</span>}
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Permanent Address"
                      id="outlined-multiline-static"
                      size="small"
                      multiline
                      rows={5}
                      className="email_login textarea"
                      type="text"
                      name="permanentaddress"
                      value={permanentaddress}
                      onMouseDown={e => valchange(true)}
                      onChange={e => permanentaddresschange(e.target.value)}
                      required
                    />
                    <div>
                      {permanentaddress.length === 0 && validation && <span className="text-danger">Required</span>}
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <div className="form-group mt-3 d-flex justify-content-center">
                  <div>
                  <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                  <InputLabel id="demo-select-small">
                    Graduate
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    label="Graduate"
                    className="email_login"
                    name="passedoutyear"
                    value={graduate}
                    onMouseDown={e => valchange(true)}
                    onChange={e => graduatechange(e.target.value)}
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="UG">UG</MenuItem>
                    <MenuItem value="PG">PG</MenuItem>
                  </Select>
                </FormControl>
                  </div>
                </div>

              </div>
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                  <TextField
                      label="Degree"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="degree"
                      value={degree}
                      onMouseDown={e => valchange(true)}
                      onChange={e => degreechange(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>



            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Age"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="age"
                      value={age}
                      onMouseDown={e => valchange(true)}
                      onChange={e => agechange(e.target.value)}
               
                    />
                    <div>
                      {age.length === 0 && validation && <span className="text-danger">Required</span>}
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-5">
                <div className="form-group mt-3 d-flex justify-content-center">
                  <div>
                    <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                      <InputLabel id="demo-select-small">
                        Passed Out Year
                      </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Passed Out Year"
                        className="email_login"
                        name="passedoutyear"
                        value={passedoutyear}
                        onMouseDown={e => valchange(true)}
                        onChange={e => passedoutyearchange(e.target.value)}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={2019}>2019</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2023}>2023</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <p className="textTwo d-flex justify-content-center mt-4 Animate_one">
              EXPERIENCE
            </p>
            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Company Name"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="companyname"
                      value={companyname}
                      onMouseDown={e => valchange(true)}
                      onChange={e => companynamechange(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="form-group mt-3 d-flex justify-content-center">
                  <div>
                    <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                      <InputLabel id="demo-select-small">
                        No of Years Experience
                      </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="No of Years Experience"
                        name="noofyearsexperience"
                        className="email_login"
                        value={noofyearsexperience}
                        onMouseDown={e => valchange(true)}
                        onChange={e => noofyearsexperiencechange(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Designation"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="designation"
                      value={designation}
                      onMouseDown={e => valchange(true)}
                      onChange={e => designationchange(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="form-group mt-3 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Current CTC"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="currentctc"
                      value={currentctc}
                      onMouseDown={e => valchange(true)}
                      onChange={e => currentctcchange(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="PF NO"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="pfno"
                      value={pfno}
                      onMouseDown={e => valchange(true)}
                      onChange={e => pfnochange(e.target.value)}
                  
                    />
                  
                  </div>
                </div>

              </div>
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="ESI NO"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="esino"
                      value={esino}
                      onMouseDown={e => valchange(true)}
                      onChange={e => esinochange(e.target.value)}
                    
                    />
                  
                  </div>
                </div>

              </div>
            </div>
            <p className="textTwo d-flex justify-content-center mt-4 Animate_one">
              REFERRAL
            </p>
            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Employee Id"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="empid"
                      value={emppid}
                      onMouseDown={e => valchange(true)}
                      onChange={e => emppidchange(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="form-group mt-4 d-flex justify-content-center">
                  <div>
                    <TextField
                      label="Name Of Employee"
                      id="outlined-size-small"
                      size="small"
                      className="email_login"
                      type="text"
                      name="nameofemployee"
                      value={nameofemployee}
                      onMouseDown={e => valchange(true)}
                      onChange={e => nameofemployeechange(e.target.value)}
                    />
                  </div>
                </div>
              </div>
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
                      type="text"
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
              <div className=" pb-5 container">
                <button className="btn btn-danger reset" type="reset">
                  Reset
                </button>
                <input
                  type="submit"
                  className="btn btn-primary submit"
                  value="Save"
                ></input>
              </div>
            </div>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
    </div>

  )
}

export default EmpEdit