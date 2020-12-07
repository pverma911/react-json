import React, {useState} from "react";
import {Multiselect} from "multiselect-react-dropdown";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const Multiple = () =>{
    const data =[
        {Country:"Delhi",id:1},
        {Country: "Gurgaon", id:2},
        {Country: "Mumbai", id:3},
        {Country: "Kolkata", id:4}
      ]

    const [options] = useState(data);
    const [selectedValue, setSelectedValue] = useState({})
    // const [personName, setPersonName] = React.useState([]);

    // const handleChange = (event) => {
    //     setPersonName(event.target.value);
    //     console.log(personName)
    //   };

    const onSelect = (selectedList,selectedItem) =>{
      setSelectedValue(selectedItem);
      console.log(selectedValue);
      return selectedValue;
    }
    
    return(
        <div style={{width: "20%", marginLeft:"40%"}}>
            <Multiselect options ={options} displayValue ="Country" onSelect={onSelect} placeholder="Select Site" closeOnSelect={false} showCheckbox />
        </div>
    )
}

export default Multiple;
