import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
export const register = async(req, res) => {
    //db oprtions 
    const {username, email , phone , password} = req.body;
    console.log(username, email , phone , password , `-------`)
    //hash the Password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword);
    const newUser = await prisma.user.create({ 
        data:{
            username,
            email,
            phone:phone,
            password:hashedPassword
        }
    })
    console.log(newUser)
}
export const login = (req, res) => {
    //db oprtions
}
export const logout = (req, res) => {
    //db oprtions
}