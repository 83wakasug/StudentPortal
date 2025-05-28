import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import '../Css/Navbar.css';


const Home = () => {
  return (
    <div>
        <h1>"Welcome to Student Portal"</h1>
        <div className="bg-warning ">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Link</th>
            </tr>
          </thead>  
          <tbody>
            <tr>
              <td><Link to="/">Home</Link></td>
            </tr>
            <tr>
              <td><Link to="/courses">Courses</Link></td>
            </tr>
            <tr>
              <td><Link to="/news">News</Link></td>
            </tr>
            <tr>
              <td><Link to="/register">Register</Link></td>
            </tr>
        </tbody>

      </Table>
    </div>
    </div>
  )
}

export default Home