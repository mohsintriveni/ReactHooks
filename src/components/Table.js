import React from "react";

function Table (props){

    const employees = props.employees;
    console.log(employees)

    return (
        <div>
            {/* <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) =>(
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    )
}

export default Table;