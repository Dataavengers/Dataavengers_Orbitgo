import db from "../models/users.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

let loginId;
let userName;
const createUser = async (req, res, next) => {
    let existingUser;
    try{
        existingUser = await db.findOne({email: req.body.email});
    }catch (err) {
        console.log({message: err.message});
    }

    if(existingUser){
        res.send({message: "user allready exist!"});
        console.log("user allready exist!");
    }else{
        try{
            const {user_id, email, phone, address, firstname, lastname, faculty, password, confirm_password, profile} = req.body;
            if(password == confirm_password){
                const hashedPassword = bcrypt.hashSync(password);
                const newUser = new db({
                    user_id,
                    email,
                    phone,
                    address,
                    firstname,
                    lastname,
                    faculty,
                    profile,
                    password: hashedPassword
                });

                await newUser.save();
                res.status(201).json({message: "successfully register!"});
                console.log("successfully register!");
            }else{
                res.send({message: "password did't match!"});
                console.log("password did't match!");
            }
        }catch (error) {
            res.status(409).json({message: err.message});
            console.log(err.message);
        }
    }
}

const loginUser = async (req, res, next) => {
    let existingUser;
    const {email, password} = req.body;

    try{
        existingUser = await db.findOne({email: email});
    }catch(err) {
        res.send({message: err.message});
    }

    try {
        if(existingUser){
            let isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
            if(isPasswordCorrect){
                const token = jwt.sign({id: existingUser._id}, process.env.secret_key, {expiresIn: process.env.expiresIn});
                console.log("Generated token\n", token);
                if(req.cookies[`${existingUser._id}`]){
                    req.cookies[`${existingUser._id}`] = "";
                }
                res.cookie(String(existingUser._id), token, {
                    path: '/',
                    expires: new Date(Date.now() + 1000 * process.env.expires),
                    httpOnly: true,
                    sameSite: 'lax'
                });
                res.send({message: "user sccessfully login!", user: existingUser.firstname + " " + existingUser.lastname, token});
                loginId = existingUser._id.toString();
                userName = existingUser.user_id;
                console.log("user sccessfully login!");
            }else{
                res.send({message: "incorrect password"});
                console.log("incorrect password!");
            }
        }else{
            res.send({message: "user doesn't exist!"});
            console.log("user doesn't exist!");
        }
    } catch (err) {
        res.send({message: err.message});
        console.log(err.message);
    }
}

const verifyToken = (req, res, next) => {
    let token = "";
    let cookies = req.headers.cookie;
    if(cookies){
        token = cookies.split("=")[1];
    }
    if(!token){
        res.send({message: "Please Login!"});
    }else{
        jwt.verify(String(token), process.env.secret_key, (err, user) => {
            if(err){
                res.send({message: "Invalid token!"})
            }else{
                req.id = user.id;
            }
            next();
        });
    }
}

const refreshToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    const prevToken = cookies.split("=")[1];
    if(!prevToken){
        res.send({message: "Couldn't find token"});
    }else{
        jwt.verify(String(prevToken), process.env.secret_key, (err, user) => {
            if(err){
                res.send({message: err.message});
            }else{
                res.clearCookie(`${user.id}`);
                req.cookies[`${user.id}`] = "";
                const token = jwt.sign({id: user.id}, process.env.secret_key, {expiresIn: process.env.expiresIn});
                console.log("Regenerated token\n", token);
                res.cookie(String(user.id), token, {
                    path: '/',
                    expires: new Date(Date.now() + 1000 * process.env.expires),
                    httpOnly: true,
                    sameSite: 'lax'
                });
                req.id = user.id;
                next();
            }
        });
    }
}

const logout = (req, res, next) => {
    const cookies = req.headers.cookie;
    const prevToken = cookies.split("=")[1];

    if(!prevToken){
        return res.status(400).json({message: "could't find token"});
    }
    jwt.verify(String(prevToken), process.env.secret_key, (err, user) => {
        if(err){
            res.send({message: err.message});
        }else{
            res.clearCookie(`${user.id}`);
            req.cookies[`${user.id}`] = "";
            return res.status(200).json({message: "successfully logged out"});
        }
    });
}

module.exports = { createUser, loginUser, verifyToken, refreshToken, logout };