import request from 'superagent'

function get(url, callback) {
    request
        .get(url)
        .set('Content-Type', 'application/json; charset=utf-8')
        .end(function (err, res) {
        	if (err) {
        		callback(err);
        	} else if (res) {
        		callback(res.body);
        	}
        });
}

module.exports = {
    get: get
};