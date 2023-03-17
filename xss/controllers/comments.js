const conn = require('../config/database')

const controller = {}

controller.create = async (req, res) => {
    try{
        //salva o comentário no BD
        await conn.query(`
            insert into comments (comment)
            values ($1)
            `, [req.sanitize(req.body.comment)])

            //Redireciona de volta para o formulário
            res.redirect('/')
    }
    catch(error){
        console.error(error)
    }
}
module.exports = controller