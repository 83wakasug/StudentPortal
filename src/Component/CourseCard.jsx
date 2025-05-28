import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import {Link } from "react-router-dom";

const CourseCard = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/Data/course.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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