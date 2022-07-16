import axios from "axios";

const Create = (
  ProductName,
  ProductCode,
  Img,
  UnitPrice,
  Qty,
  TotalPrice
) => {
  let URL = "/api/v1/CreateProduct";
  let postBody = {
    ProductName: ProductName,
    ProductCode: ProductCode,
    Img: Img,
    UnitPrice: UnitPrice,
    Qty: Qty,
    TotalPrice: TotalPrice,
  };
  return axios
    .post(URL, postBody)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
const Read = () => {
  let URL = "/api/v1/ReadProduct";
  return axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        return res.data["data"];
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
const Delete = (id) => {
  let URL = `/api/v1/DeleteProduct/${id}`;
  return axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
const Update = (
  id,
  ProductName,
  ProductCode,
  Img,
  UnitPrice,
  Qty,
  TotalPrice
) => {
  let URL = `/api/v1/UpdateProduct/${id}`;
  let postBody = {
    ProductName: ProductName,
    ProductCode: ProductCode,
    Img: Img,
    UnitPrice: UnitPrice,
    Qty: Qty,
    TotalPrice: TotalPrice,
  };
  return axios
    .post(URL, postBody)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export{Create,Read,Delete,Update};

