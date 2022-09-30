var mysql = require("mysql");
class Database{
    constructor(){
        this.con = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database:"regiondb"
        });
    }

    query = (sql, args)=>{
        return new Promise((resolve, reject)=>{
            this.con.query(sql, args, (err, result)=>{
                if(err){
                    return reject(err);
                }
                return resolve(result);
            })
        });
    }

    close = ()=>{
        this.con.end((err)=>{
        });
    }
}

module.exports = {
    Database:Database
}