import React, { useEffect, useState } from 'react';
import { Delete, Read } from '../../APIServices/CRUDServices';
import { ErrorToast, SuccessToast } from '../../Helper/ValidationHelper';
import FullScreenLoader from "../Common/FullScreenLoader";
import "./ListTable.css";

const ListTable = () => {
    const [dataList,setDataList]=useState([])
    useEffect(()=>{
       Read()
       .then((result)=>{
        setDataList(result)

       })
       .catch()
    },[dataList])

    const DeleteItem=(id)=>{
       Delete(id)
       .then((result)=>{
        if(result===true){
            SuccessToast("Data Deleted Successfully");
        }else{
            ErrorToast("Request Fail.Try Again");
        }
       })

    }
    const UpdateItem=(id)=>{
        console.log(id)
    }

    if(dataList.length>0){
        return (
            <div>
            <table className="table table-bordered">
               <thead>
               <tr>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Product Image </th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Action</th>
                </tr>
               </thead>
               <tbody>
                {
                    dataList.map((item)=>{
                        return (
                            <tr key={item._id} >
                                <td>{item.ProductName}</td>
                                <td>{item.ProductCode}</td>
                                <td><img className="list-img" src={item.Img} alt={item.ProductName} /></td>
                                <td>{item.UnitPrice}</td>
                                <td>{item.Qty}</td>
                                <td>{item.TotalPrice}</td>
                                <td><button onClick={()=>DeleteItem(item._id)} className="btn btn-danger">Delete</button><button onClick={()=>UpdateItem(item._id)} className="btn btn-primary mx-2">Update</button></td>
                            </tr>
                        )
                    })
                }
               </tbody>
            </table>
                
            </div>
        );
    }else{
        return(
            <div>
                <FullScreenLoader></FullScreenLoader>
            </div>
        )
    }
   
};

export default ListTable;