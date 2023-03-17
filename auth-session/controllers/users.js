const conn = require('../config/database')

const controller = {}

controller.formNew = (req, res) => {
    res.render('user_form',{
        title: 'Cadastrar novo usuário'
    })
}

module.exports = controller