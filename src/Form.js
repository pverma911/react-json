
import React from "react";



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
          Select Name: <select name="Name"  value={this.state.firstName}
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
          Create: {this.state.create.toString()} <br />
          View: {this.state.view.toString()} <br />
          Edit: {this.state.edit.toString()} <br />
          Delete: {this.state.delete.toString()}

          
        </form>


        
    </div>

           
  );

 }

}