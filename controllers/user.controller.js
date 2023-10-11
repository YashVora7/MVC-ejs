const { name } = require("ejs")
const user = require("../models/user.schema")

const get =  async(req,res)=>{
    let data = await user.find()
    res.send(data)
}

const post = async (req,res)=>{
    let {email} = req.body
    let data =  await user.findOne({email:email})

    if(email != data){
        let print = await user.create(req.body)
        res.send(print)
    }
    else{
        res.send("User Already Exist")
    }
}

const login = async (req,res)=>{
    let {email , password }= req.body;
    let users = await user.find({email:email})
    let pass = await user.find({password:password})

    if(!email == users){
        res.send("User not found")
    }
    else if(!password == pass){
        res.send("Password is incorrect")
    }
    else{
        res.send("Login Successfully")
    }

}

const ui = (req,res)=>{
    res.render("index")
}

module.exports = {get, post, ui, login}