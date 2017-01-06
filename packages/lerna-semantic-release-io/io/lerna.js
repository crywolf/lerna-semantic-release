var Repository = require('lerna/lib/Repository');
var PackageUtilities = require('lerna/lib/PackageUtilities');

module.exports = {
  getAllPackages: function () {
    return PackageUtilities.getPackages(new Repository());
  }
};
