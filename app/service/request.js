import request from 'superagent'

const Request = {
    get(url, callback) {
        request
            .get(url)
            .set('Content-Type', 'application/json; charset=utf-8')
            .end((err, res) => {
                if (err) {
                    callback(err)
                } else if (res) {
                    callback(null, res.body)
                }
            })
    }
}

export default Request