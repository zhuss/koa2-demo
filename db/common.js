const mysql  = require("mysql");
const dbConfig = require("../db/config");


let pool = mysql.createPool(dbConfig.mysql);

module.exports = {
    query: (sql, values) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else{
                    connection.query(sql,values,(err,result)=>{
                        if(err){
                            reject(err);
                        }else{
                            resolve(result);
                        }
                    });
                }
            });
        });
    }
}