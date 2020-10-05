const {Monster} = require('../models/monster')
const {Campaign} = require('../models/campaign')
const { User } = require('../models/user')

module.exports = {
    all_monsters:(req, res)=>{
        Monster.find({}).sort({type: 'asc'})
        .then(all_monsters => {
            console.log('Here are all the users', all_monsters)
            res.json(all_monsters)
        })
        .catch(err => {
            console.log('Error when showing all users', err)
            res.json(err)
        })
    },
    add_monster:(req, res) => {
        User.findOne({_id: req.params.userid})
        .then(user => {
            const monster = new Monster()
            monster.name = req.body.name
            monster.ac = req.body.ac
            monster.health = req.body.health
            monster.description = req.body.description
            monster.save()
            .then(new_monster => {
                user.campaigns.monsters.push(new_monster)
                user.save()
                .then(data => res.json(data))
                .catch(err => {
                    console.log('Error when saving new monster', err)
                    res.json(err)
                })
            })
            .catch(err => {
                console.log('Error when creating new monster', err)
                res.json(err)
            })
        })
        .catch(err => {
            console.log('Error when finding user', err)
            res.json(err)
        })
    },
    edit_monster: (req,res) => {
        Monster.findOne({_id: req.params.id})
        .then(monster => {
            monster.name = req.body.name
            monster.ac = req.body.ac
            monster.health = req.body.health
            monster.description = req.body.description
            monster.save()
            .then(monster => {
                Campaign.findOne({_id: req.params.id})
                .then(campaign_update => {
                    campaign_update.monsters.push(monster)
                    campaign_update.save()
                    .then(updated_campaign => {
                        User.findOne({_id: req.params.id})
                        .then(user_to_update => {
                            //finish this up later
                        })
                    })
                    .catch(err => {
                        console.log('Error when creating new user', err)
                        res.json(err)
                    })
                })
                .catch(err => {
                    console.log('Error when creating new user', err)
                    res.json(err)
                })
            })
            .catch(err => {
                console.log('Error when creating new user', err)
                res.json(err)
            })
        })
        .catch(err => {
            console.log('Error when creating new user', err)
            res.json(err)
        })
    }
}