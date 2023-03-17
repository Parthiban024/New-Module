import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Objectways from "./Images/Objectways.svg";
import Swal from "sweetalert2";

const EmpListing = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();


  const LoadDetails = (id) => {
    navigate("/employee/details/" + id);
  }
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  }
  const Removefunction = (id) => {
    if (window.confirm('Do you want to remote')) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      }).then((res) => {
        Swal.fire(
          'Employee Removed Successfully!',
          'You clicked the button!',
          'success'
        )
        window.location.reload();
      }).catch((err) => {
        console.log(err.message)
      })

    }
    navigate();
  }
  useEffect(() => {
    fetch("http://localhost:8000/employee").then((res) => {
      return res.json();
    }).then((resp) => {
      empdatachange(resp);
    }).catch((err) => {
      console.log(err.message);
    })
  }, []);
  return (
    <div className="container mt-5 emp_list_shadow">
      <div className="">
        <div className="card-title top_nav">
        
          <div className=' d-flex justify-content-center'>
              <img src={Objectways} alt="Logo" className='logo_details mt-3' />
            </div>
            <h2 className="text-center pt-4 emp_list_head">EMPLOYEE'S LIST</h2>
          <div className="divbtn">
            <Link to="/login" className="btn btn-success mb-3">Logout</Link>
          </div>
        </div>
        <div className="card-body table_body">
         
          <table className="table table-hover">
            <thead className="thead_bg text-white">
              <tr rowspan="">
                <th colspan=''>ID</th>
                <td colspan="">First Name</td>
                <td colspan="">Last Name</td>
                <td colspan="">Email</td>
                {/* <td colspan="6">Birthday</td>
                <td colspan="6">Gender</td>
                <td colspan="6">Blood Group</td>
                <td colspan="6">Pan No</td>
                <td colspan="6">Aadhar No</td>
                <td colspan="6">Personal Contact No</td>
                <td colspan="6">Emergency Contact No</td>
                <td colspan="6">Present Address</td>
                <td colspan="6">Permanent Address</td>
                <td colspan="6">Passed Out Year</td>
                <td colspan="6">Degree</td>
                <td colspan="6">Age</td>
                <td colspan="6">Company Name</td>
                <td colspan="6">No Of Years Experience</td>
                <td colspan="6">Designation</td>
                <td colspan="6">Current CTC</td>
                <td colspan="6">Emp Id</td>
                <td colspan="6">Name Of Employee</td>
                <td colspan="6">Place</td>
                <td colspan="6">Date</td>
                <td colspan="6">Sign</td> */}
                <td colspan="6" className="text-center">Icons</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map(item => (
                  <tr className="thead_white" rowspan="" key={item.id}>
                    <td className="" colspan=''>{item.id}</td>
                    <td colspan="">{item.name}</td>
                    <td colspan="">{item.lastname}</td>
                    <td colspan="">{item.email}</td>
                    {/* <td colspan="6">{item.birthday}</td>
                    <td colspan="6">{item.gender}</td>
                    <td colspan="6">{item.bloodgroup}</td>
                    <td colspan="6">{item.panno}</td>
                    <td colspan="6">{item.aadharno}</td>
                    <td colspan="6">{item.personalcontactno}</td>
                    <td colspan="6">{item.emergencycontactno}</td>
                    <td colspan="6">{item.presentaddress}</td>
                    <td colspan="6">{item.permanentaddress}</td>
                    <td colspan="6">{item.passedoutyear}</td>
                    <td colspan="6">{item.degree}</td>
                    <td colspan="6">{item.age}</td>
                    <td colspan="6">{item.companyname}</td>
                    <td colspan="6">{item.noofyearsexperience}</td>
                    <td colspan="6">{item.designation}</td>
                    <td colspan="6">{item.currentctc}</td>
                    <td colspan="6">{item.empid}</td>
                    <td colspan="6">{item.nameofemployee}</td>
                    <td colspan="6">{item.place}</td>
                    <td colspan="6">{item.date}</td>
                    <td colspan="6">{item.sign}</td> */}
                    <td colspan="" className="d-flex flex-row">
                      <a onClick={() => { LoadEdit(item.id) }} className=" me-1"> <i className="fas fa-duotone fa-pen-to-square color color_2"></i></a>
                      <a onClick={() => { Removefunction(item.id) }} className=" ps-3 me-1"><i className="fas fa-regular fa-trash color color_3"></i></a>
                      <a onClick={() => { LoadDetails(item.id) }} className="ps-3"><i className="fas fa-info-circle color color_4"></i></a>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
 
        </div>
      </div>
      
    </div>
  );
};

export default EmpListing;
