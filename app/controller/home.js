'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async show() {
    // const { ctx } = this;

    // const result = await ctx.service.database.getJobInfoById(ctx.params.id);
    // const data = {list: [result], url: 'http://localhost:7001/v1/score/'};
    // await ctx.render('home/index.tpl', data);
    this.ctx.body = await this.getImages(this.ctx.service.database.getJobInfoById)();
  }

  async page() {
    // const { ctx } = this;
    // const result = await ctx.service.database.getJobByPage(ctx.params.id);
    // const data = {list: [result], url: 'http://localhost:7001/v1/score/'};
    // await ctx.render('home/index.tpl', data);
    this.ctx.body = await this.getImages(this.ctx.service.database.getJobByPage)();
  }

  
  getImages(func){
    return async () => {
      const { ctx } = this;
      const result = await func.bind(this)(ctx.params.id);
      const data = {list: result, scoreUrl: 'http://localhost:7001/v1/score', pageUrl: 'http://localhost:7001/page/', index: ctx.params.id};
      return await ctx.renderView('home/index.tpl', data);
    }
  }
}

module.exports = HomeController;
