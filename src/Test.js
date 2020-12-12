import React from "react";


const Test = () =>{
    const datas = [{
        data:[{
            id:1,
            employee_email: "email.com",
            site_name:["VMM","All Cargo"],
            permissions:[{
                item: "item_manager",
                action:["create","edit"]
            }]
        }]
    }]
    return (
    <div>
        {datas.map((data) =>{
            return <h4 key={data.id}> {data.id} </h4>
        })}
    </div>
    )
}
 

export default Test;