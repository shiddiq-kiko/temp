class Middleware{
    static checkLogin(req, res, next){
        if(req.session.isLogin) next()
        else res.render('errorLogin.ejs')
    }
}

module.exports = Middleware