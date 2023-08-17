import db from "../models/users.js"
import travels from "../models/travels.js"
import planets from "../models/planets.js"
import packages from "../models/packages.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import crypto from 'crypto'
import dotenv from 'dotenv'
dotenv.config();

let loginId;
export const createUser = async (req, res, next) => {
    let existingUser;
    try{
        existingUser = await db.findOne({username: req.body.username});
    }catch (err) {
        console.log({message: err.message});
    }

    if(existingUser){
        res.send({message: "user allready exist!"});
        console.log("user allready exist!");
    }else{
        try{
            const {name, username, password, confirm_password} = req.body;
            if(name && username && password && confirm_password){
                if(password == confirm_password){
                    const hashedPassword = bcrypt.hashSync(password);
                    const newUser = new db({
                        name,
                        username,
                        password: hashedPassword
                    });
    
                    await newUser.save();
                    res.status(201).json({message: "user successfully registered!"});
                    console.log("user successfully registered!");
                }else{
                    res.send({message: "password did't match!"});
                    console.log("password did't match!");
                }
            }else{
                res.send({message: "all field should be filled!"});
                console.log("all field should be filled!");
            }
        }catch (error) {
            res.status(409).json({message: err.message});
            console.log(err.message);
        }
    }
}

export const loginUser = async (req, res, next) => {
    let existingUser;
    const {username, password} = req.body;

    try{
        existingUser = await db.findOne({username: username});
    }catch(err) {
        res.send({message: err.message});
    }

    try {
        if(username && password){
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
                    res.send({message: "user sccessfully login!", user: existingUser.name, token});
                    loginId = existingUser._id.toString();
                    console.log("user sccessfully login!");
                }else{
                    res.send({message: "incorrect password"});
                    console.log("incorrect password!");
                }
            }else{
                res.send({message: "user doesn't exist!"});
                console.log("user doesn't exist!");
            }
        }else{
            res.send({message: "all field should be filled!"});
            console.log("all field should be filled!");
        }
        
    } catch (err) {
        res.send({message: err.message});
        console.log(err.message);
    }
}

export const getProfile = async (req, res, next) => {
    let user;

    try{
        user = await db.findById(loginId);
    }catch (err){
        res.send({message: err.message});
    }

    if(!user){
        res.send({message: "user not exist!"});
    }else{
        res.send(user);
    }
}

export const updateProfile = async (req, res, next) => {
    let user;
    const { name, username, password } = req.body;
    
    try {
        user = await db.findById(loginId);
        const updateName = name != "" ? name : user.name;
        const updateUsername = username != "" ? username : user.username;
        const hashedPassword = password != "" ? bcrypt.hashSync(password) : user.password;
        
        if(name || username || password){
            await db.findOneAndUpdate({
                _id: loginId,
                name: updateName,
                username: updateUsername,
                password: hashedPassword,
            });

            res.send({message: "profile updated successful!"});
        }else{
            res.send({message: "sorry something went wrong!"})
        }
    } catch (error) {
        res.send({error: error});
        console.log(error);
    }
}

export const getTrips = async (req, res, next) => {
    let tripDatas;

    try{
        tripDatas = await travels.find({user_id: loginId});
    }catch (err){
        res.send({message: err.message});
    }

    if(tripDatas.length == 0){
        res.send({message: "travel datas not exist!"});
    }else{
        res.send(tripDatas);
    }
}

export const getPlanets = async (req, res, next) => {
    let planetDatas;

    try{
        planetDatas = await planets.find();
    }catch (err){
        res.send({message: err.message});
    }

    if(planetDatas.length == 0){
        res.send({message: "planet datas not exist!"});
    }else{
        res.send(planetDatas);
    }
}

