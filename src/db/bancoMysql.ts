import mysql, { Connection } from 'mysql2/promise';

class BancoMysql {
    alterar(id: string, chocolate: { nome: any; descricao: any; preco: any; imagem: any; }) {
        throw new Error('Method not implemented.');
    }
    excluir(id: string) {
        throw new Error('Method not implemented.');
    }
    listarPorId(id: string) {
        throw new Error('Method not implemented.');
    }
    // Propriedade
    private conexao: Promise<Connection>;

    // Métodos
    constructor() {
        this.conexao = mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "localhost",
            user: process.env.dbuser ? process.env.dbuser : "root",
            password: process.env.dbpassword ? process.env.dbpassword : "",
            database: process.env.dbname ? process.env.dbname : "cacaushow",
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        });
    }

    async getConnection() {
        const conn = await this.conexao; 
        return conn;
    }

    async end() {
        const conn = await this.conexao; 
        await conn.end();
    }
    async excluirChocolates(id:number){
        const conn = await this.getConnection()
        const sqlQuery = "DELETE FROM chocolate WHERE id = ?"
        const parametro = [id]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    async excluirCliente(clienteId:string){
        const conn = await this.getConnection()
        const sqlQuery = "DELETE FROM cliente WHERE id = ?"
        const parametro = [clienteId]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    async excluirPagamento(Idpagamento:string){
        const conn = await this.getConnection()
        const sqlQuery = "DELETE FROM pagamento WHERE id = ?"
        const parametro = [Idpagamento]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    async excluirEstoque(itemId:string){
        const conn = await this.getConnection()
        const sqlQuery = "DELETE FROM estoque WHERE id = ?"
        const parametro = [itemId]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    async excluirPromocoes(idpromocao:string){
        const conn = await this.getConnection()
        const sqlQuery = "DELETE FROM promocoes WHERE id = ?"
        const parametro = [idpromocao]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    async alterarChocolate(id:string,chocolate:{id?:number,nome:string,descricao:string,preco:string,imagem:string}){
        const conn = await this.getConnection()
        const sqlQuery = "UPDATE chocolates SET nome=?,descricao=?,preco=?,imagem=? WHERE id = ?"
        const parametro = [chocolate.nome,chocolate.descricao,chocolate.preco,chocolate.imagem,id]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    async alterarCliente(clienteId:string,cliente:{clienteId?:number,nome:string,cpf:string}){
        const conn = await this.getConnection()
        const sqlQuery = "UPDATE cliente SET nome=?,cpf=? WHERE id = ?"
        const parametro = [cliente.nome,cliente.cpf,clienteId]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    async alterarPagamento(Idpagamento:string,pagamento:{Idpagamento?:number,formapag:string,descricao:string,valor:string}){
        const conn = await this.getConnection()
        const sqlQuery = "UPDATE pagamento SET formapag=?,descricao=?,valor=? WHERE id = ?"
        const parametro = [pagamento.formapag,pagamento.descricao,pagamento.valor,Idpagamento]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    async alterarEstoque(itemId:string,estoque:{itemId?:number,nomeProduto:string,quantidade:string,localizacao:string}){
        const conn = await this.getConnection()
        const sqlQuery = "UPDATE estoque SET nomeProduto=?,quantidade=?,localizacao=? WHERE id = ?"
        const parametro = [estoque.nomeProduto,estoque.quantidade,estoque.localizacao,itemId]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    async alterarPromocoes(idpromocao:string,promocoes:{idpromocao?:number,titulo:string,descricao:string,validade:Date,cupom:string}){
        const conn = await this.getConnection()
        const sqlQuery = "UPDATE promocoes SET titulo=?,descricao=?,validade=?,cupom=? WHERE id = ?"
        const parametro = [promocoes.titulo,promocoes.descricao,promocoes.validade,promocoes.cupom,idpromocao]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
}

export default BancoMysql;

