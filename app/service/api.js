import request from './request'
import ServerActions from '../actions/ServerActions'

const productPageUrl = id =>
    `/pdp/${id}/data`

const APIService = {    
    getItems() {
        request.get('/data', (err, res) => {
            if (! err) {
                ServerActions.getItems(res)
            }
            // handle err
        })
    },
    getSingleItem(id) {
        request.get(productPageUrl(id), (err, res) => {
            if (! err) {
                ServerActions.getSingleItem(res)
            }
            // handle err
        })
    }
}

export default APIService