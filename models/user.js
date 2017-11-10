const common  = require("../db/common");

module.exports =  {
    getUserByLogin(values){
        let sql = "select name,account from user where account = ? and password = ? ";
        return common.query(sql,values);
    }
}