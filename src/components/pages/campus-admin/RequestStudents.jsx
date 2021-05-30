import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RequestStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:3004/students");
    setStudents(
      result.data.filter((student) => student.adminAcception === "NotAccepted")
    );
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center setmargin">Request Companies</h1>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Student Username</th>
              <th scope="col">Student Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td>{student.username}</td>
                <td>{student.studentName}</td>
                <td>{student.email}</td>
                <td>{student.contactnumber}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/student/view/${student.id}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequestStudents;
