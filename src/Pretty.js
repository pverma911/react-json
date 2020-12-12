import React from "react";

import JSONPretty from 'react-json-prettify';


const Pretty = ({fieldData, site_name, selectedVal, items, action}) =>{
    console.log(Object.values(site_name))
    console.log(site_name);
    const json = {
        data:[{
            fieldData,
            site_name,
            permissions:[{
                item:items,
                action:[action]
            }]
        }]       
    };
        
    return (
        <div>
        
            <JSONPretty json={json} />
        </div>      
    ) 
}

export default Pretty;