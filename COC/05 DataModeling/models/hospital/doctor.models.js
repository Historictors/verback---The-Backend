import mongoose from 'mongoose'

const hospitalHoursSchema = new mongoose.Schema({
    workHour :{
        type :Number,
        required :true,
        default : 0,
    },
    workHospital :{
        type : mongoose.Schema.Types.ObjectId,
        ref :"Hospital",
        required:true,
        lowecase :true,
    }

},{timestamps:true})

const doctorSchema = new mongoose.Schema({

    name :{
        type :String,
        required :true,
    },
    salary :{
        type :Number,
        required:true,
    },
    qualification:{
        type : [String],
        required :true,
    },
    experinceInYears:{
        type : Number,
        default :0,
    },
    worksInHospitals:[hospitalHoursSchema]

},{timestamps:true})

export const Doctor = mongoose.model('Doctor',doctorSchema)