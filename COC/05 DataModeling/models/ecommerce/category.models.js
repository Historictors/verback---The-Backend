import mongoose from 'mongoose'

const categoryScheam = new mongoose.Schema({
    name : {
        type :String,
        required :true,
    },
    createdBy :{
        username : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
 

    },{timestamps :true}
)

export const Category = mongoose.model('Category',categoryScheam) 