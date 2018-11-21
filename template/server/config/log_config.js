var path = require('path')

// 日志根目录
var baseLogPath = path.resolve(__dirname, '../logs')

// 错误日志目录
var errorPath = '/error'
// 错误日志文件名
var errorFileName = 'error'
// 错误日志输出完整路径
var errorLogPath = baseLogPath + errorPath + '/' + errorFileName
// var errorLogPath = path.resolve(__dirname, '../logs/error/error')

// debug日志目录
var debugPath = '/debug'
// debug日志文件名
var debugFileName = 'debug'
// debug日志输出完整路径
var debugLogPath = baseLogPath + debugPath + '/' + debugFileName

// 响应日志目录
var responsePath = '/response'
// 响应日志文件名
var responseFileName = 'response'
// 响应日志输出完整路径
var responseLogPath = baseLogPath + responsePath + '/' + responseFileName

// 打印日志目录
var infoPath = '/info'
// 打印日志文件名
var infoFileName = 'info'
// 响应日志输出完整路径
var infoLogPath = baseLogPath + infoPath + '/' + infoFileName
// var responseLogPath = path.resolve(__dirname, '../logs/response/response')
module.exports = {
  // 日志格式等设置
  appenders:
    {
      'rule-console': { 'type': 'console' },
      'errorLogger': {
        'type': 'dateFile',
        'filename': errorLogPath,
        'pattern': '-yyyy-MM-dd.log',
        'alwaysIncludePattern': true,
        'encoding': 'utf-8',
        'maxLogSize': 1000,
        'numBackups': 3,
        'path': errorPath
      },
      'debugLogger': {
        'type': 'dateFile',
        'filename': debugLogPath,
        'pattern': '-yyyy-MM-dd.log',
        'alwaysIncludePattern': true,
        'encoding': 'utf-8',
        'maxLogSize': 1000,
        'numBackups': 3,
        'path': debugPath
      },
      'resLogger': {
        'type': 'dateFile',
        'filename': responseLogPath,
        'pattern': '-yyyy-MM-dd.log',
        'alwaysIncludePattern': true,
        'encoding': 'utf-8',
        'maxLogSize': 1000,
        'numBackups': 3,
        'path': responsePath
      },
      'infoLogger': {
        'type': 'dateFile',
        'filename': infoLogPath,
        'pattern': '-yyyy-MM-dd.log',
        'alwaysIncludePattern': true,
        'encoding': 'utf-8',
        'maxLogSize': 1000,
        'numBackups': 3,
        'path': infoPath
      }
    },
  // 供外部调用的名称和对应设置定义
  categories: {
    'default': { 'appenders': ['rule-console', 'infoLogger'], 'level': 'all' },
    'resLogger': { 'appenders': ['rule-console', 'resLogger'], 'level': 'info' },
    'debugLogger': { 'appenders': ['rule-console', 'debugLogger'], 'level': 'debug' },
    'errorLogger': { 'appenders': ['rule-console', 'errorLogger'], 'level': 'error' },
    'http': { 'appenders': ['resLogger'], 'level': 'info' }
  },
  'baseLogPath': baseLogPath
}
