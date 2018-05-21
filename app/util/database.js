'use strict';

const sqlString = require('./sqlstring');

class DatabaseUtil {
    static getQueryImageNotInSql(arr){
        // let sql = "select * from renderjob where created > ? and queueName not in (";
        // arr.forEach((t) => sql += '?,');
        // sql = sql.substr(0, sql.length - 1);
        // sql += ") order by created ASC limit ?, ?";
        // search use left join
        // select r.uid, r.imgS3Url, r.queueName, r.created, i.score from renderjob r left join imagescore i on r.uid=i.uid where 
        let sql = "select r.uid, r.imgS3Url, r.queueName, r.created, i.score from renderjob r left join imagescore i on r.uid=i.uid where r.created > ? and r.queueName not in (";
        arr.forEach((t) => sql += '?,');
        sql = sql.substr(0, sql.length - 1);
        sql += ") order by r.created ASC limit ?, ?";
        return sql;
    }

    static getUpdateInsertSql(table, objs) {
        let options = {};
        let firstObj;
        if (Array.isArray(objs)) {
            firstObj = objs[0];
        } else {
            // insert(table, row)
            firstObj = objs;
            objs = [ objs ];
        }
        if (!options.columns) {
            options.columns = Object.keys(firstObj);
        }

        const params = [ table, options.columns ];
        const strs = [];
        for (let i = 0; i < objs.length; i++) {
            const values = [];
            const row = objs[i];
            for (let j = 0; j < options.columns.length; j++) {
            values.push(row[options.columns[j]]);
            }
            strs.push('(?)');
            params.push(values);
        }

        let sql = sqlString.format('INSERT INTO ??(??) VALUES' + strs.join(', '), params);
        sql += ` ON DUPLICATE KEY UPDATE score=${objs[0].score},updated='${objs[0].updated}'`;
        return sql;
    }
}

module.exports = DatabaseUtil;