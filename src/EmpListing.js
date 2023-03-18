// import React, { useEffect, useState } from "react";
// import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import Objectways from "./Images/Objectways.svg";
// import Swal from "sweetalert2";

// const EmpListing = () => {
//   const [empdata, empdatachange] = useState(null);
//   const navigate = useNavigate();


//   const LoadDetails = (id) => {
//     navigate("/employee/details/" + id);
//   }
//   const LoadEdit = (id) => {
//     navigate("/employee/edit/" + id);
//   }
//   const Removefunction = (id) => {
//     if (window.confirm('Do you want to remote')) {
//       fetch("http://localhost:8000/employee/" + id, {
//         method: "DELETE",
//       }).then((res) => {
//         Swal.fire(
//           'Employee Removed Successfully!',
//           'You clicked the button!',
//           'success'
//         )
//         window.location.reload();
//       }).catch((err) => {
//         console.log(err.message)
//       })

//     }
//     navigate();
//   }
//   useEffect(() => {
//     fetch("http://localhost:8000/employee").then((res) => {
//       return res.json();
//     }).then((resp) => {
//       empdatachange(resp);
//     }).catch((err) => {
//       console.log(err.message);
//     })
//   }, []);
//   return (
//     <div className="container mt-5 emp_list_shadow">
//       <div className="">
//         <div className="card-title top_nav">
        
//           <div className=' d-flex justify-content-center'>
//               <img src={Objectways} alt="Logo" className='logo_details mt-3' />
//             </div>
//             <h2 className="text-center pt-4 emp_list_head b-heading">EMPLOYEE'S LIST</h2>
//           <div className="divbtn">
//             <Link to="/login" className="btn btn-success mb-3">Logout</Link>
//           </div>
//         </div>
//         <div className="card-body table_body">
         
//           <table className="table table-hover">
//             <thead className="thead_bg text-white">
//               <tr rowspan="">
//                 <th colspan=''>ID</th>
//                 <td colspan="">Employee Name</td>
//                 <td colspan="">Employee ID</td>
//                 <td colspan="">Reviewer Name</td>
//                 <td colspan="6" className="text-center">Icons</td>
//               </tr>
//             </thead>
//             <tbody>
//               {empdata &&
//                 empdata.map(item => (
//                   <tr className="thead_white" rowspan="" key={item.id}>
//                     <td className="" colspan=''>{item.id}</td>
//                     <td colspan="">{item.name}</td>
//                     <td colspan="">{item.emppid}</td>
//                     <td colspan="">{item.reviewerName}</td>
//                     <td colspan="" className="d-flex flex-row">
//                       <a onClick={() => { LoadEdit(item.id) }} className=" me-1"> <i className="fas fa-duotone fa-pen-to-square color color_2"></i></a>
//                       <a onClick={() => { Removefunction(item.id) }} className=" ps-3 me-1"><i className="fas fa-regular fa-trash color color_3"></i></a>
//                       <a onClick={() => { LoadDetails(item.id) }} className="ps-3"><i className="fas fa-info-circle color color_4"></i></a>
//                     </td>
//                   </tr>
//                 ))
//               }
//             </tbody>
//           </table>
 
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default EmpListing;
