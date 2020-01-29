const session = require("express-session")

class Controller {
    static form(req, res){
        res.render('login.ejs')
    }
    static login(req, res){
        req.session.isLogin = true
        res.redirect('/')
    }
    static logout(req, res){
        req.session.isLogin = false
        res.redirect('/')
    }
}

module.exports = Controller