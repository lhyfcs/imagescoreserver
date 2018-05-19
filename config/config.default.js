'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1526534780209_2647';

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
    defaultExtension: '.tpl',
  };
  // add your config here
  config.middleware = [];
  config.mysql = {
    pageCount: 20,
    startTime: 1495099146000,
  };

  config.image = {
    ignoretype: [
      'panorama',
      'oneMinute',
      'HDPanorama',
      'HDAerial',
      'oneMinuteAerial',
      'HDMaterial'
    ]
  }

  config.security = {
    csrf: {
      enable: false,
    },
  };
  return config;
};
