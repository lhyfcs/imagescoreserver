'use strict';

exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: 'rm-2ze6g174tdg2n8213o.mysql.rds.aliyuncs.com',
    // 端口号
    port: '3306',
    // 用户名
    user: 'juran',
    // 密码
    password: 'Adminsh123',
    // 数据库名
    database: 'jobmanager',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
}
