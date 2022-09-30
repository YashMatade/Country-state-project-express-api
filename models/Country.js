var Database = require("./Database");
class Country{
    constructor(){
        this.id = 0;
        this.name = "";
        this.currency = "";
        this.query = "";
        this.db = new Database.Database();
    }

    save = ()=>{
        if(this.id == 0){
            this.query = "INSERT INTO countries(name, currency) ";
            this.query += "VALUES('" + this.name + "', '" + this.currency + "')";
        }
        else{
            this.query = "UPDATE countries SET name = '" + this.name + "', ";
            this.query += "currency = '" + this.currency +"' ";
            this.query += "WHERE id = " + this.id;
        }
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(result);
                }
            });
        });
    }

    delete = ()=>{
        this.query = "DELETE FROM countries WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(result);
                }
            });
        });
    }

    list = ()=>{
        this.query = "SELECT * FROM countries ORDER BY name";
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(result);
                }
            });
        });
    }

    get = ()=>{
        this.query = "SELECT * FROM countries WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(result);
                }
            });
        });
    }
}

module.exports = Country;