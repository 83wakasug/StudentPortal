
import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
const CourseDetails = () => {

  const courseDetails = useLocation().state;

  if (!courseDetails) {
    return <div>Loading...</div>
  }

  return (
    <div>
    <h2>Course Details</h2>
    <div>
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>Course</th>
        <th>{courseDetails.title}</th>
      </tr>
      </thead>
      <tbody>
          <tr> 
            <td>Subject:</td>
            <td>{courseDetails.subject}</td>
          </tr>
          <tr>
            <td>Level:</td>
            <td>{courseDetails.level}</td>
          </tr>
          <tr>
            <td>Course Details:</td>
            <td>{courseDetails.fullDescription}</td>
          </tr>
          <tr>
            <td>Level:</td>
            <td>        <div><Link to="/courses" ><button>Go back</button></Link></div></td>
          </tr>
      </tbody>
     </Table>
    </div>
  </div>
);
  
}

export default CourseDetails