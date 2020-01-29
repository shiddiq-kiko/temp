const {Contact, Phase, ContactPhase} = require('../models')
const errorForm = require('../helpers/errorForm')

class Controller {
    static add(req, res){
        res.render('addForm.ejs', {error : false})
    }
    static create(req, res){
        const body = {
            id : req.body.id,
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            phone_number : req.body.phone_number,
            phone_number_2 : req.body.phone_number_2,
            email : req.body.email,
            work_period : req.body.work_period,
            phases : req.body.phases
        }
        const newContact = body
        if(newContact.phases.length > 3){
            const numPhaseError = 'Only allowed to take 3 phase max'
            res.render('addForm.ejs', {error : numPhaseError})
        }
        else {
            let flag = true
            let numPhaseError = ''
            if(newContact.phases.length > 1){
                for(let i = 0; i < newContact.phases.length; i++){
                    if(+newContact.work_period < 6 && newContact.phases[i] === '3'){
                        numPhaseError = 'You must have work for 6 month to take phase 3'
                        flag = false
                    }
                    else if(+newContact.work_period < 2 && newContact.phases[i] != '0' || +newContact.work_period < 2 && newContact.phases[i] != '1'){
                        numPhaseError = 'You must have work for more than 2 month to take phase 2 or greater'
                        flag = false
                    }
                }
            }
            else if(newContact.phases.length < 2){
                if(+newContact.work_period < 6 && newContact.phases === '3'){
                    numPhaseError = 'You must have work for 6 month to take phase 3'
                    flag = false
                }
                else if(+newContact.work_period < 2 && newContact.phases === '2' || +newContact.work_period < 2 && newContact.phases === '3'){
                    numPhaseError = 'You must have work for more than 2 month to take phase 2 or greater'
                    flag = false
                }
            }
            if(flag === false){
                res.render('addForm.ejs', {error : numPhaseError})
            }
            else{
                Contact.create(newContact)
                    .then(result => {
                        // res.send(newContact)
                        if(newContact.phases.length > 1){
                            let  promises = newContact.phases.map( phase => {
                                return ContactPhase.create({
                                    ContactId : result.id,
                                    PhaseId : +phase+1
                                })
                            })
                            return Promise.all(promises)
                        }
                        else{
                            return ContactPhase.create({
                                ContactId : result.id,
                                PhaseId : +newContact.phases+1
                            })
                        }
                        // ContactPhase.bulk
                    })
                    .then( result => {
                        res.redirect('/contacts')
                    })
                    .catch(err => {
                        // res.send(err)
                        res.render('addForm.ejs', {error : err.errors})
                    })
            }
        }
    }
    static readAll(req, res){
        Contact.findAll({
            order : [['id']],
            include : Phase
        })
            .then(result => {
                // res.send(result)
                res.render('contact.ejs', {result})
            })
            .catch(err => {
                res.send(err)
            })
    }
    static readOne(req, res){
        const id = req.params.id
        Contact.findByPk(id, {
            include : Phase
        })
        .then(result => {
                let filtered = [0, 1, 2, 3]
                for(let i = 0; i < result.Phases.length; i++){
                    if(+result.Phases[i].name === filtered[+result.Phases[i].name]) filtered[+result.Phases[i].name] = true
                }
                res.render('editContact.ejs', {result, filtered})
            })
            .catch(err => {
                res.send(err)
            })
    }
    static edit(req, res){
        const body = {
            id : req.body.id,
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            phone_number : req.body.phone_number,
            phone_number_2 : req.body.phone_number_2,
            email : req.body.email,
            work_period : req.body.work_period,
            phases : req.body.phases
        }
        const newData = body
        const id = req.params.id
        // res.send(newData)
        if(newData.phases.length > 3){
            const numPhaseError = 'Only allowed to take 3 phase max'
            res.render('addForm.ejs', {error : numPhaseError})
        }
        else {
            let flag = true
            let numPhaseError = ''
            if(newData.phases.length > 1){
                for(let i = 0; i < newData.phases.length; i++){
                    if(+newData.work_period < 6 && newData.phases[i] === '3'){
                        numPhaseError = 'You must have work for 6 month to take phase 3'
                        flag = false
                    }
                    else if(+newData.work_period < 2 && newData.phases[i] != '0' || +newData.work_period < 2 && newData.phases[i] != '1'){
                        numPhaseError = 'You must have work for more than 2 month to take phase 2 or greater'
                        flag = false
                    }
                }
            }
            else if(newData.phases.length < 2){
                if(+newData.work_period < 6 && newData.phases === '3'){
                    numPhaseError = 'You must have work for 6 month to take phase 3'
                    flag = false
                }
                else if(+newData.work_period < 2 && newData.phases === '2' || +newData.work_period < 2 && newData.phases === '3'){
                    numPhaseError = 'You must have work for more than 2 month to take phase 2 or greater'
                    flag = false
                }
            }
            if(flag === false){
                res.render('errorEditForm.ejs', {error : numPhaseError, id})
            }
            else{

                Contact.update(newData, {where : {
                    id : id
                }})
                    .then(result => {
                        return ContactPhase.destroy({where : {ContactId : id}})
                    })
                    .then(result => {
                        if(newData.phases.length > 1){
                            let  promises = newData.phases.map( phase => {
                                return ContactPhase.create({
                                    ContactId : id,
                                    PhaseId : +phase+1
                                })
                            })
                            return Promise.all(promises)
                        }
                        else{
                            return ContactPhase.create({
                                ContactId : id,
                                PhaseId : +newData.phases+1
                            })
                        }
                    })
                    .then(result => {
                        res.redirect('/contacts')
                    })
                    .catch(err => {
                        // res.send(err)
                        res.render('errorEditForm.ejs', {error : err.errors, id})
                    })
            }
        }
    }
    static delete(req, res){
        const id = req.params.id
        ContactPhase.destroy({where : {ContactId : id}})
            .then(result => {
                return Contact.destroy({where : {id : id}})
            })
            .then(result => {
                
                res.redirect('/contacts')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Controller