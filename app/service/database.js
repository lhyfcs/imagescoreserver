'use strict'

const BaseService = require('./baseService');
const DBUtil      = require('../util/database');

class DatabaseService extends BaseService{
    async getJobInfoById(jobId){
        if (!jobId) {
            this.ctx.throw(400, 'not valid id');
        }

        const result = await this.ctx.app.mysql.get('renderjob', {uid: jobId});
        return [result];
    }

    async getJobByPage(page){
        if (!page || page < 0) {
            this.ctx.throw(400, 'invalid page number');
        }
        const mysql = this.config.mysql;
        const offset = mysql.pageCount * page;
        const sql = DBUtil.getQueryImageNotInSql(this.config.image.ignoretype);
        // return this.ctx.app.mysql.query("select * from renderjob where created > ? and queueName not in (?) order by created ASC limit ?, ?", [mysql.startTime, , offset, mysql.pageCount]);
        return this.ctx.app.mysql.query(sql, [mysql.startTime, ...this.config.image.ignoretype, offset, mysql.pageCount]);
    }
}

module.exports = DatabaseService;