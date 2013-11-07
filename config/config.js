
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifier = {
      APN: false,
      email: false, // true
      actions: ['comment'],
      tplPath: templatePath,
      postmarkKey: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    }

module.exports = {
  development: {
    db: 'mongodb://localhost/iswf-dev',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'iSWF - Development'
    }
  },
  test: {
    db: 'mongodb://localhost/iswf-test',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'iSWF - Test'
    }
  },
  production: {
    db: 'mongodb://localhost/iswf',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'iSWF - Production'
    }
  }
}
