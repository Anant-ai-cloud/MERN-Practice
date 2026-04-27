import User from "../models/user.model.js";

const giveGreater25 = async(req, res)=>{
    try {

        const users = await User.find({ age: { $gt:25 } })
        
    } catch (error) {
        console.log(error)
    }
}

const updateUseremail = async(req, res)=>{
    try {
        const userId = req.params.id
        const { email } = req.body
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                $set:{
                    email
                }
            }, 
            {new:true}
        ).select("-password")
        
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async(req, res)=>{
    try {

        const userId = req.params.id
        const deleted = await User.findByIdAndDelete(userId)
        
    } catch (error) {
        console.log(error)
    }
}

const sortedUser = async(req, res)=>{
    try {
        const users = await User.find().sort({ createdAt: -1}).limit(10).select("-password")
        
    } catch (error) {
        console.log(error)
    }
}