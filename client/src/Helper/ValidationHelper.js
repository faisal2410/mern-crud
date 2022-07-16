import { toast } from 'react-toastify';
const isEmpty=(value)=>{
    if(value.length===0){
        return true;
    }else{
        return false;
    }

}
const SuccessToast=(msg)=>{
    toast.success(msg)

}
const ErrorToast=(msg)=>{
    toast.error(msg)

}

export {isEmpty,SuccessToast,ErrorToast};