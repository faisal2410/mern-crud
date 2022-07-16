const productsModel=require('../models/productsModel');

// C=Create

exports.CreateProduct=(req,res)=>{

let reqBody=req.body;
productsModel.create(reqBody,(err,data)=>{
    if(err){
        res.status(400).json({status:"Fail",data:err})
    }else{
        res.status(200).json({status:"Success",data:data})
    }


})

}
// R=Read
exports.ReadProduct=(req,res)=>{
    
    productsModel.find((err,data)=>{
        if(err){
            res.status(400).json({status:"Fail",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }

    })

}
// Read by Id
exports.ReadProductById=(req,res)=>{
    let id=req.params.id;
    let query={_id:id};   
    productsModel.find(query,(err,data)=>{
        if(err){
            res.status(400).json({status:"Fail",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }

    })

}

// U=Update
exports.UpdateProduct=(req,res)=>{
    let id=req.params.id;
    let Query={_id:id};
    let reqBody=req.body;

    productsModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Fail",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }

    })
}
//D=Delete

exports.DeleteProduct=(req,res)=>{
    let id=req.params.id;
    let Query={_id:id};
    productsModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"Fail",data:err});
        }else{
            res.status(200).json({status:"Success",data:data})
        }
    })


}