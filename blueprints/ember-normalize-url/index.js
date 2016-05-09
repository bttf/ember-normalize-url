/*jshint node:true*/

var RSVP = require('rsvp');

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return RSVP.all([
      this.addPackageToProject('normalize-url'),
      this.addAddonToProject('ember-browserify'),
    ]);
  }
};
