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
      // const data = {list: result.map((image) => {
      //   if (image.queueName.includes('panorama')){
      //     let arr = image.imgS3Url.split('.');
      //     arr.splice(-1, 0, 'front');
      //     image.imgS3Url = arr.join('.');
      //   }
      //   return image;
      // }), url: 'http://localhost:7001/v1/score/'};
      const data = {list: result, url: 'http://localhost:7001/v1/score/'};
      return await ctx.renderView('home/index.tpl', data);
    }
  }
}

module.exports = HomeController;
