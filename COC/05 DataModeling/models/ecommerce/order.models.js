import mongoose from 'mongoose'

const orderItemSchema  = mongoose.Schema({
    productId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
    },
    quantity :{
        type : Number,
        required :true,
        defaulr :1,
    }
})

const orderSchema = new mongoose.Schema({

    orderPrice :{
        type :Number,
        required : true,
    },
    customer :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    objectItems :{
        type :[orderItemSchema],
    },
    address :{
        type :String,
        required :true,
    },
    status :{
        type :String,
        enum : ['PENDING','CANCELLED','DELIVERED'],// enum means choices , in this fied we can choose vaules that are in enum
        default : 'PENDING'
    }

    },{timestamps:true}
)

export const Order = mongoose.model('Order',orderSchema);