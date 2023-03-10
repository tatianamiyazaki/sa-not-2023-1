const conn = require('../config/database')

const controller ={}

controller.login = async (req, res) => {
    try{
        const sql = `
            select * from users where username = $1 and password = $2`
        //console.log('SQL: ', sql)

        //consulta SQL usando parâmetros
        const result = await conn.query(sql, [
            req.body.username,
            req.body.password
        ])
        console.log({result})

        if (result.rows.length > 0){
            res.render('loggedin',{
                title: 'Seja bem-vindo(a)',
                message: 'Autenticação concluída com sucesso'
            })
        }
        else{
            res.render('loggedin', {
                title: 'Acesso negado',
                message:'Usuário ou senha incorretos'
            })
        }
    }
    catch(error){
        res.render('error', { title: 'Erro', error})
    }
}

module.exports = controller