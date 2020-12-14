import './App.css';
import React from "react";
import Multiple from "./Multiple"
// import MaterialMultiple from './MaterialMultiple'
// import Test from "./Test";
// import {datas} from "./Test";
import Form from './Form';
import Pretty from './Pretty';


class App extends React.Component {
  constructor(props){
    super(props)

  this.state = {
    // item_master_create:false,
    // item_master_view:false,
    // item_master_edit:false,
    // item_master_delete:false,
    // category_create:false,
    // category_view:false,
    // category_edit:false,
    // category_delete:false,
    fields: {},
    selectedValue: {},
    selectedList:{},
    item:"",
    action:[]
  };

  // console.log(datas);
}

  componentDidUpdate(prevState) {
    if (this.state.fields !== prevState.fields) {
      
      console.log(this.state.fields)
      console.log(JSON.stringify(this.state.fields))
    }
  }
  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

    onSelect = (selectedList,selectedItem) =>{
      this.setState({selectedValue:selectedItem});
      this.setState({selectedList:Object.values(selectedList)});
      console.log(this.state.selectedList);
    }

    clickedCheck = (e) =>{
      console.log(e.target.id)
      // let evalue = e.target.className;
      // let actions = [];
      // evalue.push(actions);
      // console.log(actions);
      this.setState({item: e.target.id, action: e.target.className}, () => console.log(this.state.action))
      // JSON.stringify(this.state.item)
      // JSON.stringify(this.state.action)
     
      // this.setState((prevState) =>({...prevState,action: e.target.className}))
    }

  //   onCheckChanges = e =>{

  //     // this.props.onChange({ [e.target.name]: e.target.value });
  //     console.log(e.target.checked);
  //     console.log(e.target.value);
  //     this.setState({
  //         [e.target.name]: e.target.checked,
  //         item: e.target.id,
  //         action: e.target.className

  //         // [e.taget.value]: e.target.value
  //     }, () => console.log(this.state.action, this.state.item))
  // }

    

  render(){

    return(
      <div className = "App">

        <Form onChange={fields => this.onChange(fields)} onClick ={this.clickedCheck} checkChanged= {this.onCheckChanges} />
        <Multiple onSelect ={this.onSelect} /> 
        {/* <Test /> */}
        <button onClick={e => this.onSubmit(e)} style ={{marginTop: "40px", marginLeft:"100px"}}>Submit</button>
        <br /> <br />
        <Pretty action={this.state.action} items={this.state.item} selectedVal={this.state.selectedValue} fieldData ={this.state.fields} site_name ={this.state.selectedList} />

        {/* <br /> <br /> <br /> <br /><br /> <br /><br /> <br /><br /><br /><br /> */}
        {/*  Converting data into JSON */}
        <pre>
        {JSON.stringify(this.state.fields, this.state.selectedValue, null, 2)}

        {JSON.stringify(this.state.selectedList, null, 2)}

        
        </pre>

      </div>
    )
  }
 
 
}

export default App;