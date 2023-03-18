// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
// import './App.css';
// import { saveAs } from 'file-saver';
// import jsPDF from 'jspdf';
// import Objectways from "./Images/Objectways.svg";

// const EmpDetails = () => {
//   const { empid } = useParams();

//   const [empdata, empdatachange] = useState({})
//   useEffect(() => {
//     fetch("http://localhost:8000/employee/" + empid).then((res) => {
//       return res.json();
//     }).then((resp) => {
//       empdatachange(resp);
//     }).catch((err) => {
//       console.log(err.message);
//     })
//   }, []);
//   const handleDownload = () => {
//     const doc = new jsPDF();
//     doc.text(`Employee Name: ${empdata.name} ${empdata.lastname} (${empdata.id})`, 10, 10);
//     doc.text(`Employee ID: ${empdata.emppid}`, 10, 20);
//     doc.text(`Reviewer Name: ${empdata.reviewerName}`, 10, 30);
//     doc.text(`Review From: ${empdata.reviewPeriod}`, 10, 40);
//     doc.text(`Review To: ${empdata.reviewPeriodTwo}`, 10, 50);
//     doc.text(`Select One: ${empdata.selectOne}`, 10, 60);
//     doc.text(`Aadhar No: ${empdata.selectTwo}`, 10, 70);
//     doc.text(`Personal Contact No: ${empdata.selectThree}`, 10, 80);
//     doc.text(`Emergency Contact No: ${empdata.selectFour}`, 10, 90);
//     doc.text(`Present Address: ${empdata.selectFive}`, 10, 100);
//     doc.text(`Permanent Address: ${empdata.selectSix}`, 10, 110);
//     doc.text(`Graduate: ${empdata.selectSeven}`, 10, 120);
//     doc.text(`Passed Out Year: ${empdata.selectEight}`, 10, 130);
//     doc.text(`Skills: ${empdata.selectNine}`, 10, 140);
//     doc.text(`Skills: ${empdata.selectTen}`, 10, 150);
//     doc.text(`Comments One: ${empdata.commOne}`, 10, 160);
//     doc.text(`Comments Two: ${empdata.commTwo}`, 10, 170);
//     doc.text(`Your Rating: ${empdata.rateMain}`, 10, 180);
//     doc.text(`Reviewer Name: ${empdata.reviewerNameTwo}`, 10, 190);
//     doc.text(`Date: ${empdata.date}`, 10, 200);
//     doc.text(`Sign: ${empdata.sign}`, 10, 210);
//     doc.save(`Employee_${empdata.id}.pdf`);

//   }
//   return (
//     <div className='d-flex justify-content-center'>
     
//       <div className='col-8 emp_details'>
//         <div className='text-start'>
//           <div className='card-title text-center'>
//             <div className='mt-4 '>
//               <img src={Objectways} alt="Logo" className='logo_details' />
//             </div>
//             <h3 className='emp_list_head mt-3 b-heading'>ANNUAL APPRAISAL FORM DETAILS</h3>
          
             
//              <button className='btn btn-primary popup_btn down_btn' onClick={handleDownload}>Download</button>
          
//           </div>
         
//           <div className='card-body'></div>
//           <div className='text-start emp_details_border '>
//             <br></br>
//             <div className='row'>
//               <div className='col-3'></div>

//               <div className='col-4'>

//                 <h5>EMPLOYEE NAME</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 {empdata &&
//                   <h5>{empdata.name} ({empdata.id})</h5>
//                 }
//               </div>

//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>EMPLOYEE ID</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.emppid}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>REVIWER NAME</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.reviewerName}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>REVIEW FROM</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.reviewPeriod}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>REVIEW TO</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.reviewPeriodTwo}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>SELECT ONE</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.selectOne}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>SELECT TWO</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.selectTwo}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>SELECT THREE</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.selectThree}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>SELECT FOUR</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.selectFour}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>SELECT FIVE</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.selectFive}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>SELECT SIX</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.selectSix}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>SELECT SEVEN</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.selectSeven}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>SELECT EIGHT</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.selectEight}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>SELECT NINE</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.selectNine}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>SELECT TEN</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.selectTen}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>COMMENT ONE</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.commOne}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>COMMENT TWO</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.commTwo}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>YOUR RATING</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.rateMain}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>REVIEWER NAME</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.reviewerNameTwo}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>DATE</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.date}</h5>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-3'></div>
//               <div className='col-4'>
//                 <h5>SIGN</h5>
//               </div>
//               <div className='col-3 ms-3'>
//                 <h5>{empdata.sign}</h5>
//               </div>
//             </div>
//             <div className='text-center'>
//               <Link className='btn btn-primary popup_btn mt-2 mb-3 ' to='/emplist'>Back to Listing</Link>
           
//             </div>
            
//           </div>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default EmpDetails