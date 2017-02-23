import request from './request'
import ServerActions from '../actions/ServerActions'
import { normalizeItem, normalizeItemList } from '../utils/normalize'

const productPageUrl = id =>
    `/pdp/${id}/data`

const APIService = {    
    getItems() {
        request.get('/data', (err, res) => {
            if (! err) {
                ServerActions.getItems(normalizeItemList(res))
            }
            // handle err
        })
    },
    getSingleItem(id) {
        request.get(productPageUrl(id), (err, res) => {
            if (! err) {
                ServerActions.getSingleItem(normalizeItem(res))
            }
            // handle err
        })
    }
}

export default APIService