export const tripRequest = async (req, res, next) => {
    const { start_point, end_point, date, package_id, no_of_travellers, amount  } = req.body;
    try {
        const orderId = generateUniqueOrderId();
        const paymentURL = generatePaymentURL(orderId, amount, start_point, end_point, date, package_id, no_of_travellers);

        return res.redirect(paymentURL);
    } catch (error) {
        return res.send({ message: 'payment unsuccessfully!' });
    }
}

const generatePaymentURL = (orderId, amount, start_point, end_point, date, package_id, no_of_travellers) => {
    const merchantId = process.env.payment_merchant_id;
    const secret = process.env.payment_secret_key;
    const returnUrl = process.env.payment_return_url;
    const cancelUrl = process.env.payment_cancel_url;

    const payload = {
        merchant_id: merchantId,
        order_id: orderId,
        items: 'Trip Payment',
        amount: amount,
        currency: 'LKR',
        return_url: returnUrl,
        cancel_url: cancelUrl,
        start_point: start_point, 
        end_point: end_point, 
        date: date, 
        package_id: package_id, 
        no_of_travellers: no_of_travellers,
    };

    const params = new URLSearchParams(payload).toString();
    const checksum = crypto.createHmac('sha256', secret).update(params).digest('hex');

    return `https://sandbox.payhere.lk/pay/checkout?${params}&checksum=${checksum}`;
}

export const payHere = async (req, res, next) => {
    const { start_point, end_point, date, package_id, no_of_travellers } = req.query;
    try {
        const paymentSuccess = true; 

        if (paymentSuccess) {
            const barcode = generateBarcode(); 
            await addTravel(start_point, end_point, date, package_id, no_of_travellers, barcode);
            return res.send({ message: 'payment successful!' });
        } else {
            return res.send({ message: 'payment unsuccessful!' });
        }
    } catch (error) {
        return res.send({ message: 'something went wrong!' });
    }
}

export const cancelPayment = (req, res, next) => {
    return res.send({ message: 'payment canceled!' });
}

const addTravel = async (start_point, end_point, date, package_id, no_of_travellers, barcode) => {
    try{
        const newTravel = new travels({
            user_id: loginId,
            start_point,
            end_point,
            date,
            package_id,
            no_of_travellers,
            barcode,
        });
    
        await newTravel.save();
        res.send({message: "your trip successfully registered!"});
    }catch (error) {
        res.status(409).json({message: err.message});
        console.log(err.message);
    }
}

export const getPackages = async (req, res, next) => {
    let packageDatas;

    try{
        packageDatas = await packages.find();
    }catch (err){
        res.send({message: err.message});
    }

    if(packageDatas == 0){
        res.send({message: "package datas not exist!"});
    }else{
        res.send(packageDatas);
    }
}

export const searchPlanets = async (req, res, next) => {
    let planet;
    const { search } = req.body;

    try{
        planet = await planets.find({title: search});
    }catch (err){
        res.send({message: err.message});
    }

    if(planet.length == 0){
        res.send({message: "planet data not exist!"});
    }else{
        res.send(planet);
    }
}

export const verifyEntryPass = async (req, res, next) => {
    const { scannedBarcode } = req.body;

    try {
        const entry = await travels.findOne({ barcode: scannedBarcode });

        if (entry) {
            return res.send({ message: 'valid trip pass!' });
        } else {
            return res.send({ message: 'invalid trip pass!' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'something went wrong!' });
    }
}

export const verifyToken = (req, res, next) => {
    let token = "";
    let cookies = req.headers.cookie;
    if(cookies){
        token = cookies.split("=")[1];
    }
    if(!token){
        res.send({message: "please first you should login!"});
    }else{
        jwt.verify(String(token), process.env.secret_key, (err, user) => {
            if(err){
                res.send({message: "Invalid token!"});
            }else{
                req.id = user.id;
            }
            next();
        });
    }
}

export const refreshToken = (req, res, next) => {
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

export const logout = (req, res, next) => {
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
            return res.status(200).json({message: "user successfully logged out"});
        }
    });
}