'use strict';
console.log('--------------app.js');

class AppBootHook {
  constructor(app) {
    console.log('------constructor--------app.js');
    this.app = app;
  }

  configWillLoad() {
    console.log('------configWillLoad--------');
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
  }

  configDidLoad() {
    console.log('------configDidLoad--------');
    // Config, plugin files have been loaded.
  }

  async didLoad() {
    console.log('------didLoad--------');
    // All files have loaded, start plugin here.
  }

  async willReady() {
    console.log('------willReady--------');
    // All plugins have started, can do some thing before app ready
  }

  async didReady() {
    console.log('------didReady--------');
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady() {
    console.log('------serverDidReady--------');
    // Server is listening.
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}

module.exports = AppBootHook;
