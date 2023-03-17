import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
import './App.css';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';

const EmpDetails = () => {
  const{ empid }=useParams();
 
  const [empdata,empdatachange]=useState({})
  useEffect(()=> {
    fetch("http://localhost:8000/employee/"+empid).then((res) => {
      return res.json();
    }).then((resp) => {
      empdatachange(resp);
    }).catch((err) => {
      console.log(err.message);
    })
  }, []);
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(`Employee Name: ${empdata.name} ${empdata.lastname} (${empdata.id})`, 10, 10);
    doc.text(`Email: ${empdata.email}`, 10, 20);
    doc.text(`Birthday: ${empdata.birthday}`, 10, 30);
    doc.text(`Gender: ${empdata.gender}`, 10, 40);
    doc.text(`Blood Group: ${empdata.bloodgroup}`, 10, 50);
    doc.text(`Pan No: ${empdata.panno}`, 10, 60);
    doc.text(`Aadhar No: ${empdata.aadharno}`, 10, 70);
    doc.text(`Personal Contact No: ${empdata.personalcontactno}`, 10, 80);
    doc.text(`Emergency Contact No: ${empdata.emergencycontactno}`, 10, 90);
    doc.text(`Present Address: ${empdata.presentaddress}`, 10, 100);
    doc.text(`Permanent Address: ${empdata.permanentaddress}`, 10, 110);
    doc.text(`Graduate: ${empdata.graduate}`, 10, 120);
    doc.text(`Passed Out Year: ${empdata.passedoutyear}`, 10, 130);
    doc.text(`Skills: ${empdata.skills}`, 10, 140);
    doc.text(`Skills: ${empdata.isChecked}`, 10, 140);
    doc.save(`Employee_${empdata.id}.pdf`);
    
  }
  return (
    <div className='row'>
      <div className='col-2'></div>
      <div className='col-8 emp_details'>
    <div className='text-start'>
      <div className='card-title text-center'>
      <h3 className='emp_list_head mt-3'>EMPLOYEE DETAILS</h3>
      </div>
      <div className='card-body'></div>
      <div className='text-start emp_details_border'>
      { empdata && 
     <h1 className='text-start ps-5 mt-4 emp_name emp_list_head'>EMPLOYEE NAME : {empdata.name} {empdata.lastname} ({empdata.id})</h1>
    
    }
    <br></br>
   
     <h5 className='ps-5'>EMAIL    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.email}</h5><br></br>
     <h5 className='ps-5'>BIRTHDAY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.birthday}</h5><br></br>
     <h5 className='ps-5'>GENDER   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.gender}</h5><br></br>
     <h5 className='ps-5'>BLOOD GROUP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.bloodgroup}</h5><br></br>
     <h5 className='ps-5'>PAN NO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.panno}</h5><br></br>
     <h5 className='ps-5'>AADHAR NO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.aadharno}</h5><br></br>
     <h5 className='ps-5'>PERSONAL CONTACT NO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.personalcontactno}</h5><br></br>
     <h5 className='ps-5'>EMERGENCY CONTACT NO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.emergencycontactno}</h5><br></br>
     <h5 className='ps-5'>PRESENT ADDRESS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.presentaddress}</h5><br></br>
     <h5 className='ps-5'>PERMANENT ADDRESS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.permanentaddress}</h5><br></br>
     <h5 className='ps-5'>GRADUATE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.graduate}</h5><br></br>
     <h5 className='ps-5'>PASSED OUT YEAR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.passedoutyear}</h5><br></br>
     <h5 className='ps-5'>DEGREE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.degree}</h5><br></br>
     <h5 className='ps-5'>AGE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.age}</h5><br></br>
     <h5 className='ps-5'>PREVIOUS COMPANY NAME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.companyname}</h5><br></br>
     <h5 className='ps-5'>NO OF YEARS EXPERIENCE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.noofyearsexperience}</h5><br></br>
     <h5 className='ps-5'>DESIGNATION &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.designation}</h5><br></br>
     <h5 className='ps-5'>CURRENT CTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.currentctc}</h5><br></br>
     <h5 className='ps-5'>EMPLOYEE ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.emppid}</h5><br></br>
     <h5 className='ps-5'>NAME OF THE EMPLOYEE : {empdata.nameofemployee}</h5><br></br>
     <h5 className='ps-5'>PLACE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.place}</h5><br></br>
     <h5 className='ps-5'>DATE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.date}</h5><br></br>
     <h5 className='ps-5'>SIGN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.sign}</h5>
     <h5 className='ps-5'>SIGN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {empdata.isChecked}</h5>
     <div className='text-center'>
     <Link className='btn btn-primary popup_btn mt-2 mb-3 ' to='/emplist'>Back to Listing</Link>
     <button className='btn btn-primary' onClick={handleDownload}>Download</button>

     </div>
     </div>
    </div>
    </div>
    <div className='col-2'></div>
    </div>
  )
}

export default EmpDetails