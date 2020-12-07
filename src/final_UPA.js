import React from 'react';
// import ReactDOM from 'react-dom'
import userPermission from './UserProjectAssignment'
import MultipleSelect from './Dropdowns'
import { Button } from 'antd';

class App2 extends React.Component{
    render(){
        return(
        <div >
        <span>
            <h1 style={{fontSize:"40px" , textAlign:"center"}}>ROLE ASSIGNMENT</h1>
        </span>
        <span style={{float:"left" , paddingLeft:"150px"}}>
            <MultipleSelect />
            </span>
        <span>
        {userPermission()}
        </span>
        <Button type="primary">Submit</Button>
        
        </div>
        )
}   
}

export default App2;