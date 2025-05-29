import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import {Link } from "react-router-dom";
import useFetchData from './useFetchData';
const CourseCard = () => {



  const data = useFetchData('/Data/course.json');

  if (!data) {
    return <div>Loading...</div>;
  }
  return (

    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Subject</th>
        <th>Short Description</th>
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
      <tr  key={item.id}>
        <td>{item.subject}</td>
        <td> {item.shortDescription} </td>
        <td><Link to={`/coursedetails/${item.id}`}state={item}><button>details</button></Link> </td>
    </tr>
     ))}

    </tbody>
  </Table>
);
  
}

export default CourseCard