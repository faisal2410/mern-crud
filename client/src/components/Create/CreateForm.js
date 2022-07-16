import React, { useRef } from "react";
import { Create } from "../../APIServices/CRUDServices";
import {
  ErrorToast,
  isEmpty,
  SuccessToast,
} from "../../Helper/ValidationHelper";
import FullScreenLoader from "../Common/FullScreenLoader";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  let ProductName,
    ProductCode,
    Img,
    UnitPrice,
    Qty,
    TotalPrice,Loader = useRef();
    let navigate = useNavigate();
  const SaveData = () => {
    let Product_Name = ProductName.value;
    let Product_Code = ProductCode.value;
    let Product_Img = Img.value;
    let Unit_Price = UnitPrice.value;
    let Product_Qty = Qty.value;
    let Total_Price = TotalPrice.value;
    if (isEmpty(Product_Name)) {
      ErrorToast("Product Name Required");
    } else if (isEmpty(Product_Code)) {
      ErrorToast("Product Code Required");
    } else if (isEmpty(Product_Img)) {
      ErrorToast("Product Image Required");
    } else if (isEmpty(Unit_Price)) {
      ErrorToast("Unit Price Required");
    } else if (isEmpty(Product_Qty)) {
      ErrorToast("Product Qty Required");
    } else if (isEmpty(Total_Price)) {
      ErrorToast("Total Price Required");
    } else {
      //Data Create
      Loader.classList.remove("d-none");
      Create(
        Product_Name,
        Product_Code,
        Product_Img,
        Unit_Price,
        Product_Qty,
        Total_Price
      ).then((result) => {
        if (result === true) {
          Loader.classList.add("d-none")
          SuccessToast("Data Saved Successfully");
          ProductName.value = "";
          ProductCode.value = "";
          Img.value = "";
          UnitPrice.value = "";
          Qty.value = "";
          TotalPrice.value = "";
          navigate("/")
        } else {
          ErrorToast("Request Failed. Try again");
        }
      });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 p-2">
          <label>Product Name</label>
          <input
            ref={(input) => (ProductName = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label>Product Code</label>
          <input
            ref={(input) => (ProductCode = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label>Image</label>
          <input
            ref={(input) => (Img = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label>Unit Price</label>
          <input
            ref={(input) => (UnitPrice = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label> Quantity</label>
          <input
            ref={(input) => (Qty = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label>Total Price</label>
          <input
            ref={(input) => (TotalPrice = input)}
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-4 p-2">
          <button onClick={SaveData} className="btn btn-primary w-100">
            Save
          </button>
        </div>
      </div>
      <div className="d-none" ref={(div)=>Loader=div}>
        <FullScreenLoader></FullScreenLoader>
      </div>
    </div>
  );
};

export default CreateForm;
