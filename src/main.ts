import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'

const app = express()

app.use(express.json())  
app.use(cors())

app.get("/chocolates",async(req,res)=>{  

    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"cacaushow",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
       
        const [result,fields]  = await conexao.query("SELECT * FROM chocolates")
        await conexao.end()
    
        res.send(result)
    }catch(e){
        res.status(500).send("Erro do servidor")
    }
});

app.post("/chocolates",async(req,res)=>{  
    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"cacaushow",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        const {id,nome,descricao,preco,imagem} = req.body
        const [result,fields]  = await conexao.query("INSERT INTO chocolates VALUES (?,?,?,?,?)",[id,nome,descricao,preco,imagem])
        await conexao.end()
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});

app.get("/cliente",async(req,res)=>{

    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"cacaushow",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
    
        const [result,fields]  = await conexao.query("SELECT * FROM cliente")
        await conexao.end()

        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});

app.post("/cliente",async(req,res)=>{  
    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"cacaushow",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        const {clienteId,nome,cpf} = req.body
        const [result,fields]  = await conexao.query("INSERT INTO cliente VALUES (?,?,?)",[clienteId,nome,cpf])
        await conexao.end()
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});

app.get("/pagamento",async(req,res)=>{

    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"cacaushow",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
    
        const [result,fields]  = await conexao.query("SELECT * FROM pagamento")
        await conexao.end()

        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});

app.post("/pagamento",async(req,res)=>{  
    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"cacaushow",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        const {idpagamento,formapag,descricao,valor} = req.body
        const [result,fields]  = await conexao.query("INSERT INTO pagamento VALUES (?,?,?,?)",[idpagamento,formapag,descricao,valor])
        await conexao.end()
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});


app.get("/estoque",async(req,res)=>{

    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"cacaushow",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
    
        const [result,fields]  = await conexao.query("SELECT * FROM estoque")
        await conexao.end()

        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});

app.post("/estoque",async(req,res)=>{  
    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"cacaushow",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        const {itemId,nomeProduto,quantidade,localizacao} = req.body
        const [result,fields]  = await conexao.query("INSERT INTO estoque VALUES (?,?,?,?)",[itemId,nomeProduto,quantidade,localizacao])
        await conexao.end()
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});

app.get("/promocoes",async(req,res)=>{

    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"cacaushow",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
    
        const [result,fields]  = await conexao.query("SELECT * FROM promocoes")
        await conexao.end()

        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});

app.post("/promocoes",async(req,res)=>{  
    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"cacaushow",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        const {idpromocao,titulo,descricao,validade,cupom} = req.body
        const [result,fields]  = await conexao.query("INSERT INTO promocoes VALUES (?,?,?,?,?)",[idpromocao,titulo,descricao,validade,cupom])
        await conexao.end()
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});

app.listen(8000,()=>{
    console.log("SERVIDOR INICIADO NA PORTA 8000")
})
