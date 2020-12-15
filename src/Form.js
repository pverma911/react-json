
import React from "react";

import Table from 'react-bootstrap/Table'



export default class Form extends React.Component {

  

constructor(props){
    super(props)

    this.state ={

      item_master_create:false,
      item_master_view:false,
      item_master_edit:false,
      item_master_delete:false,
      category_create:false,
      category_view:false,
      category_edit:false,
      category_delete:false,
      employee_email: "",
      item:"",
      action:[]
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

        // this.props.onChange({ [e.target.name]: e.target.value });
        console.log(e.target.checked);
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.checked,
            item: e.target.id,
            action: e.target.className

            // [e.taget.value]: e.target.value
        }, () => console.log(this.state.action, this.state.item))
    }


    // clickedCheck = (e) =>{
    //   console.log(e.target.id)
    //   this.setState({item: e.target.id}, () => console.log(this.state.item))
    // }


    onSubmit = e =>{
        // e.preventDefault();

        this.setState({
          item_master_create:false,
          item_master_view:false,
          item_master_edit:false,
          item_master_delete:false,
          category_create:false,
          category_view:false,
          category_edit:false,
          category_delete:false,
          employee_email: "",
          item:"",
          action:[]
          });

        this.props.onChange({
          item_master_create:false,
          item_master_view:false,
          item_master_edit:false,
          item_master_delete:false,
          category_create:false,
          category_view:false,
          category_edit:false,
          category_delete:false,
          employee_email: "",
          item:"",
          action:[]
        });

        
    }



  render(){
  return (
    <div className="form">
        <form>
            <h2>Form</h2>
          {/* DropDown 1 */}

        
        
          Select Name: <select name="employee_email" value={this.state.firstName}
            onChange={this.dropChange}>
            <option value="Select">Select</option>
            <option value="shiv98@gmail.com">shiv98@gmail.com</option>
            <option value="virat98@gmail.com">virat98@gmail.com</option>
            <option value="dhruv24@gmail.com">dhruv24@gmail.com</option>
            <option value="yash40@gmail.com">yash40@gmail.com</option>
            </select>

          <br /> <br /> 

 
          <div style={{paddingLeft:"40%"}}>
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
            <td align="center" className="cell" >Item Master</td>
            <td>
            
              <input 
                id="item_master"
                className="create"
                type="checkbox"
                name="item_master_create"
                value={this.state.item_master_create ? "false" : "true"}
                checked={this.state.item_master_create}
                onChange={this.onCheckChange}
                onClick = {this.props.onClick}
               />
            </td>
            <td>
              <input
                id="item_master"
                className="view"
                type="checkbox"
                checked={this.state.item_master_view}
                name="item_master_view"
                value={this.state.item_master_view ? "false" : "true"}
                onChange={this.onCheckChange}
                onClick = {this.props.onClick}
              />
            </td>
            <td>
              <input
                id="item_master"
                className="edit"
                type="checkbox"
                checked={this.state.item_master_edit}
                name="item_master_edit"
                value={this.state.item_master_edit ? "false" : "true"}
                onChange={this.onCheckChange}    
                onClick = {this.props.onClick}          
              />
            </td>
            <td>
              <input 
                id="item_master"
                className="delete"
                type="checkbox"
                checked={this.state.item_master_delete}
                name="item_master_delete"
                value={this.state.item_master_delete ? "false" : "true"}
                onChange={this.onCheckChange}
                onClick = {this.props.onClick}
              />
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Category</td>
            <td>
              <input 
                id="category"
                className="create"
                type="checkbox"
                name="category_create"
                value={this.state.category_create ? "false" : "true"}
                checked={this.state.category_create}
                onChange={this.onCheckChange}
                onClick = {this.props.onClick}
               />
            </td>
            <td>
              <input
                id="category"
                className="view"
                type="checkbox"
                checked={this.state.category_view}
                name="category_view"
                value={this.state.category_view ? "false" : "true"}
                onChange={this.onCheckChange}
                onClick = {this.props.onClick}
              />
            </td>
            <td>
              <input
                id="category"
                type="checkbox"
                className="edit"
                checked={this.state.category_edit}
                name="category_edit"
                value={this.state.category_edit ? "false" : "true"}
                onChange={this.onCheckChange}
                onClick = {this.props.onClick}
              />
            </td>
            <td>
              <input 
                id="category"
                type="checkbox"
                className="delete"
                checked={this.state.category_delete}
                name="category_delete"
                value={this.state.category_delete ? "false" : "true"}
                onChange={this.onCheckChange}
                onClick = {this.props.onClick}
              />
            </td>
          </tr>          
        </tbody>
      </Table>

          </div>
          
          
          {/* <button onClick={e => this.onSubmit(e)} style ={{marginBottom: "90px", marginLeft:"1100px"}}>Submit</button> */}


          <br /><br />

        </form>


        
    </div>

           
  );

 }

}