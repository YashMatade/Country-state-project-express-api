var Database = require("./Database");
class State{
    constructor(){
        this.id = 0;
        this.name = "";
        this.countryid = 0;
        this.population = 0;
        this.query = "";
        this.db = new Database.Database();
    }

    save = ()=>{
        if(this.id == 0){
            this.query = "INSERT INTO states(name, countryid, population) ";
            this.query += "VALUES('" + this.name + "', " + this.countryid + ", " + this.population + ")";
        }
        else{
            this.query = "UPDATE states SET name = '" + this.name + "', ";
            this.query += "countryid = " + this.countryid +", ";
            this.query += "population = " + this.population +" ";
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
        this.query = "DELETE FROM states WHERE id = " + this.id;
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
        this.query = "SELECT S.*, C.name AS countryname ";
        this.query += "FROM countries AS C INNER JOIN states AS S ON C.id  = S.countryid ";
        this.query += "WHERE S.id <> 0 ";
        if(this.countryid != 0)
            this.query += "AND C.id = " + this.countryid +  " ";
        if(this.population != 0)
            this.query += "AND S.population > " + this.population +  " ";
        this.query += "ORDER BY S.name";
        console.log(this.query);
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
        this.query = "SELECT * FROM states WHERE id = " + this.id;
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

module.exports = State;