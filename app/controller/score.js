'use strict';

const Controller = require('egg').Controller;

class ScoreController extends Controller {
  async show() {
    const { ctx } = this;

    console.log(`id: ${ctx.params.id}, value: ${ctx.query.v}`);
    ctx.body = 'success';
  }
}

module.exports = ScoreController;
