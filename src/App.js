import './App.css';
import React from "react";
import Multiple from "./Multiple"
// import MaterialMultiple from './MaterialMultiple'

// import {datas} from "./Test";
import Form from './Form';



class App extends React.Component {
  constructor(props){
    super(props)

  this.state = {
    fields: {},
    selectedValue: {}
  };

  // console.log(datas);
}

  componentDidUpdate(prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.fields !== prevState.fields) {
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
      this.setState({selectedList:selectedList});
      console.log(this.state.selectedValue);
    }

  render(){

    return(
      <div className = "App">

        <Form onChange={fields => this.onChange(fields)} />
        <Multiple onSelect ={this.onSelect} /> 

        <button onClick={e => this.onSubmit(e)} style ={{marginBottom: "90px", marginLeft:"1100px"}}>Submit</button>

        <br /> <br /> <br /> <br /><br /> <br /><br /> 
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