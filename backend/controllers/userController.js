import {User} from "../models/usermodel.js";
import bcrypt from "bcryptjs";
export const register = async(req,res)=>{
    try {
        const {fullname,username,password,confirmPassword,gender} = req.body;
        if(!fullname || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message:"All fields are required"});
        }

        if(password != confirmPassword){
            return res.status(400).json({message:"Password does not match!"});
        }

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message:"User already exists!"});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`

        await User.create({
            fullname,
            username,
            password:hashedPassword,
            profilePhoto:gender === "male"? maleProfilePhoto:femaleProfilePhoto,
            gender
        });
        return res.status(201).json({
            message:"Account created Successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
        
    }
};

