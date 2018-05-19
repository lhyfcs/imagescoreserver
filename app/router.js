'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/page/:id', controller.home.page);
  router.resources('home', '/', controller.home);
  router.resources('score', '/v1/score', controller.score);
};
