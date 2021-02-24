const db = require('../models')
const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
// const { EmptyResultError } = require('sequelize/types');


const router = express.Router();

router.post('/', (req,res) => {

    db.snippet.findOrCreate({
        where: {
            tag : req.body.newTag,
            value: req.body.newValue
        }
    }).then(([createdSnippet, created]) => {
        db.user.findOne ({
            where: {
                id : req.session.passport.user

            }
        }).then((foundUser) => {
            foundUser.addSnippet(createdSnippet)


            console.log(foundUser)
            res.redirect('/snippets')
        })
    })
})

router.get('/', (req,res)=>{
    res.render('index.ejs')
})

router.get('/new',isLoggedIn,(req,res)=>{
   
    res.render('snippets/new.ejs')
   
    
})

module.exports = router;