
import React from "react";
// import {Multiselect} from "multiselect-dropdown-bootstrap";
import Table from 'react-bootstrap/Table'
import * as ReactBootStrap from "react-bootstrap"
// import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption} from "mdbreact";


export default class Form extends React.Component {


constructor(props){
    super(props)

    this.state ={
      create:false,
      view:false,
      edit:false,
      delete:false,
      Name: "",
      Site: ""
    };


    this.onCheckChange = this.onCheckChange.bind(this);
    this.dropChange = this.dropChange.bind(this);


    
  }

  

    dropChange = e =>{
        
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        }, () =>{
            console.log(this.state)
        });
    }

    onCheckChange = e =>{

        this.props.onChange({ [e.target.name]: e.target.value });
        console.log(e.target.checked);
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.checked
            // [e.taget.value]: e.target.value
        })
    }

    onSubmit = e =>{
        // e.preventDefault();

        this.setState({
            create:false,
            view:false,
            edit:false,
            delete:false,
            Name: "",
            Site: ""
          });

        this.props.onChange({
            create:false,
            view:false,
            edit:false,
            delete:false,
            Name: "",
            Site: ""
        });
    }



  render(){
  return (
    <div className="form">
        <form>
            <h2>Form</h2>
          {/* DropDown 1 */}


        
          Select Name: <select multiple data-live-search="true" name="Name"  value={this.state.firstName}
            onChange={this.dropChange}>
            <option value="Select">Select</option>
            <option value="Shiv">Shiv</option>
            <option value="Virat">Virat</option>
            <option value="Dhruv">Dhruv</option>
            <option value="Yash">Yash</option>
            </select>

          <br /> <br />

        {/* DropDown2 */}
          
          Select Site: <select name="Site" value={this.state.firstName}
            onChange={this.dropChange}>
            <option value="Select">Select</option>
            <option value="Delhi">Delhi</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Mumbai">Mumbai</option>
          </select>        

            <br /> <br />

          {/* Dropdown Multiple */}

          {/* <DropdownMultiselect
            options={["Australia", "Canada", "USA", "Poland", "Spain", "France"]}
            name="countries"
          /> */}

          {/* <select id="lstFruits" multiple="multiple">
            <option value="1">Mango</option>
            <option value="2">Apple</option>
            <option value="3">Banana</option>
            <option value="4">Guava</option>
            <option value="5">Orange</option>
          </select> */}

          {/* <input type="button" id="btnSelected" value="Get Selected" /> */}
 

          <Table striped bordered hover size="sm" style={{width:"20%"}} responsive>
        <thead>
          <tr >
            <th className="cell" width='50'>ACTIVITY</th>
            <th className="cell">Create</th>
            <th className="cell">View</th>
            <th className="cell">Edit</th>
            <th className="cell">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center" className="cell">Item Master</td>
            <td>
              <input 
              id="create_Item"
              value="1"
              type="checkbox"
              onChange="updateState('create_Item',1)"
               />
            </td>
            <td>
              <input
              id="view_Item"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_Item"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_Item"
              type="checkbox"
              />
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Category</td>
            <td>
              <input 
              id="create_Categ"
              type="checkbox"
               />
            </td>
            <td>
              <input
              id="view_Categ"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_Categ"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_Categ"
              type="checkbox"
              />
            </td>
          </tr>          
        </tbody>
      </Table>

          {/* Checkboxes */}
          <strong>Assign Tasks:</strong>
            <input 
                id="create_Item"
                type="checkbox"
                name="create"
                value={this.state.create ? "false" : "true"}
                checked={this.state.create}
                onChange={this.onCheckChange}
            /> Create
        
            <input
                id="view_Item"
                type="checkbox"
                checked={this.state.view}
                name="view"
                value={this.state.view ? "false" : "true"}
                onChange={this.onCheckChange}              
            /> View
          
            <input
                id="edit_Item"
                type="checkbox"
                checked={this.state.edit}
                name="edit"
                value={this.state.edit ? "false" : "true"}
                onChange={this.onCheckChange}
            /> Edit
          
            <input 
                id="delete_Item"
                type="checkbox"
                checked={this.state.delete}
                name="delete"
                value={this.state.delete ? "false" : "true"}
                onChange={this.onCheckChange}
            /> Delete

            <br /> <br />
            <button onClick={e => this.onSubmit(e)}>Submit</button>


          <br /><br />

        </form>


        
    </div>

           
  );

 }

}