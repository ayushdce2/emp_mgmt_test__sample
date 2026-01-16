const Joi = require('joi');

const isLeaveDataValid = (req,res,next)=>{
    console.log(req.body,"req.body")
    const {reason } = req.body;
    const schema = Joi.object({
        reason:Joi.string().min(5).required()
        // email:Joi.string().email().required()
    });

    const {error} = schema.validate({reason});

    if(error){
        
        return res.status(400).json({message:"BAD request", error})
    }
// console.log("working in validation")
    next();
}


module.exports = {
    isLeaveDataValid
}