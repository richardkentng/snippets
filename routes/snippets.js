const db = require('../models')
const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
// const { EmptyResultError } = require('sequelize/types');


const router = express.Router();


//render main search page
router.get('/', (req, res) => {
    
    db.user.findOne({
        where: {
            id: req.session.passport.user
        }
    }).then(currentUser => {

        currentUser.getSnippets().then(currentUserSnippets => {

            res.render('snippets/index.ejs', {
                user: currentUser,
                snippets: currentUserSnippets
            })
        })

    })
})

//render new.ejs
router.get('/new',isLoggedIn,(req,res)=>{
    res.render('snippets/new.ejs')
})

//process submitted new form
router.post('/', (req, res) => {

    db.snippet.findOrCreate({
        where: {
            tag: req.body.newTag,
            value: req.body.newValue
        }
    }).then(([createdSnippet, created]) => {
        db.user.findOne({
            where: {
                id: req.session.passport.user
            }
        }).then((foundUser) => {
            foundUser.addSnippet(createdSnippet)


            console.log(foundUser)
            res.redirect('/snippets')
        })
    })
})


router.get("/edit/:id", (req, res) => {
    db.snippet.findByPk(req.params.id).then(foundSnippet => {
        res.render("snippets/edit" , { snippet: foundSnippet })
    })
})

router.put("/", isLoggedIn, (req, res) => {
    db.snippet.update({
        tag: req.body.editedTag,
        value: req.body.editedValue
    },
    {
        where: {
            id: req.body.snippetId
        }
    }).then(numUpdated => {
        console.log(numUpdated)
        res.redirect("/snippets")
    })
})

router.delete("/delete/:id" , (req, res) => {
    
    db.snippet.destroy({
        where: {
            id: req.params.id
        }
    })
    res.redirect("/snippets")
})

module.exports = router;