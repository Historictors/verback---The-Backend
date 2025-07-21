import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    // first object defines what data we are taking or storing , the secondry or second objectto stroe timestamps createdAt(),modifiedAt()
    {   
        /*when we create a schema using mongoose we can 
        simple gives its dataType or we can assign a object with properties to that key.
        */
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true
        }, 
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase :true
        },
        password :{
            type :String,
            required : [true,"password must be passed"], // if not true prints that error msg,
            //  it is a shorcut to validate is it passd or not , if not give a error
        },
        moblieNo : Number
    },{timestamps : true}
)

export const User = mongoose.model('User',userSchema) 