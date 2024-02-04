import Product from "../model/productSchema.js"


export const getProducts =async (request,response)=>{
    try{
        const products = await Product.find({})
        response.status(200).json(products)

    }catch(error){
        response.status(500).json({message:error.message})
    }
}

export const getProductById = async(request,response)=>{
    try{
        const id = request.params.id
        //const titleShort = decodeURIComponent(request.params.titleShort);

        const product= await Product.findOne({'id':id /* 'title.shortTitle': titleShort */ })
        response.status(200).json(product)
    }
    catch (error){
        response.status(500).json({message:error.message})
    }
}