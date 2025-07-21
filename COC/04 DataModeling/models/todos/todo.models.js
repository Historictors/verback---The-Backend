import mongoose from 'mongoose'

const todoSchema =new mongoose.Schema({
  content :{
            type :String,
            required : true
        },
        complete :{
            type : Boolean,
            default : false // setting default value
        },
        createdBy : {
            type : mongoose.Schema.Types.ObjectId, // giving refernce of another schema
            ref : 'User'
            // by doing this we are telling mongoose that this filed is storing a objectId which is given by mongoDB to uniquely identify documents
        },
        subTodos : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'subTodo'
            }
        ]
},{timestamps:true}
)

export const Todo = mongoose.model('Todo',todoSchema);
