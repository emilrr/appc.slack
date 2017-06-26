const Requester = require("../lib/utility/request/requester");
module.exports = function getGroupsList(params, callback, optionalParams) {
    const options = optionalParams || require("../conf/config.js").getGroupsList;
    const Request = new Requester(options, params);
    Request.makeRequest(function (err, resp) {
        if (err) {
            callback(err)
        } else {
            callback(null, resp)
        }
    })
};