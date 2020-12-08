import React, {useState} from "react";
import {Multiselect} from "multiselect-react-dropdown";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const Multiple = (props) =>{
    const data =[
        {site_name:"VMM"},
        {site_name: "All Cargo"},
        {site_name: "Logos-B"},
        {site_name: "Pragati One"},
        {site_name: "Logos"},
        {site_name: "Ecom Express"}
      ]

    const [options] = useState(data);
    // const [selectedValue, setSelectedValue] = useState({})
    // const [personName, setPersonName] = React.useState([]);

    // const handleChange = (event) => {
    //     setPersonName(event.target.value);
    //     console.log(personName)
    //   };

    // const onSelect = (selectedList,selectedItem) =>{
    //   setSelectedValue(selectedItem);
    //   console.log(selectedValue);
    //   return selectedValue;
    // }
    
    return(
        <div style={{width: "40%", marginLeft:"34%"}}>
            Select Site: <Multiselect options ={options} displayValue ="site_name" onSelect={props.onSelect} placeholder="Select Site" closeOnSelect={false} showCheckbox />
        </div>
    )
}

export default Multiple;
