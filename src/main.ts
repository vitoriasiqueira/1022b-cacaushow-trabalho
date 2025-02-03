import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'
import BancoMysql from './db/bancoMysql'

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

app.get("/chocolates/:id",async(req,res)=>{
    try{
        const banco = new BancoMysql();
        const result = await banco.listarPorId(req.params.id)
        console.log(result)
        await banco.end()
        res.send(result)
    }catch(e){
        console.log(e)
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

app.delete("/chocolates/:id",async (req,res)=>{
    console.log("Tentando excluir o chocolate com id:",req.params.id)
    try{
        const sqlQuery = "DELETE FROM chocolates WHERE id = ?"
        const parametro = [req.params.id]

        const banco = new BancoMysql();

        const result = await banco.excluir(req.params.id)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});

app.put("/chocolates/:id",async (req,res)=>{
    console.log("Tentando alterar o chocolate com id:",req.params.id)
    try{
        const {nome,descricao,preco,imagem} = req.body
        //const sqlQuery = "UPDATE chocolates SET nome=?,descricao=?,preco=?,imagem=? WHERE id = ?"
        const chocolate = {nome,descricao,preco,imagem}

        const banco = new BancoMysql();

        const result = await banco.alterar(req.params.id,chocolate)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
})

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

app.delete("/clientes/:id",async (req,res)=>{
    console.log("Tentando excluir o cliente com id:",req.params.id)
    try{
        const sqlQuery = "DELETE FROM clientes WHERE id = ?"
        const parametro = [req.params.id]

        const banco = new BancoMysql();

        const result = await banco.excluir(req.params.id)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});

app.put("/clientes/:id",async (req,res)=>{
    console.log("Tentando alterar o cliente com id:",req.params.id)
    try{
        const {nome,descricao,preco,imagem} = req.body
        //const sqlQuery = "UPDATE clientes SET nome=?,descricao=?,preco=?,imagem=? WHERE id = ?"
        const cliente = {nome,descricao,preco,imagem}

        const banco = new BancoMysql();

        const result = await banco.alterar(req.params.id,cliente)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
})

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

app.delete("/pagamentos/:id",async (req,res)=>{
    console.log("Tentando excluir o pagamento com id:",req.params.id)
    try{
        const sqlQuery = "DELETE FROM pagamentos WHERE id = ?"
        const parametro = [req.params.id]

        const banco = new BancoMysql();

        const result = await banco.excluir(req.params.id)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});

app.put("/pagamentos/:id",async (req,res)=>{
    console.log("Tentando alterar o pagamento com id:",req.params.id)
    try{
        const {nome,descricao,preco,imagem} = req.body
        //const sqlQuery = "UPDATE pagamentos SET nome=?,descricao=?,preco=?,imagem=? WHERE id = ?"
        const pagamento = {nome,descricao,preco,imagem}

        const banco = new BancoMysql();

        const result = await banco.alterar(req.params.id,pagamento)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
})

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

app.delete("/estoques/:id",async (req,res)=>{
    console.log("Tentando excluir o estoque com id:",req.params.id)
    try{
        const sqlQuery = "DELETE FROM estoque WHERE id = ?"
        const parametro = [req.params.id]

        const banco = new BancoMysql();

        const result = await banco.excluir(req.params.id)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});

app.put("/estoques/:id",async (req,res)=>{
    console.log("Tentando alterar o estoque com id:",req.params.id)
    try{
        const {nome,descricao,preco,imagem} = req.body
        //const sqlQuery = "UPDATE estoques SET nome=?,descricao=?,preco=?,imagem=? WHERE id = ?"
        const estoque = {nome,descricao,preco,imagem}

        const banco = new BancoMysql();

        const result = await banco.alterar(req.params.id,estoque)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
})


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

app.delete("/promocoes/:id",async (req,res)=>{
    console.log("Tentando excluir a promoção com id:",req.params.id)
    try{
        const sqlQuery = "DELETE FROM promocoes WHERE id = ?"
        const parametro = [req.params.id]

        const banco = new BancoMysql();

        const result = await banco.excluir(req.params.id)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
});

app.put("/promocoes/:id",async (req,res)=>{
    console.log("Tentando alterar a promoção com id:",req.params.id)
    try{
        const {nome,descricao,preco,imagem} = req.body
        //const sqlQuery = "UPDATE promocoes SET nome=?,descricao=?,preco=?,imagem=? WHERE id = ?"
        const promocoes = {nome,descricao,preco,imagem}

        const banco = new BancoMysql();

        const result = await banco.alterar(req.params.id,promocoes)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }
})


app.listen(8000,()=>{
    console.log("SERVIDOR INICIADO NA PORTA 8000")
})