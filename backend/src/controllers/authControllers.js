import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const Signup = async(req, res)=>{
    try {

        const {fullName, email, password} = req.body
        
    } catch (error) {
        console.log(error)
    }
}