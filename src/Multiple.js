import React, {useState} from "react";
import {Multiselect} from "multiselect-react-dropdown";



const Multiple = () =>{
    const data =[
        {Country:"India",id:1},
        {Country: "Australia", id:2}
      ]

    const [options] = useState(data);
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
      };
    
    return(
        <div style={{width: "20%"}}>
            <Multiselect options ={options} displayValue ="Country" />
        </div>
    )
}

export default Multiple;
