const {Router} = require("express")
const {get, post, ui, login, getUser, loginUI} = require("../controllers/user.controller")
const check = require("../middleware/check")
const route = Router()


route.get("/",get)
route.post("/signup",check,post)
route.get("/ui",ui)
route.post("/login",login)
route.get("/login",loginUI)
route.get("/render",getUser)


module.exports = route