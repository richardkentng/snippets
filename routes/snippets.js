const db = require('../models')
const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
// const { EmptyResultError } = require('sequelize/types');


const router = express.Router();


//render main search page
router.get('/', (req, res) => {
    res.render('snippets/index.ejs')
})

//render new.ejs
router.get('/new',isLoggedIn,(req,res)=>{
    res.render('snippets/new.ejs')
})

//process submitted new form
router.post('/', (req,res) => {
    console.log('-----------req.user----------');
    console.log(req.user);
    console.log('---------------------');
    console.log('-----------req.session----------');
    console.log(req.session);
    console.log('---------------------');
    //create snippet with submitted new form data
    db.snippet.create({
        where: {
            tag : req.body.newTag,
            value: req.body.newValue
        }
    }).then((createdSnippet) => {
        console.log('-------------createdSnippet---------');
        console.log(createdSnippet);
        console.log('---------------------');

        // db.user.findOne().then((foundUser) => {
        //     foundUser.addSnippet(createdSnippet)
        //     res.redirect('/snippets')
        // })
            res.redirect('/snippets')

    })
})


module.exports = router;