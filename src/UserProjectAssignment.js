import React,{useState,useEffect} from 'react'
import {componentDidMount} from 'react'
// import MaterialTable from 'material-table';
import * as ReactBootStrap from "react-bootstrap"
import Table from 'react-bootstrap/Table'
// import './upa.css'
 
var result=[]

function updateState(checkBoxId,value){
  if(document.getElementById(checkBoxId).checked){
   result.push(value); 
  }else{
    removeFromResult(value)
  }
  console.log(document.getElementById(result).innerHTML=JSON.stringify(result))
}

function removeFromResult(value){
  for(let index=0;index<result.length;index++)
  {
    const element=result[index]
    if(element===value)
    {
      result.splice(index,1)
    }
  }
}





function userPermission(){
  // const [isChecked,setIsChecked] = useState(false);
       
        return (
          <div className="App" style={{paddingLeft:"65%"}}>
            {/* <h1>checkbox is:{isChecked? "True" : "False"} </h1> */}
            

           <ReactBootStrap.Table striped bordered hover size="sm" style={{width:"20%"}} responsive>
        <thead>
          <tr >
            <th className="cell" width='50'>ACTIVITY</th>
            <th className="cell">Create</th>
            <th className="cell">View</th>
            <th className="cell">Edit</th>
            <th className="cell">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center" className="cell">Item Master</td>
            <td>
              <input 
              id="create_Item"
              value="1"
              type="checkbox"
              onChange="updateState('create_Item',1)"
               />
            </td>
            <td>
              <input
              id="view_Item"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_Item"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_Item"
              type="checkbox"
              />
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Category</td>
            <td>
              <input 
              id="create_Categ"
              type="checkbox"
               />
            </td>
            <td>
              <input
              id="view_Categ"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_Categ"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_Categ"
              type="checkbox"
              />
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Sub-Category</td>
            <td>
              <input 
              id="create_SubCateg"
              type="checkbox"
               />
            </td>
            <td>
              <input
              id="view_SubCateg"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_SubCateg"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_SubCateg"
              type="checkbox"
              />
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Site</td>
            <td>
              <input 
              id="create_Site"
              type="checkbox"
               />
            </td>
            <td>
              <input
              id="view_Site"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_Site"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_Site"
              type="checkbox"
              />
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Client</td>
            <td>
              <input 
              id="create_Client"
              type="checkbox"
               />
            </td>
            <td>
              <input
               id="view_Client"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_Client"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_Client"
              type="checkbox"
              />
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Vendor</td>
            <td>
              <input 
              id="create_Vendor"
              type="checkbox"
               />
            </td>
            <td>
              <input
               id="view_Vendor"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_Vendor"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_Vendor"
              type="checkbox"
              />
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">UOM</td>
            <td>
              <input 
              id="create_UOM"
              type="checkbox"
               />
            </td>
            <td>
              <input
               id="view_UOM"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_UOM"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_UOM"
              type="checkbox"
              />
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Requisition</td>
            <td>
              <input 
              id="create_Req"
              type="checkbox"
               />
            </td>
            <td>
              <input
               id="view_Req"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_Req"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_Req"
              type="checkbox"
              />
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Approver 1</td>
            <td colSpan="4">
            <input 
            id="first_Approver"
            type="checkbox"
            /> 
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Approver 2</td>
            <td colSpan="4">
            <input
            id="second_Approver"
            type="checkbox"
            /> 
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Rate Comparative</td>
            <td>
              <input 
              id="create_RC"
              type="checkbox"
               />
            </td>
            <td>
              <input
               id="view_RC"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_RC"
              type="checkbox"
              />
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Sanction 1</td>
            <td colSpan="4">
            <input 
            id="first_sanction"
            type="checkbox"
            /> 
            </td>
          </tr>
            <tr>
            <td align="center" className="cell">Sanction 2</td>
            <td colSpan="4">
            <input
            id="second_Sanction"
             type="checkbox"
             /> 
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Master Rate Comparative</td>
            <td>
           
            </td>
            <td>
            <input 
            id="view_MRC"
            type="checkbox"
            />
            </td>
            <td>
            
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Purchase Order</td>
            <td>
              <input 
              id="create_PO"
              type="checkbox"
               />
            </td>
            <td>
              <input
               id="view_PO"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_PO"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_PO"
              type="checkbox"
              />
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">GRN</td>
            <td>
              <input 
              id="create_GRN"
              type="checkbox"
               />
            </td>
            <td>
              <input
               id="view_GRN"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_GRN"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_GRN"
              type="checkbox"
              />
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Inventory</td>
            <td>
              <input 
              id="create_Inventory"
              type="checkbox"
               />
            </td>
            <td>
              <input
               id="view_Inventory"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_Inventory"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_Inventory"
              type="checkbox"
              />
            </td>
          </tr>
          <tr>
            <td align="center" className="cell">Invoice</td>
            <td>
              <input 
              id="create_Invoice"
              type="checkbox"
               />
            </td>
            <td>
              <input
               id="view_Invoice"
               type="checkbox"
              />
            </td>
            <td>
              <input
               id="edit_Invoice"
              type="checkbox"
              />
            </td>
            <td>
              <input 
              id="delete_Invoice"
              type="checkbox"
              />
            </td>
          </tr>
        </tbody>
      </ReactBootStrap.Table>
          </div>
          
        );
      }

export default userPermission;
