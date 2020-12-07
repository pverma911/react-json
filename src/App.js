import './App.css';
import React from "react";
import App2 from "./final_UPA";
import Multiple from "./Multiple"
import MaterialMultiple from './MaterialMultiple'
import {onCheck} from './Multiple';

import Form from './Form';
import { ThemeProvider } from 'react-bootstrap';


class App extends React.Component {
  constructor(props){
    super(props)

  this.state = {
    fields: {},
    selectedValue: {}
  };

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
        {/* <App2 /> /}
        {/ <MaterialMultiple onChange={fields => this.onChange(fields)} /> /}
        <h4>
        {/  Converting data into JSON */}
        <h4>
        {JSON.stringify(this.state.fields, this.state.selectedValue, null, 2)}

        {JSON.stringify(this.state.selectedList, null, 2)}

        </h4>

      </div>
    )
  }
 
 
}

export default App;