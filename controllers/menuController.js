const {Menu, Restaurant} = require('../models')
const Helper = require('../helper/currencyFormat')

class Controller {
    static readAll(req, res){
        Menu.findAll({
            include : Restaurant
        })
        .then(result => {
            for(let i = 0; i < result.length; i++) result[i].price = Helper.change(result[i].price)
            res.render('menus.ejs', {result})
        })
        .catch(err =>{
            res.send(err.errors[0].message)
        })
    }
    static readOne(req, res){
        const id = req.params.id
        Menu.findByPk(id)
        .then(result => {
            res.render('menuEdit.ejs', {result})
        })
        .catch(err => {
            res.send(err.errors[0].message)
        })
    }
    static add(req, res){
        const body = {
            name : req.body.name,
            menu_type : req.body.menu_type,
            rating : req.body.rating,
            price : req.body.price,
            RestaurantId : req.body.RestaurantId
        }
        Menu.create(body)
            .then(result =>{
                res.redirect('/menus')
            })
            .catch(err => {
                res.send(err.errors[0].message)
            })
    }
    static edit(req, res){
        const body = {
            name : req.body.name,
            menu_type : req.body.menu_type,
            rating : req.body.rating,
            price : req.body.price,
            RestaurantId : req.body.RestaurantId
        }
        const id = req.params.id
        Menu.update(body, {where : {
            id : id
        }})
        .then( result => {
            res.redirect('/menus')
        })
        .catch(err => {
            res.send(err.errors[0].message.errors[0].message)
        })
    }
    static delete(req, res){
        const id = req.params.id
        Menu.destroy({where : {
            id : id
        }})
        .then(result => {
            res.redirect('/menus')
        })
        .catch(err => {
            res.send(err.errors[0].message)
        })
    }
}

module.exports = Controller