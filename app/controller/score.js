'use strict';

const Controller = require('egg').Controller;

class ScoreController extends Controller {
  async show() {
    const { ctx } = this;

    console.log(`id: ${ctx.params.id}, value: ${ctx.query.v}`);
    ctx.body = 'success';
    // select first then insert or update
  }
  async create(){
    const { ctx } = this;
    const result = await ctx.service.database.updateScores(ctx.request.body);
    ctx.body = "success";
  }
}

module.exports = ScoreController;
