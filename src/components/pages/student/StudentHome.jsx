import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StudentHome() {
  const [companies, setCompany] = useState([]);

  useEffect(() => {
    loadCompaies();
  }, []);

  const loadCompaies = async () => {
    const result = await axios.get("http://localhost:3004/companies");
    setCompany(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center setmargin">Student Home Page</h1>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Company Name</th>
              <th scope="col">Company Admin</th>
              <th scope="col">Email</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td>{company.company}</td>
                <td>{company.companyAdminName}</td>
                <td>{company.email}</td>
                <td>{company.contactnumber}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/company/view/${company.id}`}
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

export default StudentHome;
