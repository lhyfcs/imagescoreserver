'use strict';

class DatabaseUtil {
    static getQueryImageNotInSql(arr){
        let sql = "select * from renderjob where created > ? and queueName not in (";
        arr.forEach((t) => sql += '?,');
        sql = sql.substr(0, sql.length - 1);
        sql += ") order by created ASC limit ?, ?";
        return sql;
    }
}

module.exports = DatabaseUtil;