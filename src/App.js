
import './App.css';
import React from "react";


import Form from './Form';

class App extends React.Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render(){
    return(
      <div className = "App">
      
        <Form onChange={fields => this.onChange(fields)} />
        <h4>     
          JSON data: {JSON.stringify(this.state.fields, null, 2)} {/* Converting data into JSON */}
        </h4>

      </div>
    )
  }
 
 
}

export default App;
