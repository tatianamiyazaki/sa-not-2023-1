const { Pool } = require('pg')

const conn = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

//Testando a conexão
async function testConn(){
    try{
        conn.query('select now()')
        console.log('POSTGRES: conexão estabelecida')
    }
    catch(error){
        console.error('** POSTGRES: ERRO => ' + error)
    }
}

testConn()

module.exports = conn
