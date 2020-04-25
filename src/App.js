import React, { Component } from "react";
import Employee from "./components/Employee";
import employee from "./employee.json";
import Table from 'react-bootstrap/Table';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    empTotal:employee,
    employee,
    sort: true,
    name:""
  };

  handleSort = ()=>{
console.log("click")

   let employeeSorted;
   if(this.state.sort)
   {
     employeeSorted =  this.state.employee.sort((a, b) => (a.occupation > b.occupation) ? 1 : -1)
     this.setState({employee:employeeSorted, sort: !this.state.sort})
   }
   else{
    employeeSorted =  this.state.employee.sort((a, b) => (a.occupation < b.occupation) ? 1 : -1)
    this.setState({employee:employeeSorted, sort: !this.state.sort})
   }


  }

  handleInputChange = (event)=>{
    
    let empFiltered =  this.state.empTotal.filter(employee => employee.name.includes(event.target.value));
    this.setState({employee: empFiltered,name:event.target.value})

  }


  render() {
    return (
      <div>
        <h1>Employee List</h1>
        <form className="form">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="name"
          />
       
        </form>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>id</th>
              <th >Name</th>
              <th>Profile Picture</th>
              <th onClick={this.handleSort} >Position <span>{this.state.sort ? "v":"^"} </span></th>
                          </tr>
          </thead>
          <tbody>
            {this.state.employee.map(employee => (
            
              <Employee
                id={employee.id}
                key={employee.id}
                name={employee.name}
                image={employee.image}
                occupation={employee.occupation}
              />
            ))}
          </tbody>
        </Table>

      </div>
    );
  }
}

export default App;
