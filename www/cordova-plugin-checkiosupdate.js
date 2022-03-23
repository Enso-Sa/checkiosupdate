var exec = require('cordova/exec');

exports.showUpdate = function () {
    exec('CheckUpdate', 'showUpdate', ['true']);
};