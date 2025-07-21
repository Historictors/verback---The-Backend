import mongoose from 'mongoose'

const subTodoSchema = new mongoose.Schema(
    {
      content:{
        type :String,
        required :true,
      },
      complete :{
        type : Boolean,
        default : false,
      }, 
      createdBy :{
        type : mongoose.schema.Types.ObjectId,
        ref : 'User',
      }
    },{timestamps :true}
    // timestamps give two fields createdAt(),updatedAt()
)
export const subTodo = mongoose.model('subTodo',subTodoSchema)