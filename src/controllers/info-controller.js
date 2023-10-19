const {StatusCodes} = require('http-status-codes');
const info = (req,res)=>{
    return res.status(StatusCodes.OK).json({
        succcess:true,
        message:'API is live',
        error:{},
        date:{}
    })
}

module.exports = {
    info
}