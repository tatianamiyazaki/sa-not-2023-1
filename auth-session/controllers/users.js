const conn = require('../config/database')
const bcrypt = require('bcrypt')

const controller = {}

//Front-end
controller.formNew = (req, res) => {
    res.render('user_form',{
        title: 'Cadastrar novo usuário'
    })
}


//Back-end
controller.create = async(req, res) => {
    try{
        //TODO: fazer validação dos dados recebidos

        //Encriptar a senha
        req.body.password = await bcrypt.hash(req.body.password, 12)

        await conn.query(`
            insert into users (fullname, username, password)
            values ($1, $2, $3)
        `, [
            req.body.fullname,
            req.body.username,
            req.body.password
        ])

        res.render('user_form', {
            title: 'Cadastrar novo usuário',
            message: 'Usuário cadastrado com sucesso'
        })
    }
    catch(error){
        console.error(error)
    }


    controller.auth = async (req, res) => {
        try{
            const result = conn.query(`
                select * from users
                where username = $1 and password = $2
            `[
                req.body.username,
                req.body.password

            ])
            console.log({resultado: result.rows})

            const user = result.rows[0] //conferir

            const passwordOK = await bcrypt.compare(req.body.password, user.password)

            if(passwordOK){
                //1) verificar se uma sessão foi criada
                //2) redirecionar para uma view com mensagem de sucesso
            }
            else{
                //1) destruir sessão, se houver
                //2) redirecionar para uma view com mensagem de erro
            }
        }
        catch(error){
            console.error(error)
        }
    }

    controller.formLogin = (req, res) =>{
        res.render ('user_login', {
            title: 'Fazer login'
        })
    }
    

  
}

module.exports = controller