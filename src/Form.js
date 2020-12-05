
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



  render(){
  return (
    <div className="form">
        <form>

          {/* DropDown 1 */}
          Select Name: <select name="Name"  value={this.state.firstName}
            onChange={this.dropChange}>
            <option value="Shiv">Shiv</option>
            <option value="Virat">Virat</option>
            <option value="Dhruv">Dhruv</option>
            <option value="Yash">Yash</option>
            </select>

          <br /> <br />

        {/* DropDown2 */}
          
          Select Site: <select name="Site" value={this.state.firstName}
            onChange={this.dropChange}>
            <option value="Delhi">Delhi</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Mumbai">Mumbai</option>
          </select>        

            <br /> <br />
          {/* Checkboxes */}
            <input 
            id="create_Item"
            type="checkbox"
            name="create"
            // value="create"
            checked={this.state.create}
              onChange={this.onCheckChange}
              /> Create
        
            <input
            id="view_Item"
              type="checkbox"
              checked={this.state.view}
              name="view"
              // value="view"
              onChange={this.onCheckChange}              
            /> View
          
            <input
              id="edit_Item"
              type="checkbox"
              checked={this.state.edit}
              name="edit"
              // value="edit"
              onChange={this.onCheckChange}
            /> Edit
          
            <input 
              id="delete_Item"
              type="checkbox"
              checked={this.state.delete}
              name="delete"
              // value="delete"
              onChange={this.onCheckChange}
            /> Delete

            <br /> <br />
            <input type="submit"></input>


          <br />
          <br />
          Create: {this.state.create.toString()} <br />
          View: {this.state.view.toString()} <br />
          Edit: {this.state.edit.toString()} <br />
          Delete: {this.state.delete.toString()}

          {/* <label for="cars"></label>
          <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
          </select>

          <label for="bikes"></label>
          <select id="bikes" name="bikes">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
          </select> */}
          
          {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
          <label for="vehicle1"> I have a bike</label>
          <br/>
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"> </input>
          <label for="vehicle2"> I have a car</label><br/> 
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">  </input>
          <label for="vehicle3"> I have a boat</label><br/><br/> 
           */}
          {/* <input type="submit"></input> */}
        </form>


        
    </div>

           
  );

 }

}