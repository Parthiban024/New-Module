import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
import './App.css';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import Objectways from "./Images/Objectways.svg";

const EmpDetails = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({})
  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid).then((res) => {
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
    <div className='d-flex justify-content-center'>
     
      <div className='col-8 emp_details'>
        <div className='text-start'>
          <div className='card-title text-center'>
            <div className='mt-4 '>
              <img src={Objectways} alt="Logo" className='logo_details' />
            </div>
            <h3 className='emp_list_head mt-3'>ANNUAL APPRAISAL FORM DETAILS</h3>
          
             
             <button className='btn btn-primary popup_btn down_btn' onClick={handleDownload}>Download</button>
          
          </div>
         
          <div className='card-body'></div>
          <div className='text-start emp_details_border '>
            <br></br>
            <div className='row'>
              <div className='col-3'></div>

              <div className='col-4'>

                <h5>EMPLOYEE NAME</h5>
              </div>
              <div className='col-3 ms-3'>
                {empdata &&
                  <h5>{empdata.name} {empdata.lastname} ({empdata.id})</h5>
                }
              </div>

            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>EMAIL</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.email}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>BIRTHDAY</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.birthday}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>GENDER</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.gender}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>BLOOD GROUP </h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.bloodgroup}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>PAN NO</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.panno}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>AADHAR NO</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.aadharno}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>PERSONAL CONTACT NO</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.personalcontactno}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>EMERGENCY CONTACT NO</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.emergencycontactno}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>PRESENT ADDRESS</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.presentaddress}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>PERMANENT ADDRESS</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.permanentaddress}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>GRADUATE</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.graduate}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>PASSED OUT YEARE</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.passedoutyear}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>DEGREE</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.degree}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>AGE</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.age}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>PREVIOUS COMPANY NAME</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.companyname}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>NO OF YEARS EXPERIENCE</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.noofyearsexperience}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>DESIGNATION</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.designation}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>CURRENT CTC</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.currentctc}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>EMPLOYEE ID</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.emppid}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>PLACE</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.place}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>DATE</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.date}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <h5>SIGN</h5>
              </div>
              <div className='col-3 ms-3'>
                <h5>{empdata.sign}</h5>
              </div>
            </div>
            <div className='text-center'>
              <Link className='btn btn-primary popup_btn mt-2 mb-3 ' to='/emplist'>Back to Listing</Link>
           
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default EmpDetails