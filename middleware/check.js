// const check = (req,res,next)=>{
//     let {email, password} = req.body

//     if(email&&password){
//         next()
//     }
//     else{
//         res.status(404).send("All fields are required")
//     }
// }

const isAuth = (req, res, next)=>{

    if(req.user){
        return next()
    }
    else{
        res.redirect("/user/login")
    }

}

module.exports = isAuth 