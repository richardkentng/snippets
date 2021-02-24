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
        db.user.findOne ().then((foundUser) => {
            foundUser.addSnippet(createdSnippet)
            res.redirect('/snippets')
        })
    })
})

router.get('/', (req,res)=>{
    res.render('index.ejs')
})

router.get('/new',isLoggedIn,(req,res)=>{
    console.log("----isloggedIN------", isLoggedIn)
    res.render('snippets/new.ejs')
    console.log("----isloggedOut------", isLoggedIn)
    
})

module.exports = router;