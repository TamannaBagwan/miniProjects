import React from "react";
import { Table } from "reactstrap";
const Dashboard = ({ userName, password, referenceId }) => {
  return (
    <div>
      <h2 className="m-4">Welcome to the Dashboard</h2>
      <div>

        <Table hove>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Reference ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>{userName}</td>
            <td>{password}</td>
            <td>{referenceId}</td>
            </tr>
          </tbody>
        </Table> 
       
      </div>
    </div>
  );
};

export default Dashboard;

